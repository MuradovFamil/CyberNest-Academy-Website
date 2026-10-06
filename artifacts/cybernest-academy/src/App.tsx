import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  FileCheck2,
  Fingerprint,
  GraduationCap,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react';
import { SiInstagram, SiTiktok, SiWhatsapp } from 'react-icons/si';
import { academyContent as content } from './content';

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="CyberNest Academy — ana səhifə">
      <img className="brand-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
      <span className="brand-name">Cyber<span>Nest</span> <span style={{ color: '#92a0a8', fontWeight: 500 }}>Academy</span></span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar" id="top">
      <div className="container nav-wrap">
        <Brand />
        <nav className="nav-links" data-open={open} aria-label="Əsas naviqasiya">
          {content.navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a className="btn btn-primary nav-cta" href="#qeydiyyat">Müraciət et <ArrowRight size={14} /></a>
        <button className="mobile-menu" type="button" aria-expanded={open} aria-label={open ? 'Menyunu bağla' : 'Menyunu aç'} onClick={() => setOpen(!open)}>
          {open ? <X size={17} /> : <Menu size={17} />} <span>Menyu</span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <svg className="hero-grid" viewBox="0 0 760 550" fill="none" aria-hidden="true">
        <path d="M380 67 570 177v220L380 507 190 397V177L380 67Z" stroke="#76e4ae" strokeOpacity=".4" />
        <path d="m380 123 141 81v163l-141 81-141-81V204l141-81Z" stroke="#76e4ae" strokeOpacity=".22" />
        <path d="m380 176 95 55v109l-95 55-95-55V231l95-55Z" stroke="#76e4ae" strokeOpacity=".4" />
        <path d="M380 67v440M190 177l380 220M570 177 190 397M380 67 190 177m190-110 190 110M190 397l190 110m0 0 190-110" stroke="#8eb5a2" strokeOpacity=".14" />
        <circle cx="380" cy="286" r="16" fill="#76e4ae" fillOpacity=".12" stroke="#76e4ae" strokeOpacity=".6" />
        <circle cx="380" cy="286" r="4" fill="#9df0c5" />
        <circle cx="570" cy="177" r="4" fill="#76e4ae" /><circle cx="190" cy="397" r="4" fill="#76e4ae" />
      </svg>
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="availability"><i className="status-dot" /> {content.hero.eyebrow}</div>
          <h1 id="hero-title">{content.hero.titleLine1}<br /><span className="outlined">{content.hero.titleLine2}</span><br /><span className="green-text">{content.hero.titleLine3}</span></h1>
          <p className="hero-desc">{content.hero.description}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#qeydiyyat">Kursa qeydiyyatdan keç <ArrowRight className="arrow" size={16} /></a>
            <a className="btn btn-outline" href="#tedris-plani">Proqramı ətraflı gör <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-note">
            {content.hero.meta.map((item) => <span key={item}><i />{item}</span>)}
          </div>
        </div>
        <div className="terminal-wrap" aria-label="Tədris mühitinin vizual təsviri">
          <div className="terminal-top">
            <span className="terminal-lights" aria-hidden="true"><i /><i /><i /></span>
            <span>CYBERNEST / LAB-01</span>
            <span>SAFE ENVIRONMENT</span>
          </div>
          <div className="terminal-content" aria-hidden="true">
            <div><span className="prompt">learner@cybernest</span>:<span className="cmd">~$</span> ./start-learning.sh</div>
            <div className="comment"># controlled training environment</div>
            <br />
            <div><span className="prompt">[01]</span> Loading fundamentals...</div>
            <div className="result">network_basics <span className="green-text">[ready]</span></div>
            <div className="result">linux_environment <span className="green-text">[ready]</span></div>
            <div className="result">ethical_scope <span className="green-text">[enforced]</span></div>
            <br />
            <div><span className="prompt">[02]</span> Practice mode: <span className="cmd">authorized_lab</span></div>
            <div className="comment"># learn. test. document. repeat.</div>
            <div><span className="prompt">learner@cybernest</span>:<span className="cmd">~$</span> <span className="cursor" /></div>
          </div>
          <div className="terminal-stats">
            <div className="terminal-stat"><b>06 ay</b><small>PROQRAM MÜDDƏTİ</small></div>
            <div className="terminal-stat"><b>Etik çərçivə</b><small>HƏR TAPŞIRIQDA</small></div>
          </div>
        </div>
      </div>
      <span className="hero-index">01 / CYBERNEST ACADEMY</span>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-inner">
        <div className="trust-label">Öyrənməyə<br />düzgün başlanğıc</div>
        <div className="trust-item"><ShieldCheck size={17} /> Etik tədris çərçivəsi</div>
        <div className="trust-item"><Network size={17} /> Addım-addım proqram</div>
        <div className="trust-item"><Terminal size={17} /> Laboratoriya praktikası</div>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <section className="section intro-section" id="haqqimizda">
      <div className="container intro-grid">
        <div className="intro-display">
          <div className="eyebrow">{content.introduction.eyebrow}</div>
          <h2>{content.introduction.title}</h2>
        </div>
        <div className="intro-body">
          {content.introduction.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <blockquote className="intro-quote">{content.introduction.quote}<span>CyberNest Academy · Tədris prinsipi</span></blockquote>
        </div>
      </div>
    </section>
  );
}

