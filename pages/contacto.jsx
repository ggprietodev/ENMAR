// Contacto
const Form = () => {
  const [s, setS] = React.useState({ name:"", email:"", phone:"", service:"", msg:"" });
  const [sent, setSent] = React.useState(false);
  const u = (k) => (e) => setS(x => ({ ...x, [k]: e.target.value }));
  const input = { width:"100%", padding:"16px 0", background:"transparent", border:"none", borderBottom:"1px solid var(--line)", fontSize:16, fontFamily:"var(--sans)", color:"var(--ink)", outline:"none" };
  const label = { fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--olive)", marginBottom:4, display:"block" };
  if (sent) return (<div style={{ padding:48, background:"var(--cream)", textAlign:"center" }}><div style={{ fontFamily:"var(--serif)", fontSize:56, color:"var(--gold)", marginBottom:16 }}>✓</div><h3 style={{ marginBottom:16 }}>Mensaje recibido</h3><p style={{ color:"var(--graphite)" }}>Gracias por contactar con ENMAR. Te respondemos en menos de 24 horas.</p></div>);
  const services = ["Obra nueva unifamiliar","Promoción residencial","Reforma integral","Gestión de proyecto","Otro / Consulta general"];
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display:"flex", flexDirection:"column", gap:32 }}>
      <div><label style={label}>Nombre completo *</label><input required value={s.name} onChange={u("name")} style={input} placeholder="Tu nombre" /></div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:32 }}>
        <div><label style={label}>Email *</label><input required type="email" value={s.email} onChange={u("email")} style={input} placeholder="tu@email.com" /></div>
        <div><label style={label}>Teléfono</label><input value={s.phone} onChange={u("phone")} style={input} placeholder="+34" /></div>
      </div>
      <div><label style={label}>Servicio de interés</label><select value={s.service} onChange={u("service")} style={{ ...input, cursor:"pointer" }}><option value="">Selecciona un servicio</option>{services.map(x => <option key={x} value={x}>{x}</option>)}</select></div>
      <div><label style={label}>Cuéntanos tu proyecto *</label><textarea required value={s.msg} onChange={u("msg")} rows="4" style={{ ...input, resize:"vertical" }} placeholder="Ubicación, metros aproximados, estilo, fechas..." /></div>
      <div style={{ fontSize:12, color:"var(--muted)", lineHeight:1.6 }}>Al enviar aceptas nuestra política de privacidad. Responderemos en menos de 24 horas laborables.</div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf:"flex-start" }}>Enviar mensaje <Arrow /></button>
    </form>
  );
};
const Head = () => (
  <section className="page-head">
    <div className="container">
      <div className="crumbs"><a href="index.html">Inicio</a><span className="sep">/</span>Contacto</div>
      <div className="eyebrow" style={{ color:"var(--gold)", marginBottom:24 }}><span className="gold-line"></span>Hablemos</div>
      <h1 style={{ maxWidth:"14ch" }}>Cuéntanos tu <em>proyecto</em>.</h1>
      <p>Visitamos terrenos en toda Cantabria sin compromiso. Respondemos a cada consulta en menos de 24 horas laborables.</p>
    </div>
  </section>
);
const Content = () => (
  <section className="section">
    <div className="container" style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:100 }}>
      <div>
        <div className="eyebrow" style={{ marginBottom:24 }}><span className="gold-line"></span>Formulario</div>
        <h2 style={{ marginBottom:48 }}>Solicita tu <em>presupuesto</em>.</h2>
        <Form />
      </div>
      <aside style={{ display:"flex", flexDirection:"column", gap:48 }}>
        <div style={{ background:"var(--ink)", color:"var(--bone)", padding:48 }}>
          <div style={{ fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--gold)", marginBottom:20 }}>Vía rápida</div>
          <h3 style={{ color:"var(--bone)", fontSize:32, marginBottom:20 }}>WhatsApp</h3>
          <p style={{ color:"rgba(245,239,217,0.7)", fontSize:14, lineHeight:1.6, marginBottom:28 }}>¿Prefieres una conversación rápida? Escríbenos por WhatsApp y te atendemos al momento.</p>
          <a href="https://wa.me/34685972744" className="btn btn-outline-gold" style={{ width:"100%", justifyContent:"center" }}>+34 685 97 27 44</a>
        </div>
        <div>
          <div style={{ fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--olive)", marginBottom:16 }}>Oficina</div>
          <div style={{ fontFamily:"var(--serif)", fontSize:22, color:"var(--ink)", marginBottom:4 }}>Calle San Juan</div>
          <div style={{ color:"var(--graphite)", fontSize:15, lineHeight:1.7 }}>Villanueva de la Peña<br/>39509 Mazcuerras<br/>Cantabria, España</div>
        </div>
        <div>
          <div style={{ fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--olive)", marginBottom:16 }}>Email</div>
          <a href="mailto:Grupoenmar@gmail.com" style={{ fontFamily:"var(--serif)", fontSize:22, color:"var(--ink)", borderBottom:"1px solid var(--gold)", paddingBottom:2 }}>Grupoenmar@gmail.com</a>
        </div>
        <div>
          <div style={{ fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--olive)", marginBottom:16 }}>Horario</div>
          <div style={{ color:"var(--graphite)", fontSize:15, lineHeight:1.7 }}>Lunes a viernes · 9:00 – 18:00<br/>Sábados · Previa cita</div>
        </div>
        <div>
          <div style={{ fontSize:11, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--olive)", marginBottom:16 }}>Datos fiscales</div>
          <div style={{ color:"var(--graphite)", fontSize:14, lineHeight:1.7 }}>ENMAR<br/>CIF B13817150</div>
        </div>
      </aside>
    </div>
  </section>
);
const MapBlock = () => (
  <section style={{ padding:"40px 0 120px" }}>
    <div className="container">
      <div style={{ position:"relative", aspectRatio:"21/9", background:"var(--cream)", overflow:"hidden" }}>
        <iframe title="Ubicación" src="https://www.openstreetmap.org/export/embed.html?bbox=-4.25%2C43.28%2C-4.17%2C43.33&layer=mapnik&marker=43.305,-4.21" style={{ width:"100%", height:"100%", border:"none", filter:"grayscale(0.3)" }} loading="lazy" />
        <div style={{ position:"absolute", bottom:24, left:24, background:"var(--ink)", color:"var(--bone)", padding:"20px 28px", maxWidth:340 }}>
          <div style={{ fontSize:10, letterSpacing:"0.24em", textTransform:"uppercase", color:"var(--gold)", marginBottom:8 }}>Visítanos</div>
          <div style={{ fontFamily:"var(--serif)", fontSize:22, marginBottom:4 }}>Villanueva de la Peña</div>
          <div style={{ fontSize:13, color:"rgba(245,239,217,0.7)" }}>Cantabria, España</div>
        </div>
      </div>
    </div>
  </section>
);
const Page = () => { useReveal(); return (<><Nav current="contact" variant="over-light" /><Head /><Content /><MapBlock /><Footer /></>); };
ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
