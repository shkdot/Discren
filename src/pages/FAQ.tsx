import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { FAQItem } from '../components/FAQItem';
import { CTASection } from '../components/CTASection';
import { faqData } from '../data/faqData';
import { companyData } from '../data/companyData';
import { Search, X, MessageSquare, ArrowRight } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(faqData.map((f) => f.category)))];

  const query = searchQuery.trim().toLowerCase();

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      !query ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  const isFiltered = activeCategory !== 'All' || query.length > 0;

  /** Quick answers pulled from the same source as the rest of the site. */
  const quickFacts = [
    { label: 'Minimum order', value: companyData.moq },
    { label: 'Bulk capacity', value: companyData.bulkCapacity },
    { label: 'Sample turnaround', value: companyData.samplingTime },
    { label: 'Based in', value: `${companyData.area}, ${companyData.city}` },
  ];

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

      {/* Questions — sticky control rail beside the accordion list */}
      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.62fr_1fr] gap-10 lg:gap-14 items-start">

            <aside className="lg:sticky lg:top-28">
              <div className="relative mb-5">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#6e6a63] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions…"
                  aria-label="Search frequently asked questions"
                  className="w-full pl-11 pr-10 py-3.5 bg-[#fbfaf6] border border-[#d9d2c6] rounded-[16px] text-[15px] text-[#181715] placeholder:text-[#8a847c] focus:outline-none focus:border-[#c85d2f] transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-[#6e6a63] hover:bg-[#f4f0e8] hover:text-[#181715] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-3.5 py-2 rounded-full text-[12.5px] font-extrabold transition-all border ${
                      activeCategory === cat
                        ? 'bg-[#1b1a18] text-white border-[#1b1a18]'
                        : 'bg-[#fbfaf6] text-[#6e6a63] border-[#d9d2c6] hover:border-[#181715] hover:text-[#181715]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="rounded-[18px] bg-[#1b1a18] text-white p-6">
                <MessageSquare className="w-5 h-5 text-[#e37b4f] mb-3" />
                <h3 className="text-[17px] tracking-[-0.03em] font-extrabold mb-1.5">Still have a question?</h3>
                <p className="text-[13.5px] text-[#cbc5bc] leading-relaxed mb-4">
                  Send us your artwork, garment type and quantity — we&rsquo;ll answer with a specific recommendation.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[13px] font-extrabold text-[#e37b4f] hover:text-white transition-colors">
                  <span>Ask Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>

          <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#d9d2c6]">
                <span className="text-[12px] font-bold text-[#6e6a63] tabular-nums">
                  Showing {filteredFaqs.length} of {faqData.length} questions
                </span>
                {isFiltered && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[12px] font-extrabold text-[#c85d2f] hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {filteredFaqs.length > 0 ? (
                <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] px-6 md:px-8 mt-6">
                  {filteredFaqs.map((item, idx) => (
                    <FAQItem key={item.id} item={item} defaultOpen={idx === 0 && !query} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] px-6 mt-6">
                  <p className="text-[16px] text-[#6e6a63] mb-4">
                    No questions found{query ? ` matching “${searchQuery.trim()}”` : ''}.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[13px] font-extrabold text-[#c85d2f] hover:underline"
                  >
                    Clear search &amp; filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick answers — sand band for rhythm before the CTA */}
      <section className="py-16 md:py-24 bg-[#e7dfd2] border-t border-[#c9c0b2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                QUICK ANSWERS
              </div>
              <h2 className="text-[clamp(26px,3.6vw,40px)] leading-[1.05] tracking-[-0.05em] font-extrabold text-[#181715]">
                The Numbers We Get Asked Most.
              </h2>
            </div>

            <dl className="grid grid-cols-2 gap-px bg-[#c9c0b2] border border-[#c9c0b2] rounded-[20px] overflow-hidden">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-[#f4f0e8] p-6">
                  <dt className="text-[10.5px] uppercase tracking-[0.14em] font-extrabold text-[#c85d2f] mb-2">
                    {fact.label}
                  </dt>
                  <dd className="text-[17px] md:text-[19px] tracking-[-0.03em] font-extrabold text-[#181715] leading-tight">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
