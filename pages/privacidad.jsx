// Política de privacidad
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
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Privacidad</div>
      <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 24 }}><span className="gold-line"></span>Protección de datos</div>
      <h1 style={{ maxWidth: "16ch" }}>Política de <em>privacidad</em>.</h1>
      <p>Cómo tratamos los datos que nos facilitas a través de este sitio web.</p>
    </div>
  </section>
);
const Content = () => (
  <section className="section">
    <LegalNotice />
    <div className="container-narrow" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      <div>
        <h3 style={{ marginBottom: 16 }}>1. Responsable del tratamiento</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}><strong>ENMAR</strong> (Grupo Enmar), CIF B13817150, Calle San Juan, Villanueva de la Peña, 39509 Mazcuerras, Cantabria. Email: <a href="mailto:Grupoenmar@gmail.com" style={{ borderBottom: "1px solid var(--gold)" }}>Grupoenmar@gmail.com</a>.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>2. Finalidad del tratamiento</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Los datos que nos facilitas a través del formulario de contacto (nombre, email, teléfono y detalles del proyecto) se utilizan exclusivamente para responder a tu consulta y, en su caso, elaborar un presupuesto. No se utilizan para envíos comerciales salvo que lo autorices expresamente.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>3. Legitimación</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>La base legal para el tratamiento es el consentimiento que otorgas al enviar el formulario, conforme al artículo 6.1.a del Reglamento (UE) 2016/679 (RGPD).</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>4. Destinatarios y encargados del tratamiento</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>El formulario de contacto de este sitio utiliza el servicio de terceros <strong>FormSubmit</strong> para reenviar los envíos por email a ENMAR. El chat en directo del sitio funciona a través de <strong>Tidio</strong>, que actúa como encargado del tratamiento de las conversaciones que inicies. No se ceden datos a otros terceros salvo obligación legal.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>5. Conservación de los datos</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Los datos se conservarán mientras sean necesarios para atender tu consulta y, posteriormente, durante los plazos legalmente exigibles para atender posibles responsabilidades.</p>
      </div>
      <div>
        <h3 style={{ marginBottom: 16 }}>6. Tus derechos</h3>
        <p style={{ color: "var(--graphite)", lineHeight: 1.7 }}>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:Grupoenmar@gmail.com" style={{ borderBottom: "1px solid var(--gold)" }}>Grupoenmar@gmail.com</a>, adjuntando copia de un documento que acredite tu identidad. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es) si consideras que no hemos atendido correctamente tu solicitud.</p>
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)" }}>Última actualización: agosto de 2026.</div>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav /><Head /><Content /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
