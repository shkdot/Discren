import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { companyData } from '../data/companyData';
import { Shield, Layers, Target, ArrowRight } from 'lucide-react';

const approach = [
  {
    icon: Layers,
    title: 'Garment & Fabric First',
    text: 'Fabric composition (100% cotton, fleece, French terry, or synthetic blends) dictates ink choice, mesh count, and flash cure temperatures to prevent shrinkage or dye migration.',
  },
  {
    icon: Target,
    title: 'Artwork & Technique Alignment',
    text: 'Design requirements determine whether plastisol, water-based, 3D puff, high-density silicone, or DTF delivers the desired hand-feel and visual sharpness.',
  },
  {
    icon: Shield,
    title: 'Sampling & Risk Elimination',
    text: 'When print parameters or fabric swatch reactions present uncertainty, paid sample tests are performed so output is verified before launching bulk runs.',
  },
];

const audience = [
  { title: 'Clothing Brands', text: 'Independent streetwear & fashion labels building core collections.' },
  { title: 'Garment Manufacturers', text: 'Apparel production factories requiring specialized printing job-work.' },
  { title: 'Apparel Businesses', text: 'Merchandise companies requiring consistent bulk apparel execution.' },
  { title: 'Cut Panel Buyers', text: 'Manufacturers needing flat panel printing prior to final assembly.' },
];

const principles = [
  { title: 'Print Quality', text: 'Sharp edges, even ink deposition, and proper heat curing for wash fastness.' },
  { title: 'Suitable Methods', text: 'Honest recommendations on which technique matches your budget and artwork.' },
  { title: 'Garment Compatibility', text: 'Evaluating fabric stretch, weave, and thickness prior to press runs.' },
  { title: 'Production Consistency', text: 'Maintaining print placement and color registration across the entire batch.' },
  { title: 'Bulk Requirements', text: 'Optimized workflows for orders ranging from ~50 to 1,000+ pieces.' },
  { title: 'Practical Communication', text: 'Clear timelines, realistic capacities, and straightforward terms.' },
];

export const About: React.FC = () => {
  const stats = [
    { value: '14+', label: 'Years of experience' },
    { value: '~50', label: 'Starting MOQ' },
    { value: '1,000+', label: 'Bulk capacity' },
    { value: '3–5 days', label: 'Sample turnaround' },
  ];

  return (
    <>
      <SEO
        title="About DISCREN — B2B Apparel Printing"
        description="Learn about DISCREN, a B2B apparel printing partner based in Jogeshwari West, Mumbai. Our production approach, fabric compatibility, and bulk job-work services."
      />

      {/* Page Hero */}
      <PageHero
        title="About DISCREN"
        subtitle="A dedicated B2B apparel printing partner for clothing brands, garment manufacturers, and apparel businesses based in Jogeshwari West, Mumbai."
      >
        <div className="flex flex-wrap gap-4 pt-2">
          <Button to="/contact" variant="primary">
            Discuss Your Production
          </Button>
          <Button to="/capabilities" variant="secondary">
            Explore Capabilities
          </Button>
        </div>

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

          {/* 01 / OUR APPROACH — cream, sticky heading beside numbered rows */}
      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                01 / OUR APPROACH
              </div>
              <h2 className="text-[clamp(30px,4.4vw,50px)] leading-[1.02] tracking-[-0.055em] font-extrabold text-[#181715] mb-5">
                Printing is Not One-Size-Fits-All.
              </h2>
              <p className="text-[17px] text-[#6e6a63] leading-relaxed max-w-[460px]">
                Every garment, fabric weave, ink density, and graphic design calls for a deliberate production decision.
                We approach every order with technical assessment first.
              </p>
            </div>

            <div className="border-t border-[#d9d2c6]">
              {approach.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 md:gap-7 py-7 md:py-8 border-b border-[#d9d2c6]"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-[14px] bg-[#c85d2f]/10 text-[#c85d2f] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="block text-[11px] font-extrabold tracking-[0.14em] text-[#c85d2f] mb-2">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-[22px] md:text-[26px] tracking-[-0.035em] font-extrabold text-[#181715] mb-2 transition-colors group-hover:text-[#c85d2f]">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-[#6e6a63] leading-relaxed max-w-[560px]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 02 / WHO WE WORK WITH — inverted band to break the cream */}
      <section className="py-20 md:py-28 bg-[#1b1a18] text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#e37b4f] font-extrabold mb-3">
                02 / TARGET AUDIENCE
              </div>
              <h2 className="text-[clamp(30px,4.4vw,50px)] leading-[1.02] tracking-[-0.055em] font-extrabold mb-5">
                Who We Work With
              </h2>
              <p className="text-[17px] text-[#d1ccc4] leading-relaxed max-w-[460px] mb-6">
                DISCREN is built specifically for business-to-business apparel workflows.
              </p>

              <div className="rounded-[18px] bg-[#c85d2f]/10 border border-[#c85d2f]/30 p-6 max-w-[460px]">
                <p className="text-[14px] text-[#e8c4b3] leading-relaxed">
                  We do not operate as an individual consumer print shop or retail custom gift counter.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {audience.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-[18px] bg-[#242220] border border-white/10 p-6 transition-colors duration-300 hover:border-[#e37b4f]/60"
                >
                  <span className="block text-[11px] font-extrabold tracking-[0.14em] text-[#e37b4f] mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[19px] tracking-[-0.03em] font-extrabold text-white mb-2">{item.title}</h3>
                  <p className="text-[13.5px] text-[#a9a49b] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 / CORE PRINCIPLES — sand band, no card boxes for contrast */}
      <section className="py-20 md:py-28 bg-[#e7dfd2] border-y border-[#c9c0b2]">
        <div className="container-custom">
          <div className="max-w-[680px] mb-14">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
              03 / CORE PRINCIPLES
            </div>
            <h2 className="text-[clamp(30px,4.4vw,50px)] leading-[1.02] tracking-[-0.055em] font-extrabold text-[#181715] mb-4">
              What We Focus On
            </h2>
            <p className="text-[17px] text-[#5f5951] leading-relaxed">
              Our operations in Jogeshwari West prioritize print reliability, production consistency, and clear commercial expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {principles.map((item, i) => (
              <div key={item.title} className="border-t border-[#c9c0b2] pt-5">
                <span className="block text-[11px] font-extrabold tracking-[0.14em] text-[#c85d2f] mb-2.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[19px] tracking-[-0.03em] font-extrabold text-[#181715] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#5f5951] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
};
