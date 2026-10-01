import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/Button';
import { capabilitiesData, CapabilityItem } from '../data/capabilitiesData';
import { CheckCircle2, AlertCircle, Layers, ArrowRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const { hash } = useLocation();
  const [selectedCap, setSelectedCap] = useState<string>('screen-printing');

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSelectedCap(targetId);
      }
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Apparel Printing Capabilities — DISCREN"
        description="Explore DISCREN printing capabilities: Screen printing, DTF, 3D puff, high-density silicone, cut panel printing, and finished garment printing in Mumbai."
      />

      <PageHero
        eyebrow="PRODUCTION TECHNIQUES"
        title="Printing Capabilities"
        subtitle="Printing capabilities tailored for different apparel production needs, fabric types, and artwork requirements."
      />

      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          {/* Quick Filter Bar */}
          <div className="flex flex-wrap gap-2 pb-8 mb-12 border-b border-[#d9d2c6]">
            {capabilitiesData.map((cap) => (
              <a
                key={cap.id}
                href={`#${cap.id}`}
                onClick={() => setSelectedCap(cap.id)}
                className={`px-4 py-2.5 rounded-full text-[13px] font-extrabold transition-all border ${
                  selectedCap === cap.id
                    ? 'bg-[#1b1a18] text-white border-[#1b1a18]'
                    : 'bg-[#fbfaf6] text-[#6e6a63] border-[#d9d2c6] hover:border-[#181715] hover:text-[#181715]'
                }`}
              >
                {cap.num} / {cap.title}
              </a>
            ))}
          </div>

          {/* Capabilities Detailed List */}
          <div className="space-y-20">
            {capabilitiesData.map((cap, index) => (
              <article
                key={cap.id}
                id={cap.id}
                className="scroll-mt-28 bg-[#fbfaf6] border border-[#d9d2c6] rounded-[28px] p-7 md:p-12 overflow-hidden shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-widest bg-[#f4f0e8] px-3 py-1 rounded-full border border-[#d9d2c6]">
                        Capability {cap.num}
                      </span>
                      {cap.badge && (
                        <span className="text-[11px] font-bold text-[#6e6a63] uppercase tracking-wider">
                          {cap.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="text-[32px] md:text-[42px] font-extrabold text-[#181715] tracking-[-0.05em] leading-tight mb-4">
                      {cap.title}
                    </h2>

                    <p className="text-[16px] md:text-[17px] text-[#514d47] leading-relaxed mb-6 font-medium">
                      {cap.fullDesc}
                    </p>

                    <div className="space-y-6 pt-4 border-t border-[#d9d2c6]">
                      {/* Suitable Fabrics */}
                      <div>
                        <h4 className="text-[12px] uppercase tracking-wider font-extrabold text-[#181715] mb-2.5 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#c85d2f]" />
                          <span>Suitable Fabrics & Blends</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cap.suitableFabrics.map((fabric, i) => (
                            <span key={i} className="text-[12px] font-semibold bg-[#f4f0e8] text-[#181715] px-3 py-1 rounded-lg border border-[#d9d2c6]/60">
                              {fabric}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Suitable Use Cases */}
                      <div>
                        <h4 className="text-[12px] uppercase tracking-wider font-extrabold text-[#181715] mb-2.5 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          <span>Suitable Production Use Cases</span>
                        </h4>
                        <ul className="space-y-2 text-[14px] text-[#6e6a63]">
                          {cap.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#c85d2f] font-bold mt-0.5">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Image & Technical Considerations */}
                  <div className="space-y-6">
                    <div className="aspect-[4/3] bg-[#292722] rounded-[20px] overflow-hidden relative shadow-md">
                      <img
                        src={cap.image}
                        alt={`${cap.title} printing capability detail`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="bg-[#f4f0e8] border border-[#d9d2c6] rounded-[20px] p-6">
                      <h4 className="text-[12px] uppercase tracking-wider font-extrabold text-[#181715] mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#c85d2f]" />
                        <span>Production Considerations</span>
                      </h4>
                      <ul className="space-y-2 text-[13px] text-[#6e6a63]">
                        {cap.considerations.map((consideration, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#181715] font-bold">—</span>
                            <span>{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button to={`/contact?method=${encodeURIComponent(cap.title)}`} variant="primary" className="w-full justify-between gap-2">
                        <span>Discuss {cap.title} Requirement</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
