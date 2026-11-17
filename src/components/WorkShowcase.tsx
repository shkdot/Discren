import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WorkItem, workData } from '../data/workData';
import { WorkLightbox } from './WorkLightbox';
import { ArrowRight, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const WorkShowcase: React.FC = () => {
  const [activeWorkId, setActiveWorkId] = useState<string>(workData[0]?.id || '');
  const [lightboxItem, setLightboxItem] = useState<WorkItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeWork = workData.find((item) => item.id === activeWorkId) || workData[0];
  const activeIndex = workData.findIndex((item) => item.id === activeWork.id);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.from(section.querySelectorAll<HTMLElement>('.work-reveal'), {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(section.querySelectorAll<HTMLElement>('.work-reveal-inner'), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    },
    { scope: sectionRef }
  );

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + workData.length) % workData.length;
    setActiveWorkId(workData[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % workData.length;
    setActiveWorkId(workData[newIndex].id);
  };

  return (
    <section ref={sectionRef} id="our-work" className="relative py-20 md:py-32 bg-[#0f0e0c] text-white overflow-hidden border-t border-white/8">
      {/* Ambient background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#c85d2f]/12 via-[#c85d2f]/4 to-transparent blur-[100px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-[10%] text-[clamp(90px,16vw,240px)] leading-none tracking-[-0.12em] font-extrabold text-white/[0.012] whitespace-nowrap select-none">
        DISCREN / ARCHIVE
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="work-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-20">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#e37b4f] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e37b4f] animate-pulse" />
              05 / Production Archive
            </div>
            <h2 className="text-[clamp(30px,4.2vw,52px)] leading-[1.0] tracking-[-0.05em] font-extrabold text-white mb-4">
              Work That Speaks for Itself.
            </h2>
            <p className="text-[14px] md:text-[16px] leading-relaxed text-[#9c9588] max-w-[540px]">
              A tactile inspection of screen prints executed in our Jogeshwari West studio.
              Explore print profile heights, ink formulation textures, and fabric behaviour.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/12 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#e37b4f] text-[12px] font-extrabold text-white transition-all duration-300"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#e37b4f] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* FEATURED SHOWCASE */}
        <div className="work-reveal-inner relative rounded-[24px] md:rounded-[32px] border border-white/8 bg-[#171614]/80 backdrop-blur-md overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
          <div className="grid lg:grid-cols-12 items-start gap-0 lg:gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[480px] bg-[#12110f] overflow-hidden group">
              <img
                src={activeWork.image}
                alt={activeWork.title}
                key={activeWork.id}
                className="w-full h-full object-cover transition-transform duration-1200 ease-out group-hover:scale-104 opacity-85 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-[#0f0e0c]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#171614]/30 lg:to-[#171614]" />

              <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/16 bg-[#11100e]/80 backdrop-blur-md px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] font-extrabold text-[#e2dccf] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e37b4f]" />
                  {activeWork.category}
                </span>
                <span className="rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] font-bold text-[#9c9588]">
                  {activeWork.format}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxItem(activeWork)}
                className="absolute bottom-6 right-6 z-30 flex items-center gap-2 rounded-full border border-white/14 bg-[#11100e]/85 backdrop-blur-md px-4 py-2.5 text-[10px] uppercase tracking-wider font-extrabold text-[#e2dccf] hover:bg-[#c85d2f] hover:border-[#c85d2f] hover:text-white transition-all shadow-[0_10px_24px_rgba(0,0,0,0.4)]"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">Inspect High-Res Specs</span>
                <span className="sm:hidden">Inspect</span>
              </button>

              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous work piece"
                  className="w-8 h-8 rounded-full border border-white/12 bg-[#11100e]/70 backdrop-blur-md grid place-items-center text-[#e2dccf] hover:bg-[#c85d2f] hover:border-[#c85d2f] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next work piece"
                  className="w-8 h-8 rounded-full border border-white/12 bg-[#11100e]/70 backdrop-blur-md grid place-items-center text-[#e2dccf] hover:bg-[#c85d2f] hover:border-[#c85d2f] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-bold text-[#7a7468] pl-2 tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(workData.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Detail Column */}
            <div className="lg:col-span-5 p-5 md:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#e37b4f]">
                    {activeWork.technique}
                  </span>
                  <span className="text-[10px] font-extrabold text-[#5d564f] tabular-nums">
                    REF #{activeWork.id.toUpperCase().replace('-', '')}
                  </span>
                </div>

                <h3 className="text-[clamp(22px,2.6vw,34px)] leading-[1.04] tracking-[-0.04em] font-extrabold text-white mb-4">
                  {activeWork.title}
                </h3>

                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#b5af9f] mb-7">
                  {activeWork.description}
                </p>

                {/* Tactile Specs */}
                <div className="grid grid-cols-2 gap-2.5 pt-5 border-t border-white/6 mb-7">
                  <div className="rounded-[12px] bg-white/[0.02] border border-white/5 p-3">
                    <span className="block text-[9px] uppercase tracking-[0.16em] font-extrabold text-[#6e665c] mb-1">
                      Ink Formulation
                    </span>
                    <span className="text-[12px] font-extrabold text-white block">
                      {activeWork.details.inkType}
                    </span>
                  </div>
                  <div className="rounded-[12px] bg-white/[0.02] border border-white/5 p-3">
                    <span className="block text-[9px] uppercase tracking-[0.16em] font-extrabold text-[#6e665c] mb-1">
                      Fabric Base
                    </span>
                    <span className="text-[12px] font-extrabold text-white block">
                      {activeWork.fabric}
                    </span>
                  </div>
                  <div className="rounded-[12px] bg-white/[0.02] border border-white/5 p-3">
                    <span className="block text-[9px] uppercase tracking-[0.16em] font-extrabold text-[#6e665c] mb-1">
                      Placement
                    </span>
                    <span className="text-[12px] font-extrabold text-[#e37b4f] block">
                      {activeWork.details.placement}
                    </span>
                  </div>
                  <div className="rounded-[12px] bg-white/[0.02] border border-white/5 p-3">
                    <span className="block text-[9px] uppercase tracking-[0.16em] font-extrabold text-[#6e665c] mb-1">
                      Surface Finish
                    </span>
                    <span className="text-[12px] font-extrabold text-white block">
                      {activeWork.details.finish}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-6 border-t border-white/6">
                <button
                  type="button"
                  onClick={() => setLightboxItem(activeWork)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-[#c85d2f] hover:bg-[#d86b3c] text-white text-[11px] font-extrabold transition-colors shadow-[0_8px_16px_rgba(200,93,47,0.25)]"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Inspect Spec Sheet</span>
                </button>
                <Link
                  to={`/contact?technique=${encodeURIComponent(activeWork.category)}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-white text-[11px] font-extrabold transition-colors"
                >
                  <span>Request Similar Sample</span>
                  <ArrowRight className="w-3 h-3 text-[#e37b4f]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <WorkLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </section>
  );
};
