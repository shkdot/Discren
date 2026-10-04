import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { CapabilityShowcaseCard } from '../components/CapabilityShowcaseCard';
import { TickerBand } from '../components/TickerBand';
import { ProcessStep } from '../components/ProcessStep';
import { FAQItem } from '../components/FAQItem';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { processData } from '../data/processData';
import { faqData } from '../data/faqData';
import { workData } from '../data/workData';
import { ArrowRight } from 'lucide-react';

/** Continuous capability marquee content under the hero. */
const tickerItems = [
  'Screen Printing',
  'DTF Printing',
  '3D Puff',
  'High-Density',
  'Cut Panel',
  'Finished Garments',
  'Bulk Production',
  'Jogeshwari West, Mumbai',
];

export const Home: React.FC = () => {
  const selectedFaqs = faqData.slice(0, 6);
  const featuredWork = workData.slice(0, 4);
  const [openStep, setOpenStep] = useState<string>('01');

  return (
    <>
      <SEO 
        title="DISCREN — B2B Apparel Printing in Mumbai"
        description="B2B apparel printing for clothing brands and garment businesses in Jogeshwari West, Mumbai. Screen printing, DTF, puff, high-density and cut panel printing."
      />

      {/* Hero Section - Viewport-Fitted Desktop View (No Scrolling Required) */}
      <section className="relative bg-[#181715] text-white min-h-[calc(100vh-76px)] flex items-center py-10 lg:py-0 overflow-hidden border-b border-[#292722]">
        
        {/* Background Image positioned to highlight the right side */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home-hero-image.webp" 
            alt="DISCREN Apparel Printing Factory Production" 
            className="w-full h-full object-cover object-right scale-105 transition-transform duration-1000 opacity-70 lg:opacity-90"
          />
          {/* Subtle gradient overlay ensuring crisp text contrast on left while leaving right side highlighted */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#181715] via-[#181715]/90 to-transparent lg:via-[#181715]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 my-auto py-4">
          <div className="max-w-[820px]">
            <div className="text-[11px] md:text-[12px] tracking-[0.15em] font-extrabold text-[#e37b4f] uppercase mb-4 md:mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e37b4f] animate-pulse"></span>
              <span>B2B APPAREL PRINTING · JOGESHWARI WEST, MUMBAI</span>
            </div>

            <h1 className="text-[clamp(36px,5.2vw,70px)] leading-[0.95] tracking-[-0.06em] font-extrabold text-white mb-4 md:mb-6">
              Printing Built Around the <span className="text-[#e37b4f] underline decoration-[#e37b4f]/30 underline-offset-8">Garment.</span>
            </h1>

            <p className="max-w-[640px] text-[16px] md:text-[19px] leading-[1.45] text-[#d1ccc4] mb-6 md:mb-8 font-normal">
              We help clothing brands and garment businesses turn their designs into production-ready prints — choosing the right printing approach for the garment, the artwork and the result you want to achieve.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8 md:mb-10">
              <Button to="/contact" variant="white" className="px-7 py-3 shadow-lg text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                Discuss Your Requirement
              </Button>
              <Button to="/work" variant="secondary" className="px-7 py-3 border-white text-white hover:bg-white/10 text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                View Our Work
              </Button>
            </div>

            {/* Hero Meta Badges */}
            <div className="pt-4 md:pt-5 border-t border-white/15 flex flex-wrap gap-x-7 gap-y-2 text-[#d1ccc4] text-[12px] md:text-[13px] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>14+ years of printing experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>MOQ from ~50 pieces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>Bulk orders up to 1,000+ pieces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Ticker — breaks the hero/cream transition and adds motion */}
      <TickerBand items={tickerItems} />

      {/* 01 / EXPERTISE — cream, sticky heading beside a hairline list */}
      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="01 / EXPERTISE"
                title="More Than Printing. The Right Approach."
                lead="Every garment and every design can call for a different printing approach. We understand the requirement first, then help determine a suitable way to achieve the intended result."
              />

              <div className="bg-[#1b1a18] text-white rounded-[22px] p-8 mt-2">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[clamp(48px,6vw,68px)] leading-none tracking-[-0.06em] font-extrabold text-[#e37b4f]">14+</span>
                  <span className="text-[12px] uppercase tracking-[0.16em] font-extrabold text-[#a9a49b]">Years of<br />Experience</span>
                </div>
                <p className="text-[15px] text-[#d5d0c8] leading-relaxed">
                  If a customer is unsure about the right method, we explain the options. When a fabric or print presents uncertainty, a sample can be produced and tested before bulk production.
                </p>
              </div>
            </div>

            {/* 4 Expertise Facts — hairline rows, not boxes */}
            <div className="border-t border-[#d9d2c6]">
              {[
                { num: '01', title: 'Method selection', text: 'Printing approach considered around the garment, artwork and intended result.' },
                { num: '02', title: 'Practical advice', text: 'We help customers understand what different approaches are likely to produce.' },
                { num: '03', title: 'Sampling', text: 'Paid samples can be made for review before bulk production.' },
                { num: '04', title: 'Process adjustment', text: 'When a result needs improvement, the process can be reviewed and adjusted.' },
              ].map((fact) => (
                <div key={fact.num} className="group flex gap-5 md:gap-8 py-7 md:py-8 border-b border-[#d9d2c6] transition-colors hover:bg-[#fbfaf6] px-3 -mx-3 rounded-[14px]">
                  <span className="text-[12px] font-extrabold text-[#c85d2f] tracking-wider pt-1 shrink-0">{fact.num}</span>
                  <div>
                    <h3 className="text-[22px] md:text-[26px] tracking-[-0.035em] font-extrabold text-[#181715] mb-1.5 transition-colors group-hover:text-[#c85d2f]">
                      {fact.title}
                    </h3>
                    <p className="text-[15px] text-[#6e6a63] leading-relaxed max-w-[520px]">{fact.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 / CAPABILITIES — inverted dark band with image-led cards */}
      <section className="py-20 md:py-28 bg-[#1b1a18] text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              dark
              kicker="02 / CAPABILITIES"
              title="Printing Capabilities for Different Production Needs"
              lead="From everyday apparel production to more specialized print finishes, we work across multiple printing methods and garment formats."
              className="mb-0"
            />
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#e37b4f] hover:text-white transition-colors shrink-0"
            >
              <span>View All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilitiesData.map((cap) => (
              <CapabilityShowcaseCard key={cap.id} item={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 / BULK PRODUCTION — full-bleed sand band, edge-to-edge */}
      <section className="bg-[#e7dfd2] border-y border-[#c9c0b2]">
        <div className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-4">
                03 / BULK PRODUCTION
              </div>
              <h2 className="text-[clamp(32px,4.6vw,52px)] leading-[1.02] tracking-[-0.055em] font-extrabold text-[#181715] mb-4">
                From Small Runs to Bulk Production
              </h2>
              <p className="text-[16px] md:text-[17px] text-[#5f5951] leading-relaxed max-w-[460px]">
                Whether you're developing a new collection or producing at scale, we work with businesses across a range of apparel printing quantities.
              </p>
            </div>

            {/* 2x2 oversized stat cells */}
            <div className="grid grid-cols-2 gap-px bg-[#c9c0b2] border border-[#c9c0b2] rounded-[22px] overflow-hidden">
              {[
                { v: '~50+', l: 'Approximate starting MOQ' },
                { v: '1,000+', l: 'Bulk order quantities' },
                { v: '3 days*', l: 'Approx. 1,000-piece capacity under suitable conditions' },
                { v: '2–4 wks', l: 'Normal production turnaround, depending on workload' },
              ].map((stat) => (
                <div key={stat.v} className="bg-[#f4f0e8] p-6 md:p-8 flex flex-col justify-center min-h-[140px]">
                  <b className="block text-[clamp(30px,4vw,44px)] leading-none tracking-[-0.055em] font-extrabold text-[#181715] mb-2">
                    {stat.v}
                  </b>
                  <span className="text-[12.5px] text-[#69635b] font-medium leading-snug">{stat.l}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[12px] text-[#71695f] mt-8">
            *Capacity depends on the production conditions and requirements of the order.
          </p>
        </div>
      </section>

      {/* 04 / PROCESS — accordion, interactive and visually distinct from the card grids */}
      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="04 / PROCESS"
                title="A Clear Process From Artwork to Production"
                lead="Good printing starts before the first production piece is printed. Tap any stage to see exactly who handles what."
              />
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors"
              >
                <span>Explore Full Process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="border-t border-[#d9d2c6]">
              {processData.slice(0, 6).map((step) => (
                <div key={step.num} className="border-b border-[#d9d2c6]">
                  <ProcessStep
                    step={step}
                    isExpanded={openStep === step.num}
                    onToggle={() => setOpenStep((cur) => (cur === step.num ? '' : step.num))}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 / OUR WORK — inverted dark band with a real image mosaic */}
      <section className="py-20 md:py-28 bg-[#1b1a18] text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              dark
              kicker="05 / OUR WORK"
              title="Work That Speaks for Itself."
              lead="A visual selection of printing work across different techniques, garment formats and production requirements."
              className="mb-0"
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#e37b4f] hover:text-white transition-colors shrink-0"
            >
              <span>View Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mosaic: one large feature tile + three smaller tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {featuredWork.map((work, index) => (
              <Link
                key={work.id}
                to="/work"
                className={`group relative overflow-hidden rounded-[20px] bg-[#242220] border border-white/10 hover:border-[#e37b4f]/70 transition-colors duration-300 ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className={`w-full ${index === 0 ? 'aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[4/3]'}`}>
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-[#181715]/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                  <span className="text-[10px] uppercase font-extrabold tracking-[0.12em] text-[#e37b4f]">
                    {work.technique}
                  </span>
                  <h3 className={`mt-1 font-extrabold tracking-[-0.03em] text-white leading-tight ${index === 0 ? 'text-[19px] lg:text-[26px]' : 'text-[14px] lg:text-[17px]'}`}>
                    {work.title}
                  </h3>
                  {index === 0 && (
                    <p className="hidden lg:block text-[13px] text-[#cbc5bc] mt-2 max-w-[380px] leading-relaxed">
                      {work.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 06 / WORKING TOGETHER — cream, sticky heading beside stacked spec panels */}
      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                kicker="06 / WORKING TOGETHER"
                title="Straightforward Printing for Apparel Businesses."
                lead="Practical information, clear expectations and a process designed around bulk apparel production."
              />
              <Button to="/contact" variant="primary" className="gap-2">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* Production Details — light panel */}
              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7 md:p-9">
                <h3 className="text-[22px] tracking-[-0.04em] font-extrabold text-[#181715] mb-5">
                  Production Details
                </h3>
                <div className="text-[14px]">
                  {[
                    ['MOQ', 'Approx. 50 pieces'],
                    ['Mixed sizes', 'Yes, when properly sorted'],
                    ['Sampling', 'Paid sampling available'],
                    ['Pricing', 'Can reduce with quantity'],
                    ['Turnaround', 'Approx. 2–4 weeks'],
                  ].map(([label, value]) => (
                    <div key={label} className="py-3 border-t border-[#d9d2c6] flex justify-between gap-6">
                      <span className="font-semibold text-[#181715]">{label}</span>
                      <span className="text-[#6e6a63] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Terms — inverted panel, keeps the two panels visually distinct */}
              <div className="bg-[#1b1a18] text-white rounded-[22px] p-7 md:p-9">
                <h3 className="text-[22px] tracking-[-0.04em] font-extrabold mb-5">
                  Commercial Terms
                </h3>
                <div className="text-[14px]">
                  {[
                    ['Payment', '50% advance'],
                    ['Balance', '50% before dispatch'],
                    ['Location', 'Jogeshwari West, Mumbai'],
                    ['Transport', 'Varies by customer/order'],
                    ['Bulk capacity', 'Up to 1,000+ pieces'],
                  ].map(([label, value]) => (
                    <div key={label} className="py-3 border-t border-white/10 flex justify-between gap-6">
                      <span className="font-semibold text-white">{label}</span>
                      <span className="text-[#a9a49b] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — sand band, two-column with a sticky heading */}
      <section className="py-20 md:py-28 bg-[#e7dfd2] border-t border-[#c9c0b2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                FAQ
              </div>
              <h2 className="text-[clamp(30px,4.2vw,46px)] leading-[1.02] tracking-[-0.055em] font-extrabold text-[#181715] mb-5 max-w-[420px]">
                Frequently Asked Questions
              </h2>
              <p className="text-[16px] text-[#5f5951] leading-relaxed max-w-[400px] mb-6">
                The questions apparel businesses ask us most often about quantities, methods and sampling.
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors"
              >
                <span>View All Questions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Accordion on a raised paper panel */}
            <div className="bg-[#fbfaf6] border border-[#c9c0b2] rounded-[22px] px-6 md:px-8">
              {selectedFaqs.map((faq, idx) => (
                <FAQItem key={faq.id} item={faq} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTASection />
    </>
  );
};
