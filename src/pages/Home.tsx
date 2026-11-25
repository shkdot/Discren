import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { CapabilityCarousel } from '../components/CapabilityCarousel';
import { TickerBand } from '../components/TickerBand';
import { FAQItem } from '../components/FAQItem';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { processData } from '../data/processData';
import { faqData } from '../data/faqData';
import { ArrowRight, Package, Clock, Timer, Boxes, Layers, Factory, Warehouse, Ruler, Sparkles, IndianRupee, Wallet, Banknote, MapPin, Truck, FileText } from 'lucide-react';
import Timeline from '../components/ui/timeline';
import { WorkShowcase } from '../components/WorkShowcase';

/** Continuous capability marquee content under the hero. */
const tickerItems = [
  'Plastisol Printing',
  'Water-Based Printing',
  'Discharge Printing',
  'High-Density HD',
  '3D Puff Printing',
  'Metallic & Foil',
  'Glow & Reflective',
  'Cut Panel Printing',
  'Finished Garments',
  'Bulk Production',
  'Jogeshwari West, Mumbai',
];

const expertiseStages = [
  { num: '01', title: 'Method selection', text: 'We match the print approach to the garment, artwork and result you want to achieve.', tags: ['Garment base', 'Artwork detail', 'Print finish'] },
  { num: '02', title: 'Practical advice', text: 'You get a clear view of what each printing route is likely to produce before the job enters production.', tags: ['Clear options', 'Expected result', 'Production fit'] },
  { num: '03', title: 'Sampling', text: 'Where a fabric or finish needs confidence, a paid sample can be reviewed before a bulk production run.', tags: ['Sample review', 'Fabric test', 'Bulk-ready'] },
  { num: '04', title: 'Process adjustment', text: 'If a result needs refining, we revisit the production variables and adjust the approach with purpose.', tags: ['Review', 'Refine', 'Repeat'] },
];

const bulkProductionTiers = [
  { type: 'Starting Run', note: 'Entry batch', size: '~50–100 pcs', level: 15, icon: Boxes },
  { type: 'Standard Run', note: 'Core production', size: '100–500 pcs', level: 42, icon: Layers },
  { type: 'Bulk Production', note: 'Batch consistent', size: '500–1,000 pcs', level: 75, icon: Factory, highlight: true },
  { type: 'High Volume', note: 'Full capacity', size: '1,000+ pcs', level: 100, icon: Warehouse },
];

