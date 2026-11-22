import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { Button } from '../components/Button';
import { ArrowRight, Layers, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight, SlidersHorizontal, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Capabilities: React.FC = () => {
  const { hash } = useLocation();
  const [openId, setOpenId] = useState<string>('plastisol-printing');
  const heroRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);

  // Deep links from homepage (/capabilities#puff-printing) activate & scroll
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    if (capabilitiesData.some((c) => c.id === id)) {
      setOpenId(id);
      requestAnimationFrame(() => {
        const el = document.getElementById('capabilities-workbench');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [hash]);

  const handleIndexClick = useCallback((id: string) => {
    setOpenId(id);
    requestAnimationFrame(() => {
      const el = document.getElementById('capabilities-workbench');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const currentIndex = useMemo(() => {
    const idx = capabilitiesData.findIndex((c) => c.id === openId);
    return idx >= 0 ? idx : 0;
  }, [openId]);

  const currentCap = capabilitiesData[currentIndex];

  const handlePrevCap = useCallback(() => {
    const prevIndex = (currentIndex - 1 + capabilitiesData.length) % capabilitiesData.length;
    setOpenId(capabilitiesData[prevIndex].id);
  }, [currentIndex]);

  const handleNextCap = useCallback(() => {
    const nextIndex = (currentIndex + 1) % capabilitiesData.length;
    setOpenId(capabilitiesData[nextIndex].id);
  }, [currentIndex]);

  const capabilitiesSchema = useMemo(() => capabilitiesData.map((cap) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: cap.title,
    name: cap.title,
    description: cap.shortDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: 'DISCREN',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite Vijay Vishal Building, Jogeshwari West',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400102',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
  })), []);

  // Lightweight entrance animation — runs once, avoids constant scroll-listener overhead on low-end CPUs
  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;

      gsap.from(hero.querySelectorAll<HTMLElement>('.hero-reveal'), {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      });
    },
    { scope: heroRef }
  );

  return (
    <>
      <SEO
        title="Apparel Printing Capabilities — DISCREN Mumbai"
        description="Discover DISCREN's 7 specialized apparel printing methods in Jogeshwari West, Mumbai: Plastisol, Water-Based, Discharge, High-Density HD, 3D Puff, Metallic Foil, and Reflective Printing."
        keywords="apparel printing capabilities, plastisol printing, water based screen printing, discharge printing on dark fabrics, high density silicone printing, 3D puff printing hoodies, metallic foil printing garments, reflective ink printing Mumbai"
        schema={capabilitiesSchema}
      />

      {/* 00 / Unified High-Performance Hero — Lightweight, zero render lag */}
      <section ref={heroRef} className="relative bg-[#181715] text-white py-16 md:py-28 border-b border-[#292722] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_60%_20%,#2a1f12_0%,#181715_75%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#c85d2f]/10 blur-[90px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-[760px]">
            <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#e37b4f] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e37b4f] animate-pulse" />
              00 / Studio Introduction &amp; Capabilities
            </div>

            <h1 className="hero-reveal text-[clamp(38px,6vw,66px)] leading-[1.0] tracking-[-0.05em] font-extrabold text-white mb-6">
              Printing Capabilities
            </h1>

            <p className="hero-reveal text-[16px] md:text-[19px] leading-relaxed text-[#c2bcaf] mb-8 max-w-[620px]">
              Seven specialized screen-printing techniques engineered on our Mumbai production floor. Tailored for different apparel production needs, fabric types, and artwork requirements.
            </p>

            <div className="hero-reveal flex flex-wrap items-center gap-3 mb-10">
              <Button to="/contact" variant="primary" className="gap-2">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.1] text-white font-extrabold text-[13px] hover:border-[#e37b4f] transition-colors"
              >
                <span>View Production Archive</span>
                <ArrowRight className="w-4 h-4 text-[#e37b4f]" />
              </Link>
            </div>
          </div>

          {/* Quick-Jump Technique Strip — 1-tap navigation */}
          <div className="hero-reveal pt-6 border-t border-white/10">
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-extrabold text-[#8a837a] mb-3">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#e37b4f]" />
              <span>Jump Directly to Any Technique:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {capabilitiesData.map((cap) => {
                const active = openId === cap.id;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => handleIndexClick(cap.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-extrabold transition-all duration-200 ${
                      active
                        ? 'bg-[#c85d2f] text-white shadow-md shadow-[#c85d2f]/30'
                        : 'bg-white/[0.05] text-[#b5af9f] hover:text-white hover:bg-white/[0.1] border border-white/10'
                    }`}
                  >
                    <span className={`text-[10px] ${active ? 'text-white' : 'text-[#e37b4f]'}`}>{cap.num}</span>
                    <span>{cap.title.replace(' Printing', '')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 01 / Production Techniques Dossier Workbench — Active deck prevents rendering all 7 heavy DOMs simultaneously */}
      <section id="capabilities-workbench" className="py-16 md:py-28 bg-[#f4f0e8] scroll-mt-20">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-[#fbfaf6] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#756d63] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2f]" />
                01 / Production Techniques
              </div>
              <h2 className="text-[clamp(30px,4vw,48px)] leading-[1.04] tracking-[-0.05em] font-extrabold text-[#181715]">
                Mastered on Our Print Tables.
              </h2>
              <p className="mt-3 text-[15px] md:text-[17px] text-[#5f5951] leading-relaxed max-w-[620px]">
                Inspect technical specifications, recommended fabric substrates, wash endurance, and engineering considerations for each studio technique.
              </p>
            </div>
            
            <div className="text-[12px] font-bold text-[#8a837a] uppercase tracking-wider shrink-0">
              Showing 07 Studio Techniques
            </div>
          </div>

          {/* Main Grid: Left Rail Selector + Right Active Console Deck */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Rail (Desktop Selector) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-2">
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#756d63] font-extrabold mb-3 px-1 flex items-center justify-between">
                <span>Select Technique</span>
                <span className="text-[#c85d2f] font-bold">07 Options</span>
              </div>
              <nav className="space-y-2" aria-label="Capabilities Navigation">
                {capabilitiesData.map((cap) => {
                  const active = openId === cap.id;
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => setOpenId(cap.id)}
                      className={`w-full text-left rounded-[18px] p-3.5 transition-all duration-200 flex items-center justify-between gap-3 border ${
                        active
                          ? 'bg-[#181715] text-white border-[#181715] shadow-[0_10px_25px_rgba(24,23,21,0.15)] translate-x-1 ring-1 ring-[#c85d2f]/40'
                          : 'bg-[#fbfaf6] text-[#181715] border-[#d9d2c6] hover:border-[#b8afa3] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-[12px] font-extrabold tracking-wider ${
                          active ? 'bg-[#c85d2f]/20 text-[#e37b4f]' : 'bg-[#e7dfd2] text-[#c85d2f]'
                        }`}>
                          {cap.num}
                        </span>
                        <div className="min-w-0">
                          <span className="block text-[14px] font-extrabold tracking-tight truncate">
                            {cap.title}
                          </span>
                          <span className={`block text-[11px] truncate mt-0.5 ${active ? 'text-[#a9a49b]' : 'text-[#756d63]'}`}>
                            {cap.badge ?? 'Specialized Finish'}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${active ? 'text-[#e37b4f] translate-x-0.5' : 'text-[#b8afa3]'}`} />
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Right Deck (Active Capability Dossier Console) — Ultra-optimized single active node */}
            <div ref={deckRef} className="lg:col-span-8">
              {currentCap && (
                <article 
                  key={currentCap.id}
                  id={currentCap.id}
                  className="rounded-[24px] md:rounded-[32px] border border-[#d9d2c6] bg-[#fbfaf6] p-6 md:p-8 lg:p-10 shadow-[0_16px_45px_rgba(77,61,43,0.06)] animate-fade-in"
                >
                  {/* Top Badges & Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#d9d2c6]">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#c85d2f] text-white text-[10.5px] font-extrabold px-3 py-1 uppercase tracking-wider">
                        Stage {currentCap.num}
                      </span>
                      {currentCap.badge && (
                        <span className="rounded-full border border-[#d9d2c6] bg-[#f4f0e8] text-[#5f5951] text-[10.5px] font-bold px-3 py-1 uppercase tracking-wider">
                          {currentCap.badge}
                        </span>
                      )}
                    </div>
                    
                    <span className="text-[11px] font-bold text-[#8a837a] uppercase tracking-wider">
                      Technical Spec #{currentCap.id.replace('-printing', '').toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6">
                    <h3 className="text-[clamp(26px,3.2vw,40px)] leading-[1.08] tracking-[-0.04em] font-extrabold text-[#181715]">
                      {currentCap.title}
                    </h3>
                    <p className="mt-3.5 text-[15.5px] md:text-[17px] text-[#4a453f] leading-relaxed">
                      {currentCap.fullDesc}
                    </p>
                  </div>

                  {/* Visual Specimen + Metric Badges */}
                  <div className="mt-7 grid md:grid-cols-12 gap-5 items-stretch">
                    <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto min-h-[240px] rounded-[20px] overflow-hidden bg-[#242220] border border-[#d9d2c6] group">
                      <img
                        src={currentCap.image}
                        alt={currentCap.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181715]/85 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                        <span className="text-[10.5px] font-extrabold uppercase tracking-wider">
                          DISCREN Studio Proof
                        </span>
                        <span className="text-[9.5px] uppercase font-bold tracking-widest text-[#e37b4f] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                          Macro Tested
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-2.5">
                      <div className="rounded-[15px] border border-[#d9d2c6] bg-[#f4f0e8] p-3.5 flex flex-col justify-center">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                          Starting MOQ
                        </span>
                        <span className="text-[17px] font-extrabold text-[#181715] mt-0.5">
                          ~50 Pieces
                        </span>
                        <span className="text-[11px] text-[#6e6a63]">Scalable to 1,000+</span>
                      </div>

                      <div className="rounded-[15px] border border-[#d9d2c6] bg-[#f4f0e8] p-3.5 flex flex-col justify-center">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                          Sample Turnaround
                        </span>
                        <span className="text-[17px] font-extrabold text-[#c85d2f] mt-0.5">
                          3–5 Working Days
                        </span>
                        <span className="text-[11px] text-[#6e6a63]">Paid strike-off approval</span>
                      </div>

                      <div className="col-span-2 md:col-span-1 rounded-[15px] border border-[#d9d2c6] bg-[#f4f0e8] p-3.5 flex flex-col justify-center">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                          Wash Fastness
                        </span>
                        <span className="text-[17px] font-extrabold text-[#181715] mt-0.5">
                          50+ Commercial Cycles
                        </span>
                        <span className="text-[11px] text-[#6e6a63]">Heat tunnel cured at 160°C+</span>
                      </div>
                    </div>
                  </div>

                  {/* Substrates & Production Use Cases */}
                  <div className="mt-8 pt-7 border-t border-[#d9d2c6] grid md:grid-cols-2 gap-7">
                    {/* Suitable Fabrics */}
                    <div>
                      <h4 className="text-[11.5px] uppercase tracking-[0.14em] font-extrabold text-[#181715] mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#c85d2f]" />
                        <span>Suitable Fabrics &amp; Substrates</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentCap.suitableFabrics.map((fabric) => (
                          <span
                            key={fabric}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d2c6] bg-[#f4f0e8] px-3 py-1.5 text-[12px] font-bold text-[#181715]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2f]" />
                            {fabric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Best Production Use Cases */}
                    <div>
                      <h4 className="text-[11.5px] uppercase tracking-[0.14em] font-extrabold text-[#181715] mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#c85d2f]" />
                        <span>Best Production Use Cases</span>
                      </h4>
                      <ul className="space-y-2 text-[13.5px] text-[#4a453f]">
                        {currentCap.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c85d2f] shrink-0 mt-0.5" />
                            <span className="leading-snug">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Production & Engineering Notes */}
                  <div className="mt-7 rounded-[18px] border border-[#c9c0b2] bg-[#ece5d8] p-5">
                    <h4 className="text-[11.5px] uppercase tracking-[0.14em] font-extrabold text-[#181715] mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#c85d2f]" />
                      <span>Production &amp; Engineering Notes</span>
                    </h4>
                    <ul className="space-y-2 text-[13px] text-[#4a453f]">
                      {currentCap.considerations.map((consideration) => (
                        <li key={consideration} className="flex items-start gap-2">
                          <span className="text-[#c85d2f] font-bold shrink-0">—</span>
                          <span className="leading-snug">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action & Navigation Bar */}
                  <div className="mt-8 pt-6 border-t border-[#d9d2c6] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrevCap}
                        aria-label="Previous capability"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#d9d2c6] bg-[#f4f0e8] hover:bg-white text-[12px] font-bold text-[#181715] transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4 text-[#c85d2f]" />
                        <span>Prev</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNextCap}
                        aria-label="Next capability"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#d9d2c6] bg-[#f4f0e8] hover:bg-white text-[12px] font-bold text-[#181715] transition-colors"
                      >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4 text-[#c85d2f]" />
                      </button>
                      <span className="text-[12px] font-bold text-[#756d63] ml-2">
                        {currentCap.num} of 07
                      </span>
                    </div>

                    <Button
                      to={`/contact?method=${encodeURIComponent(currentCap.title)}`}
                      variant="primary"
                      className="justify-center gap-2"
                    >
                      <span>Discuss {currentCap.title} Requirement</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                </article>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Dark comparison band — breaks the cream and answers "which method?" at a glance */}
      <section className="py-16 md:py-24 bg-[#1b1a18] text-white">
        <div className="container-custom">
          <div className="max-w-[640px] mb-12">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#e37b4f] font-extrabold mb-3">
              SIDE BY SIDE
            </div>
            <h2 className="text-[clamp(30px,4.4vw,48px)] leading-[1.05] tracking-[-0.05em] font-extrabold mb-4">
              Every Capability, One Glance.
            </h2>
            <p className="text-[16px] md:text-[17px] text-[#d1ccc4] leading-relaxed">
              Not sure which method suits your garment? Send us the artwork and fabric details — we'll recommend the approach that matches the result you're after.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {capabilitiesData.map((cap) => (
              <button
                key={cap.id}
                type="button"
                onClick={() => handleIndexClick(cap.id)}
                className="group text-left rounded-[18px] overflow-hidden bg-[#242220] border border-white/10 hover:border-[#e37b4f]/70 transition-colors duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#181715]">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] font-extrabold tracking-wider text-[#e37b4f]">{cap.num}</span>
                  <h3 className="text-[17px] tracking-[-0.03em] font-extrabold text-white mt-1.5 mb-2.5 transition-colors group-hover:text-[#e37b4f]">
                    {cap.title}
                  </h3>
                  <p className="text-[12.5px] text-[#a9a49b] leading-relaxed mb-4">{cap.shortDesc}</p>
                  <span className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between text-[11.5px] font-extrabold text-[#e37b4f]">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
