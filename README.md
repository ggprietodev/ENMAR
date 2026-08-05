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
- La home incluye una sección "Síguenos en Instagram" (`InstagramFeed` en `pages/home.jsx`) pensada para el widget de [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/). Mientras `ELFSIGHT_WIDGET_ID` esté vacío se muestra un aviso "muy pronto" con enlace a @grupoenmar. Para activar el feed real:
  1. Crea una cuenta en elfsight.com y añade el widget "Instagram Feed & InstaShow".
  2. Conecta tu cuenta de Instagram (@grupoenmar) desde el panel de Elfsight y personaliza colores/diseño.
  3. Copia el ID del widget (la parte final de la clase `elfsight-app-XXXXXXXX-XXXX-...` que te da su panel) y pégalo en `ELFSIGHT_WIDGET_ID` al principio de `pages/home.jsx`.
  4. El `<script src="https://static.elfsight.com/platform/platform.js">` ya está incluido en `index.html`, no hace falta tocar nada más.
- La sección "Lo que dicen nuestros clientes en Google" (`GoogleReviews` en `pages/home.jsx`) usa el widget gratuito de [SociableKit Google Reviews](https://www.sociablekit.com/free-widgets/free-google-reviews-widget-website/) (plan "forever free", sin tarjeta), conectado a la ficha de Google de ENMAR desde su panel. El script (`https://widgets.sociablekit.com/google-reviews/widget.js`) se carga en `index.html`; el `data-embed-id` del `<div class="sk-ww-google-reviews">` se gestiona desde el panel de SociableKit. También hay un enlace "Danos tu opinión en Google" (`GOOGLE_REVIEW_URL` en `assets/shared.jsx`) en el footer y en contacto. Los testimonios inventados que traía el proyecto originalmente se han retirado — no debe mostrarse una web real con citas de clientes que no existen.
- El chat en directo lo gestiona [Tidio](https://www.tidio.com/) (script embebido al final de cada página). El mensaje de bienvenida del widget se edita desde el panel de Tidio (Settings → Chat widget), no desde este código; ahora mismo está en inglés y conviene cambiarlo a español.
- El favicon (`assets/favicon-*.png`, `favicon.ico`, `assets/apple-touch-icon.png`) es un monograma "E" dorado sobre fondo tinta, generado a partir de la paleta de marca — sustituye al SVG de línea fina anterior, que Google no renderizaba bien en los resultados de búsqueda (mostraba un icono de globo genérico).
