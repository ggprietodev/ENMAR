// Aviso legal
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
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Aviso legal</div>
      <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 24 }}><span className="gold-line"></span>Información legal</div>
      <h1 style={{ maxWidth: "16ch" }}>Aviso <em>legal</em>.</h1>
      <p>Condiciones de acceso y uso del sitio web grupoenmar.com.</p>
    </div>
  </section>
);
const Content = () => (
  <section className="section">
    <LegalNotice />
    <div className="container-narrow" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      <div>
        <h3 style={{ marginBottom: 16 }}>1. Datos identificativos</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos: el sitio web grupoenmar.com es titularidad de <strong>ENMAR</strong> (Grupo Enmar), con CIF B13817150 y domicilio en Calle San Juan, Villanueva de la Peña, 39509 Mazcuerras, Cantabria, España. Contacto: <a href="mailto:Grupoenmar@gmail.com" style={{ borderBottom: "1px solid var(--gold)" }}>Grupoenmar@gmail.com</a> · +34 685 97 27 44.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>2. Objeto</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Este sitio web tiene como finalidad informar sobre los servicios de construcción y promoción inmobiliaria de ENMAR y facilitar el contacto con potenciales clientes. El acceso al sitio es gratuito y no requiere registro previo.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>3. Condiciones de uso</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>El usuario se compromete a hacer un uso adecuado y lícito del sitio web, de acuerdo con la legislación aplicable, la buena fe y el orden público. Queda prohibido el uso del sitio con fines fraudulentos o lesivos para ENMAR o terceros.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>4. Propiedad intelectual e industrial</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Los textos, imágenes, marcas, logotipos y demás contenidos de este sitio web son propiedad de ENMAR o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>5. Exclusión de responsabilidad</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>ENMAR no se hace responsable de los daños derivados del uso del sitio web, de la información contenida en él, ni de la disponibilidad continua del servicio, sin perjuicio de las acciones que legalmente correspondan. Los proyectos, imágenes y datos mostrados tienen carácter ilustrativo.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>6. Legislación aplicable</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someterán a los juzgados y tribunales del domicilio de ENMAR, salvo que la normativa de consumidores y usuarios establezca otro fuero.</p>
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)" }}>Última actualización: agosto de 2026.</div>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav /><Head /><Content /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
