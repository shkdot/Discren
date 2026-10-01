import React from 'react';
import { ProcessStepItem } from '../data/processData';

interface ProcessStepProps {
  step: ProcessStepItem;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, isExpanded, onToggle }) => {
  return (
    <div className="py-7 px-6 md:px-8 border-b border-[#d9d2c6] transition-colors hover:bg-[#fbfaf6]/60">
      <div className="flex items-start justify-between">
        <span className="text-[12px] font-extrabold text-[#c85d2f] tracking-wider mb-3 block">
          {step.num}
        </span>
      </div>
      <h3 className="text-[20px] md:text-[22px] tracking-[-0.03em] font-extrabold text-[#181715] mb-2">
        {step.title}
      </h3>
      <p className="text-[14px] text-[#6e6a63] leading-relaxed max-w-[420px] mb-4">
        {step.shortDesc}
      </p>

      {step.clientTask && (
        <div className="mt-4 pt-4 border-t border-[#d9d2c6]/50 text-[13px] space-y-2">
          <div>
            <span className="font-bold text-[#181715]">Client Provides: </span>
            <span className="text-[#6e6a63]">{step.clientTask}</span>
          </div>
          <div>
            <span className="font-bold text-[#c85d2f]">DISCREN Handles: </span>
            <span className="text-[#6e6a63]">{step.discrenTask}</span>
          </div>
        </div>
      )}
    </div>
  );
};
