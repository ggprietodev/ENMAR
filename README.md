# Construcciones Cantabria — Sitio web

Sitio web estático de una empresa constructora (ficticia) con sede en Cantabria. Siete páginas HTML con React + Babel inline, sin build step.

## Estructura

```
.
├── index.html           # Home
├── nosotros.html        # Sobre nosotros
├── servicios.html       # Servicios
├── portfolio.html       # Listado de proyectos
├── proyecto.html        # Ficha de proyecto individual
├── promociones.html     # Promociones en venta
├── contacto.html        # Contacto
├── assets/
│   ├── styles.css       # Estilos globales
│   ├── shared.jsx       # Header, Footer, utilidades compartidas
│   ├── logo.jpg
│   └── logo-mark.svg
└── pages/
    ├── home.jsx
    ├── nosotros.jsx
    ├── servicios.jsx
    ├── portfolio.jsx
    ├── proyecto.jsx
    ├── promociones.jsx
    └── contacto.jsx
```

Cada `.html` carga React, ReactDOM, Babel Standalone, `assets/shared.jsx` y su `pages/<página>.jsx` correspondiente.

## Ejecución local

No hay build. Abre cualquier `.html` con un servidor estático (necesario porque Babel carga archivos externos):

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Luego visita `http://localhost:8000/`.

## Publicación (GitHub Pages)

1. Sube el repo a GitHub.
2. Settings → Pages → Source: `main` / root.
3. El sitio quedará disponible en `https://<usuario>.github.io/<repo>/`.

## Notas

- Las imágenes de proyectos se cargan desde Unsplash (CDN externo).
- Para producción real, sustituye las URLs de Unsplash por imágenes propias en `assets/`.
- Todo el texto y datos son de ejemplo.
