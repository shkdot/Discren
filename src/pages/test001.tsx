// test001.tsx
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
import { workData } from '../data/workData';
import {
  ArrowRight,
  Package,
  Clock,
  Timer,
  Boxes,
  Layers,
  Factory,
  Warehouse,
  Ruler,
  Sparkles,
  IndianRupee,
  Wallet,
  Banknote,
  MapPin,
  Truck,
  FileText,
} from 'lucide-react';
import Timeline from '../components/ui/timeline';

/** Continuous capability marquee content under the hero. */
const tickerItems = [
  'Plastisol Printing',
  'Water-Based Printing',
  'Discharge Printing',
  'High-Density HD',
  '3D Puff Printing',
  'Gold & Metallic Foil',
  'Glow & Reflective',
  'Ottoman Motif Panels',
  'Cut Panel Printing',
  'Finished Garments',
  'Bulk Production',
  'Jogeshwari West, Mumbai',
];

const expertiseStages = [
  {
    num: '01',
    title: 'Method selection',
    text: 'We match the print approach to the garment, artwork and result you want to achieve.',
    tags: ['Garment base', 'Artwork detail', 'Print finish'],
  },
  {
    num: '02',
    title: 'Practical advice',
    text: 'You get a clear view of what each printing route is likely to produce before the job enters production.',
    tags: ['Clear options', 'Expected result', 'Production fit'],
  },
  {
    num: '03',
    title: 'Sampling',
    text: 'Where a fabric or finish needs confidence, a paid sample can be reviewed before a bulk production run.',
    tags: ['Sample review', 'Fabric test', 'Bulk-ready'],
  },
  {
    num: '04',
    title: 'Process adjustment',
    text: 'If a result needs refining, we revisit the production variables and adjust the approach with purpose.',
    tags: ['Review', 'Refine', 'Repeat'],
  },
];

const bulkProductionTiers = [
  { type: 'Starting Run', note: 'Entry batch', size: '~50–100 pcs', level: 15, icon: Boxes },
  { type: 'Standard Run', note: 'Core production', size: '100–500 pcs', level: 42, icon: Layers },
  { type: 'Bulk Production', note: 'Batch consistent', size: '500–1,000 pcs', level: 75, icon: Factory, highlight: true },
  { type: 'High Volume', note: 'Full capacity', size: '1,000+ pcs', level: 100, icon: Warehouse },
];

