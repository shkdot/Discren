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

  const categories = ['All', 'Screen Printing', 'Puff & High-Density', 'Cut Panel', 'Finished Garments', 'Brand Apparel'];

  const filteredWork = activeCategory === 'All'
    ? workData
    : workData.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Our Work — DISCREN Apparel Printing"
        description="Visual portfolio of DISCREN apparel printing work in Mumbai. Screen printing, puff, high-density, cut panel printing, and finished apparel."
      />

      <PageHero
        eyebrow="PRODUCTION SHOWCASE"
        title="Our Work"
        subtitle="Work That Speaks for Itself. A visual selection of printing work across different techniques, garment formats and production requirements."
      />

      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#d9d2c6] pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-extrabold transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#1b1a18] text-white border-[#1b1a18]'
                    : 'bg-[#fbfaf6] text-[#6e6a63] border-[#d9d2c6] hover:border-[#181715] hover:text-[#181715]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWork.map((item) => (
              <WorkCard 
                key={item.id} 
                item={item} 
                onOpenLightbox={(work) => setSelectedWork(work)} 
              />
            ))}
          </div>

          {/* Lightbox Modal */}
          <WorkLightbox 
            item={selectedWork} 
            onClose={() => setSelectedWork(null)} 
          />
        </div>
      </section>

      <CTASection />
    </>
  );
};
