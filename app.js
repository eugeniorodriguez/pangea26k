// ============================================================================
// Pangea 6 Primaria - app principal
// Diseno: motivacional + gamificado para alumnos de 12 anos.
// Cubre: modo practica interactivo, XP/niveles, rachas, medallas y reto del dia.
// ============================================================================

const DATA = window.PANGEA_DATA;
const SOLUTIONS = window.PANGEA_SOLUTIONS || {};
const exercises = DATA.exercises;

// --------- Niveles temaicos (XP -> rango cadete) ----------------------------
const LEVELS = [
  { name: "Aprendiz Pangea", min: 0, color: "#9aa3a6" },
  { name: "Explorador", min: 30, color: "#3b82f6" },
  { name: "Calculista", min: 80, color: "#10b981" },
  { name: "Estratega", min: 160, color: "#f59e0b" },
  { name: "Capitan", min: 280, color: "#ef4444" },
  { name: "Maestro Pangea", min: 450, color: "#8b5cf6" },
  { name: "Leyenda Pangea", min: 700, color: "#fbbf24" }
];

// Insignias por categoria (umbrales en aciertos)
const BADGE_TIERS = [
  { count: 5, label: "Bronce", icon: "*" },
  { count: 12, label: "Plata", icon: "**" },
  { count: 25, label: "Oro", icon: "***" }
];

// --------- Estado persistente -----------------------------------------------
const STORAGE_KEY = "pangea26k:v2";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const data = JSON.parse(raw);
    return {
      ...defaultProgress(),
      ...data,
      attempts: data.attempts || {},
      streakDates: data.streakDates || []
    };
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return {
    xp: 0,
    attempts: {},
    streakDates: [],
    bestStreakAciertos: 0,
    soundOn: true,
    lastDailyId: null,
    lastDailyDate: null
  };
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();

// --------- Estado UI --------------------------------------------------------
const state = {
  view: "train",
  category: "",
  year: "",
  round: "",
  difficulty: "",
  search: "",
  visualOnly: false,
  pendingOnly: false,
  practiceMode: true
};

// --------- Utilidades -------------------------------------------------------
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => String(a).localeCompare(String(b), "es"));
}

function groupedBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key];
    if (!acc.has(value)) acc.set(value, []);
    acc.get(value).push(item);
    return acc;
  }, new Map());
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function difficultyLabel(value) {
  return { facil: "Facil", medio: "Media", reto: "Reto" }[value] || value;
}

function pointsFor(exercise) {
  return exercise.points || (exercise.difficulty === "facil" ? 2 : exercise.difficulty === "medio" ? 3 : 4);
}

// --------- XP y niveles -----------------------------------------------------
function levelFor(xp) {
  let current = LEVELS[0];
  let next = null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].min) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    }
  }
  return { current, next };
}

function attemptOf(id) {
  return progress.attempts[id] || null;
}

function aciertosCount() {
  return Object.values(progress.attempts).filter((a) => a.correct).length;
}

function updateStreakOnAttempt(correct) {
  if (!correct) return;
  const today = todayKey();
  if (!progress.streakDates.includes(today)) {
    progress.streakDates.push(today);
    progress.streakDates = progress.streakDates.slice(-180); // ultimos 6 meses
  }
}

function streakConsecutivo() {
  // racha de aciertos consecutivos en la sesion (los ultimos N intentos)
  const ordered = Object.values(progress.attempts).sort((a, b) => (a.ts || 0) - (b.ts || 0));
  let streak = 0;
  for (let i = ordered.length - 1; i >= 0; i--) {
    if (ordered[i].correct) streak++;
    else break;
  }
  return streak;
}