function Course() {
  const icons = [<Network size={18} key="network" />, <ShieldCheck size={18} key="shield" />];
  return (
    <section className="section course-section" id="proqram">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">{content.course.eyebrow}</div><h2>Bir proqram.<br /><span className="green-text">Altı ay. Real bacarıqlar.</span></h2></div>
          <p>Kibertəhlükəsizliyə praktik və etik baxışla yanaşanlar üçün sistemli öyrənmə xətti.</p>
        </div>
        <div className="course-grid">
          <article className="course-main">
            <div className="eyebrow">01 / RED TEAM</div>
            <h3>{content.course.title}</h3>
            <p>{content.course.description}</p>
            <div className="course-pills">{content.course.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
          </article>
          <div className="course-aside">
            {content.course.features.map((feature, index) => (
              <article className="info-tile" key={feature.title}>
                <div className="tile-icon">{icons[index]}</div>
                <div><h4>{feature.title}</h4><p>{feature.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section className="section curriculum-section" id="tedris-plani">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Tədris planı</div><h2>Əsaslardan başlayıb,<br /><span className="green-text">tətbiqə doğru.</span></h2></div>
          <p>Altı aylıq yol xəritəsi. Mövzuların dəqiq həcmi və ardıcıllığı akademiyanın təsdiqlənmiş tədris planına uyğun yenilənə bilər.</p>
        </div>
        <div className="curriculum-topline"><span>RED TEAM · TƏDRİS XƏRİTƏSİ</span><strong>6 MƏRHƏLƏ / 6 AY</strong></div>
        <div className="curriculum-list">
          {content.curriculum.map((item, index) => (
            <article className="curriculum-row" key={item.month}>
              <div className="month">{item.month}</div>
              <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              <span className="row-index">0{index + 1}</span>
            </article>
          ))}
        </div>
        <div className="curriculum-foot"><span>Tədris mövzularının konkret həcmi, dərs qrafiki və proqram tələbləri qeydiyyatdan əvvəl akademiya ilə dəqiqləşdirilməlidir.</span><a href="#qeydiyyat">Proqram barədə soruş <ArrowRight size={13} /></a></div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section className="section practice-section" id="praktika">
      <div className="container practice-layout">
        <div className="practice-copy">
          <div className="eyebrow">{content.practice.eyebrow}</div>
          <h2>{content.practice.title}</h2>
          <p>{content.practice.description}</p>
          <ul className="benefit-list">{content.practice.benefits.map((benefit) => <li key={benefit}><span className="check-mark"><Check size={14} /></span>{benefit}</li>)}</ul>
        </div>
        <div className="lab-card" aria-label="İzolyasiya edilmiş laboratoriya şəbəkəsinin sxematik təsviri">
          <div className="lab-head"><span>LAB NETWORK / ISOLATED</span><span>STATUS: READY</span></div>
          <div className="lab-visual" aria-hidden="true">
            <div className="orbit" /><div className="orbit two" /><div className="orbit three" />
            <i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" />
            <div className="lab-core"><Fingerprint size={30} strokeWidth={1.4} /></div>
          </div>
          <div className="lab-foot"><span>AUTHORIZED TRAINING ONLY</span><span>●&nbsp; {content.practice.disclaimer}</span></div>
        </div>
      </div>
    </section>
  );
}

function Format() {
  return (
    <section className="section format-section" id="format">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Təlim formatı</div><h2>Necə öyrənəcəyiniz<br /><span className="green-text">aydın olsun.</span></h2></div>
          <p>Gözləntiləri əvvəlcədən bilmək öyrənənlərə və ailələrinə daha rahat qərar verməyə kömək edir.</p>
        </div>
        <div className="format-band">
          {content.format.map((item, index) => (
            <article className="format-item" key={item.title}>
              <div className="format-num">0{index + 1} / FORMAT</div><h3>{item.title}</h3><p>{item.text}</p><div className="format-note"><Check size={13} /> {item.detail}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificate() {
  return (
    <section className="section certificate-section" id="sertifikat">
      <div className="container cert-layout">
        <div className="certificate-art" aria-label="Nümunəvi, rəsmi sertifikat olmayan vizual">
          <div className="cert-sheet">
            <div className="cert-corner" />
            <div className="cert-seal"><FileCheck2 size={18} /></div>
            <small>CYBERNEST ACADEMY</small>
            <h3>Proqramı tamamladı</h3>
            <p>NÜMUNƏ VİZUAL · SERTİFİKAT VƏDİ DEYİL</p>
          </div>
        </div>
        <div className="cert-copy">
          <div className="eyebrow">{content.certificate.eyebrow}</div>
          <h2>{content.certificate.title}</h2>
          <p>{content.certificate.description}</p>
          <div className="cert-disclaimer"><CircleHelp size={16} />{content.certificate.disclaimer}</div>
        </div>
      </div>
    </section>
  );
}

function Instructor() {
  return (
    <section className="section instructor-section" id="telimci">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">{content.instructor.eyebrow}</div><h2>Tədrisin arxasında<br /><span className="green-text">insan dayanır.</span></h2></div>
          <p>Keyfiyyətli tədris üçün təlimçinin kim olduğunu və təcrübəsini bilmək vacibdir.</p>
        </div>
        <article className="instructor-card">
          <div className="instructor-portrait">
            <div><div className="portrait-placeholder"><GraduationCap size={34} strokeWidth={1.25} /></div><p>RƏSMİ MƏLUMAT<br />TƏSDİQLƏNİR</p></div>
          </div>
          <div className="instructor-copy">
            <div className="eyebrow">TƏLİMÇİ MƏLUMATI</div>
            <h2>{content.instructor.title}</h2>
            <p>{content.instructor.description}</p>
            <div className="editable-note">{content.instructor.note}</div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing-section" id="odenis">
      <div className="container pricing-layout">
        <div className="pricing-copy">
          <div className="eyebrow">{content.pricing.eyebrow}</div>
          <h2>{content.pricing.title}</h2>
          <p>{content.pricing.description}</p>
        </div>
        <div className="pricing-card">
          <div className="price-label">{content.pricing.priceLabel}</div>
          <div className="price-value">{content.pricing.price ? content.pricing.price : <span className="price-placeholder">Məlumat sorğu ilə</span>}</div>
          <div className="price-caption">{content.pricing.formNote}</div>
          <div className="price-separator" />
          <ul className="price-checks">{content.pricing.includes.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
          <a className="btn btn-primary" href="#qeydiyyat">Məlumat üçün müraciət et <ArrowRight size={15} /></a>
          <p className="registration-hint">Sorğu göndərmək ödəniş və ya qeydiyyat öhdəliyi yaratmır.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="section faq-section" id="suallar">
      <div className="container faq-layout">
        <div className="faq-aside">
          <div className="eyebrow">FAQ / Suallar</div>
          <h2>Qərar verməzdən əvvəl.</h2>
          <p>Vacib məqamları açıq danışırıq. Cavabını tapa bilmədiyiniz sual üçün bizə müraciət edin.</p>
          <a className="btn btn-outline" href="#qeydiyyat">Sualını göndər <ArrowRight size={15} /></a>
        </div>
        <div className="faq-list">
          {content.faqs.map((faq, index) => {
            const isOpen = active === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div className="faq-item" key={faq.question} data-open={isOpen}>
                <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setActive(isOpen ? null : index)}>
                  <span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? <X size={14} /> : <ChevronDown size={15} />}</span>
                </button>
                {isOpen && <div className="faq-answer" id={answerId}><p>{faq.answer}</p></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactMethods({ compact = false }: { compact?: boolean }) {
  const methods = [
    {
      id: 'phone',
      label: 'Telefon',
      value: '+994 55 469 50 52',
      href: 'tel:+994554695052',
      icon: <Phone size={17} strokeWidth={1.8} />,
      external: false,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+994 55 469 50 52',
      href: 'https://wa.me/994554695052',
      icon: <SiWhatsapp size={17} />,
      external: true,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: '@cybernestacademy_',
      href: 'https://www.instagram.com/cybernestacademy_/',
      icon: <SiInstagram size={17} />,
      external: true,
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      value: '@cybernestacademy',
      href: 'https://www.tiktok.com/@cybernestacademy',
      icon: <SiTiktok size={17} />,
      external: true,
    },
  ];

  return (
    <nav
      className={`contact-methods ${compact ? 'contact-methods--footer' : 'contact-methods--cards'}`}
      aria-label={compact ? 'Footer əlaqə kanalları' : 'Əlaqə kanalları'}
    >
      {methods.map((method) => (
        <a
          key={method.id}
          className={`contact-method${compact ? ' contact-method--compact' : ' contact-method--card'}`}
          href={method.href}
          target={method.external ? '_blank' : undefined}
          rel={method.external ? 'noopener noreferrer' : undefined}
          aria-label={`${method.label}: ${method.value}`}
          data-testid={`link-${compact ? 'footer' : 'contact'}-${method.id}`}
        >
          <span className="contact-method__icon" aria-hidden="true">{method.icon}</span>
          <span className="contact-method__copy">
            <span className="contact-method__label">{method.label}</span>
            <span className="contact-method__value">{method.value}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="qeydiyyat">
      <div className="container">
        <div className="contact-panel">
          <div>
            <div className="eyebrow">Növbəti addım</div>
            <h2>Kibertəhlükəsizliyə başlamağa hazırsan?</h2>
            <p>
              6 aylıq Red Team proqramı, praktiki laboratoriyalar və sistemli
              tədris ilə kibertəhlükəsizlik sahəsində biliklərini inkişaf etdir.
            </p>

            <div className="contact-meta">
              <span><ShieldCheck size={13} /> MƏSULİYYƏTLİ TƏDRİS</span>
              <span><Code2 size={13} /> RED TEAM / 6 AY</span>
            </div>

            <div className="contact-direct">
              <h3>Birbaşa əlaqə</h3>
              <p>Kursa müraciət üçün sizə uyğun kanalı seçin.</p>
              <ContactMethods />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand"><Brand /><p className="footer-copy">Kibertəhlükəsizlik öyrənməyə məsuliyyətli başlanğıc.</p></div>
        <nav className="footer-links" aria-label="Alt naviqasiya">
          <a href="#proqram">Red Team kursu</a><a href="#tedris-plani">Tədris planı</a><a href="#suallar">Suallar</a><a href="#qeydiyyat">Qeydiyyat</a>
        </nav>
        <div className="footer-contact-group">
          <h2 className="footer-contact-heading">Əlaqə</h2>
          <ContactMethods compact />
        </div>
      </div>
      <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} {content.brand.name} Academy</span><span>YALNIZ İCAZƏLİ TƏDRİS MÜHİTLƏRİ ÜÇÜN</span></div></div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    document.title = content.seo.title;
    const ensureMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.content = value;
    };
    ensureMeta('name', 'description', content.seo.description);
    ensureMeta('property', 'og:title', content.seo.title);
    ensureMeta('property', 'og:description', content.seo.description);
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', content.seo.title);
    ensureMeta('name', 'twitter:description', content.seo.description);
  }, []);

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Əsas məzmuna keç</a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Introduction />
        <Course />
        <Curriculum />
        <Practice />
        <Format />
        <Certificate />
        <Instructor />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
