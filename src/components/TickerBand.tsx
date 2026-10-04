import React from 'react';

interface TickerBandProps {
  items: string[];
  /** Seconds for one full loop. */
  duration?: number;
}

/**
 * TickerBand — thin full-bleed marquee used to break up long runs of
 * identically-styled sections on the homepage.
 *
 * The item list is rendered twice so the -50% translate loops seamlessly.
 * Animation pauses on hover and is disabled under prefers-reduced-motion
 * (see `.marquee-*` rules in src/styles/globals.css).
 */
export const TickerBand: React.FC<TickerBandProps> = ({ items, duration = 38 }) => {
  const loop = [...items, ...items];

  return (
    <div
      className="marquee-viewport w-full overflow-hidden bg-[#c85d2f] text-white border-y border-[#9e4522] select-none"
      aria-hidden="true"
    >
      <div
        className="marquee-track items-center py-3.5"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center shrink-0">
            <span className="text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.16em] whitespace-nowrap px-6">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
