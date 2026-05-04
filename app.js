const data = window.PANGEA_DATA;
const exercises = data.exercises;

const state = {
  view: "train",
  category: "",
  year: "",
  round: "",
  difficulty: "",
  search: "",
  visualOnly: false,
  pendingOnly: false,
};

const done = new Set(JSON.parse(localStorage.getItem("pangeaDone") || "[]"));

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

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
    .replace(/[\u0300-\u036f]/g, "");
}

function byCategoryThenSource(a, b) {
  return (
    a.category.localeCompare(b.category, "es") ||
    a.year - b.year ||
    a.round.localeCompare(b.round, "es") ||
    a.number - b.number
  );
}

function groupedBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key];
    if (!acc.has(value)) acc.set(value, []);
    acc.get(value).push(item);
    return acc;
  }, new Map());
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => String(a).localeCompare(String(b), "es"));
}

function saveDone() {
  localStorage.setItem("pangeaDone", JSON.stringify([...done]));
}

function currentItems() {
  const needle = normalize(state.search);
  return exercises
    .filter((exercise) => {
      if (state.category && exercise.category !== state.category) return false;
      if (state.year && String(exercise.year) !== state.year) return false;
      if (state.round && exercise.round !== state.round) return false;
      if (state.difficulty && exercise.difficulty !== state.difficulty) return false;
      if (state.visualOnly && !exercise.needsVisual) return false;
      if (state.pendingOnly && done.has(exercise.id)) return false;
      if (!needle) return true;
      const haystack = normalize(
        [
          exercise.statement,
          exercise.category,
          exercise.sourceTitle,
          exercise.round,
          exercise.year,
          exercise.options.map((option) => option.text).join(" "),
        ].join(" ")
      );
      return haystack.includes(needle);
    })
    .sort(byCategoryThenSource);
}

function optionLabel(option) {
  const text = option.text.trim();
  return text || "opción en fórmula o imagen";
}

function difficultyLabel(value) {
  return {
    facil: "Fácil",
    medio: "Media",
    reto: "Reto",
  }[value] || value;
}

function renderOption(option, answerLetter) {
  const isAnswer = answerLetter && option.letter === answerLetter;
  return `
    <li class="option${isAnswer ? " is-answer" : ""}">
      <span class="letter">${escapeHtml(option.letter)}</span>
      <span>${escapeHtml(optionLabel(option))}</span>
    </li>
  `;
}

function renderVisuals(exercise) {
  const images = [...(exercise.images || [])];
  if (exercise.needsVisual && exercise.visual) images.push(exercise.visual);
  if (!images.length) return "";
  return `
    <details>
      <summary>Figura o página original</summary>
      <div class="visual-grid">
        ${images
          .map(
            (image) =>
              `<img src="${escapeHtml(image)}" alt="Referencia visual del ejercicio ${escapeHtml(exercise.id)}" loading="lazy" />`
          )
          .join("")}
      </div>
    </details>
  `;
}

function renderExercise(exercise) {
  const answerLetter = exercise.answer?.letter || "";
  const sourcePage = exercise.sourcePage ? ` · pág. ${exercise.sourcePage}` : "";
  return `
    <article class="exercise-card${done.has(exercise.id) ? " is-done" : ""}" data-id="${escapeHtml(exercise.id)}">
      <div class="card-top">
        <div class="meta">
          <span class="pill category">${escapeHtml(exercise.category)}</span>
          <span class="pill">${escapeHtml(exercise.year)} · ${escapeHtml(exercise.round)}</span>
          <span class="pill ${escapeHtml(exercise.difficulty)}">${difficultyLabel(exercise.difficulty)}</span>
          <span class="pill">Ej. ${exercise.number}${sourcePage}</span>
        </div>
        <button class="done-button${done.has(exercise.id) ? " is-active" : ""}" type="button" data-done="${escapeHtml(
          exercise.id
        )}">${done.has(exercise.id) ? "Hecho" : "Marcar"}</button>
      </div>

      <p class="statement">${escapeHtml(exercise.statement)}</p>

      <ul class="options">
        ${exercise.options.map((option) => renderOption(option, answerLetter)).join("")}
      </ul>

      <div class="study-block">
        <strong>Teoría base de 6º</strong>
        <p>${escapeHtml(exercise.theory)}</p>
      </div>
      <div class="study-block">
        <strong>Ataque recomendado</strong>
        <p>${escapeHtml(exercise.attack)}</p>
      </div>

      ${renderVisuals(exercise)}

      <details>
        <summary>Solución plegada</summary>
        <div class="details-body">${escapeHtml(exercise.solution)}</div>
      </details>

      <a class="source-link" href="${escapeHtml(exercise.sourceFile)}" target="_blank" rel="noreferrer">
        Abrir documento histórico
      </a>
    </article>
  `;
}

