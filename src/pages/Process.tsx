import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { processData } from '../data/processData';
import { CheckCircle2, FileText, Cpu, FlaskConical, Factory, Search, Truck, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Process: React.FC = () => {
  const stepIcons = [
    <FileText className="w-5 h-5 text-[#c85d2f]" />,
    <Search className="w-5 h-5 text-[#c85d2f]" />,
    <Cpu className="w-5 h-5 text-[#c85d2f]" />,
    <FlaskConical className="w-5 h-5 text-[#c85d2f]" />,
    <Factory className="w-5 h-5 text-[#c85d2f]" />,
    <CheckCircle2 className="w-5 h-5 text-[#c85d2f]" />,
    <Truck className="w-5 h-5 text-[#c85d2f]" />,
  ];

  return (
    <>
      <SEO
        title="Apparel Printing Process — DISCREN"
        description="Understand the DISCREN 7-step B2B apparel printing process from artwork review and method selection to sampling, bulk production, and quality dispatch."
      />

      <PageHero
        eyebrow="PRODUCTION WORKFLOW"
        title="A Clear Process From Artwork to Production"
        subtitle="Good printing starts before the first production piece is printed. Our structured workflow ensures clarity, consistency, and alignment at every stage."
      />

      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          {/* Timeline Wrapper */}
          <div className="relative border-l-2 border-[#d9d2c6] pl-6 md:pl-12 ml-4 md:ml-8 space-y-16">
            {processData.map((step, index) => (
              <div key={step.num} className="relative group">
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[31px] md:-left-[55px] top-0 w-10 h-10 rounded-full bg-[#fbfaf6] border-2 border-[#c85d2f] flex items-center justify-center font-extrabold text-[12px] text-[#c85d2f] shadow-xs">
                  {step.num}
                </div>

                <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] p-7 md:p-10 shadow-xs transition-all duration-300 hover:border-[#aaa195]">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#f4f0e8]">
                        {stepIcons[index % stepIcons.length]}
                      </div>
                      <span className="text-[12px] uppercase tracking-widest font-extrabold text-[#c85d2f]">
                        Stage {step.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[26px] md:text-[32px] font-extrabold text-[#181715] tracking-[-0.04em] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[16px] text-[#514d47] leading-relaxed mb-6 font-medium max-w-[760px]">
                    {step.detailDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#d9d2c6]">
                    <div className="bg-[#f4f0e8] p-5 rounded-[16px]">
                      <span className="block text-[11px] uppercase tracking-wider font-extrabold text-[#181715] mb-1.5">
                        Client Action
                      </span>
                      <p className="text-[13px] text-[#6e6a63] leading-relaxed">
                        {step.clientTask}
                      </p>
                    </div>

                    <div className="bg-[#f4f0e8] p-5 rounded-[16px]">
                      <span className="block text-[11px] uppercase tracking-wider font-extrabold text-[#c85d2f] mb-1.5">
                        DISCREN Action
                      </span>
                      <p className="text-[13px] text-[#6e6a63] leading-relaxed">
                        {step.discrenTask}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center pt-8 border-t border-[#d9d2c6]">
            <Button to="/contact" variant="primary" className="px-8 gap-2">
              <span>Start Stage 01 — Share Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
