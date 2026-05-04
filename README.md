# Pangea 6º Primaria

Web estatica de entrenamiento para preparar Pangea 6º de Primaria, con ejercicios historicos, filtros por categoria, progreso local y soluciones plegadas.

## Abrir en local

No necesita instalacion ni build. Puedes abrir `index.html` directamente en el navegador.

Si prefieres servirla desde un servidor local:

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Estructura

- `index.html`: estructura principal de la app.
- `styles.css`: estilos responsive.
- `app.js`: logica de filtros, vistas y progreso en `localStorage`.
- `data/exercises.js`: datos generados que consume la web.
- `assets/`: imagenes extraidas de documentos y paginas renderizadas.
- `historico/`: documentos historicos usados como fuente.
- `scripts/build_data.py`: script para regenerar los datos y assets.

## Regenerar datos

El script usa Python 3 y herramientas de Poppler (`pdftotext` y `pdftoppm`) para procesar PDFs:

```bash
python3 scripts/build_data.py
```

El resultado actual ya esta incluido en `data/exercises.js` y `assets/`, asi que no hace falta regenerar nada para publicar la web.

## Publicacion

El proyecto esta pensado para subirse como sitio estatico. En GitHub Pages puede publicarse desde la rama principal y la carpeta raiz del repositorio.