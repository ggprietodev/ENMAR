// Home page JSX
const heroImgs = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2400&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=2400&q=80",
];
const Hero = () => {
  const [i, setI] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setI(x => (x+1) % heroImgs.length), 6500); return () => clearInterval(t); }, []);
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 720, overflow: "hidden", color: "var(--bone)", background: "var(--ink)" }}>
      {heroImgs.map((src, k) => (
        <div key={src} style={{ position: "absolute", inset: 0, backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center", opacity: k === i ? 1 : 0, transition: "opacity 1.6s ease, transform 7s ease", transform: k === i ? "scale(1.06)" : "scale(1)" }} />
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,29,23,0.55) 0%, rgba(26,29,23,0.25) 40%, rgba(26,29,23,0.85) 100%)" }} />
      <div style={{ position: "absolute", left: 40, top: "50%", transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "left center", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(245,239,217,0.6)", whiteSpace: "nowrap" }}>Cantabria · España · Desde 2023</div>
      <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 120 }}>
        <div style={{ maxWidth: 980 }}>
          <div className="eyebrow eyebrow-gold" style={{ marginBottom: 32 }}><span className="gold-line"></span>Construcción y promoción inmobiliaria</div>
          <h1 style={{ color: "var(--bone)", marginBottom: 36, fontSize: "clamp(52px, 8vw, 128px)" }}>Viviendas con <em>alma</em>,<br/>construidas con oficio.</h1>
          <p style={{ color: "rgba(245,239,217,0.8)", fontSize: 19, maxWidth: "58ch", lineHeight: 1.55, marginBottom: 48 }}>Desde Villanueva de la Peña diseñamos y construimos casas de alta calidad en toda Cantabria. Gestión integral, cercanía y compromiso en cada obra.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="portfolio.html" className="btn btn-primary">Ver proyectos <Arrow /></a>
            <a href="contacto.html" className="btn btn-outline" style={{ color: "var(--bone)" }}>Solicitar presupuesto</a>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 32, left: 0, right: 0, display: "flex", justifyContent: "space-between", padding: "0 40px", color: "rgba(245,239,217,0.5)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
        <div style={{ display: "flex", gap: 8 }}>
          {heroImgs.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Ver imagen ${k + 1} de ${heroImgs.length}`} aria-current={k === i} style={{ width: 32, height: 2, background: k === i ? "var(--gold)" : "rgba(245,239,217,0.25)", padding: 0, transition: "background 0.3s" }} />)}
        </div>
        <div>Scroll ↓</div>
      </div>
    </section>
  );
};
const Stats = () => (
  <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "80px 0", borderTop: "1px solid rgba(245,239,217,0.08)" }}>
    <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
      {[{n:"24+",l:"Proyectos entregados"},{n:"100%",l:"Cantabria"},{n:"+10",l:"Años de experiencia"},{n:"18m",l:"Plazo medio de obra"}].map((s,i) => (
        <div key={i} className="reveal" style={{ borderLeft: "1px solid rgba(201,169,97,0.3)", paddingLeft: 28 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 64, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
          <div style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(245,239,217,0.6)" }}>{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);
const Intro = () => (
  <section className="section">
    <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 100, alignItems: "center" }}>
      <div className="reveal">
        <div className="eyebrow" style={{ marginBottom: 24 }}><span className="gold-line"></span>01 — Quiénes somos</div>
        <h2 style={{ marginBottom: 32 }}>Una constructora <em>de Cantabria</em>,<br/>para Cantabria y más allá.</h2>
        <p className="lead" style={{ marginBottom: 24 }}>ENMAR nace con la convicción de que construir una vivienda es construir un proyecto de vida. Gestionamos cada obra desde la primera piedra con la cercanía de un equipo local y la exigencia de un estudio de arquitectura.</p>
        <p style={{ color: "var(--graphite)", marginBottom: 40, maxWidth: "58ch" }}>Trabajamos en toda la región con un equipo propio, controlando calidad, tiempos y presupuesto en cada fase del proceso.</p>
        <a href="nosotros.html" className="btn btn-outline" style={{ color: "var(--ink)" }}>Conocer la empresa <Arrow /></a>
      </div>
      <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, position: "relative" }}>
        <div className="img-hover" style={{ aspectRatio: "3/4", marginTop: 60 }}><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80" alt="Vivienda construida por ENMAR en Cantabria" loading="lazy" decoding="async" /></div>
        <div className="img-hover" style={{ aspectRatio: "3/4" }}><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80" alt="Equipo de ENMAR trabajando en obra" loading="lazy" decoding="async" /></div>
        <div style={{ position: "absolute", bottom: -30, left: -30, background: "var(--gold)", color: "var(--ink)", padding: "24px 32px", maxWidth: 240 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 44, lineHeight: 1, marginBottom: 8 }}>3</div>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>Años<br/>construyendo<br/>en Cantabria</div>
        </div>
      </div>
    </div>
  </section>
);
const ServicesPreview = () => {
  const s = [
    { n: "01", t: "Obra nueva unifamiliar", d: "Viviendas a medida, del proyecto a las llaves. Diseño personalizado y materiales de primera calidad.", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80" },
    { n: "02", t: "Promociones residenciales", d: "Desarrollo de promociones inmobiliarias en Cantabria, desde la adquisición del suelo hasta la entrega.", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80" },
    { n: "03", t: "Reformas integrales", d: "Transformamos espacios existentes con el mismo nivel de exigencia y acabados que una obra nueva.", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" },
    { n: "04", t: "Gestión integral", d: "Proyecto, licencias, ejecución y entrega. Un único interlocutor durante todo el proceso.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" },
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80, flexWrap: "wrap", gap: 24 }}>
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 24 }}><span className="gold-line"></span>02 — Lo que hacemos</div>
            <h2>Servicios<br/><em>integrales.</em></h2>
          </div>
          <a href="servicios.html" className="btn btn-outline" style={{ color: "var(--ink)" }}>Todos los servicios <Arrow /></a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "var(--line)" }}>
          {s.map(x => (
            <a key={x.n} href="servicios.html" className="reveal" style={{ background: "var(--bone)", padding: "48px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "center", minHeight: 340 }}>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--gold)", marginBottom: 24, letterSpacing: "0.08em" }}>— {x.n}</div>
                <h3 style={{ marginBottom: 20 }}>{x.t}</h3>
                <p style={{ color: "var(--graphite)", fontSize: 15, lineHeight: 1.6 }}>{x.d}</p>
                <div style={{ marginTop: 32, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--olive)", display: "flex", alignItems: "center", gap: 10 }}>Saber más <Arrow size={12} /></div>
              </div>
              <div className="img-hover" style={{ aspectRatio: "4/5", height: "100%" }}><img src={x.img} alt={x.t} loading="lazy" decoding="async" /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
const Featured = () => (
  <section style={{ position: "relative", minHeight: "90vh", display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--ink)", color: "var(--bone)" }}>
    <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center" }} />
    <div style={{ padding: "120px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="eyebrow eyebrow-gold reveal" style={{ marginBottom: 24 }}><span className="gold-line"></span>Proyecto destacado</div>
      <h2 className="reveal" style={{ color: "var(--bone)", marginBottom: 24 }}>Villa <em>Las Encinas</em></h2>
      <div style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,239,217,0.5)", marginBottom: 32 }}>Comillas · 420 m² · Entregada 2025</div>
      <p className="reveal" style={{ color: "rgba(245,239,217,0.75)", fontSize: 17, lineHeight: 1.7, marginBottom: 48, maxWidth: "52ch" }}>Una vivienda unifamiliar concebida como refugio contemporáneo. Grandes ventanales, estructura de hormigón visto y cubierta de madera laminada abierta al paisaje cántabro.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, marginBottom: 48, maxWidth: 500 }}>
        {[{k:"Superficie",v:"420 m²"},{k:"Plazo",v:"16 meses"},{k:"Parcela",v:"2.100 m²"}].map(d => (
          <div key={d.k}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--gold)", marginBottom: 4 }}>{d.v}</div>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,239,217,0.5)" }}>{d.k}</div>
          </div>
        ))}
      </div>
      <a href="proyecto.html?id=1" className="btn btn-outline-gold" style={{ alignSelf: "flex-start" }}>Ver el proyecto <Arrow /></a>
    </div>
  </section>
);
const PortfolioTeaser = () => {
  const p = [
    { id: 1, name: "Villa Las Encinas", loc: "Comillas", year: "2025", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
    { id: 2, name: "Casa del Cabo", loc: "San Vicente", year: "2025", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80" },
    { id: 3, name: "Residencial El Mirador", loc: "Santillana", year: "2024", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80" },
    { id: 4, name: "Casa de la Loma", loc: "Mazcuerras", year: "2024", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80" },
  ];
  const styles = [{ gridRow: "1 / 3", aspectRatio: "4/5" }, { aspectRatio: "3/4" }, { aspectRatio: "3/4" }, { gridColumn: "1 / -1", aspectRatio: "16/8" }];
  return (
    <section className="section" style={{ background: "var(--bone)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80, flexWrap: "wrap", gap: 24 }}>
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 24 }}><span className="gold-line"></span>03 — Obra selecta</div>
            <h2>Proyectos recientes<br/><em>en Cantabria.</em></h2>
          </div>
          <a href="portfolio.html" className="btn btn-outline" style={{ color: "var(--ink)" }}>Ver portfolio completo <Arrow /></a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows: "auto auto", gap: 24 }}>
          {p.map((x, i) => (
            <a key={x.name} href={`proyecto.html?id=${x.id}`} className="reveal img-hover" style={{ ...styles[i], position: "relative", overflow: "hidden" }}>
              <img src={x.img} alt={x.name} loading="lazy" decoding="async" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(26,29,23,0.7) 100%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 28, right: 28, color: "var(--bone)" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>{x.loc} · {x.year}</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 300 }}>{x.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
const Process = () => {
  const s = [
    { n: "01", t: "Conversación", d: "Escuchamos tu idea, visitamos el terreno y entendemos tu forma de vivir." },
    { n: "02", t: "Proyecto", d: "Diseñamos junto a arquitectos de confianza. Presupuesto cerrado y transparente." },
    { n: "03", t: "Ejecución", d: "Equipo propio en obra. Calidad, plazos y comunicación semanal del avance." },
    { n: "04", t: "Entrega", d: "Revisión exhaustiva y acompañamiento post-obra durante todo el primer año." },
  ];
  return (
    <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "140px 0" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 100 }} className="reveal">
          <div className="eyebrow eyebrow-gold" style={{ marginBottom: 24 }}><span className="gold-line"></span>04 — Nuestro proceso</div>
          <h2 style={{ color: "var(--bone)" }}>Cuatro pasos,<br/><em>un único compromiso.</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {s.map(x => (
            <div key={x.n} className="reveal" style={{ borderTop: "1px solid rgba(201,169,97,0.4)", paddingTop: 28 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 56, color: "var(--gold)", fontWeight: 300, marginBottom: 16, lineHeight: 1 }}>{x.n}</div>
              <h4 style={{ color: "var(--bone)", marginBottom: 14, fontSize: 24 }}>{x.t}</h4>
              <p style={{ color: "rgba(245,239,217,0.65)", fontSize: 14, lineHeight: 1.7 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Testimonials = () => {
  const t = [
    { q: "Nos acompañaron en cada fase. La obra terminó en el plazo acordado y con acabados impecables. Volveríamos a elegirlos sin duda.", by: "María y Javier", r: "Casa en Comillas" },
    { q: "Trato cercano y profesional. Supieron adaptar el proyecto a nuestras necesidades sin disparar el presupuesto. Muy recomendables.", by: "Familia Ruiz-Gómez", r: "Vivienda en Santillana" },
    { q: "La comunicación semanal durante la obra marcó la diferencia. Siempre supimos exactamente en qué fase estábamos.", by: "Alberto M.", r: "Reforma integral, Torrelavega" },
  ];
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = setInterval(() => setI(x => (x + 1) % t.length), 7000);
    return () => clearInterval(timer);
  }, [paused, t.length]);
  return (
    <section className="section" style={{ background: "var(--cream)" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}><span className="gold-line"></span>05 — Testimonios</div>
        <h2 style={{ marginBottom: 80 }}>Lo que dicen<br/><em>nuestros clientes.</em></h2>
        <div style={{ position: "relative", minHeight: 280 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 200, color: "var(--gold)", opacity: 0.22, position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", lineHeight: 1 }}>"</div>
          <p style={{ fontFamily: "var(--serif)", fontSize: 34, lineHeight: 1.35, fontWeight: 300, fontStyle: "italic", color: "var(--ink-soft)", maxWidth: "28ch", margin: "0 auto 40px", position: "relative" }}>{t[i].q}</p>
          <div style={{ color: "var(--gold)", marginBottom: 20 }}>★★★★★</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>{t[i].by}</div>
          <div style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--olive)", marginTop: 6 }}>{t[i].r}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 60 }}>
          {t.map((_, j) => <button key={j} onClick={() => setI(j)} aria-label={`Ver testimonio ${j + 1} de ${t.length}`} aria-current={j === i} style={{ width: 40, height: 2, background: j === i ? "var(--gold)" : "rgba(26,29,23,0.2)", padding: 0 }} />)}
        </div>
      </div>
    </section>
  );
};
const Ticker = () => {
  const p = ["Santander","Comillas","Santillana del Mar","Torrelavega","Mazcuerras","San Vicente de la Barquera","Cabezón de la Sal","Suances","Villanueva de la Peña","Reocín"];
  const list = [...p, ...p];
  return (
    <section style={{ background: "var(--bone)", padding: "60px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 60, whiteSpace: "nowrap", animation: "ticker 40s linear infinite" }}>
        {list.map((x, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 60, fontFamily: "var(--serif)", fontSize: 36, color: "var(--olive)", fontWeight: 300 }}>
            {x}<span style={{ color: "var(--gold)", fontSize: 12 }}>◆</span>
          </div>
        ))}
      </div>
    </section>
  );
};
// Sustituye ELFSIGHT_WIDGET_ID por el ID de tu widget en https://elfsight.com/instagram-feed-instashow/
// (conecta tu cuenta @grupoenmar allí) para que este bloque muestre el feed real y se actualice solo.
const ELFSIGHT_WIDGET_ID = "";
const InstagramFeed = () => (
  <section className="section" style={{ background: "var(--bone)" }}>
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
        <div className="reveal">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="gold-line"></span>06 — Síguenos</div>
          <h2>Nuestro día a día<br/><em>en Instagram.</em></h2>
        </div>
        <a href="https://www.instagram.com/grupoenmar" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: "var(--ink)" }}>@grupoenmar <Arrow /></a>
      </div>
      {ELFSIGHT_WIDGET_ID ? (
        <div className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`} data-elfsight-app-lazy></div>
      ) : (
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, padding: "80px 40px", background: "var(--cream)", textAlign: "center" }}>
          <p style={{ color: "var(--graphite)", maxWidth: "48ch", fontSize: 16, lineHeight: 1.6 }}>Muy pronto, las últimas fotos de obra directamente desde Instagram. Mientras tanto, síguenos en @grupoenmar.</p>
          <a href="https://www.instagram.com/grupoenmar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver en Instagram <Arrow /></a>
        </div>
      )}
    </div>
  </section>
);
const ContactCTA = () => (
  <section style={{ background: "var(--ink)", color: "var(--bone)", padding: "160px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=2000&q=80)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
    <div className="container-narrow" style={{ position: "relative", textAlign: "center" }}>
      <div className="eyebrow eyebrow-gold" style={{ marginBottom: 32 }}><span className="gold-line"></span>07 — Hablemos</div>
      <h2 style={{ color: "var(--bone)", marginBottom: 36, fontSize: "clamp(42px, 6vw, 88px)" }}>¿Tienes un <em>proyecto</em><br/>en mente?</h2>
      <p style={{ color: "rgba(245,239,217,0.7)", fontSize: 19, maxWidth: "52ch", margin: "0 auto 48px", lineHeight: 1.55 }}>Cuéntanos tu idea. Visitamos el terreno, entendemos tu visión y te damos una propuesta honesta y sin compromiso.</p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="contacto.html" className="btn btn-primary">Solicitar presupuesto <Arrow /></a>
        <a href="https://wa.me/34685972744" className="btn btn-outline-gold">WhatsApp · +34 685 97 27 44</a>
      </div>
    </div>
  </section>
);
const Home = () => { useReveal(); return (<><Nav current="home" variant="over-dark" /><Hero /><Stats /><Intro /><ServicesPreview /><Featured /><PortfolioTeaser /><Process /><Testimonials /><Ticker /><InstagramFeed /><ContactCTA /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
