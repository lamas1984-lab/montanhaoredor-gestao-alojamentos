import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Check,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  KeyRound,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WashingMachine,
  X,
} from "lucide-react";
import { assets, links } from "./assets";
import { copy, flags, type Lang } from "./content";

const languages: Lang[] = ["pt", "en", "de", "nl"];

function getInitialLanguage(): Lang {
  const requested = new URLSearchParams(window.location.search).get("lang") as Lang | null;
  return requested && languages.includes(requested) ? requested : "pt";
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ label, title, intro, light = false }: { label: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 className={light ? "light" : ""}>{title}</h2>
      {intro && <p className={light ? "section-intro light-copy" : "section-intro"}>{intro}</p>}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16.04 3.2a12.7 12.7 0 0 0-10.9 19.23L3.3 29.15l6.87-1.8A12.73 12.73 0 1 0 16.04 3.2Zm0 2.14a10.58 10.58 0 1 1-5.39 19.68l-.39-.23-4.08 1.07 1.09-3.97-.25-.41a10.59 10.59 0 0 1 9.02-16.14Zm-5.22 4.78c-.25 0-.66.1-1 .48-.35.39-1.32 1.29-1.32 3.14s1.35 3.65 1.54 3.9c.19.26 2.65 4.05 6.43 5.68.9.39 1.6.62 2.15.79.9.28 1.72.24 2.37.15.72-.11 2.22-.91 2.53-1.78.31-.88.31-1.63.22-1.78-.09-.16-.34-.25-.72-.44-.38-.19-2.22-1.1-2.57-1.22-.34-.13-.59-.19-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.44.28-.81.09-.38-.19-1.59-.58-3.03-1.87a11.36 11.36 0 0 1-2.1-2.61c-.22-.38-.02-.58.17-.77.17-.17.38-.44.56-.66.19-.22.25-.38.38-.63.12-.25.06-.47-.03-.66-.1-.19-.85-2.05-1.16-2.8-.3-.74-.62-.64-.84-.65h-.72Z" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLanguage);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    const url = new URL(window.location.href);
    if (lang === "pt") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const contactLinks = useMemo(() => {
    const whatsappMessages: Record<Lang, string> = {
      pt: "Olá, gostaria de falar sobre os serviços de gestão de alojamento local MontanhAoRedor.",
      en: "Hello, I would like to discuss MontanhAoRedor local accommodation management services.",
      de: "Hallo, ich möchte über die Betreuung meiner Ferienunterkunft durch MontanhAoRedor sprechen.",
      nl: "Hallo, ik wil graag praten over de beheerdiensten voor vakantieverblijven van MontanhAoRedor.",
    };
    const emailSubjects: Record<Lang, string> = {
      pt: "Pedido de informação — Gestão de alojamento local",
      en: "Enquiry — Local accommodation management",
      de: "Anfrage — Betreuung von Ferienunterkünften",
      nl: "Aanvraag — Beheer van vakantieverblijven",
    };
    return {
      whatsapp: `https://wa.me/${links.whatsappNumber}?text=${encodeURIComponent(whatsappMessages[lang])}`,
      email: `mailto:${links.email}?subject=${encodeURIComponent(emailSubjects[lang])}`,
    };
  }, [lang]);

  const navItems = [
    { id: "servicos", label: t.nav.services },
    { id: "area", label: t.nav.area },
    { id: "operacao", label: t.nav.operation },
    { id: "valorizacao", label: t.nav.value },
    { id: "formas", label: t.nav.plans },
  ];

  const navigate = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToSection(id), 60);
  };

  const serviceIcons = [KeyRound, WashingMachine, PackageCheck, MessageCircle, Palette, TrendingUp];

  return (
    <div className="site-shell">
      <div className="status-bar"><span className="status-dot" />{t.status}</div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <button className="brand-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="MontanhAoRedor — início">
          <img src={assets.logo} alt="MontanhAoRedor" />
          <span className="brand-descriptor">Gestão <i>de</i> Alojamentos</span>
        </button>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>)}
          <button onClick={() => scrollToSection("contacto")} className="nav-contact">{t.nav.contact}</button>
        </nav>

        <div className="header-actions">
          <div className="ecosystem-links">
            <a href={links.casaDoLagar} target="_blank" rel="noreferrer">{t.links.casa}<ExternalLink size={12} /></a>
            <a href={links.transfers} target="_blank" rel="noreferrer">{t.links.transfers}<ExternalLink size={12} /></a>
          </div>
          <div className="language-switcher" aria-label="Idioma">
            {languages.map((language) => (
              <button key={language} className={lang === language ? "active" : ""} onClick={() => setLang(language)} aria-label={`Idioma ${flags[language]}`}>
                {flags[language]}
              </button>
            ))}
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label={t.menu}><Menu size={22} /></button>
        </div>
      </header>

      <div className={`mobile-panel ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button className="close-button" onClick={() => setMenuOpen(false)} aria-label={t.close}><X size={24} /></button>
        <img src={assets.logo} alt="MontanhAoRedor" className="mobile-logo" />
        <div className="mobile-links">
          {navItems.map((item, index) => (
            <button key={item.id} onClick={() => navigate(item.id)}><small>0{index + 1}</small>{item.label}<ChevronRight size={20} /></button>
          ))}
          <button onClick={() => navigate("contacto")}><small>0{navItems.length + 1}</small>{t.nav.contact}<ChevronRight size={20} /></button>
          <a href={links.casaDoLagar} target="_blank" rel="noreferrer"><small>↗</small>{t.links.casa}<ExternalLink size={18} /></a>
          <a href={links.transfers} target="_blank" rel="noreferrer"><small>↗</small>{t.links.transfers}<ExternalLink size={18} /></a>
        </div>
      </div>

      <main>
        <section className="hero" aria-label={t.hero.eyebrow}>
          <img className="hero-image" src={assets.hero} alt={t.hero.photoAlt} />
          <div className="hero-shade" />
          <div className="hero-grid" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}<br /><em>{t.hero.italic}</em></h1>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollToSection("servicos")}>{t.hero.primary}<ArrowRight size={17} /></button>
              <a className="button button-ghost" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">{t.hero.secondary}</a>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollToSection("introducao")} aria-label={t.hero.primary}>
            <span>Scroll</span><ArrowDown size={18} />
          </button>
        </section>

        <section className="proof-strip" aria-label="Características do serviço">
          {t.proof.map((item) => (
            <div className="proof-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
          ))}
        </section>

        <section id="introducao" className="intro-section content-section">
          <div className="intro-aside"><span className="vertical-word">MontanhAoRedor</span></div>
          <div className="intro-main reveal">
            <p className="eyebrow">{t.intro.label}</p>
            <h2>{t.intro.title}</h2>
            <p>{t.intro.text}</p>
          </div>
          <blockquote>{t.intro.quote}</blockquote>
        </section>

        <section id="area" className="coverage-section content-section">
          <div className="coverage-copy">
            <p className="eyebrow">{t.coverage.label}</p>
            <h2>{t.coverage.title}</h2>
            <p>{t.coverage.text}</p>
          </div>
          <div className="coverage-card">
            <div className="coverage-region"><MapPin size={18} /><span>{t.coverage.region}</span></div>
            <div className="coverage-places">
              {t.coverage.places.map((place, index) => (
                <div className="coverage-place" key={place}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{place}</strong>
                </div>
              ))}
            </div>
            <div className="coverage-exception">
              <MapPin size={21} strokeWidth={1.4} />
              <div><h3>{t.coverage.exceptionTitle}</h3><p>{t.coverage.exceptionText}</p></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="services-section content-section">
          <SectionHeading label={t.services.label} title={t.services.title} intro={t.services.intro} />
          <div className="service-grid">
            {t.services.items.map((item, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-card" key={item.title}>
                  <div className="service-number">0{index + 1}</div>
                  <Icon size={29} strokeWidth={1.35} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.note}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section id="operacao" className="operation-section">
          <div className="operation-image-wrap">
            <img src={assets.checkin} alt={t.operation.imageAlt} loading="lazy" />
            <div className="image-badge"><KeyRound size={17} /><span>{t.services.items[0].title}</span></div>
          </div>
          <div className="operation-content">
            <SectionHeading label={t.operation.label} title={t.operation.title} />
            <p className="operation-lead">{t.operation.text}</p>
            <div className="steps">
              {t.operation.steps.map((step) => (
                <div className="step" key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="preparation-section">
          <div className="preparation-copy">
            <SectionHeading label={t.preparation.label} title={t.preparation.title} light />
            <p>{t.preparation.text}</p>
            <div className="check-points">
              {t.preparation.points.map((point) => <span key={point}><Check size={15} />{point}</span>)}
            </div>
          </div>
          <div className="preparation-image"><img src={assets.preparation} alt={t.preparation.imageAlt} loading="lazy" /></div>
        </section>

        <section id="valorizacao" className="value-section">
          <div className="value-visual">
            <img src={assets.value} alt={t.value.imageAlt} loading="lazy" />
            <div className="value-marker"><Sparkles size={18} /><span>{t.value.label}</span></div>
          </div>
          <div className="value-content">
            <SectionHeading label={t.value.label} title={t.value.title} intro={t.value.text} />
            <div className="value-list">
              {t.value.points.map((point, index) => (
                <div key={point}><span>{String(index + 1).padStart(2, "0")}</span><p>{point}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="formas" className="plans-section content-section">
          <SectionHeading label={t.plans.label} title={t.plans.title} intro={t.plans.intro} />
          <div className="plan-grid">
            {t.plans.cards.map((card, index) => (
              <article className="plan-card" key={card.title}>
                <span className="plan-type">0{index + 1} · {card.type}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul>{card.includes.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
                <strong>{card.price}</strong>
              </article>
            ))}
          </div>
          <div className="proposal-note">
            <ClipboardCheck size={27} strokeWidth={1.35} />
            <div><h3>{t.plans.noteTitle}</h3><p>{t.plans.noteText}</p></div>
            <button onClick={() => scrollToSection("contacto")}>{t.nav.contact}<ArrowRight size={15} /></button>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-pattern" aria-hidden="true"><ShieldCheck size={260} strokeWidth={0.5} /></div>
          <div className="contact-card">
            <p className="eyebrow">{t.contact.label}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <div className="contact-actions">
              <a className="button button-primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} />{t.contact.whatsapp}</a>
              <a className="button button-outline" href={contactLinks.email}><Mail size={17} />{t.contact.email}</a>
            </div>
            <small>{t.contact.note}</small>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src={assets.logo} alt="MontanhAoRedor" /><div><strong>MontanhAoRedor</strong><span>{t.footer.descriptor}</span></div></div>
        <p>© {new Date().getFullYear()} MontanhAoRedor · Portugal</p>
        <p className="footer-note">{t.footer.note}</p>
      </footer>

      <a className="whatsapp-float" href={contactLinks.whatsapp} target="_blank" rel="noreferrer" aria-label={t.contact.whatsapp}><WhatsAppIcon /></a>
    </div>
  );
}
