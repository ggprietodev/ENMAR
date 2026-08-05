// Portfolio
const all = [
  { id:1, name:"Villa Las Encinas", loc:"Comillas", year:2025, cat:"Unifamiliar", size:"420 m²", img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80" },
  { id:2, name:"Casa del Cabo", loc:"San Vicente de la Barquera", year:2025, cat:"Unifamiliar", size:"285 m²", img:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80" },
  { id:3, name:"Residencial El Mirador", loc:"Santillana del Mar", year:2024, cat:"Promoción", size:"8 viviendas", img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80" },
  { id:4, name:"Casa de la Loma", loc:"Mazcuerras", year:2024, cat:"Unifamiliar", size:"310 m²", img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80" },
  { id:5, name:"Ático Santander Bahía", loc:"Santander", year:2024, cat:"Reforma", size:"180 m²", img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80" },
  { id:6, name:"Villa del Valle", loc:"Cabezón de la Sal", year:2024, cat:"Unifamiliar", size:"360 m²", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80" },
  { id:7, name:"Residencial Mar & Pino", loc:"Suances", year:2023, cat:"Promoción", size:"6 viviendas", img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80" },
  { id:8, name:"Casa Torre", loc:"Torrelavega", year:2023, cat:"Reforma", size:"240 m²", img:"https://images.unsplash.com/photo-1600607687166-48ad73805d9b?w=1400&q=80" },
  { id:9, name:"Villa Reocín", loc:"Reocín", year:2023, cat:"Unifamiliar", size:"390 m²", img:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80" },
];
const Head = () => (
  <section className="page-head">
    <div className="container">
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Proyectos</div>
      <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 24 }}><span className="gold-line"></span>Portfolio</div>
      <h1 style={{ maxWidth: "14ch" }}>Obra <em>seleccionada</em>.</h1>
      <p>Una muestra de los proyectos que hemos entregado en Cantabria. Cada obra, una conversación honesta con el paisaje y con quienes la habitan.</p>
    </div>
  </section>
);
const Grid = () => {
  const cats = ["Todos","Unifamiliar","Promoción","Reforma"];
  const [f, setF] = React.useState("Todos");
  const filtered = f === "Todos" ? all : all.filter(p => p.cat === f);
  return (
    <section style={{ padding: "80px 0 140px" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, marginBottom: 60, borderBottom: "1px solid var(--line)", paddingBottom: 28 }}>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setF(c)} aria-pressed={f === c} style={{ padding: "10px 22px", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500, border: "1px solid", borderColor: f === c ? "var(--ink)" : "var(--line)", background: f === c ? "var(--ink)" : "transparent", color: f === c ? "var(--bone)" : "var(--ink)" }}>{c}</button>
            ))}
          </div>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>{filtered.length} proyectos</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, rowGap: 60 }}>
          {filtered.map((p, i) => (
            <a key={p.id} href={`proyecto.html?id=${p.id}`} className="reveal" style={{ display: "block", marginTop: i % 3 === 1 ? 60 : 0 }}>
              <div className="img-hover" style={{ aspectRatio: "4/5", marginBottom: 20 }}><img src={p.img} alt={p.name} loading="lazy" decoding="async" /></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)" }}>{p.cat} · {p.year}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--muted)" }}>{p.size}</div>
              </div>
              <h3 style={{ fontSize: 28, marginBottom: 6 }}>{p.name}</h3>
              <div style={{ fontSize: 14, color: "var(--graphite)" }}>{p.loc}, Cantabria</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
const CTA = () => (
  <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "140px 0", textAlign: "center" }}>
    <div className="container-narrow">
      <h2 style={{ color: "var(--bone)", marginBottom: 32 }}>Tu casa puede ser la <em>siguiente</em>.</h2>
      <p style={{ color: "rgba(245,239,217,0.7)", fontSize: 18, maxWidth: "52ch", margin: "0 auto 40px" }}>Cuéntanos qué quieres construir y te presentamos una propuesta a medida.</p>
      <a href="contacto.html" className="btn btn-primary">Iniciar proyecto <Arrow /></a>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav current="portfolio" variant="over-dark" /><Head /><TrustBar /><Grid /><CTA /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
