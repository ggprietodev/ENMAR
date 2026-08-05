// Nosotros
const Head = () => (
  <section className="page-head">
    <div className="container">
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Nosotros</div>
      <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 24 }}><span className="gold-line"></span>Sobre ENMAR</div>
      <h1 style={{ maxWidth: "16ch" }}>Construimos con <em>oficio</em>,<br/>con <em>cercanía</em> y con <em>criterio</em>.</h1>
      <p>Una constructora cántabra enfocada en la vivienda de alta calidad, la obra bien hecha y la relación honesta con cada cliente.</p>
    </div>
  </section>
);
const Story = () => (
  <section className="section">
    <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 100, alignItems: "start" }}>
      <div className="reveal" style={{ position: "sticky", top: 120 }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}><span className="gold-line"></span>Nuestra historia</div>
        <h2 style={{ marginBottom: 40 }}>Raíces en Cantabria,<br/><em>visión contemporánea.</em></h2>
      </div>
      <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <p className="lead">ENMAR nace en Villanueva de la Peña con un equipo que lleva décadas construyendo en la región. Una constructora joven con el oficio aprendido de generaciones anteriores.</p>
        <p style={{ color: "var(--graphite)" }}>Nos especializamos en viviendas unifamiliares de diseño, cubiertas de madera laminada y promociones residenciales de pequeña escala. Trabajamos con arquitectos y aparejadores de confianza, pero con un equipo propio en obra que garantiza el control de calidad y plazos.</p>
        <p style={{ color: "var(--graphite)" }}>Cada proyecto lo gestionamos desde la primera reunión hasta la entrega final. Creemos que una vivienda se construye tan bien como se comunica: con transparencia, honestidad y la capacidad de estar presentes cuando el cliente nos necesita.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 20 }}>
          <div className="img-hover" style={{ aspectRatio: "4/5" }}><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="Equipo de ENMAR en obra" /></div>
          <div className="img-hover" style={{ aspectRatio: "4/5", marginTop: 50 }}><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80" alt="Vivienda de diseño construida por ENMAR" /></div>
        </div>
      </div>
    </div>
  </section>
);
const Values = () => {
  const v = [
    { n: "01", t: "Cercanía", d: "Un único interlocutor durante todo el proyecto. Atendemos el teléfono y pisamos la obra cada semana." },
    { n: "02", t: "Experiencia local", d: "Conocemos el terreno, los oficios y la normativa cántabra. Evitamos los imprevistos antes de que aparezcan." },
    { n: "03", t: "Profesionalidad", d: "Presupuestos cerrados, contratos claros y plazos que cumplimos. Lo que firmamos, lo entregamos." },
    { n: "04", t: "Compromiso", d: "La obra no termina con las llaves. Acompañamos durante el primer año y respondemos siempre." },
    { n: "05", t: "Eficacia", d: "Equipo propio, proveedores de confianza y una cadena de decisión corta. Menos intermediarios, más resultado." },
    { n: "06", t: "Diseño", d: "Trabajamos con arquitectos para que cada vivienda sea singular, funcional y duradera en el tiempo." },
  ];
  return (
    <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "140px 0" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 100 }} className="reveal">
          <div className="eyebrow eyebrow-gold" style={{ marginBottom: 24 }}><span className="gold-line"></span>Nuestros valores</div>
          <h2 style={{ color: "var(--bone)" }}>Seis principios,<br/><em>cada día en la obra.</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(201,169,97,0.15)" }}>
          {v.map(x => (
            <div key={x.n} className="reveal" style={{ background: "var(--ink)", padding: "48px 40px", minHeight: 280 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 14, color: "var(--gold)", letterSpacing: "0.1em", marginBottom: 20 }}>— {x.n}</div>
              <h4 style={{ color: "var(--bone)", marginBottom: 16, fontSize: 26 }}>{x.t}</h4>
              <p style={{ color: "rgba(245,239,217,0.65)", fontSize: 14, lineHeight: 1.7 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Certs = () => (
  <section className="section">
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 60 }} className="reveal">
        <div className="eyebrow" style={{ marginBottom: 20 }}>Datos de empresa</div>
        <h3>ENMAR Construcción</h3>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        {[{k:"CIF",v:"B13817150"},{k:"Sede",v:"Villanueva de la Peña"},{k:"Provincia",v:"Cantabria"},{k:"Ámbito",v:"Nacional"}].map(d => (
          <div key={d.k} className="reveal" style={{ borderTop: "1px solid var(--gold)", paddingTop: 22 }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 26, color: "var(--ink)", marginBottom: 8 }}>{d.v}</div>
            <div style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--olive)" }}>{d.k}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
const CTA = () => (
  <section style={{ background: "var(--cream)", padding: "140px 0", textAlign: "center" }}>
    <div className="container-narrow">
      <h2 style={{ marginBottom: 32 }}>Conozcamos tu <em>proyecto.</em></h2>
      <p style={{ color: "var(--graphite)", fontSize: 18, maxWidth: "52ch", margin: "0 auto 40px" }}>Estamos a una llamada de distancia. Cuéntanos qué quieres construir.</p>
      <a href="contacto.html" className="btn btn-primary">Solicitar presupuesto <Arrow /></a>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav current="about" variant="over-dark" /><Head /><Story /><Values /><Certs /><CTA /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
