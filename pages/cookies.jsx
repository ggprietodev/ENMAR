// Política de cookies
const LegalNotice = () => (
  <div className="container-narrow" style={{ marginBottom: 40 }}>
    <div style={{ background: "var(--cream)", borderLeft: "3px solid var(--gold)", padding: "18px 24px", fontSize: 13, color: "var(--graphite)", lineHeight: 1.6 }}>
      Documento de referencia generado como plantilla. Debe ser revisado por un profesional legal antes de considerarse definitivo.
    </div>
  </div>
);
const Head = () => (
  <section className="page-head">
    <div className="container">
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Cookies</div>
      <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 24 }}><span className="gold-line"></span>Navegación</div>
      <h1 style={{ maxWidth: "16ch" }}>Política de <em>cookies</em>.</h1>
      <p>Qué cookies utiliza grupoenmar.com y cómo gestionarlas.</p>
    </div>
  </section>
);
const Content = () => (
  <section className="section">
    <LegalNotice />
    <div className="container-narrow" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      <div>
        <h3 style={{ marginBottom: 16 }}>1. Qué son las cookies</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información sobre tu visita.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>2. Cookies que utilizamos</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Este sitio web no utiliza cookies propias de analítica ni de publicidad. Sí carga contenido de terceros que puede establecer sus propias cookies o realizar conexiones técnicas:</p>
        <ul style={{ color: "var(--graphite)", lineHeight: 1.9, paddingLeft: 22, marginTop: 12 }}>
          <li><strong>Google Fonts</strong> — carga las tipografías del sitio desde los servidores de Google, lo que implica una conexión técnica que revela tu dirección IP a Google.</li>
          <li><strong>OpenStreetMap</strong> — el mapa incrustado en la página de contacto puede establecer cookies propias del proveedor al interactuar con él.</li>
          <li><strong>FormSubmit</strong> — el envío del formulario de contacto se procesa a través de este servicio de terceros, sin cookies de seguimiento asociadas.</li>
        </ul>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>3. Cómo gestionar las cookies</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de tu navegador: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid var(--gold)" }}>Chrome</a>, <a href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-el-rastreo-firefox-escritorio" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid var(--gold)" }}>Firefox</a>, <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "1px solid var(--gold)" }}>Safari</a>.</p>
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)" }}>Última actualización: agosto de 2026.</div>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav /><Head /><Content /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
