#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
import subprocess
import zipfile
from dataclasses import dataclass
from pathlib import Path
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
HISTORICO = ROOT / "historico"
DATA_DIR = ROOT / "data"
PAGE_DIR = ROOT / "assets" / "pages"
DOCX_DIR = ROOT / "assets" / "docx"


@dataclass(frozen=True)
class Source:
    filename: str
    slug: str
    title: str
    year: int
    round_name: str
    parser: str
    official_url: str
    default_answer: str | None = None
    section_start: str | None = None
    section_stop: str | None = None
    skip: bool = False


SOURCES = [
    Source(
        "6o-Primaria-2.pdf",
        "pangea-2019-primera",
        "Pangea 2019 - Primera fase",
        2019,
        "Primera fase",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-Primaria-2.pdf",
    ),
    Source(
        "6o-Primaria-3.pdf",
        "pangea-2019-final",
        "Pangea 2019 - Fase final",
        2019,
        "Fase final",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-Primaria-3.pdf",
    ),
    Source(
        "6o-Primaria.pdf",
        "pangea-2020-primera",
        "Pangea 2020 - Primera fase",
        2020,
        "Primera fase",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-Primaria.pdf",
    ),
    Source(
        "6o-Primaria-1.pdf",
        "pangea-2020-final",
        "Pangea 2020 - Fase final",
        2020,
        "Fase final",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-Primaria-1.pdf",
    ),
    Source(
        "6o-Primaria-1.-Ronda-2021.pdf",
        "pangea-2021-primera",
        "Pangea 2021 - Primera fase",
        2021,
        "Primera fase",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-Primaria-1.-Ronda-2021.pdf",
    ),
    Source(
        "6o-Primaria-4.pdf",
        "pangea-2021-final",
        "Pangea 2021 - Fase final",
        2021,
        "Fase final",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-Primaria-4.pdf",
    ),
    Source(
        "Pangea22_PrimeraFase_6o-PRIMARIA.pdf",
        "pangea-2022-primera",
        "Pangea 2022 - Primera fase",
        2022,
        "Primera fase",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/Pangea22_PrimeraFase_6o-PRIMARIA.pdf",
    ),
    Source(
        "Pangea22_FaseFinal_6o-PRIMARIA.pdf",
        "pangea-2022-final",
        "Pangea 2022 - Fase final",
        2022,
        "Fase final",
        "pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/Pangea22_FaseFinal_6o-PRIMARIA.pdf",
    ),
    Source(
        "Pangea23_FaseFinal_6Primaria.docx",
        "pangea-2023-final",
        "Pangea 2023 - Fase final",
        2023,
        "Fase final",
        "docx",
        "https://concursopangea.es/wp-content/uploads/2021/01/Pangea23_FaseFinal_6Primaria.docx",
    ),
    Source(
        "6Primaria.docx",
        "pangea-2023-final-duplicado",
        "Pangea 2023 - Fase final (duplicado)",
        2023,
        "Fase final",
        "docx",
        "https://concursopangea.es/wp-content/uploads/2021/01/6Primaria.docx",
        skip=True,
    ),
    Source(
        "Bateria-para-6o-PRIMARIA-rev01.pdf",
        "pangea-2024-primera-bateria",
        "Pangea 2024 - Bateria 1a ronda",
        2024,
        "1a ronda",
        "battery_pdf",
        "https://concursopangea.es/wp-content/uploads/2021/01/Bateria-para-6o-PRIMARIA-rev01.pdf",
        default_answer="a",
    ),
    Source(
        "6o-PRIMARIA.docx",
        "pangea-2024-segunda",
        "Pangea 2024 - 2a ronda",
        2024,
        "2a ronda",
        "docx",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-PRIMARIA.docx",
        default_answer="a",
    ),
    Source(
        "6o-PRIMARIA-1o-ronda-2025.docx",
        "pangea-2025-primera",
        "Pangea 2025 - 1a ronda",
        2025,
        "1a ronda",
        "docx",
        "https://concursopangea.es/wp-content/uploads/2021/01/6o-PRIMARIA-1o-ronda-2025.docx",
    ),
    Source(
        "3-Round-2025.pdf",
        "pangea-2025-tercera",
        "Pangea 2025 - 3a ronda",
        2025,
        "3a ronda",
        "pdf",
        "historico/3-Round-2025.pdf",
        section_start="6º PRIMARIA-YEAR 7 (3º RONDA)",
        section_stop="1º ESO",
    ),
]