export const Home: React.FC = () => {
  const selectedFaqs = faqData.slice(0, 6);
  const [activeExpertiseStage, setActiveExpertiseStage] = useState(0);
  const expertiseStage = expertiseStages[activeExpertiseStage];
  const [isHovered, setIsHovered] = useState(false);
  const workingTogetherRef = useRef<HTMLDivElement>(null);

  // Auto-advance the 4 expertise stages every 3 seconds (paused on hover / reduced motion).
  // Restarting the interval whenever the active stage changes keeps the progress
  // bar and the auto-advance perfectly in sync — including on manual clicks.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || isHovered) return;
    const interval = window.setInterval(() => {
      setActiveExpertiseStage((prev) => (prev + 1) % expertiseStages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, activeExpertiseStage]);

  // Reveal the Working Together cards with a staggered fade-up the first time
  // the section scrolls into view — a distinct feel from the sticky FAQ below.
  useEffect(() => {
    const root = workingTogetherRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>('.wt-reveal'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Reveal sections with a premium fade-up as they scroll into view.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll<HTMLElement>('.section-reveal').forEach((el) => {
        el.classList.add('section-revealed');
      });
      return;
    }
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    const sections = document.querySelectorAll<HTMLElement>('.section-reveal');
    sections.forEach((el) => revealObserver.observe(el));
    // Reveal any sections already in view on first load.
    sections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && rect.bottom > 0) {
        el.classList.add('section-revealed');
        revealObserver.unobserve(el);
      }
    });
    return () => revealObserver.disconnect();
  }, []);


  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'DISCREN Specialized Apparel Printing Capabilities',
      description: 'The 7 specialized apparel printing techniques engineered by DISCREN for clothing brands in Mumbai.',
      itemListElement: capabilitiesData.map((cap, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: cap.title,
        description: cap.shortDesc,
        url: typeof window !== 'undefined' ? `${window.location.origin}/capabilities#${cap.id}` : `/capabilities#${cap.id}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: selectedFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <SEO 
        title="B2B Apparel & Garment Printing in Mumbai | DISCREN"
        description="B2B apparel printing in Jogeshwari West, Mumbai. Plastisol, water-based, discharge, puff, high-density and foil printing for clothing brands. Request a quote."
        schema={homeSchema}
      />

      {/* Hero Section - Viewport-Fitted Desktop View (No Scrolling Required) */}
      {/* Hero Section */}
      <section className="section-reveal relative bg-[#181715] text-white min-h-[70vh] md:min-h-[calc(100vh-76px)] flex items-center py-10 lg:py-0 overflow-hidden border-b border-[#292722]">

        {/* Background Image — desktop only; hidden on mobile to avoid a cropped/shrunk image */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <img
            src="/images/home-hero-image.webp"
            alt="DISCREN Apparel Printing Factory Production"
            className="w-full h-full object-cover object-right scale-105 transition-transform duration-1000 opacity-70 lg:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181715] via-[#181715]/90 to-transparent lg:via-[#181715]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-transparent to-transparent opacity-80" />
        </div>

        {/* Mobile background — subtle pattern + accent glow, no image */}
        <div aria-hidden="true" className="absolute inset-0 z-0 md:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#2a1f12_0%,#181715_70%)]" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c85d2f]/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#e37b4f]/10 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 my-auto py-4">
          <div className="max-w-[820px] mx-auto md:mx-0 text-center md:text-left">
            <div className="text-[11px] md:text-[12px] tracking-[0.15em] font-extrabold text-[#e37b4f] uppercase mb-4 md:mb-5 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-[#e37b4f] animate-pulse"></span>
              <span>B2B APPAREL PRINTING · JOGESHWARI WEST, MUMBAI</span>
            </div>

            <h1 className="text-[clamp(36px,5.2vw,70px)] leading-[0.95] tracking-[-0.06em] font-extrabold text-white mb-4 md:mb-6">
              Printing Built Around the <span className="text-[#e37b4f] underline decoration-[#e37b4f]/30 underline-offset-8">Garment.</span>
            </h1>

            <p className="max-w-[640px] mx-auto md:mx-0 text-[16px] md:text-[19px] leading-[1.45] text-[#d1ccc4] mb-6 md:mb-8 font-normal">
              We help clothing brands and garment businesses turn their designs into production-ready prints — choosing the right printing approach for the garment, the artwork and the result you want to achieve.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8 md:mb-10 justify-center md:justify-start">
              <Button to="/contact" variant="white" className="px-7 py-3 shadow-lg text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                Discuss Your Requirement
              </Button>
              <Button to="/work" variant="secondary" className="px-7 py-3 border-white text-white hover:bg-white/10 text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                View Our Work
              </Button>
            </div>

            {/* Hero Meta Badges */}
            <div className="pt-4 md:pt-5 border-t border-white/15 flex flex-wrap gap-x-7 gap-y-2 text-[#d1ccc4] text-[12px] md:text-[13px] font-semibold justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>25+ years of printing experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>MOQ from ~50 pieces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>Bulk orders up to 1,000+ pieces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Ticker — breaks the hero/cream transition and adds motion */}
      <TickerBand items={tickerItems} />

      {/* 01 / EXPERTISE — high-tech production cockpit */}
      <section className="section-reveal py-24 md:py-32 bg-[#fbfaf6] relative overflow-hidden tech-scan">
        {/* Technical grid overlay */}
        <div className="absolute inset-0 [background-image:linear-gradient(#d9d2c6_1px,transparent_1px),linear-gradient(90deg,#d9d2c6_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c85d2f]/40 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            {/* Left: Command info panel */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d9d2c6] bg-white/80 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#756d63]">
                <span className="w-2 h-2 rounded-full bg-[#c85d2f] animate-pulse" />
                Production Command
              </div>
              <h2 className="text-[clamp(34px,5.5vw,64px)] leading-[1.0] tracking-[-0.07em] font-extrabold text-[#181715]">
                Engineering<span className="text-[#c85d2f]"> the</span> Print.
              </h2>

              {/* Vertical stage selector — below heading */}
              <div className="mt-8 flex flex-col gap-2">
                {expertiseStages.map((stage, index) => (
                  <button
                    key={stage.num}
                    type="button"
                    onClick={() => setActiveExpertiseStage(index)}
                    aria-current={activeExpertiseStage === index}
                    className={`flex items-center gap-3 rounded-[16px] px-5 py-4 text-left transition-all duration-300 ${
                      activeExpertiseStage === index
                        ? 'bg-[#181715] text-white shadow-[0_0_25px_rgba(200,93,47,0.30)]'
                        : 'bg-[#f4f0e8]/30 text-[#756d63] hover:bg-[#e7dfd2]'
                    }`}
                  >
                    <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-[12px] transition-all ${
                      activeExpertiseStage === index ? 'bg-[#c85d2f] text-white' : 'bg-white text-[#c85d2f] border border-[#c85d2f]/25'
                    }`}>{stage.num}</span>
                    <span className="font-extrabold tracking-tight text-[14px]">{stage.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Interactive stage cockpit */}
            <div className="relative group">
              {/* Active stage display */}
              <div
                className={`mt-8 rounded-[24px] border border-[#d9d2c6] bg-[#f4f0e8] p-6 md:p-8 shadow-[0_20px_60px_rgba(45,39,30,0.08)] relative overflow-hidden will-change-transform stage-slide tech-glow min-h-[320px] ${
                  activeExpertiseStage % 2 === 0 ? '' : 'bg-[#f4f0e8]/80'
                }`}
              >
                <div className="absolute inset-0 [background-image:linear-gradient(#d9d2c655_1px,transparent_1px),linear-gradient(90deg,#d9d2c655_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c85d2f]/10 rounded-full blur-[60px] -translate-y-6 translate-x-6 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-[#c85d2f] animate-pulse" />
                      <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#c85d2f]">Stage {expertiseStage.num}</span>
                    </div>
                    <h3 className="text-[clamp(30px,4vw,48px)] leading-[1.05] tracking-[-0.05em] font-extrabold text-[#181715] mb-4">
                      {expertiseStage.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] leading-relaxed text-[#6e6a63] max-w-[420px] mb-6">
                      {expertiseStage.text}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {expertiseStage.tags.map((tag, tagIdx) => (
                        <span key={tag} className={`rounded-full border border-[#c9c0b2] bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] font-extrabold text-[#625e57] transition-all duration-300 stage-tag-reveal hover:bg-[#c85d2f]/10 hover:text-[#c85d2f] hover:border-[#c85d2f]`} style={{ animationDelay: `${0.1 + tagIdx * 0.08}s` }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

              {/* Right: spec panel — extends to match the step list height */}
              <div className="hidden lg:flex flex-col items-end gap-6 min-h-[320px]">
                <div className="relative w-20 h-20 shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" r="18" className="fill-none stroke-[#e7dfd2] stroke-w-[2.5]" />
                    <circle
                      cx="22" cy="22" r="18"
                      className="fill-none stroke-[#c85d2f] stroke-w-[2.5] transition-all duration-700 ease-out"
                      style={{
                        strokeDasharray: '113.1',
                        strokeDashoffset: `${113.1 * (1 - (activeExpertiseStage + 1) / expertiseStages.length)}`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-extrabold text-[#c85d2f] tracking-tighter">
                      {Math.round(((activeExpertiseStage + 1) / expertiseStages.length) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Premium spec metrics */}
                <div className="w-full rounded-[16px] border border-[#d9d2c6] bg-[#fbfaf6] p-5 shadow-sm">
                  <span className="block text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#c85d2f] mb-3">Stage brief</span>
                  <p className="text-[13px] leading-relaxed text-[#6e6a63] mb-4">
                    {expertiseStage.text}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[expertiseStage.tags[0], expertiseStage.tags[1]].map((tag, i) => (
                      <div key={i} className="rounded-[10px] border border-[#c9c0b2] bg-white px-3 py-2 text-[11px] font-extrabold text-[#625e57]">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="mt-6 flex justify-center gap-1.5">
                {expertiseStages.map((s, i) => (
                  <button
                    key={s.num}
                    onClick={() => setActiveExpertiseStage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeExpertiseStage ? 'w-6 bg-[#c85d2f]' : i < activeExpertiseStage ? 'w-4 bg-[#c85d2f]/30' : 'w-1.5 bg-[#d9d2c6]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / CAPABILITIES — warm paper band with image-led cards */}
      <section className="section-reveal section-entrance section-entrance-delay-1 py-20 md:py-24 lg:min-h-[calc(100vh-76px)] lg:flex lg:items-center lg:py-8 bg-[#f4f0e8] border-y border-[#d9d2c6]">
        <div className="container-custom">
          <CapabilityCarousel items={capabilitiesData} />
        </div>
      </section>

      {/* 03 / BULK PRODUCTION — capacity dashboard */}
      <section className="section-reveal bg-[#e7dfd2] border-y border-[#c9c0b2] relative overflow-hidden tech-scan">
        {/* Technical grid overlay */}
        <div className="absolute inset-0 [background-image:linear-gradient(#d9d2c6_1px,transparent_1px),linear-gradient(90deg,#d9d2c6_1px,transparent_1px)] [background-size:40px_40px] opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c85d2f]/35 to-transparent" />

        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
            {/* Left: Command info panel */}
            <div className="space-y-8 max-w-[460px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-[#fbfaf6] px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#756d63]">
                <span className="w-2 h-2 rounded-full bg-[#c85d2f] animate-pulse" />
                Production Capacity
              </div>
              <h2 className="text-[clamp(34px,5.5vw,64px)] leading-[1.0] tracking-[-0.07em] font-extrabold text-[#181715]">
                Scale<span className="text-[#c85d2f]"> your</span> Run.
              </h2>
              <p className="mt-4 text-[16px] md:text-[18px] leading-relaxed text-[#6e6a63] max-w-[440px]">
                From a focused entry batch to full-capacity volume, we hold consistent quality across every production tier — no compromises at scale.
              </p>

              {/* Quick stat chips */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { icon: Package, value: '~50', label: 'Min. order (MOQ)' },
                  { icon: Clock, value: '2–4 wks', label: 'Typical turnaround' },
                  { icon: Timer, value: '3–5 days', label: 'Sampling time' },
                ].map((fact) => (
                  <div key={fact.label} className="rounded-[16px] border border-[#d9d2c6] bg-white p-4 flex flex-col gap-2">
                    <fact.icon className="w-4 h-4 text-[#c85d2f]" />
                    <span className="text-[19px] leading-none tracking[-0.03em] font-extrabold text-[#181715]">{fact.value}</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#6e6a63] leading-snug">{fact.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 pb-1 border-b border-[#c85d2f] text-[13px] uppercase tracking-[0.1em] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors">
                <span>Discuss your production run</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Capacity tier bars + gauge */}
            <div className="relative min-h-[320px]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#756d63]">Capacity by tier</span>
                  <p className="text-[13px] text-[#6e6a63] leading-snug">Relative run size and quality level across production tiers.</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#181715] px-3 py-2 text-[10px] uppercase tracking-[0.13em] font-extrabold text-white">Scale ready</span>
              </div>

              {/* Tier capacity bars */}
              <div className="space-y-5">
                {bulkProductionTiers.map((tier, index) => (
                  <div
                    key={tier.type}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                      <tier.icon className="w-4 h-4 text-[#c85d2f]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12.5px] font-extrabold tracking-tight text-[#756d63]">{tier.type}</span>
                        <span className="text-[11px] font-bold tabular-nums text-[#8a837a]">{tier.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#e7dfd2] overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700 ease-out bg-[#d9bca7]" style={{ width: `${tier.level}%` }} />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.08em] font-bold text-[#8a837a]">{tier.size}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Big capacity gauge */}
              <div className="mt-10 rounded-[24px] border border-[#d9d2c6] bg-[#fbfaf6] p-6 md:p-8 shadow-[0_20px_60px_rgba(45,39,30,0.08)] relative overflow-hidden">
                <div className="absolute inset-0 [background-image:linear-gradient(#d9d2c655_1px,transparent_1px),linear-gradient(90deg,#d9d2c655_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#c85d2f] mb-2 block">Full Capacity</span>
                    <span className="text-[clamp(40px,7vw,72px)] leading-none tracking[-0.08em] font-extrabold text-[#181715]">1,000+</span>
                    <span className="text-[11px] uppercase tracking-[0.13em] font-extrabold text-[#756d63]">Pieces per bulk run</span>
                  </div>
                  <div className="relative w-24 h-24 shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 44 44">
                      <circle cx="22" cy="22" r="18" className="fill-none stroke-[#e7dfd2] stroke-w-[2.5]" />
                      <circle
                        cx="22" cy="22" r="18"
                        className="fill-none stroke-[#c85d2f] stroke-w-[3] transition-all duration-700 ease-out"
                        style={{
                          strokeDasharray: '113.1',
                          strokeDashoffset: `${113.1 * (1 - 1)}`,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[11px] font-extrabold text-[#c85d2f] tracking-tighter">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / PROCESS — Horizontal sticky-scroll timeline */}
      <section className="section-reveal section-entrance section-entrance-delay-2 bg-[#fbfaf6] border-t border-[#d9d2c6]">
        {/* Header sits above the sticky scroll zone in normal flow */}
        <div className="container-custom pt-20 md:pt-28 pb-10 md:pb-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c85d2f]">04 / PROCESS</p>
            <h2 className="mt-4 text-[clamp(30px,4.2vw,46px)] leading-[1.08] tracking-[-0.03em] font-extrabold text-[#181715]">
              What you get at each stage
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#6e6a63] max-w-[560px] mx-auto">
              Scroll through the production journey — each milestone shows exactly what happens and what our team handles.
            </p>
          </div>
        </div>

        <Timeline
          title="Production Journey"
          periodLabel="Stage 01 – 07"
          backgroundColor="#fbfaf6"
          textColor="#181715"
          mutedTextColor="#6e6a63"
          activeColor="#c85d2f"
          imageUrl="/images/screen_print.webp"
          imageAlt="DISCREN apparel screen printing studio — manual print press with garments and squeegee"
          duration={1.4}
          topItems={[
            { id: "stage-01", order: 1, title: "01 · Consultation", content: "Share your vector artwork, garment specifications, quantity and print finish goals with our Mumbai studio team." },
            { id: "stage-03", order: 3, title: "03 · Ink & Method", content: "Selecting high-opacity plastisol, soft-hand water-based, discharge, or 3D puff tailored to your apparel." },
            { id: "stage-05", order: 5, title: "05 · Bulk Production", content: "Precision table printing with calibrated squeegee pressure and temperature-controlled curing tunnels." },
            { id: "stage-07", order: 7, title: "07 · Dispatch", content: "Packed in client-labelled lots, coordinated for direct dispatch or Mumbai factory collection." },
          ]}
          bottomItems={[
            { id: "stage-02", order: 2, title: "02 · Tech Review", content: "Evaluation of screen separation feasibility, line tolerances, and fabric interaction before print." },
            { id: "stage-04", order: 4, title: "04 · Paid Sample", content: "Production-grade physical strike-off piece printed and cured for hand-feel and wash verification." },
            { id: "stage-06", order: 6, title: "06 · Quality Control", content: "Individual piece-by-piece inspection for registration accuracy, cure completion, and cleanliness." },
          ]}
        />
      </section>

      <WorkShowcase />

      {/* 06 / WORKING TOGETHER — compact spec sheet, two panels side by side */}
      <section className="section-reveal py-16 md:py-20 bg-[#f4f0e8] border-t border-[#d9d2c6]">
        <div className="container-custom">
          <div ref={workingTogetherRef}>
            {/* Compact centered header */}
            <div className="wt-reveal mx-auto max-w-[620px] text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-[#fbfaf6] px-4 py-1.5 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2f]" />
                06 / Working together
              </div>
              <h2 className="mt-5 text-[clamp(28px,3.6vw,44px)] leading-[1.05] tracking-[-0.05em] font-extrabold text-[#181715]">
                Straightforward printing for apparel businesses.
              </h2>
              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#5f5951]">
                Clear expectations around quantity, timing and terms — set before your order begins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
              {/* Production Details — light panel */}
              <div className="wt-reveal bg-[#fbfaf6] border border-[#d9d2c6] rounded-[20px] p-6 md:p-7">
                <div className="flex items-center gap-2.5 pb-4 mb-1 border-b border-[#d9d2c6]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#c85d2f]/10 text-[#c85d2f]">
                    <FileText className="w-4 h-4" />
                  </span>
                  <h3 className="text-[13px] uppercase tracking-[0.16em] font-extrabold text-[#181715]">Production Details</h3>
                </div>
                <ul className="divide-y divide-[#e7dfd2]">
                  {[
                    { icon: Package, value: '~50 pcs', label: 'Approx. starting MOQ' },
                    { icon: Ruler, value: 'Mixed sizes', label: 'Yes, when properly sorted' },
                    { icon: Sparkles, value: 'Paid sampling', label: 'Available on request' },
                    { icon: IndianRupee, value: 'Quantity pricing', label: 'Can reduce with volume' },
                    { icon: Clock, value: '2–4 weeks', label: 'Typical turnaround' },
                  ].map((item) => (
                    <li key={item.label} className="group flex items-center gap-3.5 py-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#e7dfd2] bg-[#f4f0e8] text-[#c85d2f] transition-colors group-hover:border-[#c85d2f]/30 group-hover:bg-[#c85d2f]/10">
                        <item.icon className="w-4 h-4" />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2">
                        <span className="text-[15px] font-extrabold tracking-[-0.01em] text-[#181715]">{item.value}</span>
                        <span className="text-[12px] text-[#8a837a]">{item.label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Terms — dark panel */}
              <div className="wt-reveal bg-[#1b1a18] text-white rounded-[20px] p-6 md:p-7" style={{ transitionDelay: '120ms' }}>
                <div className="flex items-center gap-2.5 pb-4 mb-1 border-b border-white/10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white/10 text-[#e37b4f]">
                    <Wallet className="w-4 h-4" />
                  </span>
                  <h3 className="text-[13px] uppercase tracking-[0.16em] font-extrabold text-white">Commercial Terms</h3>
                </div>
                <ul className="divide-y divide-white/10">
                  {[
                    { icon: Banknote, value: '50% advance', label: 'Payment to begin' },
                    { icon: Truck, value: '50% balance', label: 'Due before dispatch' },
                    { icon: MapPin, value: 'Jogeshwari West', label: 'Mumbai facility' },
                    { icon: Factory, value: '1,000+ pcs', label: 'Bulk capacity' },
                  ].map((item) => (
                    <li key={item.label} className="group flex items-center gap-3.5 py-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.06] text-[#e37b4f] transition-colors group-hover:border-[#e37b4f]/40 group-hover:bg-[#e37b4f]/15">
                        <item.icon className="w-4 h-4" />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2">
                        <span className="text-[15px] font-extrabold tracking-[-0.01em] text-white">{item.value}</span>
                        <span className="text-[12px] text-[#a9a49b]">{item.label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compact CTA */}
            <div className="wt-reveal mt-8 flex justify-center" style={{ transitionDelay: '220ms' }}>
              <Button to="/contact" variant="primary" className="gap-2">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — sand band, two-column with a sticky heading */}
      <section className="section-reveal py-20 md:py-28 bg-[#e7dfd2] border-t border-[#c9c0b2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                FAQ
              </div>
              <h2 className="text-[clamp(30px,4.2vw,46px)] leading-[1.02] tracking-[-0.055em] font-extrabold text-[#181715] mb-5 max-w-[420px]">
                Frequently Asked Questions
              </h2>
              <p className="text-[16px] text-[#5f5951] leading-relaxed max-w-[400px] mb-6">
                The questions apparel businesses ask us most often about quantities, methods and sampling.
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors"
              >
                <span>View All Questions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Accordion on a raised paper panel */}
            <div className="bg-[#fbfaf6] border border-[#c9c0b2] rounded-[22px] px-6 md:px-8">
              {selectedFaqs.map((faq, idx) => (
                <FAQItem key={faq.id} item={faq} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTASection />
    </>
  );
};
