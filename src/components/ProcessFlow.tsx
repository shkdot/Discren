import React, { useState, useRef } from 'react';
import { processData } from '../data/processData';
import {
  MessageSquare, Search, Layers, FlaskConical,
  Factory, CheckCircle2, Truck, ChevronLeft, ChevronRight,
} from 'lucide-react';

/** Icon per stage — keyed to step number so reordering can't desync icons. */
const stageIcons = {
  '01': MessageSquare,
  '02': Search,
  '03': Layers,
  '04': FlaskConical,
  '05': Factory,
  '06': CheckCircle2,
  '07': Truck,
} as const;

/** Compact node labels — the full titles are too long to fit under a step. */
const stageLabels: Record<string, string> = {
  '01': 'Brief',
  '02': 'Review',
  '03': 'Method',
  '04': 'Sample',
  '05': 'Production',
  '06': 'Quality',
  '07': 'Dispatch',
};

/**
 * ProcessFlow — interactive stepper for the 7-stage production workflow.
 *
 * Replaces a long stack of near-identical timeline cards with a stepper +
 * detail panel, so only one stage is expanded at a time.
 */
export const ProcessFlow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const total = processData.length;
  const step = processData[activeIndex];
  const StageIcon = stageIcons[step.num as keyof typeof stageIcons] ?? CheckCircle2;

  // Align the connector to the first/last node centres in an equal-width grid.
  const edge = 100 / (2 * total);
  const span = 100 - edge * 2;
  const progress = (activeIndex / (total - 1)) * span;

  const goTo = (i: number) => setActiveIndex(Math.max(0, Math.min(total - 1, i)));

  // Arrow/Home/End navigation, as expected of a role="tablist" widget.
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = {
      ArrowRight: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: total - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      const next = Math.max(0, Math.min(total - 1, map[e.key]));
      setActiveIndex(next);
      // Roving tabindex: focus must follow the selection.
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div>
      {/* Stepper — scrolls horizontally on small screens */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
        <div className="relative min-w-[660px]" role="tablist" aria-label="Production stages">
          <div
            className="absolute top-[17px] h-[2px] bg-white/12"
            style={{ left: `${edge}%`, width: `${span}%` }}
            aria-hidden="true"
          />
          <div
            className="absolute top-[17px] h-[2px] bg-[#c85d2f] transition-[width] duration-500 ease-out motion-reduce:transition-none"
            style={{ left: `${edge}%`, width: `${progress}%` }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-7">
            {processData.map((s, i) => {
              const done = i <= activeIndex;
              const isActive = i === activeIndex;
              return (
                <button
                  key={s.num}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  type="button"
                  role="tab"
                  id={`stage-tab-${s.num}`}
                  aria-selected={isActive}
                  aria-controls="stage-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={handleKeyDown}
                  className="group flex flex-col items-center gap-3 focus:outline-none"
                >
                  <span
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-[12px] font-extrabold transition-all duration-300 motion-reduce:transition-none ${
                      isActive
                        ? 'bg-white border-white text-[#181715] scale-110'
                        : done
                          ? 'bg-[#c85d2f] border-[#c85d2f] text-white'
                          : 'bg-[#242220] border-white/15 text-white/45 group-hover:border-white/40 group-hover:text-white/70'
                    }`}
                  >
                    {s.num}
                  </span>
                  <span
                    className={`text-[11px] uppercase tracking-[0.12em] font-bold text-center leading-tight transition-colors ${
                      isActive ? 'text-white' : 'text-white/45'
                    }`}
                  >
                    {stageLabels[s.num] ?? s.num}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      <div
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-tab-${step.num}`}
        className="mt-10 rounded-[26px] border border-white/10 bg-[#242220] p-7 md:p-10"
      >
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="w-11 h-11 rounded-[14px] bg-[#c85d2f]/15 border border-[#c85d2f]/30 flex items-center justify-center shrink-0">
                <StageIcon className="w-5 h-5 text-[#e37b4f]" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#e37b4f]">
                Stage {step.num}
              </span>
            </div>

            <h3 className="mt-5 text-[27px] md:text-[36px] leading-[1.08] tracking-[-0.045em] font-extrabold text-white">
              {step.title}
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-[#e37b4f] font-semibold">
              {step.shortDesc}
            </p>

            <p className="mt-5 text-[16px] md:text-[17px] leading-relaxed text-[#b8b2a8]">
              {step.detailDesc}
            </p>
          </div>

          {/* Responsibility split */}
          <div className="space-y-3">
            <div className="rounded-[18px] bg-white/[0.04] border border-white/10 p-6">
              <span className="text-[10.5px] uppercase tracking-[0.14em] font-extrabold text-white/50">
                Client Provides
              </span>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#d5d0c8]">
                {step.clientTask}
              </p>
            </div>

            <div className="rounded-[18px] bg-[#c85d2f]/10 border border-[#c85d2f]/30 p-6">
              <span className="text-[10.5px] uppercase tracking-[0.14em] font-extrabold text-[#e37b4f]">
                DISCREN Handles
              </span>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[#d5d0c8]">
                {step.discrenTask}
              </p>
            </div>
          </div>
        </div>

        {/* Prev / next */}
        <div className="mt-9 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="inline-flex items-center gap-2 text-[13px] font-extrabold text-white/60 hover:text-white transition-colors disabled:opacity-30 disabled:hover:text-white/60 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-[12px] font-extrabold tracking-wider text-white/35 tabular-nums">
            {activeIndex + 1} / {total}
          </span>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === total - 1}
            className="inline-flex items-center gap-2 text-[13px] font-extrabold text-white/60 hover:text-white transition-colors disabled:opacity-30 disabled:hover:text-white/60 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
