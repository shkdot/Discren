import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { Button } from '../components/Button';
import { ArrowRight, Layers, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Capabilities: React.FC = () => {
  const { hash } = useLocation();
  const [openId, setOpenId] = useState<string | null>('plastisol-printing');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const heroRef = useRef<HTMLDivElement>(null);

  // Deep links from homepage (/capabilities#puff-printing) open + scroll.
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    if (capabilitiesData.some((c) => c.id === id)) {
      setOpenId(id);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [hash]);

  const handleIndexClick = (id: string) => {
    setOpenId(id);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const currentIndex = capabilitiesData.findIndex((c) => c.id === openId);
  const currentCap = capabilitiesData[currentIndex >= 0 ? currentIndex : 0];

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

  useGSAP(
    () => {
      // Hero section animation
      const hero = heroRef.current;
      if (hero) {
        gsap.from(hero.querySelectorAll<HTMLElement>('.hero-reveal'), {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hero,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      capabilitiesData.forEach((cap) => {
        const section = sectionRefs.current[cap.id];
        if (!section) return;

        gsap.from(section.querySelectorAll<HTMLElement>('.cap-reveal'), {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    []
  );

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

      {/* 00 / Capabilities Hero — Premium intro section */}
      <section ref={heroRef} className="relative bg-[#181715] text-white py-20 md:py-32 border-b border-[#292722] overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_60%_20%,#2a1f12_0%,#181715_70%)]" />
        <div aria-hidden="true" className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#c85d2f]/12 blur-[100px]" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#c85d2f]/10 blur-[100px]" />

        <div className="container-custom relative z-10">
          <div className="hero-reveal max-w-[700px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-[#fbfaf6] px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#756d63] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2f] animate-pulse" />
              00 / Studio Introduction
            </div>
            <h1 className="text-[clamp(40px,6vw,64px)] leading-[1.0] tracking-[-0.05em] font-extrabold text-white mb-6">
              Printing Capabilities
            </h1>
            <p className="text-[16px] md:text-[19px] leading-relaxed text-[#c2bcaf] mb-10 max-w-[560px]">
              Seven specialized print techniques. One Mumbai production studio. Each method below has its own dedicated section with technical specs, fabric compatibility, and engineering notes.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button to="/contact" variant="primary" className="gap-2">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#c9c0b2] bg-[#f4f0e8] text-[#181715] font-extrabold text-[13px] hover:bg-[#e37b4f] hover:border-[#e37b4f] hover:text-white transition-colors"
              >
                <span>View Production Archive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 01 / Production Techniques — Each technique is its own scroll section */}
      <section id="capabilities-workbench" className="py-16 md:py-32 bg-[#f4f0e8]">
        <div className="container-custom">
          
          {/* Index Rail */}
          <div className="cap-reveal mb-16 md:mb-24 flex flex-wrap items-center gap-3 overflow-x-auto scrollbar-none pb-4">
            {capabilitiesData.map((cap) => {
              const active = openId === cap.id;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => handleIndexClick(cap.id)}
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

          {/* Individual Technique Sections */}
          {capabilitiesData.map((cap) => {
            const active = openId === cap.id;
            const isPlastisol = cap.id === 'plastisol-printing';

            return (
              <section
                key={cap.id}
                id={cap.id}
                ref={(el) => (sectionRefs.current[cap.id] = el)}
                className={`relative mb-24 md:mb-32 cap-reveal-inner overflow-hidden ${active ? 'opacity-100' : 'opacity-20 pointer-events-none'} ${isPlastisol ? 'bg-[#14120e]/40 rounded-[32px] border border-[#242220]/60 p-8 md:p-12' : ''}`}
              >
                {/* Technique Badge & Title */}
                <div className="cap-reveal mb-8 md:mb-12 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] font-extrabold mb-3 ${
                      isPlastisol
                        ? 'border-[#c85d2f]/40 bg-[#c85d2f]/10 text-[#e37b4f]'
                        : 'border-[#c9c0b2] bg-[#fbfaf6] text-[#756d63]'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isPlastisol ? 'bg-[#e37b4f]' : 'bg-[#c85d2f]'}`} />
                      Stage {cap.num}
                    </span>
                    <h3 className={`text-[clamp(30px,4vw,48px)] leading-[1.02] tracking-[-0.04em] font-extrabold mb-4 ${isPlastisol ? 'text-[#e2dccf]' : 'text-[#181715]'}`}>
                      {cap.title}
                    </h3>
                    <p className={`text-[15px] md:text-[17px] leading-relaxed max-w-[600px] ${isPlastisol ? 'text-[#c2bcaf]' : 'text-[#5f5951]'}`}>
                      {cap.fullDesc}
                    </p>
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider hidden md:block ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#8a837a]'}`}>
                    Technical Spec #{cap.id.replace('-printing', '').toUpperCase()}
                  </span>
                </div>

                {/* Image + Specs Grid */}
                <div className={`cap-reveal-inner grid lg:grid-cols-12 gap-6 lg:gap-8 items-start ${isPlastisol ? 'pt-8' : ''}`}>
                  <div className="lg:col-span-7 relative aspect-[4/3] md:aspect-auto min-h-[320px] md:min-h-[420px] rounded-[24px] overflow-hidden bg-[#242220] border border-[#d9d2c6] group">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-${isPlastisol ? '85' : '90'} group-hover:opacity-100 ${isPlastisol ? 'grayscale-20 group-hover:grayscale-0 duration-1000' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181715]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${isPlastisol ? 'text-[#e37b4f]' : 'text-white'}`}>
                        DISCREN Studio Proof
                      </span>
                      <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full backdrop-blur-md ${isPlastisol ? 'text-white bg-[#c85d2f]/20 border border-[#c85d2f]/40' : 'text-[#e37b4f] bg-black/60 border border-[#c85d2f]/40'}`}>
                        Macro Tested
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    <div className={`rounded-[16px] p-4 flex flex-col justify-center border ${isPlastisol ? 'border-[#c85d2f]/30 bg-[#c85d2f]/5' : 'border-[#d9d2c6] bg-[#f4f0e8]'}`}>
                      <span className={`block text-[10px] uppercase tracking-[0.14em] font-extrabold mb-1 ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#756d63]'}`}>
                        Starting MOQ
                      </span>
                      <span className={`block text-[18px] font-extrabold mt-1 ${isPlastisol ? 'text-white' : 'text-[#181715]'}`}>
                        ~50 Pieces
                      </span>
                      <span className={`block text-[11px] mt-0.5 ${isPlastisol ? 'text-[#c2bcaf]' : 'text-[#6e6a63]'}`}>
                        Scalable to 1,000+
                      </span>
                    </div>

                    <div className={`rounded-[16px] p-4 flex flex-col justify-center border ${isPlastisol ? 'border-[#c85d2f]/30 bg-[#c85d2f]/5' : 'border-[#d9d2c6] bg-[#f4f0e8]'}`}>
                      <span className={`block text-[10px] uppercase tracking-[0.14em] font-extrabold mb-1 ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#756d63]'}`}>
                        Sample Turnaround
                      </span>
                      <span className={`block text-[18px] font-extrabold mt-1 ${isPlastisol ? 'text-white' : 'text-[#c85d2f]'}`}>
                        3–5 Working Days
                      </span>
                      <span className={`block text-[11px] mt-0.5 ${isPlastisol ? 'text-[#c2bcaf]' : 'text-[#6e6a63]'}`}>
                        Paid strike-off approval
                      </span>
                    </div>

                    <div className={`col-span-2 lg:col-span-1 rounded-[16px] p-4 flex flex-col justify-center border ${isPlastisol ? 'border-[#c85d2f]/30 bg-[#c85d2f]/5' : 'border-[#d9d2c6] bg-[#f4f0e8]'}`}>
                      <span className={`block text-[10px] uppercase tracking-[0.14em] font-extrabold mb-1 ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#756d63]'}`}>
                        Wash Fastness
                      </span>
                      <span className={`block text-[18px] font-extrabold mt-1 ${isPlastisol ? 'text-white' : 'text-[#181715]'}`}>
                        50+ Commercial Cycles
                      </span>
                      <span className={`block text-[11px] mt-0.5 ${isPlastisol ? 'text-[#c2bcaf]' : 'text-[#6e6a63]'}`}>
                        Heat tunnel cured at 160°C+
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fabrics & Use Cases */}
                <div className={`cap-reveal mt-12 md:mt-16 pt-10 border-t ${isPlastisol ? 'border-[#c85d2f]/30' : 'border-[#d9d2c6]'} grid md:grid-cols-2 gap-8`}>
                  <div>
                    <h4 className={`text-[11px] uppercase tracking-[0.16em] font-extrabold mb-4 flex items-center gap-2 ${isPlastisol ? 'text-[#e2dccf]' : 'text-[#181715]'}`}>
                      <Layers className={`w-3.5 h-3.5 ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#c85d2f]'}`} />
                      <span>Suitable Fabrics &amp; Substrates</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cap.suitableFabrics.map((fabric) => (
                        <span
                          key={fabric}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold ${isPlastisol ? 'border-[#c85d2f]/30 bg-[#c85d2f]/10 text-[#e2dccf]' : 'border-[#d9d2c6] bg-[#f4f0e8] text-[#181715]'}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isPlastisol ? 'bg-[#e37b4f]' : 'bg-[#c85d2f]'}`} />
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-[11px] uppercase tracking-[0.16em] font-extrabold mb-4 flex items-center gap-2 ${isPlastisol ? 'text-[#e2dccf]' : 'text-[#181715]'}`}>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#c85d2f]'}`} />
                      <span>Best Production Use Cases</span>
                    </h4>
                    <ul className="space-y-3">
                      {cap.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-bold text-[10px] ${isPlastisol ? 'bg-[#c85d2f]/20 text-[#e37b4f]' : 'bg-[#f4f0e8] text-[#c85d2f]'}`}>
                            {i + 1}
                          </span>
                          <span className={`text-[13px] leading-relaxed ${isPlastisol ? 'text-[#c2bcaf]' : 'text-[#4a453f]'}`}>
                            {useCase}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Engineering Considerations */}
                <div className={`cap-reveal-inner mt-12 md:mt-16 rounded-[20px] p-6 md:p-8 border ${isPlastisol ? 'border-[#c85d2f]/30 bg-[#c85d2f]/5' : 'border-[#c9c0b2] bg-[#ece5d8]'}`}>
                  <h4 className={`text-[11px] uppercase tracking-[0.16em] font-extrabold mb-3 flex items-center gap-2 ${isPlastisol ? 'text-[#e2dccf]' : 'text-[#181715]'}`}>
                    <AlertCircle className={`w-3.5 h-3.5 ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#c85d2f]'}`} />
                    <span>Production &amp; Engineering Notes</span>
                  </h4>
                  <ul className={`space-y-3 text-[13px] leading-relaxed ${isPlastisol ? 'text-[#c2bcaf]' : 'text-[#4a453f]'}`}>
                    {cap.considerations.map((consideration, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`text-[#c85d2f] font-bold shrink-0 text-[11px] ${isPlastisol ? 'text-[#e37b4f]' : ''}`}>—</span>
                        <span>{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className={`cap-reveal mt-10 md:mt-14 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 ${isPlastisol ? 'pt-6 border-t border-[#c85d2f]/20' : ''}`}>
                  <Button
                    to={`/contact?method=${encodeURIComponent(cap.title)}`}
                    variant="primary"
                    className={`justify-center gap-2 ${isPlastisol ? 'shadow-[0_0_30px_rgba(200,93,47,0.25)]' : ''}`}
                  >
                    <span>Discuss {cap.title} Requirement</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  {currentIndex < capabilitiesData.length - 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        const nextCap = capabilitiesData[currentIndex + 1];
                        setOpenId(nextCap.id);
                        requestAnimationFrame(() => {
                          const el = document.getElementById(nextCap.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        });
                      }}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-[13px] font-extrabold transition-colors ${isPlastisol ? 'border-[#c85d2f]/30 bg-[#c85d2f]/5 text-[#e2dccf] hover:bg-[#c85d2f]/10' : 'border-[#d9d2c6] bg-white text-[#181715] hover:bg-[#f4f0e8]'}`}
                    >
                      <span>Next Technique →</span>
                      <ChevronRight className={`w-4 h-4 ${isPlastisol ? 'text-[#e37b4f]' : 'text-[#c85d2f]'}`} />
                    </button>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
};
