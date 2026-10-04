import React from 'react';
import { Button } from './Button';
import { CapabilityItem } from '../data/capabilitiesData';
import { CheckCircle2, AlertCircle, Layers, ArrowRight } from 'lucide-react';

interface CapabilityDetailProps {
  cap: CapabilityItem;
}

/**
 * CapabilityDetail — expanded body of a capability accordion row.
 * Extracted so the page's row markup stays readable.
 */
export const CapabilityDetail: React.FC<CapabilityDetailProps> = ({ cap }) => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 pt-2">
        {/* Left: description + suitability */}
        <div>
          <p className="text-[17px] md:text-[18px] text-[#3f3b36] leading-relaxed font-medium mb-8">
            {cap.fullDesc}
          </p>

          <div className="space-y-7 pt-6 border-t border-[#d9d2c6]">
            <div>
              <h4 className="text-[12px] uppercase tracking-wider font-extrabold text-[#181715] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c85d2f]" />
                <span>Suitable Fabrics &amp; Blends</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {cap.suitableFabrics.map((fabric) => (
                  <span key={fabric} className="text-[12.5px] font-semibold bg-[#f4f0e8] text-[#181715] px-3 py-1.5 rounded-lg border border-[#d9c2c4]">
                    {fabric}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[12px] uppercase tracking-wider font-extrabold text-[#181715] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c85d2f]" />
                <span>Suitable Production Use Cases</span>
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[14px] text-[#5f5951]">
                {cap.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2">
                    <span className="text-[#c85d2f] font-bold mt-0.5 shrink-0">•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: reference image + production constraints */}
        <div className="space-y-5">
          <div className="relative aspect-[4/3] bg-[#292722] rounded-[20px] overflow-hidden">
            <img
              src={cap.image}
              alt={`${cap.title} printing capability detail`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181715]/85 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-5 text-[10px] uppercase font-extrabold tracking-[0.14em] text-white/90">
              DISCREN · {cap.badge ?? cap.title}
            </span>
          </div>

          <div className="bg-[#e7dfd2] border border-[#c9c0b2] rounded-[20px] p-6">
            <h4 className="text-[12px] uppercase tracking-wider font-extrabold text-[#181715] mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#c85d2f]" />
              <span>Production Considerations</span>
            </h4>
            <ul className="space-y-2 text-[13.5px] text-[#4a453f]">
              {cap.considerations.map((consideration) => (
                <li key={consideration} className="flex items-start gap-2">
                  <span className="text-[#181715] font-bold shrink-0">—</span>
                  <span>{consideration}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            to={`/contact?method=${encodeURIComponent(cap.title)}`}
            variant="primary"
            className="w-full justify-between gap-2"
          >
            <span>Discuss {cap.title} Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