export const Home: React.FC = () => {
  const selectedFaqs = faqData.slice(0, 6);
  const featuredWork = workData.slice(0, 6);

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
      <section className="relative bg-[#171008] text-[#f6ecd8] min-h-[calc(100vh-76px)] flex items-center py-10 lg:py-0 overflow-hidden border-b border-[#3b2a16]">
        {/* Background Image positioned to highlight the right side */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-hero-image.webp"
            alt="DISCREN Apparel Printing Factory Production"
            className="w-full h-full object-cover object-right scale-105 transition-transform duration-1000 opacity-70 lg:opacity-90"
          />
          {/* Subtle gradient overlay ensuring crisp text contrast on left while leaving right side highlighted */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171008] via-[#171008]/90 to-transparent lg:via-[#171008]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171008] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 my-auto py-4">
          <div className="max-w-[820px]">
            <div className="text-[11px] md:text-[12px] tracking-[0.15em] font-extrabold text-[#d0a04b] uppercase mb-4 md:mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d0a04b] animate-pulse"></span>
              <span>B2B APPAREL PRINTING · JOGESHWARI WEST, MUMBAI</span>
            </div>

            <h1 className="text-[clamp(36px,5.2vw,70px)] leading-[0.95] tracking-[-0.06em] font-extrabold text-[#f6ecd8] mb-4 md:mb-6">
              Printing Built Around the{' '}
              <span className="text-[#d0a04b] underline decoration-[#d0a04b]/30 underline-offset-8">Garment.</span>
            </h1>

            <p className="max-w-[640px] text-[16px] md:text-[19px] leading-[1.45] text-[#e5d6ba] mb-6 md:mb-8 font-normal">
              We help clothing brands and garment businesses turn their designs into production-ready prints — choosing
              the right printing approach for the garment, the artwork and the result you want to achieve.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8 md:mb-10">
              <Button
                to="/contact"
                variant="white"
                className="px-7 py-3 shadow-lg text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px] bg-[#f8f1e3] text-[#171008] border border-[#d3bf98] hover:bg-[#e9d9b8]"
              >
                Discuss Your Requirement
              </Button>

              <Button
                to="/work"
                variant="secondary"
                className="px-7 py-3 text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px] border-[#d0a04b]/70 text-[#e6c87e] hover:bg-[#d0a04b]/10"
              >
                View Our Work
              </Button>
            </div>

            {/* Hero Meta Badges */}
            <div className="pt-4 md:pt-5 border-t border-[#d0a04b]/20 flex flex-wrap gap-x-7 gap-y-2 text-[#e5d6ba] text-[12px] md:text-[13px] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d0a04b]"></span>
                <span>25+ years of printing experience</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d0a04b]"></span>
                <span>MOQ from ~50 pieces</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d0a04b]"></span>
                <span>Bulk orders up to 1,000+ pieces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Ticker — breaks the hero/cream transition and adds motion */}
      <TickerBand items={tickerItems} />

      {/* 01 / EXPERTISE — editorial split layout inspired by the reference */}
      <section className="py-20 md:py-28 bg-[#f8f1e3] overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-20 items-center">
            <div className="max-w-[470px] lg:pl-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d3bf98] bg-[#fffaf0] px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#7d6b4b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8e2f23]" />
                01 / Expertise
              </div>

              <h2 className="mt-7 text-[clamp(38px,5vw,62px)] leading-[0.98] tracking-[-0.065em] font-extrabold text-[#241a10]">
                More than printing. <span className="text-[#8e2f23]">The right approach.</span>
              </h2>

              <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#7a6a4d] max-w-[440px]">
                Every garment and design has its own requirements. We consider the fabric, artwork and intended finish
                before recommending the way forward.
              </p>

              <Link
                to="/process"
                className="inline-flex items-center gap-2 mt-8 pb-1 border-b border-[#8e2f23] text-[13px] uppercase tracking-[0.1em] font-extrabold text-[#241a10] hover:text-[#8e2f23] transition-colors"
              >
                <span>Explore our process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-4 mt-12 pt-6 border-t border-[#d3bf98]">
                <span className="text-[42px] leading-none tracking-[-0.07em] font-extrabold text-[#8e2f23]">25+</span>
                <span className="text-[11px] uppercase tracking-[0.15em] leading-relaxed font-extrabold text-[#7d6b4b]">
                  Years applying the right
                  <br />
                  print to the right garment
                </span>
              </div>
            </div>

            <div
              className="stage-card relative rounded-[30px] border border-[#d3bf98] bg-[#efe2c6] p-4 md:p-6 shadow-[0_28px_65px_rgba(45,39,30,0.10)] overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50 [background-image:linear-gradient(#d3bf9855_1px,transparent_1px),linear-gradient(90deg,#d3bf9855_1px,transparent_1px)] [background-size:28px_28px]"
              />

              <div className="relative rounded-[22px] border border-[#d3bf98] bg-[#f8f1e3] overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#d3bf98] px-5 py-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#6b5738]">
                    <span className="w-2 h-2 rounded-full bg-[#c69a3a]" /> Production decision desk
                  </div>
                </div>

                <div className="grid md:grid-cols-[0.78fr_1.22fr] min-h-[430px]">
                  <div className="border-b md:border-b-0 md:border-r border-[#d3bf98] p-3 md:flex md:flex-col md:justify-center">
                    {expertiseStages.map((stage, index) => (
                      <button
                        key={stage.num}
                        type="button"
                        onClick={() => setActiveExpertiseStage(index)}
                        aria-current={activeExpertiseStage === index}
                        className={`w-full flex items-center gap-3 rounded-[12px] px-3 py-3.5 text-left transition-colors ${
                          activeExpertiseStage === index
                            ? 'bg-[#241a10] text-[#f8f1e3]'
                            : 'text-[#6f5f42] hover:bg-[#e8d9ba]'
                        }`}
                      >
                        <span
                          className={`text-[10px] font-extrabold tracking-[0.13em] ${
                            activeExpertiseStage === index ? 'text-[#d0a04b]' : 'text-[#a18b60]'
                          }`}
                        >
                          {stage.num}
                        </span>
                        <span className="text-[13px] font-extrabold tracking-[-0.02em]">{stage.title}</span>
                      </button>
                    ))}
                  </div>

                  <div
                    key={activeExpertiseStage}
                    className="p-6 md:p-8 md:h-[500px] flex flex-col justify-between bg-[radial-gradient(circle_at_88%_8%,#e6c87e44,transparent_38%)] animate-stage-fade-in"
                  >
                    <div>
                      <span className="stage-rise stage-delay-1 inline-block text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#8e2f23]">
                        Stage {expertiseStage.num}
                      </span>

                      <h3 className="stage-rise stage-delay-2 mt-4 min-h-[84px] text-[clamp(30px,3.2vw,42px)] leading-[0.98] tracking-[-0.055em] font-extrabold text-[#241a10]">
                        {expertiseStage.title}
                      </h3>

                      <p className="stage-rise stage-delay-3 mt-5 min-h-[100px] max-w-[390px] text-[15px] md:text-[16px] leading-relaxed text-[#7a6a4d]">
                        {expertiseStage.text}
                      </p>
                    </div>

                    <div className="mt-9">
                      <div className="h-px bg-[#d3bf98] mb-4" />

                      <div className="stage-rise stage-delay-4 flex flex-wrap content-start gap-2 min-h-[64px]">
                        {expertiseStage.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#d3bf98] bg-[#fffaf0] px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] font-extrabold text-[#6f5f42]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="stage-rise stage-delay-5 mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.12em] font-extrabold text-[#6f5f42]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8e2f23] text-[#f8f1e3]">
                          ✓
                        </span>
                        Checked before production
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auto-advance progress bar + stage indicator */}
                <div className="px-6 md:px-8 py-4 border-t border-[#d3bf98]">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-[#dcc7a0] overflow-hidden">
                      <div key={activeExpertiseStage} className="h-full w-0 bg-[#8e2f23] animate-bar-progress" />
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#7d6b4b]">
                      <span>{activeExpertiseStage + 1}</span>
                      <span>/</span>
                      <span>{expertiseStages.length}</span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex justify-center gap-1.5">
                    {expertiseStages.map((s, i) => (
                      <button
                        key={s.num}
                        onClick={() => setActiveExpertiseStage(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeExpertiseStage ? 'w-5 bg-[#8e2f23]' : 'w-1.5 bg-[#d3bf98] hover:bg-[#8e2f23]'
                        }`}
                        aria-label={`Stage ${s.num}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / CAPABILITIES — warm paper band with image-led cards */}
      <section className="py-20 md:py-24 lg:min-h-[calc(100vh-76px)] lg:flex lg:items-center lg:py-8 bg-[#efe2c6] border-y border-[#d3bf98]">
        <div className="container-custom">
          <CapabilityCarousel items={capabilitiesData} />
        </div>
      </section>

      {/* 03 / BULK PRODUCTION — capacity dashboard */}
      <section className="bg-[#e8d9ba] border-y border-[#cdb68b] overflow-hidden">
        <div className="container-custom py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-20 items-center">
            <div className="max-w-[460px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cdb68b] bg-[#f1e5cc] px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#7d6b4b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8e2f23]" />
                03 / Bulk production
              </div>

              <h2 className="mt-7 text-[clamp(38px,4.8vw,58px)] leading-[0.98] tracking-[-0.065em] font-extrabold text-[#241a10]">
                Built for the run you have in mind.
              </h2>

              <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#6b5738]">
                Start with a focused garment run or scale into bulk production. We help set practical expectations
                around quantity, timing and the production conditions of your order.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 pb-1 border-b border-[#8e2f23] text-[13px] uppercase tracking-[0.1em] font-extrabold text-[#241a10] hover:text-[#8e2f23] transition-colors"
              >
                <span>Discuss your production run</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-10 pt-6 border-t border-[#cdb68b] grid grid-cols-3 gap-4">
                {[
                  { icon: Package, value: '~50', label: 'Min. order (MOQ)' },
                  { icon: Clock, value: '2–4 wks', label: 'Typical turnaround' },
                  { icon: Timer, value: '3–5 days', label: 'Sampling time' },
                ].map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-2">
                    <fact.icon className="w-4 h-4 text-[#8e2f23]" />
                    <span className="text-[19px] leading-none tracking-[-0.03em] font-extrabold text-[#241a10]">
                      {fact.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#7a6a4d] leading-snug">
                      {fact.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[30px] border border-[#cdb68b] bg-[#f8f1e3] p-5 md:p-7 shadow-[0_24px_55px_rgba(77,61,43,0.10)]">
              <div className="relative flex flex-wrap items-start justify-between gap-x-5 gap-y-3 pb-6 border-b border-[#d3bf98]">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#7d6b4b]">
                    Production capacity
                  </p>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-[clamp(44px,9vw,82px)] leading-none tracking-[-0.08em] font-extrabold text-[#241a10]">
                      1,000+
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.13em] font-extrabold text-[#7d6b4b]">
                      Pieces
                      <br />
                      per bulk run
                    </span>
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-[#241a10] px-3 py-2 text-[10px] uppercase tracking-[0.13em] font-extrabold text-[#f8f1e3]">
                  Scale ready
                </span>
              </div>

              <div className="relative pt-6">
                {/* Mobile — stacked tier cards (no horizontal scroll) */}
                <div className="sm:hidden space-y-3">
                  {bulkProductionTiers.map((tier) => (
                    <div
                      key={tier.type}
                      className={`rounded-[16px] border p-4 ${
                        tier.highlight ? 'border-[#8e2f23]/40 bg-[#f1e5cc]' : 'border-[#d3bf98] bg-[#f8f1e3]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border ${
                            tier.highlight
                              ? 'border-[#8e2f23]/30 bg-[#8e2f23]/10 text-[#8e2f23]'
                              : 'border-[#d3bf98] bg-[#fffaf0] text-[#8b7450]'
                          }`}
                        >
                          <tier.icon className="h-[18px] w-[18px]" />
                        </span>

                        <div className="flex min-w-0 flex-1 flex-col">
                          <span
                            className={`text-[15px] font-extrabold tracking-[-0.01em] ${
                              tier.highlight ? 'text-[#8e2f23]' : 'text-[#241a10]'
                            }`}
                          >
                            {tier.type}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.08em] font-bold text-[#8b7450]">
                            {tier.note}
                          </span>
                        </div>

                        <span className="shrink-0 text-[14px] font-bold tabular-nums text-[#241a10]">{tier.size}</span>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-1.5 flex-1 rounded-full bg-[#dcc7a0] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${tier.highlight ? 'bg-[#8e2f23]' : 'bg-[#c99a3d]'}`}
                            style={{ width: `${tier.level}%` }}
                          />
                        </div>
                        <span className="w-9 shrink-0 text-right text-[10px] font-bold tabular-nums text-[#8b7450]">
                          {tier.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop — table */}
                <div className="hidden sm:block">
                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">
                      DISCREN production run tiers — order size and relative scale
                    </caption>
                    <thead>
                      <tr className="border-b border-[#d3bf98]">
                        <th scope="col" className="pb-3 pr-4 text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#7d6b4b]">
                          Run type
                        </th>
                        <th scope="col" className="pb-3 pr-4 text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#7d6b4b]">
                          Order size
                        </th>
                        <th scope="col" className="pb-3 text-right text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#7d6b4b]">
                          Scale
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#dcc7a0]">
                      {bulkProductionTiers.map((tier) => (
                        <tr
                          key={tier.type}
                          className={`transition-colors ${
                            tier.highlight ? 'bg-[#f1e5cc]' : 'hover:bg-[#f1e5cc]/60'
                          }`}
                        >
                          <td className="py-4 pr-4">
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border ${
                                  tier.highlight
                                    ? 'border-[#8e2f23]/30 bg-[#8e2f23]/10 text-[#8e2f23]'
                                    : 'border-[#d3bf98] bg-[#fffaf0] text-[#8b7450]'
                                }`}
                              >
                                <tier.icon className="h-4 w-4" />
                              </span>

                              <span className="flex flex-col">
                                <span
                                  className={`text-[14px] font-extrabold tracking-[-0.01em] ${
                                    tier.highlight ? 'text-[#8e2f23]' : 'text-[#241a10]'
                                  }`}
                                >
                                  {tier.type}
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.08em] font-bold text-[#8b7450]">
                                  {tier.note}
                                </span>
                              </span>
                            </div>
                          </td>

                          <td className="py-4 pr-4 text-[14px] font-bold tabular-nums text-[#241a10] align-middle">
                            {tier.size}
                          </td>

                          <td className="py-4 align-middle">
                            <div className="flex justify-end">
                              <div className="h-1.5 w-24 rounded-full bg-[#dcc7a0] overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    tier.highlight ? 'bg-[#8e2f23]' : 'bg-[#c99a3d]'
                                  }`}
                                  style={{ width: `${tier.level}%` }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-5 text-[11px] leading-relaxed text-[#7d6b4b]">
                  *Capacity and turnaround depend on the production conditions, artwork and requirements of each order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / PROCESS — Horizontal sticky-scroll timeline */}
      <section className="bg-[#f8f1e3] border-t border-[#d3bf98]">
        {/* Header sits above the sticky scroll zone in normal flow */}
        <div className="container-custom pt-20 md:pt-28 pb-10 md:pb-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8e2f23]">04 / PROCESS</p>

            <h2 className="mt-4 text-[clamp(30px,4.2vw,46px)] leading-[1.08] tracking-[-0.03em] font-extrabold text-[#241a10]">
              What you get at each stage
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-[#7a6a4d] max-w-[560px] mx-auto">
              Scroll through the production journey — each milestone shows exactly what happens and what our team
              handles.
            </p>
          </div>
        </div>

        <Timeline
          title="Production Journey"
          periodLabel="Stage 01 – 07"
          backgroundColor="#f8f1e3"
          textColor="#241a10"
          mutedTextColor="#7a6a4d"
          activeColor="#8e2f23"
          imageUrl="/images/screen_print.webp"
          imageAlt="DISCREN screen printing studio — garments on the press table"
          duration={1.4}
          topItems={[
            {
              id: 'stage-01',
              year: 'Stage 01',
              month: 'January',
              content: 'Requirement & Consultation — share artwork, garment details, quantity and print requirements.',
            },
            {
              id: 'stage-02',
              year: 'Stage 02',
              month: 'March',
              content: 'Artwork & Garment Review — technical assessment of artwork, colour separation and fabric behaviour.',
            },
            {
              id: 'stage-03',
              year: 'Stage 03',
              month: 'May',
              content: 'Method & Ink Selection — choosing the right printing approach for your garment, artwork and result.',
            },
            {
              id: 'stage-04',
              year: 'Stage 04',
              month: 'July',
              content: 'Sample & Testing — paid sample production for client review before bulk production begins.',
            },
          ]}
          bottomItems={[
            {
              id: 'stage-05',
              year: 'Stage 05',
              month: 'February',
              content: 'Bulk Production — executing bulk printing to approved sample standards with batch consistency.',
            },
            {
              id: 'stage-06',
              year: 'Stage 06',
              month: 'April',
              content: 'Quality Check — continuous inspection during production to maintain visual and tactile consistency.',
            },
            {
              id: 'stage-07',
              year: 'Stage 07',
              month: 'June',
              content: 'Handover & Dispatch — complete order handover, transport coordination or factory collection.',
            },
          ]}
        />
      </section>

      {/* 05 / OUR WORK — editorial dark gallery */}
      <section className="relative py-20 md:py-28 bg-[#1b120b] text-[#f6ecd8] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-5 top-[28%] text-[clamp(90px,17vw,250px)] leading-none tracking-[-0.1em] font-extrabold text-[#d0a04b]/[0.04] whitespace-nowrap select-none"
        >
          PRINT / PRODUCE
        </div>

        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              dark
              kicker="05 / OUR WORK"
              title="Work That Speaks for Itself."
              lead="A visual selection of printing work across different techniques, garment formats and production requirements."
              className="mb-0"
            />

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#d0a04b] hover:text-[#f8f1e3] transition-colors shrink-0"
            >
              <span>View Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-4 lg:gap-5">
            <Link
              to="/work"
              className="group relative lg:col-span-7 min-h-[420px] lg:min-h-[575px] overflow-hidden rounded-[28px] border border-[#d0a04b]/15 bg-[#251a10]"
            >
              <img
                src={featuredWork[0].image}
                alt={featuredWork[0].title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171008] via-[#171008]/25 to-transparent" />

              <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-[#d0a04b]/25 bg-[#171008]/60 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#f8f1e3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d0a04b]" /> Featured production
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#d0a04b]/15 backdrop-blur text-[10px] uppercase tracking-[0.12em] font-extrabold text-[#f3e6c8]">
                    {featuredWork[0].technique}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#d0a04b]/15 backdrop-blur text-[10px] uppercase tracking-[0.12em] font-extrabold text-[#f3e6c8]">
                    {featuredWork[0].fabric}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-[clamp(26px,3.3vw,44px)] leading-[0.98] tracking-[-0.055em] font-extrabold text-[#f8f1e3]">
                      {featuredWork[0].title}
                    </h3>
                    <p className="hidden md:block max-w-[520px] mt-3 text-[14px] leading-relaxed text-[#e2d2b0]">
                      {featuredWork[0].description}
                    </p>
                  </div>

                  <span className="w-12 h-12 rounded-full bg-[#c69a3a] grid place-items-center shrink-0 text-[#1b120b] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
              {featuredWork.slice(1, 3).map((work, index) => (
                <Link
                  key={work.id}
                  to="/work"
                  className="group relative min-h-[240px] lg:min-h-0 lg:h-[278px] overflow-hidden rounded-[24px] border border-[#d0a04b]/15 bg-[#251a10]"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171008] via-[#171008]/20 to-transparent" />

                  <div className="absolute top-5 right-5 text-[10px] font-extrabold tracking-[0.14em] text-[#d0a04b]">
                    0{index + 2}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                    <span className="text-[10px] uppercase tracking-[0.13em] font-extrabold text-[#d0a04b]">
                      {work.technique}
                    </span>
                    <h3 className="mt-1 text-[20px] lg:text-[23px] leading-tight tracking-[-0.04em] font-extrabold text-[#f8f1e3]">
                      {work.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-5 mt-1">
              {featuredWork.slice(3).map((work, index) => (
                <Link
                  key={work.id}
                  to="/work"
                  className="group flex items-center gap-4 overflow-hidden rounded-[18px] border border-[#d0a04b]/15 bg-[#d0a04b]/[0.04] hover:border-[#c69a3a]/70 hover:bg-[#d0a04b]/[0.07] transition-colors"
                >
                  <img
                    src={work.image}
                    alt=""
                    loading="lazy"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-[12px] object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.13em] font-extrabold text-[#d0a04b]">
                      0{index + 4} / {work.format}
                    </span>
                    <h3 className="mt-1 text-[16px] leading-tight tracking-[-0.03em] font-extrabold text-[#f8f1e3]">
                      {work.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-[#b39a72] truncate">{work.fabric}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 / WORKING TOGETHER — compact spec sheet, two panels side by side */}
      <section className="py-16 md:py-20 bg-[#efe2c6] border-t border-[#d3bf98]">
        <div className="container-custom">
          <div ref={workingTogetherRef}>
            {/* Compact centered header */}
            <div className="wt-reveal mx-auto max-w-[620px] text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cdb68b] bg-[#f8f1e3] px-4 py-1.5 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#7d6b4b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8e2f23]" />
                06 / Working together
              </div>

              <h2 className="mt-5 text-[clamp(28px,3.6vw,44px)] leading-[1.05] tracking-[-0.05em] font-extrabold text-[#241a10]">
                Straightforward printing for apparel businesses.
              </h2>

              <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#6b5738]">
                Clear expectations around quantity, timing and terms — set before your order begins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
              {/* Production Details — light panel */}
              <div className="wt-reveal bg-[#f8f1e3] border border-[#d3bf98] rounded-[20px] p-6 md:p-7">
                <div className="flex items-center gap-2.5 pb-4 mb-1 border-b border-[#d3bf98]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#8e2f23]/10 text-[#8e2f23]">
                    <FileText className="w-4 h-4" />
                  </span>
                  <h3 className="text-[13px] uppercase tracking-[0.16em] font-extrabold text-[#241a10]">
                    Production Details
                  </h3>
                </div>

                <ul className="divide-y divide-[#dcc7a0]">
                  {[
                    { icon: Package, value: '~50 pcs', label: 'Approx. starting MOQ' },
                    { icon: Ruler, value: 'Mixed sizes', label: 'Yes, when properly sorted' },
                    { icon: Sparkles, value: 'Paid sampling', label: 'Available on request' },
                    { icon: IndianRupee, value: 'Quantity pricing', label: 'Can reduce with volume' },
                    { icon: Clock, value: '2–4 weeks', label: 'Typical turnaround' },
                  ].map((item) => (
                    <li key={item.label} className="group flex items-center gap-3.5 py-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#dcc7a0] bg-[#f1e5cc] text-[#8e2f23] transition-colors group-hover:border-[#8e2f23]/30 group-hover:bg-[#8e2f23]/10">
                        <item.icon className="w-4 h-4" />
                      </span>

                      <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2">
                        <span className="text-[15px] font-extrabold tracking-[-0.01em] text-[#241a10]">
                          {item.value}
                        </span>
                        <span className="text-[12px] text-[#8b7450]">{item.label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Terms — dark panel */}
              <div className="wt-reveal bg-[#1b120b] text-[#f6ecd8] rounded-[20px] p-6 md:p-7" style={{ transitionDelay: '120ms' }}>
                <div className="flex items-center gap-2.5 pb-4 mb-1 border-b border-[#d0a04b]/10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#d0a04b]/15 text-[#d0a04b]">
                    <Wallet className="w-4 h-4" />
                  </span>
                  <h3 className="text-[13px] uppercase tracking-[0.16em] font-extrabold text-[#f8f1e3]">
                    Commercial Terms
                  </h3>
                </div>

                <ul className="divide-y divide-[#d0a04b]/10">
                  {[
                    { icon: Banknote, value: '50% advance', label: 'Payment to begin' },
                    { icon: Truck, value: '50% balance', label: 'Due before dispatch' },
                    { icon: MapPin, value: 'Jogeshwari West', label: 'Mumbai facility' },
                    { icon: Factory, value: '1,000+ pcs', label: 'Bulk capacity' },
                  ].map((item) => (
                    <li key={item.label} className="group flex items-center gap-3.5 py-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#d0a04b]/15 bg-[#d0a04b]/[0.08] text-[#d0a04b] transition-colors group-hover:border-[#d0a04b]/40 group-hover:bg-[#d0a04b]/15">
                        <item.icon className="w-4 h-4" />
                      </span>

                      <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2">
                        <span className="text-[15px] font-extrabold tracking-[-0.01em] text-[#f8f1e3]">
                          {item.value}
                        </span>
                        <span className="text-[12px] text-[#b39a72]">{item.label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compact CTA */}
            <div className="wt-reveal mt-8 flex justify-center" style={{ transitionDelay: '220ms' }}>
              <Button
                to="/contact"
                variant="primary"
                className="gap-2 bg-[#8e2f23] hover:bg-[#7a251a] text-[#f8f1e3] border border-[#d0a04b]/30"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — sand band, two-column with a sticky heading */}
      <section className="py-20 md:py-28 bg-[#e8d9ba] border-t border-[#cdb68b]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#8e2f23] font-extrabold mb-3">FAQ</div>

              <h2 className="text-[clamp(30px,4.2vw,46px)] leading-[1.02] tracking-[-0.055em] font-extrabold text-[#241a10] mb-5 max-w-[420px]">
                Frequently Asked Questions
              </h2>

              <p className="text-[16px] text-[#6b5738] leading-relaxed max-w-[400px] mb-6">
                The questions apparel businesses ask us most often about quantities, methods and sampling.
              </p>

              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#241a10] hover:text-[#8e2f23] transition-colors"
              >
                <span>View All Questions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Accordion on a raised paper panel */}
            <div className="bg-[#f8f1e3] border border-[#cdb68b] rounded-[22px] px-6 md:px-8">
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