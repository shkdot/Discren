import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { WorkCard } from '../components/WorkCard';
import { WorkLightbox } from '../components/WorkLightbox';
import { CTASection } from '../components/CTASection';
import { workData, WorkItem } from '../data/workData';

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const categories = ['All', ...Array.from(new Set(workData.map((w) => w.category)))];

  const filteredWork = activeCategory === 'All'
    ? workData
    : workData.filter((item) => item.category === activeCategory);

  /** Technique legend, derived from the portfolio data itself. */
  const techniqueSummary = Array.from(new Set(workData.map((w) => w.category))).map((cat) => ({
    name: cat,
    count: workData.filter((w) => w.category === cat).length,
  }));

  const uniqueFabrics = new Set(workData.map((w) => w.fabric)).size;

  const stats = [
    { value: String(workData.length).padStart(2, '0'), label: 'Selected projects' },
    { value: String(categories.length - 1).padStart(2, '0'), label: 'Techniques shown' },
    { value: String(uniqueFabrics).padStart(2, '0'), label: 'Fabric bases' },
    { value: '1,000+', label: 'Batch capacity' },
  ];

  return (
    <>
      <SEO
        title="Our Work — DISCREN Apparel Printing"
        description="Visual portfolio of DISCREN apparel printing work in Mumbai. Screen printing, puff, high-density, cut panel printing, and finished apparel."
      />

      <PageHero
        eyebrow="PRODUCTION SHOWCASE"
        title="Our Work"
        subtitle="A visual selection of printing work across different techniques, garment formats and production requirements."
      >
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#d9d2c6] border border-[#d9d2c6] rounded-[20px] overflow-hidden max-w-[820px] mt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#fbfaf6] px-5 py-5">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[26px] md:text-[30px] leading-none tracking-[-0.05em] font-extrabold text-[#181715]">
                  {stat.value}
                </span>
                <span className="block mt-2 text-[11.5px] uppercase tracking-[0.1em] font-bold text-[#6e6a63]">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Technique legend — inverted band derived from the portfolio data */}
      <section className="py-16 md:py-24 bg-[#1b1a18] text-white">
        <div className="container-custom">
          <div className="max-w-[620px] mb-10">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#e37b4f] font-extrabold mb-3">
              TECHNIQUES REPRESENTED
            </div>
            <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.05] tracking-[-0.05em] font-extrabold mb-3">
              Every Print Tells You How It Was Made.
            </h2>
            <p className="text-[16px] text-[#d1ccc4] leading-relaxed">
              Tap a technique to filter the gallery below and see how the same production floor handles different print requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-[20px] overflow-hidden">
            {techniqueSummary.map((tech) => (
              <button
                key={tech.name}
                type="button"
                onClick={() => setActiveCategory(tech.name)}
                className="bg-[#242220] p-5 text-left transition-colors duration-300 hover:bg-[#2c2a27]"
              >
                <span className="block text-[11px] font-extrabold tracking-[0.14em] text-[#e37b4f] mb-2.5">
                  {String(tech.count).padStart(2, '0')}
                </span>
                <span className="block text-[15px] tracking-[-0.02em] font-extrabold text-white leading-snug">
                  {tech.name}
                </span>
                <span className="block mt-1.5 text-[11.5px] text-[#a9a49b]">
                  {tech.count === 1 ? 'project' : 'projects'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio gallery */}
      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          {/* Sticky filter bar with a live result count */}
          <div className="sticky top-[76px] z-20 -mx-4 px-4 md:mx-0 md:px-0 py-4 bg-[#f4f0e8]/95 backdrop-blur-md border-b border-[#d9d2c6] mb-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-4 py-2 rounded-full text-[12.5px] font-extrabold transition-all border ${
                      activeCategory === cat
                        ? 'bg-[#1b1a18] text-white border-[#1b1a18]'
                        : 'bg-[#fbfaf6] text-[#6e6a63] border-[#d9d2c6] hover:border-[#181715] hover:text-[#181715]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <span className="text-[12px] font-bold text-[#6e6a63] tabular-nums shrink-0">
                {filteredWork.length} {filteredWork.length === 1 ? 'project' : 'projects'}
              </span>
            </div>
          </div>

          {filteredWork.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredWork.map((item) => (
                <WorkCard
                  key={item.id}
                  item={item}
                  onOpenLightbox={(work) => setSelectedWork(work)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] px-6">
              <p className="text-[16px] text-[#6e6a63] mb-4">
                No projects in “{activeCategory}” yet.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="text-[13px] font-extrabold text-[#c85d2f] hover:underline"
              >
                Show all work
              </button>
            </div>
          )}

          <WorkLightbox item={selectedWork} onClose={() => setSelectedWork(null)} />
        </div>
      </section>

      <CTASection />
    </>
  );
};
