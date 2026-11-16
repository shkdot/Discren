import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WorkItem, workData } from '../data/workData';
import { WorkLightbox } from './WorkLightbox';
import { 
  ArrowRight, 
  Maximize2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Droplets, 
  ChevronLeft, 
  ChevronRight,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';

export const WorkShowcase: React.FC = () => {
  const [activeWorkId, setActiveWorkId] = useState<string>(workData[0]?.id || '');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<WorkItem | null>(null);

  const categories = [
    'All',
    'High-Density Printing',
    'Puff Printing',
    'Water-Based Printing',
    'Discharge Printing',
    'Plastisol Printing',
    'Metallic / Foil Printing'
  ];

  const filteredWork = activeCategory === 'All' 
    ? workData 
    : workData.filter(item => item.category === activeCategory);

  const activeWork = workData.find(item => item.id === activeWorkId) || filteredWork[0] || workData[0];
  const activeIndex = workData.findIndex(item => item.id === activeWork.id);

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + workData.length) % workData.length;
    setActiveWorkId(workData[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % workData.length;
    setActiveWorkId(workData[newIndex].id);
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#141311] text-white overflow-hidden border-t border-white/10">
      {/* Background Ambient Glow & Typography Watermark */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#c85d2f]/10 via-[#c85d2f]/5 to-transparent blur-3xl opacity-60" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-10 top-[15%] text-[clamp(100px,18vw,260px)] leading-none tracking-[-0.1em] font-extrabold text-white/[0.018] whitespace-nowrap select-none"
      >
        DISCREN / ARCHIVE
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#e37b4f] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e37b4f] animate-pulse" />
              05 / Production Archive
            </div>
            <h2 className="text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.05em] font-extrabold text-white">
              Work That Speaks for Itself.
            </h2>
            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-[#b5af9f] max-w-[580px]">
              A tactile inspection of screen prints executed in our Jogeshwari West studio. Explore print profile heights, ink formulation textures, and fabric behaviour.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.1] hover:border-[#e37b4f] text-[13px] font-extrabold text-white transition-all duration-300"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#e37b4f] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-extrabold text-[#827b70] mr-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter By:</span>
          </span>
          {categories.map((cat) => {
            const count = cat === 'All' ? workData.length : workData.filter(w => w.category === cat).length;
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  const firstOfCat = cat === 'All' ? workData[0] : workData.find(w => w.category === cat);
                  if (firstOfCat) setActiveWorkId(firstOfCat.id);
                }}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-tight transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#c85d2f] text-white shadow-lg shadow-[#c85d2f]/25 border border-[#c85d2f]'
                    : 'bg-white/[0.04] text-[#a69f93] hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <span>{cat === 'All' ? 'All Techniques' : cat.replace(' Printing', '')}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/30 text-white' : 'bg-white/10 text-[#827b70]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* HERO FEATURED SHOWCASE (Master Spotlight Card) */}
        <div className="relative rounded-[28px] md:rounded-[36px] border border-white/10 bg-[#1a1917]/90 backdrop-blur-md overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.45)] mb-10 transition-all duration-500">
          <div className="grid lg:grid-cols-12 items-stretch min-h-[520px]">
            
            {/* Visual Column (Left / Top on mobile) */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[540px] bg-[#22201d] overflow-hidden group">
              <img
                src={activeWork.image}
                alt={activeWork.title}
                key={activeWork.id}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#1a1917]/20 lg:to-[#1a1917]" />
              
              {/* Badges on image */}
              <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/20 bg-[#181715]/75 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#f4f0e8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e37b4f]" />
                  {activeWork.category}
                </span>
                <span className="rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] font-bold text-[#b5af9f]">
                  {activeWork.format}
                </span>
              </div>

              {/* Quick View Expand Button */}
              <button
                type="button"
                onClick={() => setLightboxItem(activeWork)}
                className="absolute bottom-5 right-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-[#181715]/85 backdrop-blur-md px-4 py-2.5 text-[11px] uppercase tracking-wider font-extrabold text-white hover:bg-[#c85d2f] hover:border-[#c85d2f] transition-all shadow-xl"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Inspect High-Res Specs</span>
                <span className="sm:hidden">Inspect</span>
              </button>

              {/* Prev / Next arrows over image */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous work piece"
                  className="w-9 h-9 rounded-full border border-white/20 bg-black/60 backdrop-blur-md grid place-items-center text-white hover:bg-[#c85d2f] hover:border-[#c85d2f] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next work piece"
                  className="w-9 h-9 rounded-full border border-white/20 bg-black/60 backdrop-blur-md grid place-items-center text-white hover:bg-[#c85d2f] hover:border-[#c85d2f] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-[12px] font-bold text-[#b5af9f] pl-2 tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(workData.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Technical Detail Column (Right / Bottom on mobile) */}
            <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#e37b4f]">
                    {activeWork.technique}
                  </span>
                  <span className="text-[11px] font-extrabold text-[#706a61] tabular-nums">
                    REF #{activeWork.id.toUpperCase().replace('-', '')}
                  </span>
                </div>

                <h3 className="text-[clamp(24px,2.8vw,38px)] leading-[1.05] tracking-[-0.04em] font-extrabold text-white mb-4">
                  {activeWork.title}
                </h3>

                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#c2bcaf] mb-6">
                  {activeWork.description}
                </p>

                {/* Tactile Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/10 mb-6">
                  <div className="rounded-[14px] bg-white/[0.04] border border-white/5 p-3.5">
                    <span className="block text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#878074] mb-1">
                      Ink Formulation
                    </span>
                    <span className="text-[13px] font-extrabold text-white block">
                      {activeWork.details.inkType}
                    </span>
                  </div>

                  <div className="rounded-[14px] bg-white/[0.04] border border-white/5 p-3.5">
                    <span className="block text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#878074] mb-1">
                      Fabric Base
                    </span>
                    <span className="text-[13px] font-extrabold text-white block">
                      {activeWork.fabric}
                    </span>
                  </div>

                  <div className="rounded-[14px] bg-white/[0.04] border border-white/5 p-3.5">
                    <span className="block text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#878074] mb-1">
                      Placement
                    </span>
                    <span className="text-[13px] font-extrabold text-[#e37b4f] block">
                      {activeWork.details.placement}
                    </span>
                  </div>

                  <div className="rounded-[14px] bg-white/[0.04] border border-white/5 p-3.5">
                    <span className="block text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#878074] mb-1">
                      Surface Finish
                    </span>
                    <span className="text-[13px] font-extrabold text-white block">
                      {activeWork.details.finish}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setLightboxItem(activeWork)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#c85d2f] hover:bg-[#d86b3c] text-white text-[13px] font-extrabold transition-colors shadow-lg shadow-[#c85d2f]/20"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Inspect Spec Sheet</span>
                </button>
                <Link
                  to={`/contact?technique=${encodeURIComponent(activeWork.category)}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.1] text-white text-[13px] font-extrabold transition-colors"
                >
                  <span>Request Similar Sample</span>
                  <ArrowRight className="w-4 h-4 text-[#e37b4f]" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* INTERACTIVE WORK CAROUSEL / FILMSTRIP (Select to inspect) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#827b70]">
              Select any piece to inspect details ({filteredWork.length} pieces)
            </span>
            <span className="text-[11px] font-bold text-[#b5af9f] hidden sm:block">
              Click thumbnail to preview above
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {filteredWork.map((item, idx) => {
              const isCurrent = item.id === activeWork.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveWorkId(item.id)}
                  className={`group relative text-left rounded-[18px] md:rounded-[22px] overflow-hidden border p-2 transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[#c85d2f] bg-[#c85d2f]/10 shadow-[0_0_25px_rgba(200,93,47,0.3)] ring-2 ring-[#c85d2f]/40 -translate-y-1'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden bg-[#242220] mb-2.5 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                        isCurrent ? 'opacity-100' : 'opacity-70 group-hover:opacity-95'
                      }`}
                    />
                    <div className="absolute top-2 left-2 text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#e37b4f]">
                      0{idx + 1}
                    </div>
                    {isCurrent && (
                      <div className="absolute inset-0 border-2 border-[#c85d2f] rounded-[14px] pointer-events-none" />
                    )}
                  </div>

                  {/* Caption */}
                  <div className="px-1 pb-1">
                    <span className="block text-[9.5px] uppercase tracking-wider font-extrabold text-[#e37b4f] truncate">
                      {item.category.replace(' Printing', '')}
                    </span>
                    <h4 className="text-[13px] font-extrabold text-white leading-tight tracking-tight line-clamp-1 group-hover:text-[#f4f0e8]">
                      {item.title}
                    </h4>
                    <span className="block text-[11px] text-[#8c8579] truncate mt-0.5">
                      {item.fabric}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCTION ASSURANCE BENCHMARKS (Tactile Pillars) */}
        <div className="mt-14 md:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="p-4 md:p-5 rounded-[20px] bg-white/[0.03] border border-white/5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#c85d2f]/15 text-[#e37b4f] mb-3">
              <Layers className="w-4 h-4" />
            </span>
            <span className="block text-[14px] font-extrabold text-white tracking-tight mb-1">
              ±0.2mm Micro-Registration
            </span>
            <p className="text-[12px] text-[#9c9588] leading-relaxed">
              Disciplined screen alignment on long print tables ensuring multi-colour graphics match vector files cleanly.
            </p>
          </div>

          <div className="p-4 md:p-5 rounded-[20px] bg-white/[0.03] border border-white/5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#c85d2f]/15 text-[#e37b4f] mb-3">
              <Droplets className="w-4 h-4" />
            </span>
            <span className="block text-[14px] font-extrabold text-white tracking-tight mb-1">
              Tested Ink Formulations
            </span>
            <p className="text-[12px] text-[#9c9588] leading-relaxed">
              High-opacity plastisol, discharge bases, soft water-based and high-density silicones matched to garment chemistry.
            </p>
          </div>

          <div className="p-4 md:p-5 rounded-[20px] bg-white/[0.03] border border-white/5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#c85d2f]/15 text-[#e37b4f] mb-3">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="block text-[14px] font-extrabold text-white tracking-tight mb-1">
              50+ Wash-Cycle Curing
            </span>
            <p className="text-[12px] text-[#9c9588] leading-relaxed">
              Every print undergoes controlled temperature flash and tunnel curing to prevent cracking, fading, or peeling.
            </p>
          </div>

          <div className="p-4 md:p-5 rounded-[20px] bg-white/[0.03] border border-white/5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#c85d2f]/15 text-[#e37b4f] mb-3">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="block text-[14px] font-extrabold text-white tracking-tight mb-1">
              Sample Verification
            </span>
            <p className="text-[12px] text-[#9c9588] leading-relaxed">
              Physical strike-off sample available for your sign-off before commencing bulk production batches.
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <WorkLightbox 
          item={lightboxItem} 
          onClose={() => setLightboxItem(null)} 
        />
      )}
    </section>
  );
};