THIRD_ROUND_2025 = {
    1: "c",
    2: "b",
    3: "e",
    4: "a",
    5: "d",
    6: "c",
    7: "e",
    8: "b",
    9: "a",
    10: "d",
    11: "c",
    12: "a",
    13: "e",
    14: "b",
    15: "d",
}


THEORY = {
    "Calculo": {
        "label": "Calculo y problemas aritmeticos",
        "base": "Operaciones con numeros naturales y decimales: leer datos, elegir operacion, calcular en orden y comprobar con una estimacion.",
        "attack": "Subraya cantidades y pregunta final. Haz una estimacion antes de operar para detectar opciones imposibles.",
    },
    "Numeros": {
        "label": "Numeros y divisibilidad",
        "base": "Valor posicional, multiplos, divisores, numeros primos, criterios de divisibilidad, MCD y mcm.",
        "attack": "Descompone el numero o prueba divisibilidad. En problemas de coincidencias suele aparecer el mcm; en reparto exacto, el MCD.",
    },
    "Fracciones": {
        "label": "Fracciones, porcentajes y proporcionalidad",
        "base": "Fracciones como partes de un total, porcentajes como fracciones de 100, descuentos, razones y regla de tres sencilla.",
        "attack": "Convierte todo a la misma forma: fraccion, decimal o porcentaje. Calcula la parte del total y revisa si piden lo usado, lo que queda o el total.",
    },
    "Magnitudes": {
        "label": "Magnitudes, unidades y velocidad",
        "base": "Cambios de unidades de longitud, masa, capacidad, tiempo y dinero; velocidad = distancia / tiempo.",
        "attack": "Pasa todo a una unidad comun antes de calcular. Al final vuelve a la unidad que pide el enunciado.",
    },
    "Geometria": {
        "label": "Geometria y medida",
        "base": "Perimetros, areas, volumenes, angulos, figuras planas y cuerpos. Formulas basicas: triangulo, rectangulo, circulo, cubo, prisma y cilindro.",
        "attack": "Dibuja o abre la figura original. Identifica que medida es base, altura, radio, lado o angulo antes de aplicar la formula.",
    },
    "Estadistica": {
        "label": "Estadistica y probabilidad",
        "base": "Media aritmetica, tablas y graficos, sucesos posibles/imposibles y probabilidad = casos favorables / casos posibles.",
        "attack": "Cuenta casos favorables y total. Si hay grafico o tabla, lee primero los encabezados y unidades.",
    },
    "Logica": {
        "label": "Patrones, series y logica",
        "base": "Regularidades, series, operaciones inventadas, condiciones verdaderas/falsas y razonamiento por descarte.",
        "attack": "Busca la regla con ejemplos pequenos. Si hay frases logicas, prueba cada opcion y elimina contradicciones.",
    },
    "Combinatoria": {
        "label": "Combinatoria y conteo",
        "base": "Principio multiplicativo, listas ordenadas, conteo sin repetir y combinaciones sencillas.",
        "attack": "Decide si el orden importa y si se puede repetir. Multiplica elecciones independientes o enumera de forma organizada.",
    },
    "Tiempo": {
        "label": "Tiempo, calendario e historia",
        "base": "Horas, minutos, dias, meses, anos, siglos, relojes y diferencias de tiempo.",
        "attack": "Convierte a minutos o dias cuando convenga. En calendarios, usa ciclos de 7 dias y cuida si el extremo se incluye.",
    },
}


