import React from 'react';
import { ProcessStepItem } from '../data/processData';
import { Plus, Minus } from 'lucide-react';

interface ProcessStepProps {
  step: ProcessStepItem;
  isExpanded?: boolean;
  onToggle?: () => void;
}

/**
 * ProcessStep — expandable row used in the homepage process accordion.
 * When `onToggle` is omitted it renders as a static, always-open block.
 */
export const ProcessStep: React.FC<ProcessStepProps> = ({ step, isExpanded = true, onToggle }) => {
  const isInteractive = typeof onToggle === 'function';

  const header = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="text-[12px] font-extrabold text-[#c85d2f] tracking-wider mb-3 block">
          {step.num}
        </span>
        {isInteractive && (
          <span className="shrink-0 w-7 h-7 rounded-full border border-[#d9d2c6] flex items-center justify-center text-[#c85d2f] group-hover:border-[#c85d2f] transition-colors mt-0.5">
            {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        )}
      </div>
      <h3 className="text-[20px] md:text-[22px] tracking-[-0.03em] font-extrabold text-[#181715] mb-2">
        {step.title}
      </h3>
      <p className="text-[14px] text-[#6e6a63] leading-relaxed max-w-[420px]">
        {step.shortDesc}
      </p>
    </>
  );

  const details = step.clientTask && (
    <div className="mt-5 pt-5 border-t border-[#d9d2c6]/50 text-[13px] space-y-2">
      <div>
        <span className="font-bold text-[#181715]">Client Provides: </span>
        <span className="text-[#6e6a63]">{step.clientTask}</span>
      </div>
      <div>
        <span className="font-bold text-[#c85d2f]">DISCREN Handles: </span>
        <span className="text-[#6e6a63]">{step.discrenTask}</span>
      </div>
    </div>
  );

  const shell = `py-7 px-6 md:px-8 transition-colors ${isInteractive ? 'hover:bg-[#fbfaf6]' : ''}`;

  if (!isInteractive) {
    return (
      <div className={shell}>
        {header}
        <div className="mt-4">{details}</div>
      </div>
    );
  }

  return (
    <div className={`${shell} group cursor-pointer`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full text-left focus:outline-none"
      >
        {header}
      </button>
      {isExpanded && <div className="animate-fade-in">{details}</div>}
    </div>
  );
};

