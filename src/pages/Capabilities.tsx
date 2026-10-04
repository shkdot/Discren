import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { CapabilityDetail } from '../components/CapabilityDetail';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const { hash } = useLocation();
  const [openId, setOpenId] = useState<string | null>('screen-printing');

  // Shared scroll helper for deep links and index clicks.
  const scrollToCapability = useCallback((id: string) => {
    const el = document.getElementById(id);
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

  return (
    <>
      <SEO
        title="Apparel Printing Capabilities — DISCREN"
        description="Explore DISCREN printing capabilities: Screen printing, DTF, 3D puff, high-density silicone, cut panel printing, and finished garment printing in Mumbai."
      />

      <PageHero
        eyebrow="PRODUCTION TECHNIQUES"
        title="Printing Capabilities"
        subtitle="Printing capabilities tailored for different apparel production needs, fabric types, and artwork requirements."
      />

      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.32fr_1fr] gap-8 lg:gap-14 items-start">

            {/* Sticky index rail — a real, working jump nav */}
            <aside className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-4">
                Jump To
              </div>
              <nav className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
                {capabilitiesData.map((cap) => {
                  const active = openId === cap.id;
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => handleIndexClick(cap.id)}
                      aria-current={active ? 'true' : undefined}
                      className={`flex items-center gap-3 text-left rounded-[12px] px-3 py-2.5 whitespace-nowrap lg:whitespace-normal transition-colors ${
                        active
                          ? 'bg-[#1b1a18] text-white'
                          : 'text-[#5f5951] hover:bg-[#fbfaf6] hover:text-[#181715]'
                      }`}
                    >
                      <span className={`text-[11px] font-extrabold tracking-wider shrink-0 ${active ? 'text-[#e37b4f]' : 'text-[#c85d2f]'}`}>
                        {cap.num}
                      </span>
                      <span className="text-[14px] font-bold leading-snug">{cap.title}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Accordion — one open at a time, far less repetition than six stacked cards */}
            <div className="border-t border-[#d9d2c6]">
              {capabilitiesData.map((cap) => {
                const open = openId === cap.id;
                return (
                  <article key={cap.id} id={cap.id} className="scroll-mt-24 border-b border-[#d9d2c6]">
                    <h2>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : cap.id)}
                        aria-expanded={open}
                        className="group w-full text-left py-6 md:py-7 flex items-start justify-between gap-5 focus:outline-none"
                      >
                        <div className="flex items-start gap-4 md:gap-6 min-w-0">
                          <span className="text-[13px] font-extrabold text-[#c85d2f] tracking-wider pt-1.5 shrink-0">
                            {cap.num}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-[24px] md:text-[30px] tracking-[-0.04em] font-extrabold text-[#181715] leading-tight group-hover:text-[#c85d2f] transition-colors">
                              {cap.title}
                            </h3>
                            <p className="text-[14.5px] text-[#5f5951] leading-relaxed mt-2 max-w-[620px]">
                              {cap.shortDesc}
                            </p>
                            {cap.badge && (
                              <span className="inline-block mt-3 text-[10px] uppercase font-bold tracking-[0.12em] px-2.5 py-1 rounded-full bg-[#fbfaf6] text-[#6e6a63] border border-[#d9d2c6]">
                                {cap.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors mt-1 ${
                          open
                            ? 'bg-[#1b1a18] border-[#1b1a18] text-[#e37b4f]'
                            : 'border-[#d9d2c6] text-[#c85d2f] group-hover:border-[#c85d2f]'
                        }`}>
                          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                    </h2>

                    {open && (
                      <div className="pb-10">
                        <CapabilityDetail cap={cap} />
                      </div>
                    )}
                  </article>
                );
              })}
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