def run_text_extract(pdf_path: Path) -> str:
    proc = subprocess.run(
        ["pdftotext", "-layout", str(pdf_path), "-"],
        check=True,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return proc.stdout


def compact(text: str) -> str:
    text = text.replace("\u00a0", " ")
    text = text.replace("–", "-").replace("—", "-")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def clean_lines(text: str) -> str:
    out: list[str] = []
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            out.append("")
            continue
        if re.search(r"(Primera Fase|Fase Final|Segunda Fase)\s+\d{4}", line):
            continue
        if re.search(r"6[ºo]\s+Primaria", line, re.I) and len(line) < 40:
            continue
        if line.startswith("Concurso de Matemáticas Pangea"):
            continue
        out.append(line)
    return compact("\n".join(out))


def parse_options(block: str) -> tuple[str, list[dict[str, str]]]:
    block = clean_lines(block)
    matches = list(re.finditer(r"(?m)^\s*([a-eA-E])\)\s*(.*)$", block))
    if not matches:
        return block, []
    statement = block[: matches[0].start()].strip()
    options = []
    for idx, match in enumerate(matches):
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(block)
        text = (match.group(2) + "\n" + block[start:end]).strip()
        text = clean_lines(text)
        options.append({"letter": match.group(1).lower(), "text": text})
    return clean_lines(statement), options


def filter_section_pages(source: Source, pages: list[str]) -> list[tuple[int, str]]:
    if not source.section_start:
        return list(enumerate(pages, start=1))
    selected: list[tuple[int, str]] = []
    active = False
    for page_no, page in enumerate(pages, start=1):
        if source.section_start in page:
            active = True
        if active:
            if source.section_stop and source.section_stop in page and source.section_start not in page:
                break
            selected.append((page_no, page))
    return selected


def parse_pdf_questions(source: Source) -> list[dict]:
    text = run_text_extract(HISTORICO / source.filename)
    pages = text.split("\f")
    page_items = filter_section_pages(source, pages)
    questions: list[dict] = []
    for page_no, page in page_items:
        starts = [
            found
            for found in re.finditer(r"(?m)^\s*(\d{1,2})[.)]\s+", page)
            if 1 <= int(found.group(1)) <= (15 if source.section_start else 20)
        ]
        for idx, match in enumerate(starts):
            qnum = int(match.group(1))
            if source.section_start and not 1 <= qnum <= 15:
                continue
            end = starts[idx + 1].start() if idx + 1 < len(starts) else len(page)
            block = page[match.end() : end]
            statement, options = parse_options(block)
            if not statement and not options:
                continue
            questions.append(
                {
                    "number": qnum,
                    "statement": statement,
                    "options": options,
                    "page": page_no,
                    "visual": f"assets/pages/{source.slug}-p{page_no}.png",
                }
            )
    questions.sort(key=lambda q: q["number"])
    return questions


def parse_battery_questions(source: Source) -> list[dict]:
    text = run_text_extract(HISTORICO / source.filename)
    text = text.replace("\f", "\n")
    matches = list(re.finditer(r"(?m)^Nivel\s+([^)]+)\)\s*", text))
    questions: list[dict] = []
    for idx, match in enumerate(matches):
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        block = text[match.end() : end]
        statement, options = parse_options(block)
        prefix = text[: match.start()]
        category_hint = "Calculo"
        if "PROBABILIDAD" in prefix[-400:]:
            category_hint = "Estadistica"
        if "GEOMETR" in prefix[-400:]:
            category_hint = "Geometria"
        questions.append(
            {
                "number": idx + 1,
                "statement": statement,
                "options": options,
                "difficulty": match.group(1).strip().lower(),
                "categoryHint": category_hint,
                "page": None,
                "visual": None,
            }
        )
    return questions


def docx_relationships(zip_file: zipfile.ZipFile) -> dict[str, str]:
    rels: dict[str, str] = {}
    root = ET.fromstring(zip_file.read("word/_rels/document.xml.rels"))
    for rel in root:
        rid = rel.attrib.get("Id")
        target = rel.attrib.get("Target")
        if rid and target:
            rels[rid] = target
    return rels


def docx_items(source: Source) -> tuple[list[dict], dict[str, str]]:
    path = HISTORICO / source.filename
    ns = {
        "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
        "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
        "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    }
    asset_dir = DOCX_DIR / source.slug
    asset_dir.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(path) as archive:
        rels = docx_relationships(archive)
        media_map: dict[str, str] = {}
        for rid_target in set(rels.values()):
            if not rid_target.startswith("media/"):
                continue
            data = archive.read(f"word/{rid_target}")
            out_name = Path(rid_target).name.lower()
            out_path = asset_dir / out_name
            out_path.write_bytes(data)
            media_map[rid_target] = str(out_path.relative_to(ROOT))

        root = ET.fromstring(archive.read("word/document.xml"))
        items: list[dict] = []
        for p in root.findall(".//w:body/w:p", ns):
            texts: list[str] = []
            for node in p.iter():
                if node.tag.split("}")[-1] == "t" and node.text:
                    texts.append(node.text)
            images: list[str] = []
            for blip in p.findall(".//a:blip", ns):
                rid = blip.attrib.get(f"{{{ns['r']}}}embed")
                target = rels.get(rid or "")
                if target in media_map:
                    images.append(media_map[target])
            text = compact("".join(texts))
            if text or images:
                items.append({"text": text, "images": images})
    return items, {}


def is_answer_line(text: str) -> bool:
    return bool(re.fullmatch(r"#?ANSWER#?|#?ANSWEREND#?|\d{1,2}\.\s*[a-eA-E]", text.strip()))


def ready_for_options(statement: str) -> bool:
    s = clean_number_prefix(statement.strip())
    if "?" in s or "¿" in s:
        return True
    starters = (
        "Calcula",
        "Completa",
        "Transforma",
        "Continua",
        "Continúa",
        "Qué numero",
        "Qué número",
        "Que propiedad",
        "Cuál",
        "Cual",
    )
    if s.startswith(starters):
        return True
    return bool(re.search(r"\b(calcula|completa|transforma|continua|continúa)\b", s, re.I))


def parse_docx_answers(items: list[dict], default_answer: str | None) -> dict[int, str]:
    answers: dict[int, str] = {}
    answer_mode = False
    for item in items:
        text = item["text"].strip()
        if text == "#ANSWER#":
            answer_mode = True
            continue
        if text == "#ANSWEREND#":
            answer_mode = False
            continue
        match = re.fullmatch(r"(\d{1,2})\.\s*([a-eA-E])", text)
        if match and (answer_mode or int(match.group(1)) <= 20):
            answers[int(match.group(1))] = match.group(2).lower()
    if default_answer:
        for n in range(1, 21):
            answers.setdefault(n, default_answer)
    return answers


def parse_docx_questions(source: Source) -> list[dict]:
    items, _ = docx_items(source)
    answers = parse_docx_answers(items, source.default_answer)
    questions: list[dict] = []
    current: list[str] = []
    images: list[str] = []
    options: list[dict[str, str]] = []

    def finish() -> None:
        nonlocal current, images, options
        if current and options:
            statement = clean_number_prefix(clean_lines("\n".join(current)))
            questions.append(
                {
                    "number": len(questions) + 1,
                    "statement": statement,
                    "options": [
                        {"letter": chr(97 + idx), "text": clean_lines(opt["text"])}
                        for idx, opt in enumerate(options[:5])
                    ],
                    "images": images[:],
                    "page": None,
                    "visual": None,
                }
            )
        current = []
        images = []
        options = []

    for item in items:
        text = item["text"].strip()
        item_images = item.get("images", [])
        if is_answer_line(text) or text.startswith("Concurso de Matemáticas") or text.startswith("Fase Final"):
            continue
        if text.startswith("6º PRIMARIA") or text.startswith("web:"):
            continue
        if not current and item_images and not text:
            continue
        if not current:
            current = [text] if text else []
            images.extend(item_images)
            continue
        if item_images and not text:
            images.extend(item_images)
            continue
        statement_now = clean_lines("\n".join(current))
        if ready_for_options(statement_now) and len(options) < 5:
            options.append({"text": text})
            if len(options) == 5:
                finish()
            continue
        current.append(text)
        images.extend(item_images)
    finish()

    for q in questions:
        answer = answers.get(q["number"])
        if answer:
            q["answer"] = {"letter": answer, "origin": "Solucionario del documento"}
    return questions[:20]


def clean_number_prefix(text: str) -> str:
    return re.sub(r"^\s*\d{1,2}\s*\)\s*", "", text).strip()


def classify(statement: str, hint: str | None = None) -> str:
    if hint:
        return hint
    s = statement.lower()
    if re.search(r"probabilidad|azar|dado|bolsa|canicas|sorteo|media aritm|tabla|grafico|gráfico|puntuaciones|calificaciones", s):
        return "Estadistica"
    if re.search(r"area|área|perimetro|perímetro|circulo|círculo|circunferencia|triangulo|triángulo|cuadrado|rectangulo|rectángulo|cubo|cilindro|angulo|ángulo|poliedro|figura|volumen|radio|diametro|diámetro|trapecio", s):
        return "Geometria"
    if re.search(r"%|porcentaje|descuento|fraccion|fracción|quinto|tercio|mitad|racional|proporci|regla de tres", s):
        return "Fracciones"
    if re.search(r"mcm|mcd|multiplo|múltiplo|divisor|divisible|primo|cifra|digito|dígito|valor posicional", s):
        return "Numeros"
    if re.search(r"hora|minuto|segundo|dia|día|mes|año|siglo|calendario|reloj|fecha", s):
        return "Tiempo"
    if re.search(r"serie|sucesion|sucesión|piramide|pirámide|operacion|operación|cofre|frase|etiqueta|patron|patrón", s):
        return "Logica"
    if re.search(r"formas|tarjetas|cuantos numeros|cuántos números|elegirlas|combin", s):
        return "Combinatoria"
    if re.search(r"km|kilometro|kilómetro|metro|litro|cl|kg|gramo|velocidad|autonomia|autonomía|capacidad", s):
        return "Magnitudes"
    return "Calculo"


def has_visual_need(statement: str, images: list[str] | None, visual: str | None) -> bool:
    s = statement.lower()
    return bool(images or visual and re.search(r"figura|grafico|gráfico|tabla|imagen|siguiente|dibujo|ruleta|recta|sombread|cuadricula|cuadrícula", s))


def difficulty_for(number: int, points: int | None, explicit: str | None = None) -> str:
    if explicit:
        if "fácil" in explicit or "facil" in explicit:
            return "facil"
        if "medio" in explicit:
            return "medio"
        return "reto"
    if points:
        if points <= 2:
            return "facil"
        if points <= 3:
            return "medio"
        return "reto"
    if number <= 8:
        return "facil"
    if number <= 16:
        return "medio"
    return "reto"


def render_pdf_pages(source: Source, exercises: list[dict]) -> None:
    pages = sorted({ex.get("page") for ex in exercises if ex.get("page")})
    if not pages:
        return
    pdf = HISTORICO / source.filename
    for page in pages:
        out = PAGE_DIR / f"{source.slug}-p{page}"
        png = out.with_suffix(".png")
        if png.exists():
            continue
        subprocess.run(
            [
                "pdftoppm",
                "-png",
                "-singlefile",
                "-r",
                "105",
                "-f",
                str(page),
                "-l",
                str(page),
                str(pdf),
                str(out),
            ],
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )


def option_text(options: list[dict[str, str]], letter: str | None) -> str:
    if not letter:
        return ""
    for opt in options:
        if opt.get("letter") == letter:
            return opt.get("text", "")
    return ""


def build_solution(category_key: str, answer: dict | None, options: list[dict[str, str]], visual_needed: bool, source: Source, number: int) -> str:
    theory = THEORY[category_key]
    if answer:
        letter = answer["letter"]
        text = option_text(options, letter)
        answer_line = f"Respuesta: {letter}) {text}" if text else f"Respuesta: {letter})"
    else:
        answer_line = "Respuesta pendiente de revisar: no hay solucionario oficial enlazado para este ejercicio."
    parts = [
        answer_line,
        f"Metodo: {theory['attack']}",
        "Comprobacion: compara el resultado con las opciones y revisa unidades, signos y si el enunciado pregunta por una parte o por el total.",
    ]
    if visual_needed:
        parts.append("Este ejercicio depende de una figura o tabla: abre la fuente visual antes de darlo por cerrado.")
    if source.slug == "pangea-2025-tercera" and number == 7:
        parts.append("Nota de revision: el enunciado parece ambiguo; literalmente base = 4 y altura = 4 daria 8 m2, pero la opcion marcada sigue la interpretacion de entrenamiento usada en la bateria.")
    return "\n".join(parts)


def load_answer_keys() -> dict[str, dict[str, dict]]:
    path = DATA_DIR / "answer_keys.json"
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    DATA_DIR.mkdir(exist_ok=True)
    PAGE_DIR.mkdir(parents=True, exist_ok=True)
    DOCX_DIR.mkdir(parents=True, exist_ok=True)

    answer_keys = load_answer_keys()
    exercises: list[dict] = []
    sources_meta: list[dict] = []

    for source in SOURCES:
        sources_meta.append(
            {
                "slug": source.slug,
                "title": source.title,
                "year": source.year,
                "round": source.round_name,
                "filename": source.filename,
                "officialUrl": source.official_url,
                "included": not source.skip,
            }
        )
        if source.skip:
            continue
        if source.parser == "pdf":
            raw_questions = parse_pdf_questions(source)
        elif source.parser == "battery_pdf":
            raw_questions = parse_battery_questions(source)
        elif source.parser == "docx":
            raw_questions = parse_docx_questions(source)
        else:
            raise ValueError(source.parser)

        keys = answer_keys.get(source.filename, {})
        for raw in raw_questions:
            number = raw["number"]
            if "answer" not in raw and str(number) in keys:
                raw["answer"] = keys[str(number)]
            if "answer" not in raw and source.default_answer:
                raw["answer"] = {"letter": source.default_answer, "origin": "Clave de bateria"}
            if source.slug == "pangea-2025-tercera" and number in THIRD_ROUND_2025:
                raw["answer"] = {"letter": THIRD_ROUND_2025[number], "origin": "Clave razonada de preparacion"}

            category_key = classify(raw["statement"], raw.get("categoryHint"))
            theory = THEORY[category_key]
            visual_needed = has_visual_need(raw["statement"], raw.get("images"), raw.get("visual"))
            points = raw.get("answer", {}).get("points") if raw.get("answer") else None
            exercise = {
                "id": f"{source.slug}-{number:02d}",
                "sourceSlug": source.slug,
                "sourceTitle": source.title,
                "sourceFile": f"historico/{source.filename}",
                "officialUrl": source.official_url,
                "year": source.year,
                "round": source.round_name,
                "number": number,
                "difficulty": difficulty_for(number, points, raw.get("difficulty")),
                "points": points,
                "category": theory["label"],
                "categoryKey": category_key,
                "statement": raw["statement"],
                "options": raw["options"],
                "answer": raw.get("answer"),
                "correctOption": option_text(raw["options"], raw.get("answer", {}).get("letter") if raw.get("answer") else None),
                "theory": theory["base"],
                "attack": theory["attack"],
                "solution": build_solution(category_key, raw.get("answer"), raw["options"], visual_needed, source, number),
                "needsVisual": visual_needed,
                "visual": raw.get("visual"),
                "images": raw.get("images", []),
                "sourcePage": raw.get("page"),
            }
            exercises.append(exercise)

        if source.parser in {"pdf", "battery_pdf"}:
            render_pdf_pages(source, raw_questions)

    payload = {
        "generatedAt": "2026-05-04",
        "eventDate": "2026-05-23T09:00:00+02:00",
        "sources": sources_meta,
        "exercises": exercises,
    }
    out = DATA_DIR / "exercises.js"
    out.write_text(
        "window.PANGEA_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(exercises)} exercises from {sum(1 for s in sources_meta if s['included'])} sources")


if __name__ == "__main__":
    main()
