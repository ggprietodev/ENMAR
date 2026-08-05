# Construcciones Cantabria — Sitio web

Sitio web estático de ENMAR Construcción, empresa constructora con sede en Cantabria. React + Babel Standalone, sin build step.

## Estructura

```
.
├── index.html           # Home
├── nosotros.html        # Sobre nosotros
├── servicios.html       # Servicios
├── portfolio.html       # Listado de proyectos
├── proyecto.html        # Ficha de proyecto (?id=N selecciona el proyecto)
├── promociones.html     # Promociones en venta
├── contacto.html        # Contacto (formulario vía FormSubmit.co)
├── aviso-legal.html     # Aviso legal (borrador, revisar con un profesional)
├── privacidad.html      # Política de privacidad (borrador, revisar con un profesional)
├── cookies.html         # Política de cookies (borrador, revisar con un profesional)
├── 404.html             # Página de error servida por GitHub Pages
├── robots.txt
├── sitemap.xml
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
    ├── contacto.jsx
    ├── aviso-legal.jsx
    ├── privacidad.jsx
    └── cookies.jsx
```

Cada `.html` carga React, ReactDOM, Babel Standalone, `assets/shared.jsx` y su `pages/<página>.jsx` correspondiente — ese es el único lugar donde vive el código, no lo dupliques inline en el HTML.

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
- El formulario de contacto envía los datos a FormSubmit.co (`https://formsubmit.co/ajax/Grupoenmar@gmail.com`), gratuito y sin necesidad de backend. La primera vez que alguien lo envíe, FormSubmit mandará un email de confirmación a Grupoenmar@gmail.com que hay que aceptar para activar los envíos.
- `aviso-legal.html`, `privacidad.html` y `cookies.html` son plantillas de referencia (marcadas `noindex` en su `<meta name="robots">`). Quita el `noindex` y actualiza el contenido una vez que un profesional legal las haya revisado.
- `proyecto.html` es una única plantilla de ficha de proyecto; el parámetro `?id=N` (ver `pages/proyecto.jsx`) selecciona nombre, ubicación, año y superficie del proyecto correspondiente al listado de `pages/portfolio.jsx`. La narrativa de materiales y el testimonio son contenido de ejemplo compartido por todas las fichas.
