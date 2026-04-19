// Servicios
const Head = () => (
  <section className="page-head">
    <div className="container">
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Servicios</div>
      <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 24 }}><span className="gold-line"></span>Lo que hacemos</div>
      <h1 style={{ maxWidth: "18ch" }}>Del proyecto a las <em>llaves.</em></h1>
      <p>Gestionamos cada fase de tu obra con un único interlocutor. Obra nueva, promociones, reformas integrales y gestión completa del proyecto.</p>
    </div>
  </section>
);
const services = [
  { num: 1, title: "Obra nueva — Viviendas unifamiliares", desc: "Diseñamos y construimos viviendas a medida. Cada proyecto es único, pensado para quien lo va a habitar y adaptado al entorno cántabro.", features: ["Proyecto arquitectónico personalizado con estudio colaborador","Cubiertas de madera laminada, nuestra especialidad","Control de calidad en cada fase, visitas semanales","Entrega llave en mano con presupuesto cerrado"], img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80" },
  { num: 2, title: "Promociones residenciales", desc: "Desarrollamos promociones inmobiliarias de pequeña y mediana escala en Cantabria, desde la adquisición del suelo hasta la venta final.", features: ["Búsqueda y gestión del suelo","Diseño arquitectónico y tramitación de licencias","Financiación y comercialización","Entrega de viviendas terminadas con garantía decenal"], img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80", reverse: true },
  { num: 3, title: "Reformas integrales", desc: "Transformamos viviendas existentes con el mismo nivel de exigencia y acabados que aplicamos en una obra nueva.", features: ["Estudio previo del inmueble y viabilidad","Rediseño de distribución y sistemas","Acabados de alta calidad y eficiencia energética","Plazos cerrados y mínima molestia"], img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80" },
  { num: 4, title: "Gestión integral del proyecto", desc: "Un único interlocutor para todo el proceso: proyecto, licencias, ejecución, seguimiento económico y entrega.", features: ["Coordinación con arquitectos y técnicos","Gestión de licencias y permisos municipales","Control económico y de plazos transparente","Acompañamiento post-obra durante el primer año"], img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80", reverse: true },
];
const Block = ({ s }) => (
  <section className="section" style={{ background: s.num % 2 === 0 ? "var(--bone)" : "var(--cream)" }}>
    <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", direction: s.reverse ? "rtl" : "ltr" }}>
      <div className="reveal img-hover" style={{ aspectRatio: "4/5", direction: "ltr" }}><img src={s.img} alt={s.title} /></div>
      <div className="reveal" style={{ direction: "ltr" }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 100, color: "var(--gold)", fontWeight: 300, lineHeight: 1, marginBottom: 20, opacity: 0.5 }}>{String(s.num).padStart(2, "0")}</div>
        <h2 style={{ marginBottom: 28 }}>{s.title}</h2>
        <p className="lead" style={{ marginBottom: 40 }}>{s.desc}</p>
        <div style={{ borderTop: "1px solid var(--line)" }}>
          {s.features.map((f, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 20, alignItems: "baseline", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
              <div style={{ fontSize: 11, color: "var(--gold)", letterSpacing: "0.1em" }}>0{i + 1}</div>
              <div style={{ fontSize: 15, color: "var(--graphite)", lineHeight: 1.5 }}>{f}</div>
            </div>
          ))}
        </div>
        <a href="contacto.html" className="btn btn-outline" style={{ marginTop: 40, color: "var(--ink)" }}>Consultar este servicio <Arrow /></a>
      </div>
    </div>
  </section>
);
const Process = () => {
  const s = [
    { t: "Primera visita", d: "Te visitamos sin compromiso, conocemos tu terreno y escuchamos tu idea." },
    { t: "Anteproyecto", d: "Propuesta inicial de diseño y estimación orientativa de costes." },
    { t: "Proyecto y presupuesto", d: "Proyecto ejecutivo completo y presupuesto cerrado antes de empezar." },
    { t: "Licencias", d: "Gestionamos todos los permisos municipales y autonómicos." },
    { t: "Obra", d: "Ejecución con equipo propio y seguimiento semanal transparente." },
    { t: "Entrega", d: "Entrega llave en mano con revisión exhaustiva y garantía." },
  ];
  return (
    <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "140px 0" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 80 }} className="reveal">
          <div className="eyebrow eyebrow-gold" style={{ marginBottom: 24 }}><span className="gold-line"></span>Nuestro proceso</div>
          <h2 style={{ color: "var(--bone)" }}>De la idea a la <em>entrega.</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {s.map((x, i) => (
            <div key={i} className="reveal" style={{ padding: "40px 36px", borderTop: "1px solid rgba(201,169,97,0.3)", borderLeft: i % 3 !== 0 ? "1px solid rgba(245,239,217,0.08)" : "none", borderBottom: i >= s.length - 3 ? "1px solid rgba(201,169,97,0.3)" : "none" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 56, color: "var(--gold)", fontWeight: 300, lineHeight: 1, marginBottom: 20 }}>{String(i + 1).padStart(2, "0")}</div>
              <h4 style={{ color: "var(--bone)", marginBottom: 12, fontSize: 22 }}>{x.t}</h4>
              <p style={{ color: "rgba(245,239,217,0.6)", fontSize: 14, lineHeight: 1.65 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const CTA = () => (
  <section className="section" style={{ textAlign: "center" }}>
    <div className="container-narrow">
      <h2 style={{ marginBottom: 32 }}>¿Qué <em>servicio</em> necesitas?</h2>
      <p style={{ color: "var(--graphite)", fontSize: 18, maxWidth: "52ch", margin: "0 auto 40px" }}>Cuéntanos tu proyecto. Te llamamos en 24 horas y te damos una propuesta honesta y sin compromiso.</p>
      <a href="contacto.html" className="btn btn-primary">Solicitar presupuesto <Arrow /></a>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav current="services" variant="over-dark" /><Head />{services.map(s => <Block key={s.num} s={s} />)}<Process /><CTA /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
