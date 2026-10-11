import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers,
  MapPin,
  MessageCircle,
  Menu,
  Minus,
  Package,
  Plus,
  Scissors,
  Shirt,
  Sparkles,
  Timer,
  Users,
  WandSparkles,
  X,
} from "lucide-react";

/* ============================================================
   PREDITA — B2B Apparel Printing, Jogeshwari West, Mumbai
   Warm editorial design system carried over; content below is
   the client's real copy (see content-fot-predita.txt).
   ============================================================ */

const Tokens = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');

    :root {
      --bg: #F7F3EC;
      --paper: #FBF9F5;
      --beige: #EDE4D6;
      --beige-deep: #DED2C1;
      --ink: #242321;
      --ink-soft: #514D47;
      --muted: #645C51;
      --line: #DED6CA;
      --line-dark: #C9BFAF;
      --accent: #C86B4A;
      --accent-text: #9C4A2C;
      --accent-soft: #F2DCD2;
      --white: #FFFFFF;
      --shadow: 0 22px 55px rgba(55, 45, 32, 0.10);
      --shadow-sm: 0 10px 24px rgba(55, 45, 32, 0.10);
    }

    html { scroll-behavior: smooth; }
    body { margin: 0; background: var(--bg); color: var(--ink); }
    * { box-sizing: border-box; }
    ::selection { background: var(--ink); color: var(--bg); }

    .font-display { font-family: 'Manrope', sans-serif; }
    .font-body { font-family: 'DM Sans', sans-serif; }

    .grain {
      background-image: radial-gradient(rgba(36,35,33,.055) .65px, transparent .65px);
      background-size: 7px 7px;
    }

    .soft-shadow { box-shadow: var(--shadow); }

    .card-lift {
      transition: transform .3s cubic-bezier(.22,.9,.32,1), box-shadow .3s ease, border-color .3s ease;
    }
    .card-lift:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-sm);
      border-color: var(--line-dark);
    }

    .btn-primary {
      position: relative;
      background: var(--ink);
      color: var(--white);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
      transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
    }
    .btn-primary:hover {
      background: #11110F;
      transform: translateY(-1px);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 12px 28px rgba(36,35,33,.2);
    }
    .btn-primary:active { transform: translateY(0px) scale(.98); }

    .btn-secondary {
      background: transparent;
      color: var(--ink);
      border: 1px solid var(--line-dark);
      transition: background .2s ease, border-color .2s ease, transform .2s ease;
    }
    .btn-secondary:hover {
      background: var(--paper);
      border-color: var(--ink);
      transform: translateY(-1px);
    }
    .btn-secondary:active { transform: translateY(0px) scale(.98); }

    .btn-on-dark {
      background: transparent;
      color: var(--white);
      border: 1px solid rgba(255,255,255,.28);
      transition: background .2s ease, border-color .2s ease, transform .2s ease;
    }
    .btn-on-dark:hover {
      background: rgba(255,255,255,.08);
      border-color: rgba(255,255,255,.5);
      transform: translateY(-1px);
    }

    a, button, input { outline-offset: 4px; }
    a:focus-visible, button:focus-visible, input:focus-visible {
      outline: 2px solid var(--accent-text);
      border-radius: 8px;
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after { animation: none !important; transition: none !important; }
    }
  `}</style>
);

const Logo = () => (
  <a href="#top" className="flex items-center gap-2.5">
    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[var(--ink)]">
      <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
      <span className="absolute h-5 w-px bg-[var(--ink)]/70" />
      <span className="absolute h-px w-5 bg-[var(--ink)]/70" />
    </span>
    <span className="font-display text-[17px] font-bold tracking-[-0.04em]">Predita</span>
  </a>
);

const Eyebrow = ({ children }) => (
  <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-text)]">
    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
    {children}
  </div>
);

/* Registration mark — the alignment cross used in print production.
   A small, on-theme signature detail rather than a generic decoration. */
const RegMark = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.3" />
    <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.3" />
    <line x1="1" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

/* Arrow link with a consistent nudge-on-hover micro-interaction */
const ArrowLink = ({ href, children, className = "", Icon = ArrowRight }) => (
  <a href={href} className={`group/link inline-flex items-center gap-1.5 ${className}`}>
    {children}
    <Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
  </a>
);

/* ============================================================
   NAVBAR
   ============================================================ */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Terms", href: "#terms" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/92 backdrop-blur-xl font-body">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex h-[74px] items-center justify-between gap-8">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold">
              Discuss Your Requirement
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            className="lg:hidden rounded-full border border-[var(--line)] p-2.5"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[var(--paper)] px-5 py-5">
          <nav className="mx-auto max-w-[1440px] space-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm text-[var(--ink-soft)] hover:bg-[var(--beige)]"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold">
              Discuss Your Requirement <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ============================================================
   HERO
   ============================================================ */
const Hero = () => (
  <section id="top" className="relative overflow-hidden border-b border-[var(--line)] font-body">
    <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--accent-soft)]/60 blur-3xl" />
    <div className="absolute -left-48 bottom-[-240px] h-[520px] w-[520px] rounded-full bg-[var(--beige)] blur-3xl" />
    <div className="grain pointer-events-none absolute inset-0 opacity-25" />

    <div className="relative mx-auto max-w-[1440px] px-5 py-14 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="max-w-[650px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line-dark)] bg-[var(--paper)] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            B2B Apparel Printing
            <span className="text-[var(--line-dark)]">·</span>
            <MapPin className="h-3 w-3 text-[var(--muted)]" />
            Jogeshwari West, Mumbai
          </div>

          <h1 className="font-display text-[clamp(2.75rem,5.6vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[var(--ink)]">
            Printing Built Around
            <span className="block text-[var(--accent)]">the Garment.</span>
          </h1>

          <p className="mt-7 max-w-[540px] text-base leading-7 text-[var(--ink-soft)] md:text-lg md:leading-8">
            We help clothing brands and garment businesses turn their designs
            into production-ready prints — choosing the right printing
            approach for the garment, the artwork and the result you want to
            achieve.
          </p>

          <p className="mt-4 max-w-[540px] text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
            Plastisol · Water-Based · Discharge · Puff · High-Density · Cut Panel
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
              Discuss Your Requirement
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
              View Our Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--line)] pt-6 text-xs font-medium text-[var(--muted)]">
            <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[var(--accent-text)]" /> Sampling before bulk production</span>
            <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[var(--accent-text)]" /> 14+ years of hands-on experience</span>
          </div>

          <div className="mt-8 flex items-center gap-8 border-t border-[var(--line)] pt-6">
            {[
              { v: "14+", l: "Years of printing experience" },
              { v: "~50", l: "MOQ, in pieces" },
              { v: "1,000+", l: "Bulk order capacity" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl text-[var(--ink)]">{s.v}</div>
                <div className="mt-1 max-w-[110px] text-[11px] leading-snug text-[var(--muted)]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <HeroPreview />
      </div>
    </div>
  </section>
);

const HeroPreview = () => (
  <div className="relative mx-auto w-full max-w-[650px]">
    <div className="absolute -right-3 -top-3 z-10 hidden rounded-full bg-[var(--ink)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-white shadow-lg sm:block">
      Sample preview
    </div>

    <div className="relative rounded-[30px] border border-[var(--line-dark)] bg-[var(--paper)] p-3 shadow-[0_30px_80px_rgba(55,45,32,.13)] md:p-4">
      <RegMark className="absolute -left-2 -top-2 text-[var(--accent-text)]/70" />
      <RegMark className="absolute -right-2 -top-2 text-[var(--accent-text)]/70" />
      <RegMark className="absolute -bottom-2 -left-2 text-[var(--accent-text)]/70" />
      <RegMark className="absolute -bottom-2 -right-2 text-[var(--accent-text)]/70" />
      <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--beige)]">
        <div className="flex h-12 items-center justify-between border-b border-[var(--line)] bg-[var(--paper)] px-4">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--ink-soft)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Print method preview
          </div>
          <div className="text-[10px] text-[var(--muted)]">Screen printing · Sample</div>
        </div>

        <div className="grid min-h-[430px] grid-cols-[54px_1fr] md:grid-cols-[64px_1fr_168px]">
          <div className="border-r border-[var(--line)] bg-[var(--paper)] p-2">
            {[Shirt, Layers, Sparkles, WandSparkles].map((Icon, index) => (
              <div key={index} className={`mb-2 flex aspect-square items-center justify-center rounded-xl ${index === 0 ? "bg-[var(--ink)] text-white" : "text-[var(--muted)] hover:bg-[var(--beige)]"}`}>
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center overflow-hidden p-8 md:p-12">
            <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">Garment</div>
            <div className="relative flex h-[330px] w-[270px] items-center justify-center">
              <svg viewBox="0 0 300 360" className="h-full w-full drop-shadow-[0_22px_22px_rgba(55,45,32,.15)]" aria-label="Garment print preview">
                <path d="M83 38 24 72 48 134 78 118v176c0 10 8 18 18 18h108c10 0 18-8 18-18V118l30 16 24-62-59-34-37 28h-54L83 38Z" fill="#F6F0E8" stroke="#242321" strokeWidth="3" />
                <path d="M117 64c7 13 18 20 33 20s26-7 33-20" fill="none" stroke="#C9BFAF" strokeWidth="3" />
                <path d="M94 144h112v94H94z" fill="#EDE4D6" opacity=".8" />
                <circle cx="150" cy="181" r="27" fill="#C86B4A" />
                <path d="M132 190c10-18 22-29 38-35-1 17-7 29-19 39-7 5-13 4-19-4Z" fill="#F7F3EC" />
                <text x="150" y="218" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="800" fill="#242321" letterSpacing="1">PRINT SAMPLE</text>
              </svg>
            </div>
          </div>

          <div className="hidden border-l border-[var(--line)] bg-[var(--paper)] p-4 md:block">
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Print spec</div>
            <div className="mt-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3">
              <div className="mb-2 text-[11px] font-semibold">Front placement</div>
              <div className="h-2 w-20 rounded-full bg-[var(--beige-deep)]" />
              <div className="mt-1.5 h-2 w-14 rounded-full bg-[var(--beige-deep)]" />
            </div>
            <div className="mt-4 space-y-3">
              {[["Method", "Screen printing"], ["Coverage", "Chest, center"], ["Finish", "Matte ink"]].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-[var(--line)] pb-2 text-[10px]">
                  <span className="text-[var(--muted)]">{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-primary mt-5 flex w-full items-center justify-center rounded-xl py-2.5 text-[10px] font-semibold">
              Request this method
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-3 shadow-xl sm:block md:-left-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <div className="font-display text-xs font-bold">Sample-approved</div>
          <div className="mt-0.5 text-[10px] text-[var(--muted)]">Verified before your bulk run</div>
        </div>
      </div>
    </div>
  </div>
);

/* ============================================================
   APPROACH — "More Than Printing" + "Built on Practical Experience"
   ============================================================ */
const experience = [
  { tag: "14+", title: "Years of Experience", desc: "14+ years of hands-on apparel printing experience." },
  { tag: null, title: "Multiple Printing Methods", desc: "Plastisol, water-based, discharge, puff and high-density printing, along with cut-panel and finished-garment printing." },
  { tag: null, title: "Production-Focused Advice", desc: "We help you choose an approach based on the garment, design and intended result — not simply the method you initially request." },
  { tag: null, title: "Sampling Before Bulk", desc: "Paid sampling allows you to review the actual print before approving the production order." },
];

const Approach = () => (
  <section id="approach" className="scroll-mt-20 border-b border-[var(--line)] font-body">
    <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="max-w-md font-display text-3xl font-bold leading-[1.05] tracking-[-0.045em] md:text-4xl">
            More Than Printing. The Right Approach.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-[var(--ink-soft)]">
            Every garment and every design can call for a different printing
            approach. We look at what you're trying to achieve, understand
            the garment and production requirements, and recommend a
            suitable printing method and process. If you're unsure which
            option is right, we'll help you understand the difference before
            production begins.
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
            For unfamiliar fabrics or jobs where print performance is
            uncertain, we can produce a sample and test it before moving
            ahead with the bulk order.
          </p>

          <a href="#capabilities" className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
            Explore Our Printing Capabilities <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div>
          <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
            Built on Practical Experience
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-[var(--line)] sm:grid-cols-2">
            {experience.map((item) => (
              <div key={item.title} className="card-lift bg-[var(--paper)] p-6 md:p-7">
                {item.tag ? (
                  <div className="font-display text-3xl font-extrabold tracking-[-0.04em] text-[var(--accent-text)]">{item.tag}</div>
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--beige)] text-[var(--ink-soft)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                )}
                <h3 className="mt-6 font-display text-base font-bold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   CAPABILITIES
   ============================================================ */
const capabilities = [
  { icon: Shirt, name: "Plastisol Printing", desc: "A versatile option for apparel production, delivering vivid opacity and sharp graphic detail.", cta: "Explore Plastisol Printing" },
  { icon: Layers, name: "Water-Based & Discharge", desc: "Soft-hand pigment and discharge printing absorbed directly into cotton fibres.", cta: "Explore Soft-Hand Printing" },
  { icon: Sparkles, name: "Puff Printing", desc: "Create a raised, dimensional effect for designs that need more visual and tactile presence.", cta: "Explore Puff Printing" },
  { icon: WandSparkles, name: "High-Density Printing", desc: "Specialized raised printing for designs where a more pronounced dimensional finish is required.", cta: "Explore High-Density Printing" },
  { icon: Scissors, name: "Cut Panel Printing", desc: "Print individual garment panels before stitching, helping manufacturers and brands incorporate prints into the garment construction process.", cta: "Explore Cut Panel Printing" },
  { icon: Package, name: "Finished Garment Printing", desc: "Printing directly on ready-made garments, including finished T-shirts and other apparel.", cta: "Explore Garment Printing" },
];

const Capabilities = () => (
  <section id="capabilities" className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--paper)] font-body">
    <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-[-0.045em] md:text-4xl">
          Printing Capabilities for Different Production Needs
        </h2>
        <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)]">
          From everyday apparel production to more specialized print
          finishes, we work across multiple printing methods and garment
          formats.
        </p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Our approach is simple: understand the garment, the artwork and
          the intended result, then use an appropriate printing process to
          achieve it.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, name, desc, cta }) => (
          <div key={name} className="card-lift group rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--beige)] text-[var(--ink-soft)] transition-colors group-hover:bg-[var(--ink)] group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-base font-bold tracking-[-0.02em]">{name}</h3>
            <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{desc}</p>
            <ArrowLink href="#work" className="mt-4 text-[13px] font-semibold text-[var(--accent-text)]">
              {cta}
            </ArrowLink>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="#work" className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
          View All Printing Capabilities
        </a>
      </div>
    </div>
  </section>
);

/* ============================================================
   SCALE — from small runs to bulk production
   ============================================================ */
const scaleStats = [
  { icon: Package, v: "~50+", title: "Pieces", desc: "Our MOQ starts at approximately 50 pieces, making the process accessible for smaller production runs." },
  { icon: Layers, v: "1,000+", title: "Pieces", desc: "We can handle bulk orders extending beyond 1,000 pieces, depending on the production requirements." },
  { icon: Users, v: "Mixed", title: "Sizes", desc: "Different garment sizes can be included within the same order, provided the garments or panels are properly sorted." },
  { icon: Timer, v: "3 Days", title: "Production Capacity", desc: "Under suitable production conditions, we have the capacity to process approximately 1,000 pieces within 3 days." },
];

const Scale = () => (
  <section id="scale" className="scroll-mt-20 border-b border-[var(--line)] font-body">
    <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Production Scale</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-[-0.045em] md:text-4xl">
          From Small Runs to Bulk Production
        </h2>
        <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)]">
          Whether you're developing a new collection or producing at scale,
          we work with businesses across a range of apparel printing
          quantities.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {scaleStats.map((s) => (
          <div key={s.title + s.v} className="card-lift rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6">
            <s.icon className="h-5 w-5 text-[var(--accent-text)]" />
            <div className="mt-4 font-display text-2xl font-extrabold tracking-[-0.03em] text-[var(--ink)]">{s.v}</div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--accent-text)]">{s.title}</div>
            <p className="mt-3 text-[13px] leading-6 text-[var(--muted)]">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 rounded-3xl border border-[var(--line-dark)] bg-[var(--beige)] p-7 md:grid-cols-2 md:p-10">
        <div>
          <h3 className="font-display text-lg font-bold tracking-[-0.02em]">Sampling Before Bulk Production</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
            For businesses that need to confirm the result before committing
            to production, paid sampling is available. The sample gives you
            an opportunity to review the actual print and approve the
            expected result before the bulk order begins.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold tracking-[-0.02em]">Quantity-Based Pricing</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
            Pricing can reduce as order quantities increase, allowing larger
            production runs to be quoted according to their volume.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
          Request a Bulk Quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

/* ============================================================
   PROCESS — 6-step artwork-to-production workflow
   ============================================================ */
const steps = [
  { n: "01", title: "Share Your Requirement", desc: "Send us your artwork along with the garment or cut-panel details, quantity and any specific requirements for the print." },
  { n: "02", title: "Discuss the Approach", desc: "If you're unsure about the right printing method or process, we'll discuss the available options based on the garment, artwork and result you're looking for." },
  { n: "03", title: "Sample & Review", desc: "A paid sample can be produced for you to review. This gives you the opportunity to check the actual print and confirm that the expected result has been achieved." },
  { n: "04", title: "Approve & Produce", desc: "Once the sample is approved, we proceed with the bulk production according to the agreed requirements." },
  { n: "05", title: "Ongoing Production Checks", desc: "Throughout production, the work is continuously observed to identify issues and maintain consistency with the approved result." },
  { n: "06", title: "Ready for Collection / Dispatch", desc: "Once production is complete, the order is prepared for handover. Pickup and transport arrangements can vary depending on the customer and order." },
];

const Process = () => (
  <section id="process" className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--paper)] font-body">
    <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Our Process</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-[-0.045em] md:text-4xl">
          A Clear Process From Artwork to Production
        </h2>
        <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)]">
          Good printing starts before the first production piece is
          printed. We work with you to understand the requirement,
          establish the right approach, and confirm the result before
          moving into bulk production.
        </p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="card-lift bg-[var(--bg)] p-6 md:p-7">
            <span className="font-display text-sm font-bold text-[var(--accent-text)]">{step.n}</span>
            <h3 className="mt-5 font-display text-base font-bold tracking-[-0.02em]">{step.title}</h3>
            <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
          Discuss Your Production Requirement <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

/* ============================================================
   WORK — portfolio categories
   ============================================================ */
const work = [
  { label: "Plastisol Printing", title: "Detailed apparel prints", chip: ["PLASTISOL", "PRINT"], className: "bg-[#D8C9BA]" },
  { label: "Water-Based & Discharge", title: "Breathable soft hand", chip: ["WATER", "BASED"], className: "bg-[#E4DDD2]" },
  { label: "Puff & High-Density", title: "Raised, dimensional finishes", chip: ["RAISED", "PRINT"], className: "bg-[#D9B9A9]" },
  { label: "Cut Panel Printing", title: "Panels, printed pre-stitch", chip: ["CUT", "PANEL"], className: "bg-[#C9C4BD]" },
];

const workDesc = {
  "Plastisol Printing": "Detailed apparel prints produced for different garment and design requirements.",
  "Water-Based & Discharge": "Breathable, soft-touch ink integration into fabric fibers without heavy deposit.",
  "Puff & High-Density": "Raised and dimensional finishes that add depth and texture to apparel graphics.",
  "Cut Panel Printing": "Printed garment panels prepared before stitching and garment assembly.",
};

const Work = () => (
  <section id="work" className="scroll-mt-20 border-b border-[var(--line)] font-body">
    <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Our Work</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-[-0.045em] md:text-4xl">
          Work That Speaks for Itself
        </h2>
        <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)]">
          From detailed screen prints to dimensional finishes and
          production-ready garment panels, our work spans different
          printing requirements, garment formats and order sizes.
        </p>
        <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
          Explore selected examples of our printing work across:
        </p>
      </div>

      <div className="mt-9 grid gap-3 sm:grid-cols-2">
        {work.map((item) => (
          <a href="#contact" key={item.label} className={`card-lift group relative min-h-[300px] overflow-hidden rounded-3xl border border-[var(--line)] ${item.className}`}>
            <div className="absolute inset-0 grain opacity-30" />
            <RegMark className="absolute right-4 top-4 z-10 text-[var(--ink)]/35" />
            <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[170px] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] items-center justify-center rounded-[18px] bg-[#F6F0E8] shadow-[0_25px_40px_rgba(55,45,32,.16)] transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:scale-105">
              <div className="text-center">
                <div className="font-display text-2xl font-extrabold tracking-[-.06em]">{item.chip[0]}</div>
                <div className="mt-1 font-display text-2xl font-extrabold tracking-[-.06em] text-[var(--accent-text)]">{item.chip[1]}</div>
                <div className="mt-3 text-[7px] font-bold uppercase tracking-[.24em] text-[var(--muted)]">Predita studio</div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/25 to-transparent p-5 pt-20 text-white">
              <div className="text-[9px] font-bold uppercase tracking-[.16em] opacity-80">{item.label}</div>
              <div className="mt-1 font-display text-base font-bold">{item.title}</div>
              <p className="mt-1 max-w-xs text-[11px] leading-5 opacity-85">{workDesc[item.label]}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 max-w-2xl">
        <h3 className="font-display text-lg font-bold tracking-[-0.02em]">Made for Production, Not Just Presentation</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
          Every piece shown here represents the kind of work we handle for
          apparel businesses — from individual development samples to
          larger production requirements.
        </p>
      </div>

      <div className="mt-8">
        <a href="#work" className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
          View Our Portfolio <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

/* ============================================================
   TERMS — MOQ, sampling, sizes, pricing, timeline, payment
   ============================================================ */
const terms = [
  { title: "Start From Around 50 Pieces", desc: "Our MOQ starts at approximately 50 pieces, with larger orders accommodated according to the production requirements." },
  { title: "Sample Before Bulk", desc: "Paid sampling is available when you want to review the actual print before approving the full order." },
  { title: "Flexible Size Quantities", desc: "Multiple garment sizes can be included in the same order when garments or panels are properly sorted." },
  { title: "Quantity-Based Pricing", desc: "Per-piece pricing can reduce as order quantities increase, with the final price depending on the specific printing requirement." },
  { title: "Typical Production Timeline", desc: "Normal production turnaround is approximately 2–4 weeks, depending on the workload and order requirements." },
  { title: "Simple Payment Terms", desc: "Our general payment structure is 50% advance and 50% before dispatch." },
];

const Terms = () => (
  <section id="terms" className="scroll-mt-20 border-b border-[var(--line)] bg-[var(--paper)] font-body">
    <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Working With Us</Eyebrow>
        <h2 className="font-display text-3xl font-bold tracking-[-0.045em] md:text-4xl">
          Straightforward Printing for Apparel Businesses
        </h2>
        <p className="mt-5 text-sm leading-6 text-[var(--ink-soft)]">
          We keep the production process practical and transparent, so you
          know what to expect before your order moves into bulk production.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {terms.map((t, i) => (
          <div key={t.title} className="card-lift rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--beige)] text-[11px] font-bold text-[var(--ink-soft)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-display text-base font-bold tracking-[-0.02em]">{t.title}</h3>
            <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-[var(--line-dark)] bg-[var(--beige)] p-7 md:p-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-lg">
            <h3 className="font-display text-xl font-bold tracking-[-0.03em] md:text-2xl">Have a Printing Requirement?</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              Whether you're producing a new collection, developing garments
              for your brand, or handling a larger production run, send us
              your requirement and we'll help you determine the right way
              forward.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ============================================================
   FAQ
   ============================================================ */
const faqs = [
  ["What is the minimum order quantity?", "Our MOQ starts at approximately 50 pieces. The suitable quantity may vary depending on the printing requirement."],
  ["Do you print on cut panels as well as finished garments?", "Yes. We print on both cut garment panels before stitching and ready-made / finished garments."],
  ["Can you help us choose the right printing method?", "Yes. If you're unsure which printing method is appropriate for your garment or design, we can discuss the requirement and recommend a suitable approach."],
  ["Can I see a sample before placing a bulk order?", "Yes. Paid sampling is available so you can review the actual print and confirm the expected result before bulk production."],
  ["Can I order different garment sizes together?", "Yes. Mixed sizes can be included within an order, provided the garments or panels are properly sorted."],
  ["How many pieces can you handle?", "We handle orders from approximately 50 pieces to 1,000+ pieces. Under suitable production conditions, our capacity can reach approximately 1,000 pieces within 3 days."],
  ["How long does production usually take?", "Normal production turnaround is approximately 2–4 weeks, depending on the workload and order requirements."],
  ["What are your payment terms?", "Our general payment terms are 50% advance and 50% before dispatch."],
  ["Do you provide pickup or delivery?", "Transport arrangements can vary depending on the customer and order. Some customers arrange their own pickup or transport, while arrangements may differ for other orders."],
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="scroll-mt-20 border-b border-[var(--line)] font-body">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent-text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> FAQ
          </div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.045em] md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--line)]">
          {faqs.map(([question, answer], index) => {
            const active = open === index;
            return (
              <div key={question} className="border-b border-[var(--line)] last:border-b-0">
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  aria-expanded={active}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors duration-200 hover:bg-[var(--beige)]/40 md:px-6"
                >
                  <span className="text-sm font-semibold">{question}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${active ? "rotate-180 bg-[var(--ink)] text-white" : "bg-[var(--beige)] text-[var(--ink-soft)]"}`}>
                    {active ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                {active && <div className="px-5 pb-5 pr-14 text-sm leading-6 text-[var(--muted)] md:px-6 md:pb-6">{answer}</div>}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--muted)]">Still have a question?</p>
          <a href="#contact" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-text)]">
            Ask Us About Your Requirement <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   FINAL CTA + FOOTER
   ============================================================ */
