import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ProcessFlow } from '../components/ProcessFlow';
import { CTASection } from '../components/CTASection';
import { processData } from '../data/processData';
import { Button } from '../components/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

/** Established figures, kept consistent with the homepage. */
const workflowStats = [
  { value: '07', label: 'Structured stages' },
  { value: '~50+', label: 'Starting MOQ' },
  { value: '1,000+', label: 'Bulk capacity' },
  { value: '2–4 wks', label: 'Normal turnaround' },
];

export const Process: React.FC = () => {
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
      >
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#d9d2c6] border border-[#d9d2c6] rounded-[20px] overflow-hidden max-w-[820px]">
          {workflowStats.map((stat) => (
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

      {/* The workflow — inverted centerpiece so the stepper reads as the focal point */}
      <section className="py-20 md:py-28 bg-[#1b1a18] text-white">
        <div className="container-custom">
          <div className="max-w-[660px] mb-14">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#e37b4f] font-extrabold mb-3">
              THE WORKFLOW
            </div>
            <h2 className="text-[clamp(30px,4.4vw,50px)] leading-[1.05] tracking-[-0.05em] font-extrabold mb-4">
              Seven Stages, No Guesswork.
            </h2>
            <p className="text-[16px] md:text-[17px] text-[#d1ccc4] leading-relaxed">
              Select any stage to see exactly what happens, what you provide, and what our team handles.
            </p>
          </div>

          <ProcessFlow />
        </div>
      </section>

      {/* Client checklist — derived directly from each stage's clientTask */}
      <section className="py-20 md:py-28 bg-[#e7dfd2] border-y border-[#c9c0b2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                WHAT WE NEED FROM YOU
              </div>
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.05em] font-extrabold text-[#181715] mb-4 max-w-[440px]">
                A Simple Checklist Before Production Starts.
              </h2>
              <p className="text-[16px] text-[#5f5951] leading-relaxed max-w-[440px] mb-7">
                Having these ready speeds up artwork review, reduces sampling rounds, and helps us quote accurately.
              </p>
              <Button to="/contact" variant="primary" className="gap-2">
                <span>Start Stage 01 — Share Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {processData.map((step) => (
                <li
                  key={step.num}
                  className="rounded-[18px] bg-[#fbfaf6] border border-[#c9c0b2] p-6 flex gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#c85d2f] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-[0.14em] font-extrabold text-[#c85d2f] mb-1.5">
                      Stage {step.num}
                    </span>
                    <p className="text-[14px] text-[#5f5951] leading-relaxed">
                      {step.clientTask}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