function renderTrain() {
  const view = $("#viewTrain");
  const items = currentItems();
  if (!items.length) {
    view.innerHTML = `<div class="empty-state">No hay ejercicios con estos filtros.</div>`;
    updateSummary(items);
    return;
  }
  const groups = groupedBy(items, "category");
  view.innerHTML = `
    <div class="result-head">
      <h2>Ejercicios filtrados</h2>
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
            <div class="exercise-list">${group.map(renderExercise).join("")}</div>
          </section>
        `
      )
      .join("")}
  `;
  updateSummary(items);
}

function renderCategories() {
  const categories = [...groupedBy(exercises, "category").entries()].sort((a, b) =>
    a[0].localeCompare(b[0], "es")
  );
  $("#viewCategories").innerHTML = `
    <div class="result-head">
      <h2>Categorías de entrenamiento</h2>
      <span>${categories.length} bloques</span>
    </div>
    <div class="category-grid">
      ${categories
        .map(([category, items]) => {
          const sample = items[0];
          const visualCount = items.filter((item) => item.needsVisual).length;
          return `
            <article class="category-panel">
              <div>
                <h2>${escapeHtml(category)}</h2>
                <p>${escapeHtml(sample.theory)}</p>
                <p>${escapeHtml(sample.attack)}</p>
              </div>
              <div>
                <strong>${items.length}</strong>
                <p>${visualCount} con figura</p>
              </div>
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
      <h2>Fuentes históricas</h2>
      <span>${data.sources.filter((source) => source.included).length} incluidas</span>
    </div>
    <div class="source-list">
      ${data.sources
        .map((source) => {
          const count = counts.get(source.slug)?.length || 0;
          const status = source.included ? `${count} ejercicios` : "duplicado detectado";
          return `
            <article class="source-row">
              <div>
                <h2>${escapeHtml(source.title)}</h2>
                <p>${escapeHtml(source.filename)} · ${escapeHtml(status)}</p>
              </div>
              <div class="source-actions">
                <a class="link-button" href="historico/${escapeHtml(source.filename)}" target="_blank" rel="noreferrer">Local</a>
                <a class="link-button" href="${escapeHtml(source.officialUrl)}" target="_blank" rel="noreferrer">Oficial</a>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMetrics() {
  const sourceCount = data.sources.filter((source) => source.included).length;
  const visualCount = exercises.filter((exercise) => exercise.needsVisual).length;
  const categoryCount = unique(exercises.map((exercise) => exercise.category)).length;
  $("#metrics").innerHTML = `
    <div class="metric"><strong>${exercises.length}</strong><span>ejercicios</span></div>
    <div class="metric"><strong>${categoryCount}</strong><span>categorías</span></div>
    <div class="metric"><strong>${sourceCount}</strong><span>fuentes únicas</span></div>
    <div class="metric"><strong>${visualCount}</strong><span>con figura</span></div>
  `;
}

function updateSummary(items = currentItems()) {
  const doneCount = exercises.filter((exercise) => done.has(exercise.id)).length;
  const percent = exercises.length ? Math.round((doneCount / exercises.length) * 100) : 0;
  $("#progressText").textContent = `${doneCount} / ${exercises.length}`;
  $("#progressBar").style.width = `${percent}%`;
  const visibleDone = items.filter((exercise) => done.has(exercise.id)).length;
  const label = state.view === "train" ? `${visibleDone} hechos en filtro` : `${doneCount} hechos`;
  $("#progressText").title = label;
}

function renderCategoryFilter() {
  const counts = groupedBy(exercises, "category");
  const categories = [...counts.keys()].sort((a, b) => a.localeCompare(b, "es"));
  $("#categoryFilter").innerHTML = `
    <div class="category-title">Categoría</div>
    <button class="category-chip${state.category ? "" : " is-active"}" type="button" data-category="">
      <span>Todas</span><small>${exercises.length}</small>
    </button>
    ${categories
      .map(
        (category) => `
          <button class="category-chip${state.category === category ? " is-active" : ""}" type="button" data-category="${escapeHtml(
            category
          )}">
            <span>${escapeHtml(category)}</span><small>${counts.get(category).length}</small>
          </button>
        `
      )
      .join("")}
  `;
}

function fillSelect(select, values, allLabel) {
  select.innerHTML = `<option value="">${allLabel}</option>${values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("")}`;
}

function setView(view) {
  state.view = view;
  $$(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  $$(".view").forEach((panel) => panel.classList.remove("is-visible"));
  $(`#view${view[0].toUpperCase()}${view.slice(1)}`).classList.add("is-visible");
  updateSummary();
}

function renderAll() {
  renderMetrics();
  renderCategoryFilter();
  renderTrain();
  renderCategories();
  renderSources();
  updateSummary();
}

function updateCountdown() {
  const now = new Date();
  const target = new Date(data.eventDate);
  const diff = Math.ceil((target - now) / 86400000);
  $("#daysLeft").textContent = Math.max(0, diff);
}

function bindEvents() {
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderTrain();
  });
  $("#yearFilter").addEventListener("change", (event) => {
    state.year = event.target.value;
    renderTrain();
  });
  $("#roundFilter").addEventListener("change", (event) => {
    state.round = event.target.value;
    renderTrain();
  });
  $("#difficultyFilter").addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    renderTrain();
  });
  $("#visualFilter").addEventListener("change", (event) => {
    state.visualOnly = event.target.checked;
    renderTrain();
  });
  $("#pendingFilter").addEventListener("change", (event) => {
    state.pendingOnly = event.target.checked;
    renderTrain();
  });
  $("#categoryFilter").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderCategoryFilter();
    renderTrain();
  });
  document.body.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) setView(viewButton.dataset.view);

    const doneButton = event.target.closest("[data-done]");
    if (!doneButton) return;
    const id = doneButton.dataset.done;
    if (done.has(id)) {
      done.delete(id);
    } else {
      done.add(id);
    }
    saveDone();
    const card = doneButton.closest(".exercise-card");
    if (card) card.classList.toggle("is-done", done.has(id));
    doneButton.classList.toggle("is-active", done.has(id));
    doneButton.textContent = done.has(id) ? "Hecho" : "Marcar";
    if (state.pendingOnly) renderTrain();
    updateSummary();
  });
}

function init() {
  fillSelect($("#yearFilter"), unique(exercises.map((exercise) => exercise.year)), "Todos");
  fillSelect($("#roundFilter"), unique(exercises.map((exercise) => exercise.round)), "Todas");
  bindEvents();
  renderAll();
  updateCountdown();
}

init();