const Footer = () => (
  <>
    <section id="contact" className="scroll-mt-20 bg-[var(--ink)] font-body text-[var(--bg)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#D99A82]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D99A82]" /> Get In Touch
          </div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-.045em] md:text-5xl">
            Have an Apparel Printing Requirement?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[var(--bg)]/75 md:text-base">
            Tell us what you're producing, how many pieces you need, and
            what you're looking to achieve. We'll understand the
            requirement, discuss the suitable printing approach, and help
            you take the next step toward production.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-[var(--bg)] px-6 py-3.5 text-sm font-bold text-[var(--ink)] transition-transform hover:-translate-y-1">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#top" className="btn-on-dark inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.12em] text-[var(--bg)]/50">
            Predita — B2B Apparel Printing · Jogeshwari West, Mumbai
          </p>
        </div>
      </div>
    </section>

    <footer className="bg-[var(--ink)] font-body text-[var(--bg)]/70">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 md:px-8 lg:px-12">
        <div className="grid gap-10 border-t border-white/15 py-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-[var(--bg)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--bg)]">
                <span className="h-2 w-2 rounded-full bg-[#D99A82]" />
              </span>
              <span className="font-display font-bold">Predita</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6">Printing built around the garment.</p>
            <p className="mt-3 flex items-center gap-1.5 text-xs">
              <MapPin className="h-3.5 w-3.5" /> Jogeshwari West, Mumbai
            </p>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--bg)]">Capabilities</div>
            <div className="space-y-2.5">
              {["Plastisol Printing", "Water-Based Printing", "Discharge Printing", "Puff Printing", "High-Density Printing", "Cut Panel Printing"].map((item) => (
                <a key={item} href="#capabilities" className="block text-sm hover:text-white">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--bg)]">Company</div>
            <div className="space-y-2.5">
              <a href="#approach" className="block text-sm hover:text-white">Our Approach</a>
              <a href="#process" className="block text-sm hover:text-white">Our Process</a>
              <a href="#work" className="block text-sm hover:text-white">Our Work</a>
              <a href="#terms" className="block text-sm hover:text-white">Terms & Pricing</a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--bg)]">Get in Touch</div>
            <div className="space-y-2.5">
              <a href="#faq" className="block text-sm hover:text-white">FAQ</a>
              <a href="#contact" className="block text-sm hover:text-white">Request a Quote</a>
              <a href="#contact" className="block text-sm hover:text-white">WhatsApp Us</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/15 pt-5 text-[10px] md:flex-row">
          <span>© 2026 Predita.</span>
          <span>B2B Apparel Printing · Jogeshwari West, Mumbai</span>
        </div>
      </div>
    </footer>
  </>
);

export default function PreditaHomepage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Tokens />
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Capabilities />
        <Scale />
        <Process />
        <Work />
        <Terms />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
