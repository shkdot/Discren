import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { companyData } from '../data/companyData';
import { Shield, Layers, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
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
      </PageHero>

      {/* Main Content Sections */}
      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          {/* Section 1: Our Approach */}
          <div className="mb-24">
            <SectionHeading
              kicker="OUR APPROACH"
              title="Printing is Not One-Size-Fits-All."
              lead="Every garment, fabric weave, ink density, and graphic design calls for a deliberate production decision. We approach every order with technical assessment first."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#c85d2f]/10 text-[#c85d2f] flex items-center justify-center mb-6 font-bold">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#181715] mb-3">Garment & Fabric First</h3>
                  <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                    Fabric composition (100% cotton, fleece, French terry, or synthetic blends) dictates ink choice, mesh count, and flash cure temperatures to prevent shrinkage or dye migration.
                  </p>
                </div>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#c85d2f]/10 text-[#c85d2f] flex items-center justify-center mb-6 font-bold">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#181715] mb-3">Artwork & Technique Alignment</h3>
                  <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                    Design requirements determine whether plastisol, water-based, 3D puff, high-density silicone, or DTF delivers the desired hand-feel and visual sharpness.
                  </p>
                </div>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#c85d2f]/10 text-[#c85d2f] flex items-center justify-center mb-6 font-bold">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#181715] mb-3">Sampling & Risk Elimination</h3>
                  <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                    When print parameters or fabric swatch reactions present uncertainty, paid sample tests are performed so output is verified before launching bulk runs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Who We Work With */}
          <div className="mb-24 pt-16 border-t border-[#d9d2c6]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                  TARGET AUDIENCE
                </div>
                <h2 className="text-[36px] md:text-[48px] leading-[1.0] tracking-[-0.05em] font-extrabold text-[#181715] mb-6">
                  Who We Work With
                </h2>
                <p className="text-[16px] text-[#6e6a63] leading-relaxed mb-6">
                  DISCREN is built specifically for business-to-business apparel workflows. We do not operate as an individual consumer print shop or retail custom gift counter.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[18px] p-6">
                  <CheckCircle2 className="w-6 h-6 text-[#c85d2f] mb-3" />
                  <h4 className="text-[18px] font-extrabold text-[#181715] mb-1">Clothing Brands</h4>
                  <p className="text-[13px] text-[#6e6a63]">Independent streetwear & fashion labels building core collections.</p>
                </div>

                <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[18px] p-6">
                  <CheckCircle2 className="w-6 h-6 text-[#c85d2f] mb-3" />
                  <h4 className="text-[18px] font-extrabold text-[#181715] mb-1">Garment Manufacturers</h4>
                  <p className="text-[13px] text-[#6e6a63]">Apparel production factories requiring specialized printing job-work.</p>
                </div>

                <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[18px] p-6">
                  <CheckCircle2 className="w-6 h-6 text-[#c85d2f] mb-3" />
                  <h4 className="text-[18px] font-extrabold text-[#181715] mb-1">Apparel Businesses</h4>
                  <p className="text-[13px] text-[#6e6a63]">Merchandise companies requiring consistent bulk apparel execution.</p>
                </div>

                <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[18px] p-6">
                  <CheckCircle2 className="w-6 h-6 text-[#c85d2f] mb-3" />
                  <h4 className="text-[18px] font-extrabold text-[#181715] mb-1">Cut Panel Buyers</h4>
                  <p className="text-[13px] text-[#6e6a63]">Manufacturers needing flat panel printing prior to final assembly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: What We Focus On */}
          <div className="bg-[#1b1a18] text-white rounded-[28px] p-8 md:p-14">
            <div className="max-w-[650px] mb-10">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#e37b4f] font-extrabold mb-3">
                CORE PRINCIPLES
              </div>
              <h2 className="text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.05em] font-extrabold mb-4">
                What We Focus On
              </h2>
              <p className="text-[#d1ccc4] text-[16px] leading-relaxed">
                Our operations in Jogeshwari West prioritize print reliability, production consistency, and clear commercial expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-[#33312c]">
              <div>
                <h4 className="text-[18px] font-extrabold text-white mb-2">Print Quality</h4>
                <p className="text-[13px] text-[#a8a39a] leading-relaxed">Sharp edges, even ink deposition, and proper heat curing for wash fastness.</p>
              </div>
              <div>
                <h4 className="text-[18px] font-extrabold text-white mb-2">Suitable Methods</h4>
                <p className="text-[13px] text-[#a8a39a] leading-relaxed">Honest recommendations on which technique matches your budget and artwork.</p>
              </div>
              <div>
                <h4 className="text-[18px] font-extrabold text-white mb-2">Garment Compatibility</h4>
                <p className="text-[13px] text-[#a8a39a] leading-relaxed">Evaluating fabric stretch, weave, and thickness prior to press runs.</p>
              </div>
              <div>
                <h4 className="text-[18px] font-extrabold text-white mb-2">Production Consistency</h4>
                <p className="text-[13px] text-[#a8a39a] leading-relaxed">Maintaining print placement and color registration across the entire batch.</p>
              </div>
              <div>
                <h4 className="text-[18px] font-extrabold text-white mb-2">Bulk Requirements</h4>
                <p className="text-[13px] text-[#a8a39a] leading-relaxed">Optimized workflows for orders ranging from ~50 to 1,000+ pieces.</p>
              </div>
              <div>
                <h4 className="text-[18px] font-extrabold text-white mb-2">Practical Communication</h4>
                <p className="text-[13px] text-[#a8a39a] leading-relaxed">Clear timelines, realistic capacities, and straightforward terms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
};
