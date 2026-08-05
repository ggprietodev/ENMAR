// Promociones
const promos = [
  { name: "Residencial El Mirador", loc: "Santillana del Mar", status: "En venta", desc: "8 viviendas unifamiliares adosadas con vistas al mar Cantábrico. Entrega prevista Q3 2026.", price: "Desde 385.000 €", units: "3 disponibles", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80" },
  { name: "Residencial Mar & Pino", loc: "Suances", status: "Próximamente", desc: "6 viviendas en primera línea de costa. Comercialización abierta para reserva.", price: "Consultar", units: "6 unidades", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80" },
  { name: "Promoción Villanueva", loc: "Villanueva de la Peña", status: "Entregado 2025", desc: "4 viviendas unifamiliares entregadas en 2025. Todas las unidades vendidas.", price: "Vendido", units: "0 disponibles", img: "https://images.unsplash.com/photo-1600566753086-00f18fe6ba68?w=1600&q=80" },
];
const Head = () => (
  <section className="page-head">
    <div className="container">
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Promociones</div>
      <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 24 }}><span className="gold-line"></span>Viviendas en venta</div>
      <h1 style={{ maxWidth: "16ch" }}>Tu próxima <em>casa</em>, ya en obra.</h1>
      <p>Promociones residenciales en Cantabria. Calidad ENMAR, plazos cerrados y garantía decenal.</p>
    </div>
  </section>
);
const Card = ({ p, i }) => {
  const col = p.status === "En venta" ? "var(--gold)" : p.status === "Próximamente" ? "var(--olive)" : "var(--muted)";
  return (
    <div className="reveal" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr", gap: 60, alignItems: "center", padding: "80px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="img-hover" style={{ aspectRatio: "4/3", order: i % 2 === 0 ? 0 : 1 }}><img src={p.img} alt={p.name} loading="lazy" decoding="async" /></div>
      <div style={{ order: i % 2 === 0 ? 1 : 0, padding: "0 20px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
          <span style={{ padding: "6px 12px", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", border: `1px solid ${col}`, color: col }}>{p.status}</span>
          <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>{p.loc}</span>
        </div>
        <h2 style={{ fontSize: 48, marginBottom: 20 }}>{p.name}</h2>
        <p style={{ color: "var(--graphite)", fontSize: 16, lineHeight: 1.6, marginBottom: 36, maxWidth: "48ch" }}>{p.desc}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, borderTop: "1px solid var(--line)", paddingTop: 24, marginBottom: 36 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--olive)", marginBottom: 6 }}>Precio</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--gold)" }}>{p.price}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--olive)", marginBottom: 6 }}>Disponibilidad</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 24 }}>{p.units}</div>
          </div>
        </div>
        <a href="contacto.html" className="btn btn-outline" style={{ color: "var(--ink)" }}>Solicitar información <Arrow /></a>
      </div>
    </div>
  );
};
const List = () => (<section className="section"><div className="container">{promos.map((p, i) => <Card key={p.name} p={p} i={i} />)}</div></section>);
const CTA = () => (
  <section style={{ background: "var(--cream)", padding: "140px 0", textAlign: "center" }}>
    <div className="container-narrow">
      <h2 style={{ marginBottom: 32 }}>¿Interesado en una de nuestras <em>promociones</em>?</h2>
      <p style={{ color: "var(--graphite)", fontSize: 18, maxWidth: "52ch", margin: "0 auto 40px" }}>Reserva una visita a las viviendas piloto o solicita información detallada.</p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="contacto.html" className="btn btn-primary">Solicitar información <Arrow /></a>
        <a href="https://wa.me/34685972744" className="btn btn-outline" style={{ color: "var(--ink)" }}>WhatsApp directo</a>
      </div>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav current="promos" variant="over-dark" /><Head /><List /><CTA /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
