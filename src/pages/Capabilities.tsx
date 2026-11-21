import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { Button } from '../components/Button';
import { ArrowRight, Layers, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const { hash } = useLocation();
  const [openId, setOpenId] = useState<string | null>('plastisol-printing');

  // Shared scroll helper for deep links and index clicks.
  const scrollToCapability = useCallback((id: string) => {
    const el = document.getElementById('capabilities-workbench') || document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Deep links from the homepage (/capabilities#puff-printing) open + scroll.
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    if (capabilitiesData.some((c) => c.id === id)) {
      setOpenId(id);
      // Defer so the panel is expanded before we measure its position.
      requestAnimationFrame(() => scrollToCapability(id));
    }
  }, [hash, scrollToCapability]);

  const handleIndexClick = (id: string) => {
    setOpenId(id);
    requestAnimationFrame(() => scrollToCapability(id));
  };

  const currentIndex = capabilitiesData.findIndex((c) => c.id === openId);
  const currentCap = capabilitiesData[currentIndex >= 0 ? currentIndex : 0];

  const handlePrevCap = () => {
    const prevIndex = (currentIndex - 1 + capabilitiesData.length) % capabilitiesData.length;
    setOpenId(capabilitiesData[prevIndex].id);
  };

  const handleNextCap = () => {
    const nextIndex = (currentIndex + 1) % capabilitiesData.length;
    setOpenId(capabilitiesData[nextIndex].id);
  };

  const capabilitiesSchema = capabilitiesData.map((cap) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: cap.title,
    name: cap.title,
    description: cap.description,
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
  }));

  return (
    <>
      <SEO
        title="Apparel Printing Capabilities — DISCREN Mumbai"
        description="Discover DISCREN's 7 specialized apparel printing methods in Jogeshwari West, Mumbai: Plastisol, Water-Based, Discharge, High-Density HD, 3D Puff, Metallic Foil, and Reflective Printing."
        keywords="apparel printing capabilities, plastisol printing, water based screen printing, discharge printing on dark fabrics, high density silicone printing, 3D puff printing hoodies, metallic foil printing garments, reflective ink printing Mumbai"
        schema={capabilitiesSchema}
      />

      {/* Hero Section — visual infographic + centered text */}
      <section className="relative bg-[#f4f0e8] border-b border-[#d9d2c6]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-hero-image.webp"
            alt="DISCREN Apparel Printing Studio Production"
            className="w-full h-full object-cover object-right opacity-60"
          />
          <div className="absolute inset-0 bg-[#f4f0e8]/85" />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-[#fbfaf6] px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-extrabold text-[#756d63] mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-[#c85d2f]" />
            Production Techniques
          </div>

          <h1 className="text-[clamp(36px,7vw,72px)] leading-[0.98] tracking-[-0.06em] font-extrabold text-[#181715] max-w-[800px] mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Printing Capabilities
          </h1>

          <p className="max-w-[700px] text-[17px] md:text-[20px] leading-relaxed text-[#5f5951] mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Tailored for different apparel production needs, fabric types, and artwork requirements.
          </p>

          {/* Technique infographic strip */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-8 opacity-0 transition-opacity duration-1000" style={{ animationDelay: '0.4s' }}>
            {capabilitiesData.map((cap) => (
              <button
                key={cap.id}
                type="button"
                onClick={() => handleIndexClick(cap.id)}
                className={`group relative shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#d9d2c6] bg-white flex items-center justify-center transition-all hover:border-[#c85d2f] hover:shadow-[0_10px_30px_rgba(200,93,47,0.15)]`}
              >
                <span className="text-[11px] md:text-[13px] font-extrabold tracking-wider text-[#181715] group-hover:text-[#c85d2f]">
                  {cap.num}
                </span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-[11px] font-bold text-[#6e6a63] opacity-0 group-hover:opacity-100 transition-opacity">
                  {cap.title.replace(' Printing', '')}
                </span>
              </button>
            ))}
          </div>

          <p className="text-[12px] md:text-[13px] tracking-[0.2em] uppercase text-[#756d63] font-extrabold animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Select a technique to inspect technical specifications
          </p>
        </div>
      </section>

      <section id="capabilities-workbench" className="py-16 md:py-28 bg-[#f4f0e8] scroll-mt-20">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-[#fbfaf6] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#756d63] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2f]" />
                01 / Production Techniques
              </div>
              <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.02] tracking-[-0.05em] font-extrabold text-[#181715]">
                Mastered on Our Print Tables.
              </h2>
              <p className="mt-4 text-[16px] md:text-[17px] text-[#5f5951] leading-relaxed max-w-[620px]">
                From breathable zero-hand water-based formulations to dimensional 3D silicone emblems — select any technique below to inspect technical specifications, fabric compatibility, and engineering considerations.
              </p>
            </div>
            
            <div className="text-[12px] font-bold text-[#8a837a] uppercase tracking-wider shrink-0">
              Showing 07 Studio Techniques
            </div>
          </div>

          {/* Mobile Swiper Bar */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none -mx-2 px-2">
            {capabilitiesData.map((cap) => {
              const active = openId === cap.id;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setOpenId(cap.id)}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-extrabold transition-all ${
                    active
                      ? 'bg-[#181715] text-white shadow-md'
                      : 'bg-[#fbfaf6] text-[#6e6a63] border border-[#d9d2c6]'
                  }`}
                >
                  <span className={`text-[11px] ${active ? 'text-[#e37b4f]' : 'text-[#c85d2f]'}`}>{cap.num}</span>
                  <span>{cap.title.replace(' Printing', '')}</span>
                </button>
              );
            })}
          </div>

          {/* Main Grid: Left Rail Selector + Right Interactive Deck */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Rail (Desktop Selector) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-2.5">
              <div className="text-[11px] tracking-[0.16em] uppercase text-[#756d63] font-extrabold mb-3 px-1 flex items-center justify-between">
                <span>Select Technique</span>
                <span className="text-[#c85d2f]">07 Options</span>
              </div>
              <nav className="space-y-2" aria-label="Capabilities Navigation">
                {capabilitiesData.map((cap) => {
                  const active = openId === cap.id;
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => setOpenId(cap.id)}
                      className={`w-full text-left rounded-[18px] p-4 transition-all duration-300 flex items-center justify-between gap-3 border ${
                        active
                          ? 'bg-[#181715] text-white border-[#181715] shadow-[0_12px_28px_rgba(24,23,21,0.18)] translate-x-1.5 ring-1 ring-[#c85d2f]/40'
                          : 'bg-[#fbfaf6] text-[#181715] border-[#d9d2c6] hover:border-[#b8afa3] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-[12px] font-extrabold tracking-wider ${
                          active ? 'bg-[#c85d2f]/20 text-[#e37b4f]' : 'bg-[#e7dfd2] text-[#c85d2f]'
                        }`}>
                          {cap.num}
                        </span>
                        <div className="min-w-0">
                          <span className="block text-[14.5px] font-extrabold tracking-tight truncate">
                            {cap.title}
                          </span>
                          <span className={`block text-[11px] font-medium truncate mt-0.5 ${active ? 'text-[#a9a49b]' : 'text-[#756d63]'}`}>
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

            {/* Right Deck (Active Capability Dossier Console) */}
            <div className="lg:col-span-8">
              {currentCap && (
                <div 
                  key={currentCap.id}
                  className="rounded-[28px] md:rounded-[34px] border border-[#d9d2c6] bg-[#fbfaf6] p-6 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(77,61,43,0.08)] animate-fade-in"
                >
                  {/* Top Badges & Title */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#d9d2c6]">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-full bg-[#c85d2f] text-white text-[11px] font-extrabold px-3 py-1 uppercase tracking-wider">
                        Stage {currentCap.num}
                      </span>
                      {currentCap.badge && (
                        <span className="rounded-full border border-[#d9d2c6] bg-[#f4f0e8] text-[#5f5951] text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                          {currentCap.badge}
                        </span>
                      )}
                    </div>
                    
                    <span className="text-[12px] font-bold text-[#8a837a] uppercase tracking-wider">
                      Technical Spec #{currentCap.id.replace('-printing', '').toUpperCase()}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-[clamp(28px,3.5vw,44px)] leading-[1.05] tracking-[-0.04em] font-extrabold text-[#181715]">
                      {currentCap.title}
                    </h3>
                    <p className="mt-4 text-[16px] md:text-[17px] text-[#4a453f] leading-relaxed">
                      {currentCap.fullDesc}
                    </p>
                  </div>

                  {/* Visual Specimen + Key Parameters Banner */}
                  <div className="mt-8 grid md:grid-cols-12 gap-6 items-stretch">
                    <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto min-h-[260px] rounded-[22px] overflow-hidden bg-[#242220] border border-[#d9d2c6] group">
                      <img
                        src={currentCap.image}
                        alt={currentCap.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181715]/85 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider">
                          DISCREN Studio Proof
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#e37b4f] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                          Macro Tested
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-3">
                      <div className="rounded-[16px] border border-[#d9d2c6] bg-[#f4f0e8] p-4 flex flex-col justify-center">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                          Starting MOQ
                        </span>
                        <span className="text-[18px] font-extrabold text-[#181715] mt-1">
                          ~50 Pieces
                        </span>
                        <span className="text-[11px] text-[#6e6a63]">Scalable to 1,000+</span>
                      </div>

                      <div className="rounded-[16px] border border-[#d9d2c6] bg-[#f4f0e8] p-4 flex flex-col justify-center">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                          Sample Turnaround
                        </span>
                        <span className="text-[18px] font-extrabold text-[#c85d2f] mt-1">
                          3–5 Working Days
                        </span>
                        <span className="text-[11px] text-[#6e6a63]">Paid strike-off approval</span>
                      </div>

                      <div className="col-span-2 md:col-span-1 rounded-[16px] border border-[#d9d2c6] bg-[#f4f0e8] p-4 flex flex-col justify-center">
                        <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#756d63]">
                          Wash Fastness
                        </span>
                        <span className="text-[18px] font-extrabold text-[#181715] mt-1">
                          50+ Commercial Cycles
                        </span>
                        <span className="text-[11px] text-[#6e6a63]">Heat tunnel cured at 160°C+</span>
                      </div>
                    </div>
                  </div>

                  {/* Fabrics & Production Use Cases */}
                  <div className="mt-8 pt-8 border-t border-[#d9d2c6] grid md:grid-cols-2 gap-8">
                    {/* Suitable Fabrics */}
                    <div>
                      <h4 className="text-[12px] uppercase tracking-[0.14em] font-extrabold text-[#181715] mb-3.5 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#c85d2f]" />
                        <span>Suitable Fabrics &amp; Substrates</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentCap.suitableFabrics.map((fabric) => (
                          <span
                            key={fabric}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d2c6] bg-[#f4f0e8] px-3 py-1.5 text-[12.5px] font-bold text-[#181715]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2f]" />
                            {fabric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Best Use Cases */}
                    <div>
                      <h4 className="text-[12px] uppercase tracking-[0.14em] font-extrabold text-[#181715] mb-3.5 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#c85d2f]" />
                        <span>Best Production Use Cases</span>
                      </h4>
                      <ul className="space-y-2 text-[13.5px] text-[#4a453f]">
                        {currentCap.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#c85d2f] shrink-0 mt-0.5" />
                            <span className="leading-snug">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Engineering Considerations Callout */}
                  <div className="mt-8 rounded-[20px] border border-[#c9c0b2] bg-[#ece5d8] p-5 md:p-6">
                    <h4 className="text-[12px] uppercase tracking-[0.14em] font-extrabold text-[#181715] mb-2.5 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#c85d2f]" />
                      <span>Production &amp; Engineering Notes</span>
                    </h4>
                    <ul className="space-y-2 text-[13.5px] text-[#4a453f]">
                      {currentCap.considerations.map((consideration) => (
                        <li key={consideration} className="flex items-start gap-2">
                          <span className="text-[#c85d2f] font-bold shrink-0">—</span>
                          <span className="leading-snug">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Navigation & Action Bar */}
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

                </div>
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
