// ENMAR — shared components
const LogoMark = ({ style }) => (
  <svg style={style} viewBox="0 0 220 200" fill="none">
    <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M40 180 L40 30 L135 10 L135 180 Z" fill="rgba(201,169,97,0.12)" />
      <line x1="64" y1="180" x2="64" y2="25" />
      <line x1="88" y1="180" x2="88" y2="20" />
      <line x1="112" y1="180" x2="112" y2="15" />
      <path d="M135 55 L210 80 L210 180 L135 180 Z" />
      <line x1="135" y1="55" x2="210" y2="180" />
    </g>
  </svg>
);
const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 14 10" fill="none">
    <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
  </svg>
);
const IconYears = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 2h6M12 2v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l7 3v6c0 5-3.2 8.4-7 11-3.8-2.6-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M8.5 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconTeam = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14.5 14.2c2.5.3 4.5 2.4 4.5 5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconHomeCheck = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M3 11l9-7 9 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v9h14v-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 15l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const TrustBar = () => {
  const items = [
    { icon: <IconYears />, label: "+10 años", sub: "de experiencia" },
    { icon: <IconShield />, label: "Garantía decenal", sub: "en toda promoción" },
    { icon: <IconTeam />, label: "Equipo propio", sub: "en cada obra" },
    { icon: <IconHomeCheck />, label: "24+ proyectos", sub: "entregados" },
  ];
  return (
    <section style={{ padding: "44px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {items.map((it, i) => (
            <div key={i} className="reveal" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ color: "var(--gold)", flexShrink: 0 }}>{it.icon}</div>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 19, color: "var(--ink)", lineHeight: 1.2 }}>{it.label}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--muted)" }}>{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Nav = ({ current, variant = "over-dark" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const cls = `nav ${variant === "over-dark" ? "is-dark" : ""} ${scrolled ? (variant === "over-dark" ? "is-scrolled" : "is-light-scrolled") : ""}`;
  const links = [
    { href: "index.html", label: "Inicio", key: "home" },
    { href: "nosotros.html", label: "Nosotros", key: "about" },
    { href: "servicios.html", label: "Servicios", key: "services" },
    { href: "portfolio.html", label: "Proyectos", key: "portfolio" },
    { href: "promociones.html", label: "Promociones", key: "promos" },
    { href: "contacto.html", label: "Contacto", key: "contact" },
  ];
  return (
    <>
      <nav className={cls}>
        <a href="index.html" className="nav-logo">
          <LogoMark />
          <span className="mark-text">ENMAR</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.key} href={l.href} className={`only-desktop ${current === l.key ? "active" : ""}`}>{l.label}</a>
          ))}
          <a href="contacto.html" className="nav-cta only-desktop">Presupuesto</a>
          <button className="nav-burger only-mobile" onClick={() => setOpen(true)} aria-label="Abrir menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-drawer ${open ? "is-open" : ""}`}>
        <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Cerrar">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 6L22 22M22 6L6 22" stroke="currentColor" strokeWidth="1.5"/></svg>
        </button>
        <div className="drawer-inner">
          {links.map(l => (
            <a key={l.key} href={l.href} className={current === l.key ? "active" : ""}>{l.label}</a>
          ))}
          <a href="contacto.html" className="btn btn-primary" style={{ marginTop: 32, alignSelf: "flex-start" }}>Presupuesto</a>
          <div className="drawer-foot">
            <a href="https://wa.me/34685972744">WhatsApp · +34 685 97 27 44</a>
            <a href="mailto:Grupoenmar@gmail.com">Grupoenmar@gmail.com</a>
            <a href="https://www.instagram.com/grupoenmar" target="_blank" rel="noopener noreferrer">Instagram · @grupoenmar</a>
          </div>
        </div>
      </div>
    </>
  );
};
const BackToTop = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const f = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const scrollTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  };
  return (
    <button
      onClick={scrollTop}
      aria-label="Volver arriba"
      className="back-to-top"
      style={{ opacity: show ? 1 : 0, pointerEvents: show ? "auto" : "none" }}
    >
      <svg width="16" height="16" viewBox="0 0 14 10" fill="none" style={{ transform: "rotate(-90deg)" }}>
        <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
      </svg>
    </button>
  );
};
const Footer = () => (
  <>
  <BackToTop />
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-row">
            <LogoMark />
            <span className="wordmark">ENMAR</span>
          </div>
          <p>Construcción y promoción de viviendas de diseño en Cantabria. Construimos con cercanía, compromiso y eficacia.</p>
        </div>
        <div className="footer-col">
          <h5>Navegación</h5>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="portfolio.html">Proyectos</a></li>
            <li><a href="promociones.html">Promociones</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Servicios</h5>
          <ul>
            <li>Obra nueva unifamiliar</li>
            <li>Promociones residenciales</li>
            <li>Reformas integrales</li>
            <li>Gestión integral</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contacto</h5>
          <ul>
            <li>Calle San Juan</li>
            <li>Villanueva de la Peña</li>
            <li>39509 · Cantabria</li>
            <li style={{ marginTop: 8 }}><a href="mailto:Grupoenmar@gmail.com">Grupoenmar@gmail.com</a></li>
            <li><a href="https://wa.me/34685972744">+34 685 97 27 44</a></li>
            <li><a href="https://www.instagram.com/grupoenmar" target="_blank" rel="noopener noreferrer">Instagram · @grupoenmar</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 ENMAR · CIF B13817150</div>
        <div>
          <a href="aviso-legal.html">Aviso legal</a>
          <a href="privacidad.html">Privacidad</a>
          <a href="cookies.html">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
  </>
);
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};
