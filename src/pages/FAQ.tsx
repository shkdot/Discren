import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { FAQItem } from '../components/FAQItem';
import { CTASection } from '../components/CTASection';
import { faqData, FAQItemData } from '../data/faqData';
import { Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Capabilities & Fabric', 'Orders & Quantities', 'Sampling & Process', 'Location & Contact'];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="FAQ — DISCREN Apparel Printing"
        description="Frequently asked questions about DISCREN B2B apparel printing in Mumbai. MOQs, printing methods, cut panel job-work, sampling, turnaround, and commercial terms."
      />

      <PageHero
        eyebrow="CLIENT QUESTIONS"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions regarding our B2B apparel printing workflows, order quantities, fabric compatibility, sampling, and commercial terms."
      />

      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom max-w-[900px]">
          {/* Search Input */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6e6a63]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword (e.g. MOQ, sampling, fabric, turnaround)..."
              className="w-full pl-12 pr-4 py-3.5 bg-[#fbfaf6] border border-[#d9d2c6] rounded-[16px] text-[15px] text-[#181715] focus:outline-none focus:border-[#c85d2f] transition-colors"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#d9d2c6]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-extrabold transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#1b1a18] text-white border-[#1b1a18]'
                    : 'bg-[#fbfaf6] text-[#6e6a63] border-[#d9d2c6] hover:border-[#181715] hover:text-[#181715]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordions List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-2 bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] p-6 md:p-8 shadow-xs">
              {filteredFaqs.map((item, idx) => (
                <FAQItem key={item.id} item={item} defaultOpen={idx === 0 && !searchQuery} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] p-8">
              <p className="text-[16px] text-[#6e6a63] mb-4">No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-[13px] font-extrabold text-[#c85d2f] hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
};