function streakDiaria() {
  if (!progress.streakDates.length) return 0;
  const set = new Set(progress.streakDates);
  let streak = 0;
  const cursor = new Date();
  while (true) {
    const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`;
    if (set.has(key)) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else if (streak === 0) {
      // si no entrenas hoy, mira si ayer si
      cursor.setDate(cursor.getDate() - 1);
      if (streak === 0 && cursor.toDateString() === new Date(Date.now() - 86400000).toDateString()) continue;
      break;
    } else {
      break;
    }
  }
  return streak;
}

function badgesForCategory(categoryKey) {
  const aciertos = exercises.filter(
    (ex) => ex.categoryKey === categoryKey && progress.attempts[ex.id]?.correct
  ).length;
  return BADGE_TIERS.filter((tier) => aciertos >= tier.count);
}

// --------- Filtrado ---------------------------------------------------------
function currentItems() {
  const needle = normalize(state.search);
  return exercises
    .filter((ex) => {
      if (state.category && ex.category !== state.category) return false;
      if (state.year && String(ex.year) !== state.year) return false;
      if (state.round && ex.round !== state.round) return false;
      if (state.difficulty && ex.difficulty !== state.difficulty) return false;
      if (state.visualOnly && !ex.needsVisual) return false;
      if (state.pendingOnly && progress.attempts[ex.id]?.correct) return false;
      if (!needle) return true;
      const haystack = normalize(
        [
          ex.statement,
          ex.category,
          ex.sourceTitle,
          ex.round,
          ex.year,
          (ex.options || []).map((o) => o.text).join(" ")
        ].join(" ")
      );
      return haystack.includes(needle);
    })
    .sort((a, b) =>
      a.category.localeCompare(b.category, "es") ||
      a.year - b.year ||
      String(a.round).localeCompare(String(b.round), "es") ||
      a.number - b.number
    );
}

// --------- Render: tarjeta de ejercicio -------------------------------------
function renderOption(option, exercise, attempt) {
  const correctLetter = exercise.answer?.letter;
  const text = (option.text || "").trim() || "(opcion en formula o imagen)";
  let cls = "option";
  let extra = "";
  if (attempt) {
    if (attempt.picked === option.letter) {
      cls += attempt.correct ? " is-correct picked" : " is-wrong picked";
    }
    if (option.letter === correctLetter && (state.practiceMode || attempt)) {
      if (attempt.picked !== option.letter) cls += " is-correct";
    }
    extra = ` aria-disabled="true"`;
  }
  return `
    <li class="${cls}">
      <button class="option-btn" type="button" data-pick="${escapeHtml(option.letter)}" data-id="${escapeHtml(exercise.id)}"${extra}>
        <span class="letter">${escapeHtml(option.letter)}</span>
        <span class="opt-text">${escapeHtml(text)}</span>
      </button>
    </li>
  `;
}

function renderSolution(exercise, attempt) {
  if (!attempt) return "";
  const sol = SOLUTIONS[exercise.id];
  const stepsHtml = sol?.steps
    ? `<ol class="steps">${sol.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>`
    : "";
  const approachHtml = sol?.approach
    ? `<p class="approach"><strong>Enfoque:</strong> ${escapeHtml(sol.approach)}</p>`
    : "";
  const hintHtml = sol?.hint
    ? `<p class="hint"><strong>Pista:</strong> ${escapeHtml(sol.hint)}</p>`
    : "";
  const checkHtml = sol?.check
    ? `<p class="checkline"><strong>Comprueba:</strong> ${escapeHtml(sol.check)}</p>`
    : "";
  const answerLine = sol?.answer || `${exercise.answer?.letter || "?"}) ${exercise.correctOption || ""}`;
  const theory = sol?.theory || exercise.theory;

  return `
    <div class="solution-pack">
      <div class="solution-head ${attempt.correct ? "ok" : "ko"}">
        <span class="solution-tag">${attempt.correct ? "iCorrecto!" : "Casi"}</span>
        <strong>Respuesta: ${escapeHtml(answerLine)}</strong>
      </div>
      <div class="solution-body">
        <div class="block theory"><span class="block-title">Teoria</span><p>${escapeHtml(theory)}</p></div>
        ${hintHtml ? `<div class="block hint-block">${hintHtml}</div>` : ""}
        ${stepsHtml ? `<div class="block steps-block"><span class="block-title">Resolucion paso a paso</span>${stepsHtml}</div>` : ""}
        ${approachHtml ? `<div class="block approach-block">${approachHtml}</div>` : ""}
        ${checkHtml ? `<div class="block check-block">${checkHtml}</div>` : ""}
      </div>
    </div>
  `;
}

function renderVisuals(exercise) {
  const images = [...(exercise.images || [])];
  if (exercise.needsVisual && exercise.visual) images.push(exercise.visual);
  if (!images.length) return "";
  return `
    <details class="visuals">
      <summary>Ver figura o pagina original</summary>
      <div class="visual-grid">
        ${images
          .map(
            (image) =>
              `<img src="${escapeHtml(image)}" alt="Figura del ejercicio ${escapeHtml(exercise.id)}" loading="lazy" />`
          )
          .join("")}
      </div>
    </details>
  `;
}

function renderExercise(exercise, opts = {}) {
  const attempt = attemptOf(exercise.id);
  const correctClass = attempt?.correct ? " card-correct" : attempt ? " card-wrong" : "";
  const points = pointsFor(exercise);
  const sourcePage = exercise.sourcePage ? ` - pag. ${exercise.sourcePage}` : "";
  const showHint = !attempt && SOLUTIONS[exercise.id]?.hint;

  return `
    <article class="exercise-card${correctClass}" data-id="${escapeHtml(exercise.id)}">
      <div class="card-top">
        <div class="meta">
          <span class="pill category" title="${escapeHtml(exercise.category)}">${escapeHtml(exercise.category)}</span>
          <span class="pill source">${escapeHtml(exercise.year)} - ${escapeHtml(exercise.round)}</span>
          <span class="pill diff ${escapeHtml(exercise.difficulty)}">${difficultyLabel(exercise.difficulty)}</span>
          <span class="pill xp">+${points} XP</span>
          <span class="pill num">Ej. ${exercise.number}${sourcePage}</span>
        </div>
        <div class="card-actions">
          ${attempt ? `<button class="btn-redo" type="button" data-redo="${escapeHtml(exercise.id)}">Reintentar</button>` : ""}
        </div>
      </div>

      <p class="statement">${escapeHtml(exercise.statement)}</p>
      ${renderVisuals(exercise)}

      ${showHint ? `<details class="want-hint"><summary>Quiero una pista</summary><p>${escapeHtml(SOLUTIONS[exercise.id].hint)}</p></details>` : ""}

      <ul class="options">
        ${(exercise.options || []).map((option) => renderOption(option, exercise, attempt)).join("")}
      </ul>

      ${renderSolution(exercise, attempt)}

      <a class="source-link" href="${escapeHtml(exercise.sourceFile)}" target="_blank" rel="noreferrer">
        Abrir documento original
      </a>
    </article>
  `;
}

// --------- Render: vistas ---------------------------------------------------
function renderTrain() {
  const view = $("#viewTrain");
  const items = currentItems();
  if (!items.length) {
    view.innerHTML = `<div class="empty-state">No hay ejercicios con estos filtros.</div>`;
    updateStatusBand(items);
    return;
  }
  const groups = groupedBy(items, "category");
  view.innerHTML = `
    <div class="result-head">
      <h2>${state.pendingOnly ? "Pendientes por dominar" : "Tu plan de entrenamiento"}</h2>
      <span>${items.length} de ${exercises.length}</span>
    </div>
    ${[...groups.entries()]
      .map(
        ([category, group]) => `
          <section class="group">
            <div class="group-title">
              <h2>${escapeHtml(category)}</h2>
              <span>${group.length} ejercicios</span>
            </div>
            <div class="exercise-list">${group.map((ex) => renderExercise(ex)).join("")}</div>
          </section>
        `
      )
      .join("")}
  `;
  updateStatusBand(items);
}

function renderCategories() {
  const view = $("#viewCategories");
  const categories = [...groupedBy(exercises, "category").entries()].sort((a, b) =>
    a[0].localeCompare(b[0], "es")
  );
  view.innerHTML = `
    <div class="result-head">
      <h2>Mochila de categorias</h2>
      <span>${categories.length} bloques</span>
    </div>
    <div class="category-grid">
      ${categories
        .map(([category, items]) => {
          const sample = items[0];
          const sol = SOLUTIONS[sample.id];
          const aciertos = items.filter((it) => progress.attempts[it.id]?.correct).length;
          const intentos = items.filter((it) => progress.attempts[it.id]).length;
          const percent = items.length ? Math.round((aciertos / items.length) * 100) : 0;
          const badges = badgesForCategory(sample.categoryKey);
          return `
            <article class="category-panel" data-category-jump="${escapeHtml(category)}">
              <header>
                <h2>${escapeHtml(category)}</h2>
                <p class="cat-theory">${escapeHtml(sol?.theory || sample.theory)}</p>
              </header>
              <div class="cat-progress">
                <div class="cat-bar"><span style="width:${percent}%"></span></div>
                <small>${aciertos} aciertos / ${items.length} ejercicios - ${intentos - aciertos} fallados</small>
              </div>
              <div class="cat-badges">
                ${badges.length
                  ? badges.map((b) => `<span class="badge ${b.label.toLowerCase()}" title="${b.label}">${b.icon}</span>`).join("")
                  : '<small class="muted">Aun sin medalla</small>'}
              </div>
              <button class="cat-cta" type="button" data-jump="${escapeHtml(category)}">Entrenar este bloque</button>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderSources() {
  const counts = groupedBy(exercises, "sourceSlug");
  $("#viewSources").innerHTML = `
    <div class="result-head">
      <h2>Pruebas oficiales</h2>
      <span>${DATA.sources.filter((s) => s.included).length} incluidas</span>
    </div>
    <div class="source-list">
      ${DATA.sources
        .map((source) => {
          const count = counts.get(source.slug)?.length || 0;
          const status = source.included ? `${count} ejercicios` : "duplicado descartado";
          return `
            <article class="source-row">
              <div>
                <h2>${escapeHtml(source.title)}</h2>
                <p>${escapeHtml(source.filename)} - ${escapeHtml(status)}</p>
              </div>
              <div class="source-actions">
                <a class="link-button" href="historico/${escapeHtml(source.filename)}" target="_blank" rel="noreferrer">PDF local</a>
                <a class="link-button" href="${escapeHtml(source.officialUrl)}" target="_blank" rel="noreferrer">Sitio oficial</a>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderProfile() {
  const xp = progress.xp;
  const { current, next } = levelFor(xp);
  const aciertos = aciertosCount();
  const intentos = Object.keys(progress.attempts).length;
  const accuracy = intentos ? Math.round((aciertos / intentos) * 100) : 0;
  const levelProgress = next ? Math.round(((xp - current.min) / (next.min - current.min)) * 100) : 100;
  const racha = streakConsecutivo();
  const dias = streakDiaria();
  const mejorRacha = progress.bestStreakAciertos;

  const allCats = unique(exercises.map((ex) => ex.category));
  const medallas = allCats
    .map((cat) => {
      const sample = exercises.find((ex) => ex.category === cat);
      return { cat, badges: badgesForCategory(sample.categoryKey) };
    })
    .filter((row) => row.badges.length);

  $("#viewProfile").innerHTML = `
    <div class="result-head">
      <h2>Perfil del cadete</h2>
      <span>Asi vas hasta el 23/05/2026</span>
    </div>

    <section class="profile-grid">
      <article class="profile-card xp-card">
        <small>Rango actual</small>
        <h2 style="color:${current.color}">${escapeHtml(current.name)}</h2>
        <div class="xp-bar"><span style="width:${levelProgress}%; background:${current.color}"></span></div>
        <p>${xp} XP ${next ? `- te faltan ${next.min - xp} XP para "${next.name}"` : "- maximo rango alcanzado"}</p>
      </article>

      <article class="profile-card">
        <small>Racha de aciertos seguidos</small>
        <h2>${racha}</h2>
        <p>Mejor marca: ${mejorRacha}</p>
      </article>

      <article class="profile-card">
        <small>Racha diaria</small>
        <h2>${dias} dia${dias === 1 ? "" : "s"}</h2>
        <p>Sigue entrenando hoy para no perderla.</p>
      </article>

      <article class="profile-card">
        <small>Precision global</small>
        <h2>${accuracy}%</h2>
        <p>${aciertos} aciertos de ${intentos} intentos</p>
      </article>
    </section>

    <section class="medals-block">
      <h3>Medalleros</h3>
      ${medallas.length
        ? `<div class="medals-list">${medallas
            .map(
              (row) => `
                <div class="medal-row">
                  <span class="medal-cat">${escapeHtml(row.cat)}</span>
                  ${row.badges.map((b) => `<span class="badge ${b.label.toLowerCase()}" title="${b.label}">${b.icon}</span>`).join(" ")}
                </div>
              `
            )
            .join("")}</div>`
        : `<p class="muted">Aun sin medallas. Cada 5, 12 o 25 aciertos en una categoria desbloqueas Bronce, Plata u Oro.</p>`}
    </section>

    <section class="reset-block">
      <button id="resetBtn" class="danger" type="button">Reiniciar progreso</button>
    </section>
  `;
}

function pickDailyChallenge() {
  const today = todayKey();
  if (progress.lastDailyDate === today && progress.lastDailyId) {
    return exercises.find((ex) => ex.id === progress.lastDailyId);
  }
  // Selecciona un ejercicio sin acertar todavia, prioritario sin figura.
  const candidates = exercises.filter((ex) => !progress.attempts[ex.id]?.correct);
  const list = candidates.length ? candidates : exercises;
  // Usar la fecha como semilla simple: mismo reto durante el dia.
  const seed = [...today].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const pick = list[seed % list.length];
  progress.lastDailyId = pick.id;
  progress.lastDailyDate = today;
  saveProgress();
  return pick;
}

function renderDaily() {
  const ex = pickDailyChallenge();
  const view = $("#viewDaily");
  view.innerHTML = `
    <div class="daily-hero">
      <div>
        <p class="eyebrow">Reto del dia - ${todayKey()}</p>
        <h2>Tu mision diaria</h2>
        <p>Resuelve este ejercicio para sumar XP extra y mantener tu racha viva. Si lo aciertas a la primera, ganas el doble.</p>
      </div>
      <div class="daily-rewards">
        <div><strong>+${pointsFor(ex) * 2}</strong><small>XP si aciertas a la primera</small></div>
        <div><strong>+${pointsFor(ex)}</strong><small>XP si aciertas tras varios intentos</small></div>
      </div>
    </div>
    <div class="daily-card-wrap">${renderExercise(ex, { daily: true })}</div>
  `;
}

// --------- Banda de estado superior -----------------------------------------
function updateStatusBand(items = currentItems()) {
  const total = exercises.length;
  const aciertos = aciertosCount();
  const percent = total ? Math.round((aciertos / total) * 100) : 0;

  const { current, next } = levelFor(progress.xp);
  const visualesAcertados = items.filter((ex) => progress.attempts[ex.id]?.correct).length;
  const visualesTotal = items.length;

  $("#statusBand").innerHTML = `
    <div class="status-left">
      <p class="eyebrow">23 de mayo de 2026</p>
      <h1>Entrena, gana XP y conviertete en <span style="color:${current.color}">${escapeHtml(current.name)}</span>.</h1>
      <p class="status-meta">${aciertos} de ${total} ejercicios dominados (${percent}%) - ${visualesAcertados}/${visualesTotal} en este filtro</p>
    </div>
    <div class="status-right">
      <div class="quick-metric">
        <strong>${progress.xp} XP</strong>
        <small>${next ? `${next.min - progress.xp} para ${next.name}` : "rango maximo"}</small>
      </div>
      <div class="quick-metric streak">
        <strong>${streakConsecutivo()}</strong>
        <small>aciertos seguidos</small>
      </div>
      <div class="quick-metric days">
        <strong>${streakDiaria()}</strong>
        <small>dias de racha</small>
      </div>
    </div>
  `;

  $("#progressBar").style.width = `${percent}%`;
  $("#progressText").textContent = `${aciertos} / ${total}`;
}

// --------- Filtros laterales ------------------------------------------------
function renderCategoryFilter() {
  const counts = groupedBy(exercises, "category");
  const categories = [...counts.keys()].sort((a, b) => a.localeCompare(b, "es"));
  $("#categoryFilter").innerHTML = `
    <div class="category-title">Categoria</div>
    <button class="category-chip${state.category ? "" : " is-active"}" type="button" data-category="">
      <span>Todas</span><small>${exercises.length}</small>
    </button>
    ${categories
      .map(
        (category) => `
          <button class="category-chip${state.category === category ? " is-active" : ""}" type="button" data-category="${escapeHtml(category)}">
            <span>${escapeHtml(category)}</span><small>${counts.get(category).length}</small>
          </button>
        `
      )
      .join("")}
  `;
}

function fillSelect(select, values, allLabel) {
  select.innerHTML = `<option value="">${allLabel}</option>${values
    .map((v) => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`)
    .join("")}`;
}

// --------- Cambio de vista --------------------------------------------------
function setView(view) {
  state.view = view;
  $$(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  $$(".view").forEach((panel) => panel.classList.remove("is-visible"));
  const target = $(`#view${view[0].toUpperCase()}${view.slice(1)}`);
  if (target) target.classList.add("is-visible");
  if (view === "categories") renderCategories();
  if (view === "sources") renderSources();
  if (view === "profile") renderProfile();
  if (view === "daily") renderDaily();
  updateStatusBand();
}

// --------- Eventos: clic en opcion ------------------------------------------
function pickAnswer(exerciseId, letter) {
  const exercise = exercises.find((ex) => ex.id === exerciseId);
  if (!exercise) return;
  const correctLetter = exercise.answer?.letter;
  const correct = letter === correctLetter;
  const previous = progress.attempts[exerciseId];

  let xpGained = 0;
  if (!previous) {
    if (correct) xpGained = pointsFor(exercise);
    progress.attempts[exerciseId] = {
      picked: letter,
      correct,
      ts: Date.now(),
      xpAwarded: xpGained
    };
  } else if (!previous.correct) {
    if (correct) xpGained = Math.max(1, Math.floor(pointsFor(exercise) / 2));
    progress.attempts[exerciseId] = {
      picked: letter,
      correct,
      ts: Date.now(),
      xpAwarded: (previous.xpAwarded || 0) + xpGained
    };
  } else {
    return; // ya estaba acertado, ignorar
  }

  progress.xp += xpGained;
  updateStreakOnAttempt(correct);
  const racha = streakConsecutivo();
  if (racha > progress.bestStreakAciertos) progress.bestStreakAciertos = racha;
  saveProgress();

  // Animacion: refresca solo la tarjeta y, si correcto, lanza confeti.
  refreshExerciseCard(exerciseId, { celebrate: correct, xpGained });
  updateStatusBand();
}

function refreshExerciseCard(id, opts = {}) {
  const card = document.querySelector(`.exercise-card[data-id="${CSS.escape(id)}"]`);
  if (!card) return;
  const exercise = exercises.find((ex) => ex.id === id);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = renderExercise(exercise);
  const fresh = wrapper.firstElementChild;
  card.replaceWith(fresh);
  if (opts.celebrate) celebrate(fresh, opts.xpGained);
}

// --------- Confeti / celebracion --------------------------------------------
function celebrate(card, xp) {
  card.classList.add("celebrate");
  showFloatingXp(card, xp);
  spawnConfetti(card);
  setTimeout(() => card.classList.remove("celebrate"), 900);
}

function showFloatingXp(card, xp) {
  if (!xp) return;
  const float = document.createElement("div");
  float.className = "xp-float";
  float.textContent = `+${xp} XP`;
  card.appendChild(float);
  setTimeout(() => float.remove(), 1400);
}

function spawnConfetti(card) {
  const colors = ["#fbbf24", "#34d399", "#60a5fa", "#f472b6", "#a78bfa", "#f87171"];
  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  card.appendChild(layer);
  for (let i = 0; i < 26; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.background = colors[i % colors.length];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.2}s`;
    piece.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
  }
  setTimeout(() => layer.remove(), 1100);
}

// --------- Reintentar -------------------------------------------------------
function retryExercise(id) {
  delete progress.attempts[id];
  saveProgress();
  refreshExerciseCard(id);
  updateStatusBand();
}

// --------- Reset ------------------------------------------------------------
function resetProgress() {
  if (!confirm("Vas a perder tu progreso, XP, rachas y medallas. ?Seguro?")) return;
  progress = defaultProgress();
  saveProgress();
  renderAll();
}

// --------- Cuenta atras -----------------------------------------------------
function updateCountdown() {
  const now = new Date();
  const target = new Date(DATA.eventDate);
  const diff = Math.ceil((target - now) / 86400000);
  const el = $("#daysLeft");
  if (el) el.textContent = Math.max(0, diff);
}

// --------- Render global ----------------------------------------------------
function renderAll() {
  renderCategoryFilter();
  if (state.view === "train") renderTrain();
  if (state.view === "categories") renderCategories();
  if (state.view === "sources") renderSources();
  if (state.view === "profile") renderProfile();
  if (state.view === "daily") renderDaily();
  updateStatusBand();
}

// --------- Bind eventos -----------------------------------------------------
function bindEvents() {
  $("#searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    if (state.view === "train") renderTrain();
  });
  $("#yearFilter").addEventListener("change", (e) => {
    state.year = e.target.value;
    if (state.view === "train") renderTrain();
  });
  $("#roundFilter").addEventListener("change", (e) => {
    state.round = e.target.value;
    if (state.view === "train") renderTrain();
  });
  $("#difficultyFilter").addEventListener("change", (e) => {
    state.difficulty = e.target.value;
    if (state.view === "train") renderTrain();
  });
  $("#visualFilter").addEventListener("change", (e) => {
    state.visualOnly = e.target.checked;
    if (state.view === "train") renderTrain();
  });
  $("#pendingFilter").addEventListener("change", (e) => {
    state.pendingOnly = e.target.checked;
    if (state.view === "train") renderTrain();
  });
  $("#categoryFilter").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    state.category = btn.dataset.category;
    renderCategoryFilter();
    if (state.view === "train") renderTrain();
  });
  document.body.addEventListener("click", (e) => {
    const tab = e.target.closest("[data-view]");
    if (tab) {
      setView(tab.dataset.view);
      return;
    }
    const pickBtn = e.target.closest("[data-pick]");
    if (pickBtn && !pickBtn.hasAttribute("aria-disabled")) {
      pickAnswer(pickBtn.dataset.id, pickBtn.dataset.pick);
      return;
    }
    const redoBtn = e.target.closest("[data-redo]");
    if (redoBtn) {
      retryExercise(redoBtn.dataset.redo);
      return;
    }
    const jumpBtn = e.target.closest("[data-jump]");
    if (jumpBtn) {
      state.category = jumpBtn.dataset.jump;
      renderCategoryFilter();
      setView("train");
      return;
    }
    if (e.target.id === "resetBtn") resetProgress();
  });
}

// --------- Init -------------------------------------------------------------
function init() {
  fillSelect($("#yearFilter"), unique(exercises.map((ex) => ex.year)), "Todos");
  fillSelect($("#roundFilter"), unique(exercises.map((ex) => ex.round)), "Todas");
  bindEvents();
  renderAll();
  updateCountdown();
}

init();
