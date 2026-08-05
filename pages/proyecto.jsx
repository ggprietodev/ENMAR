// Proyecto individual
// Identidad básica de cada proyecto listado en portfolio.jsx; el resto del contenido
// (narrativa, materiales, testimonio) es una plantilla común hasta tener fichas propias.
const projects = [
  { id:1, name:"Villa Las Encinas", loc:"Comillas", year:2025, size:"420 m²", parcela:"2.100 m²", dorms:"5", plazo:"16 meses", img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&q=80" },
  { id:2, name:"Casa del Cabo", loc:"San Vicente de la Barquera", year:2025, size:"285 m²", parcela:"1.400 m²", dorms:"4", plazo:"14 meses", img:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2000&q=80" },
  { id:3, name:"Residencial El Mirador", loc:"Santillana del Mar", year:2024, size:"8 viviendas", parcela:"4.200 m²", dorms:"3-4", plazo:"20 meses", img:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=2000&q=80" },
  { id:4, name:"Casa de la Loma", loc:"Mazcuerras", year:2024, size:"310 m²", parcela:"1.800 m²", dorms:"4", plazo:"15 meses", img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&q=80" },
  { id:5, name:"Ático Santander Bahía", loc:"Santander", year:2024, size:"180 m²", parcela:"—", dorms:"3", plazo:"8 meses", img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2000&q=80" },
  { id:6, name:"Villa del Valle", loc:"Cabezón de la Sal", year:2024, size:"360 m²", parcela:"2.400 m²", dorms:"4", plazo:"17 meses", img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=80" },
  { id:7, name:"Residencial Mar & Pino", loc:"Suances", year:2023, size:"6 viviendas", parcela:"3.100 m²", dorms:"3-4", plazo:"18 meses", img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80" },
  { id:8, name:"Casa Torre", loc:"Torrelavega", year:2023, size:"240 m²", parcela:"—", dorms:"3", plazo:"10 meses", img:"https://images.unsplash.com/photo-1600607687166-48ad73805d9b?w=2000&q=80" },
  { id:9, name:"Villa Reocín", loc:"Reocín", year:2023, size:"390 m²", parcela:"2.000 m²", dorms:"5", plazo:"16 meses", img:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=80" },
];
const params = new URLSearchParams(window.location.search);
const idx = Math.max(0, projects.findIndex(p => p.id === Number(params.get("id"))));
const project = projects[idx];
const nextProject = projects[(idx + 1) % projects.length];
const imgs = [
  project.img,
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80",
];
const Hero = () => (
  <section style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden", background: "var(--ink)" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgs[0]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,29,23,0.4) 0%, rgba(26,29,23,0.2) 40%, rgba(26,29,23,0.85) 100%)" }} />
    <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 100, color: "var(--bone)" }}>
      <div className="crumbs" style={{ color: "rgba(245,239,217,0.6)" }}>
        <a href="index.html">Inicio</a><span className="sep">/</span>
        <a href="portfolio.html">Proyectos</a><span className="sep">/</span>
        {project.name}
      </div>
      <div className="eyebrow eyebrow-gold" style={{ marginBottom: 24 }}><span className="gold-line"></span>{project.loc} · Cantabria · {project.year}</div>
      <h1 style={{ color: "var(--bone)", maxWidth: "16ch", fontSize: "clamp(52px, 7vw, 112px)" }}>{project.name}</h1>
    </div>
  </section>
);
const Specs = () => (
  <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "60px 0", borderTop: "1px solid rgba(245,239,217,0.08)" }}>
    <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 40 }}>
      {[{k:"Superficie",v:project.size},{k:"Parcela",v:project.parcela},{k:"Dormitorios",v:project.dorms},{k:"Plazo",v:project.plazo},{k:"Entrega",v:String(project.year)}].map(d => (
        <div key={d.k} style={{ borderLeft: "1px solid rgba(201,169,97,0.3)", paddingLeft: 24 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 36, color: "var(--gold)", fontWeight: 300, marginBottom: 6, lineHeight: 1 }}>{d.v}</div>
          <div style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(245,239,217,0.55)" }}>{d.k}</div>
        </div>
      ))}
    </div>
  </section>
);
const Intro = () => (
  <section className="section">
    <div className="container" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 100 }}>
      <div className="reveal">
        <div className="eyebrow" style={{ marginBottom: 24 }}><span className="gold-line"></span>El proyecto</div>
        <h2>Un refugio <em>contemporáneo</em> abierto al paisaje.</h2>
      </div>
      <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <p className="lead">{project.name} es una obra en {project.loc}, concebida como un refugio contemporáneo integrado en el paisaje cántabro.</p>
        <p style={{ color: "var(--graphite)" }}>La casa se articula en tres volúmenes de hormigón visto unidos por una cubierta continua de madera laminada. Los grandes ventanales captan el sol de mediodía y enmarcan las vistas hacia los prados del norte. Los materiales son honestos y duraderos: hormigón, madera de abeto, piedra caliza de la región y carpinterías de aluminio de altas prestaciones.</p>
        <p style={{ color: "var(--graphite)" }}>El proyecto incorpora geotermia, aerotermia y una envolvente de alta eficiencia energética.</p>
      </div>
    </div>
  </section>
);
const Gallery = () => (
  <section className="section-sm">
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 24 }}>
        <div className="reveal img-hover" style={{ aspectRatio: "16/10" }}><img src={imgs[1]} alt={`${project.name} — vista exterior`} loading="lazy" decoding="async" /></div>
        <div className="reveal img-hover" style={{ aspectRatio: "4/5" }}><img src={imgs[2]} alt={`${project.name} — detalle de fachada`} loading="lazy" decoding="async" /></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
        {[imgs[3], imgs[4], imgs[5]].map((src, i) => (<div key={i} className="reveal img-hover" style={{ aspectRatio: "4/5" }}><img src={src} alt={`${project.name} — interior`} loading="lazy" decoding="async" /></div>))}
      </div>
    </div>
  </section>
);
const Quote = () => (
  <section style={{ background: "var(--cream)", padding: "140px 0" }}>
    <div className="container-narrow" style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 120, color: "var(--gold)", opacity: 0.3, lineHeight: 0.5, marginBottom: 20 }}>"</div>
      <p style={{ fontFamily: "var(--serif)", fontSize: 38, lineHeight: 1.35, fontStyle: "italic", fontWeight: 300, color: "var(--ink-soft)", marginBottom: 40 }}>Nos escucharon desde la primera visita al terreno. El resultado es una casa que parece haber estado siempre en esta ladera.</p>
      <div style={{ fontFamily: "var(--serif)", fontSize: 20 }}>Cliente ENMAR</div>
      <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--olive)", marginTop: 6 }}>Propietarios · {project.loc}</div>
    </div>
  </section>
);
const Materials = () => {
  const m = [
    { t: "Hormigón visto", d: "Muros portantes con acabado pulido manual." },
    { t: "Madera laminada", d: "Cubierta estructural de abeto encolado." },
    { t: "Piedra caliza", d: "Zócalos y pavimento exterior, extracción local." },
    { t: "Aluminio RPT", d: "Carpintería de altas prestaciones térmicas." },
    { t: "Geotermia", d: "Climatización eficiente todo el año." },
    { t: "Cubierta verde", d: "Aislamiento natural en zona trasera." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: 60 }} className="reveal">
          <div className="eyebrow" style={{ marginBottom: 20 }}><span className="gold-line"></span>Materiales y sistemas</div>
          <h2>Honestidad <em>material</em>.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "var(--line)" }}>
          {m.map(x => (
            <div key={x.t} className="reveal" style={{ background: "var(--bone)", padding: "40px 32px", minHeight: 180 }}>
              <h4 style={{ fontSize: 24, marginBottom: 14 }}>{x.t}</h4>
              <p style={{ color: "var(--graphite)", fontSize: 14, lineHeight: 1.6 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Next = () => (
  <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "100px 0" }}>
    <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
      <a href={`proyecto.html?id=${nextProject.id}`} style={{ display: "block" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Siguiente proyecto</div>
        <h2 style={{ color: "var(--bone)", fontSize: 56 }}>{nextProject.name} →</h2>
      </a>
      <a href="portfolio.html" className="btn btn-outline-gold">Ver todos los proyectos <Arrow /></a>
    </div>
  </section>
);
const Page = () => {
  useReveal();
  React.useEffect(() => { document.title = `${project.name} · ENMAR`; }, []);
  return (<><Nav current="portfolio" variant="over-dark" /><Hero /><Specs /><Intro /><Gallery /><Quote /><Materials /><Next /><Footer /></>);
};
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
