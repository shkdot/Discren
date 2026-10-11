import React, { useEffect, useRef } from 'react';
import { processData } from '../data/processData';
import {
  MessageSquare, Search, Layers, FlaskConical,
  Factory, CheckCircle2, Truck,
} from 'lucide-react';

const stageIcons = {
  '01': MessageSquare,
  '02': Search,
  '03': Layers,
  '04': FlaskConical,
  '05': Factory,
  '06': CheckCircle2,
  '07': Truck,
} as const;

const featurePills = [
  { label: 'Vector artwork', status: 'Provided',     color: '#c85d2f' },
  { label: 'Garment spec',   status: 'Under review', color: '#b89a30' },
  { label: 'Quantity count', status: 'Confirmed',    color: '#c85d2f' },
];

/**
 * ProcessFlow — horizontal sticky-scroll "What you get" section.
 *
 * How the scroll works:
 *  1. The outer <section> is tall enough that it takes N viewport-heights
 *     to scroll through (we set this dynamically from the track's real pixel width).
 *  2. Inside, a `position: sticky; top: 0; height: 100vh` wrapper pins the view.
 *  3. A scroll listener maps the section's vertical scroll progress → track's
 *     horizontal translate, so the cards glide left as you scroll down.
 *  4. On mobile (< 768 px) we fall back to a plain vertical card stack.
 */
export const ProcessFlow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky  = stickyRef.current;
    const track   = trackRef.current;
    if (!section || !sticky || !track) return;

    /** Re-measure and store the max translate amount + set section height. */
    const measure = () => {
      // The track is wider than the viewport; we need to slide it that difference.
      const slideDistance = track.scrollWidth - window.innerWidth;
      // Give the section enough vertical height so scrolling that distance
      // feels comfortable — we add 1 full viewport height as the "entrance" beat.
      section.style.height = `${slideDistance + window.innerHeight}px`;
      return slideDistance;
    };

    let slideDistance = measure();

    const update = () => {
      const rect     = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);                       // px past the top
      const progress = slideDistance > 0
        ? Math.min(1, scrolled / slideDistance)
        : 0;

      track.style.transform = `translateX(-${progress * slideDistance}px)`;

      // Journey line grow
      if (lineRef.current) {
        lineRef.current.style.width = `${progress * 100}%`;
      }

      // Dots + vertical lines
      const dots   = section.querySelectorAll<HTMLElement>('[data-dot]');
      const vlines = section.querySelectorAll<HTMLElement>('[data-vline]');
      const n = dots.length;

      dots.forEach((dot, i) => {
        const threshold = (i + 1) / (n + 1);
        const on = progress >= threshold;
        dot.style.opacity   = on ? '1' : '0.25';
        dot.style.transform = on ? 'scale(1)' : 'scale(0.5)';
      });

      vlines.forEach((vl, i) => {
        const threshold = (i + 1) / (n + 1);
        const on = progress >= threshold;
        vl.style.opacity   = on ? '1' : '0';
        vl.style.transform = on ? 'scaleY(1)' : 'scaleY(0)';
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    const onResize = () => {
      slideDistance = measure();
      update();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    update(); // run once on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const featureStage = processData[0];
  const FeatureIcon  = stageIcons[featureStage.num as keyof typeof stageIcons];

  // Top row: stages 02–04 (hang down from line)
  // Bottom row: stages 05–07 (hang up from line)
  const topRow    = processData.slice(1, 4);
  const bottomRow = processData.slice(4, 7);

  return (
    <>
      {/* ─── DESKTOP: sticky horizontal scroll ───────────────────────────── */}
      <div
        ref={sectionRef}
        className="relative w-full hidden md:block"
        /* Height set dynamically by JS; fallback gives ~3 scroll-lengths */
        style={{ height: '400vw' }}
      >
        <div
          ref={stickyRef}
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: '100vh' }}
        >
          {/* ── Horizontal track ─────────────────────────────────────────── */}
          <div
            ref={trackRef}
            className="flex items-center will-change-transform"
            style={{
              width: 'max-content',
              height: '100%',
              paddingLeft: '5vw',
              paddingRight: '8vw',
            }}
          >
            {/* ── BIG FEATURE CARD — Stage 01 ─────────────────────────── */}
            <div
              className="shrink-0 self-center rounded-[1.4vw] overflow-hidden"
              style={{
                width: 'clamp(300px, 28vw, 420px)',
                height: 'clamp(340px, 32vw, 480px)',
                background: 'linear-gradient(160deg, #2d2b28 0%, #1b1a18 85%)',
                border: '1px solid rgba(200,93,47,0.3)',
              }}
            >
              <div className="flex h-full flex-col justify-between p-7">
                {/* Top: icon + label + title */}
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex shrink-0 items-center justify-center rounded-xl"
                      style={{
                        width: 40, height: 40,
                        background: 'rgba(200,93,47,0.15)',
                        color: '#e37b4f',
                      }}
                    >
                      <FeatureIcon className="size-[18px]" aria-hidden />
                    </span>
                    <p
                      className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: '#c85d2f' }}
                    >
                      The start of it
                    </p>
                  </div>

                  <h3
                    className="mt-4 font-extrabold leading-snug tracking-tight text-white"
                    style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}
                  >
                    {featureStage.title}
                  </h3>
                </div>

                {/* Middle: status pills */}
                <div className="space-y-2">
                  {featurePills.map((p) => (
                    <div
                      key={p.label}
                      className="flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontSize: '12.5px',
                      }}
                    >
                      <span style={{ color: '#d5d0c8' }}>{p.label}</span>
                      <span className="shrink-0 font-semibold" style={{ color: p.color }}>
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom: description */}
                <p className="text-[13px] leading-[1.6]" style={{ color: '#b8b2a8' }}>
                  {featureStage.shortDesc}
                </p>
              </div>
            </div>

            {/* ── JOURNEY SECTION — Stages 02–07 ──────────────────────── */}
            {/* This wrapper is tall enough to contain both rows + the line */}
            <div
              className="relative self-center shrink-0"
              style={{
                /* 3 items × (item width + gap) per row, plus left offset for bottom row */
                width: 'calc(3 * 28vw + 2 * 14vw + 7vw + 4vw)',
                minWidth: '820px',
                height: 'clamp(340px, 32vw, 480px)',
                marginLeft: '5vw',
              }}
            >
              {/* Horizontal journey line — centred vertically */}
              <div
                className="absolute left-0 right-0 pointer-events-none"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                {/* Faint track */}
                <div
                  className="h-px w-full"
                  style={{ background: 'rgba(200,93,47,0.18)' }}
                />
                {/* Growing accent fill */}
                <div
                  ref={lineRef}
                  className="absolute inset-y-0 left-0 h-px"
                  style={{ background: '#c85d2f', width: '0%' }}
                />
              </div>

              {/* ── TOP ROW: 02 03 04 — hang DOWN from the centre line ── */}
              <div
                className="absolute top-0 left-0 flex items-end"
                style={{
                  height: '50%',
                  width: '100%',
                  gap: '14vw',
                  paddingBottom: '1.6vw',
                }}
              >
                {topRow.map((stage) => {
                  const Icon = stageIcons[stage.num as keyof typeof stageIcons] ?? CheckCircle2;
                  return (
                    <div
                      key={stage.num}
                      className="relative flex flex-col justify-end"
                      style={{ width: '28vw', minWidth: '220px', paddingLeft: '2vw' }}
                    >
                      {/* Dot on the line */}
                      <div
                        data-dot
                        className="absolute left-0 bottom-0 rounded-full"
                        style={{
                          width: 10, height: 10,
                          background: '#c85d2f',
                          transform: 'translate(-50%, 50%) scale(0.5)',
                          opacity: 0.25,
                          transition: 'opacity 0.5s ease, transform 0.5s ease',
                        }}
                      />
                      {/* Vertical connector */}
                      <div
                        className="absolute left-0 bottom-0"
                        style={{ height: '80%', width: 1 }}
                      >
                        <div
                          data-vline
                          className="h-full w-px rounded-full origin-bottom"
                          style={{
                            background: 'rgba(200,93,47,0.4)',
                            opacity: 0,
                            transform: 'scaleY(0)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                          }}
                        />
                      </div>

                      {/* Stage label + title + desc */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="flex shrink-0 items-center justify-center rounded-lg"
                            style={{
                              width: 26, height: 26,
                              background: 'rgba(200,93,47,0.14)',
                              color: '#e37b4f',
                            }}
                          >
                            <Icon className="size-3" aria-hidden />
                          </span>
                          <span
                            className="text-[9.5px] font-extrabold uppercase tracking-[0.18em]"
                            style={{ color: '#c85d2f' }}
                          >
                            Stage {stage.num}
                          </span>
                        </div>
                        <h4
                          className="font-extrabold leading-tight text-white"
                          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}
                        >
                          {stage.title}
                        </h4>
                        <p
                          className="leading-[1.45]"
                          style={{
                            color: '#9e9890',
                            fontSize: 'clamp(11px, 1.1vw, 13.5px)',
                            maxWidth: '90%',
                          }}
                        >
                          {stage.shortDesc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── BOTTOM ROW: 05 06 07 — hang UP from the centre line ── */}
              <div
                className="absolute bottom-0 flex items-start"
                style={{
                  left: '7vw',
                  height: '50%',
                  width: '100%',
                  gap: '14vw',
                  paddingTop: '1.6vw',
                }}
              >
                {bottomRow.map((stage) => {
                  const Icon = stageIcons[stage.num as keyof typeof stageIcons] ?? CheckCircle2;
                  return (
                    <div
                      key={stage.num}
                      className="relative flex flex-col"
                      style={{ width: '28vw', minWidth: '220px', paddingLeft: '2vw' }}
                    >
                      {/* Dot on the line */}
                      <div
                        data-dot
                        className="absolute left-0 top-0 rounded-full"
                        style={{
                          width: 10, height: 10,
                          background: '#c85d2f',
                          transform: 'translate(-50%, -50%) scale(0.5)',
                          opacity: 0.25,
                          transition: 'opacity 0.5s ease, transform 0.5s ease',
                        }}
                      />
                      {/* Vertical connector */}
                      <div
                        className="absolute left-0 top-0"
                        style={{ height: '80%', width: 1 }}
                      >
                        <div
                          data-vline
                          className="h-full w-px rounded-full origin-top"
                          style={{
                            background: 'rgba(200,93,47,0.4)',
                            opacity: 0,
                            transform: 'scaleY(0)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                          }}
                        />
                      </div>

                      {/* Stage label + title + desc */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="flex shrink-0 items-center justify-center rounded-lg"
                            style={{
                              width: 26, height: 26,
                              background: 'rgba(200,93,47,0.14)',
                              color: '#e37b4f',
                            }}
                          >
                            <Icon className="size-3" aria-hidden />
                          </span>
                          <span
                            className="text-[9.5px] font-extrabold uppercase tracking-[0.18em]"
                            style={{ color: '#c85d2f' }}
                          >
                            Stage {stage.num}
                          </span>
                        </div>
                        <h4
                          className="font-extrabold leading-tight text-white"
                          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}
                        >
                          {stage.title}
                        </h4>
                        <p
                          className="leading-[1.45]"
                          style={{
                            color: '#9e9890',
                            fontSize: 'clamp(11px, 1.1vw, 13.5px)',
                            maxWidth: '90%',
                          }}
                        >
                          {stage.shortDesc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <p
            className="absolute bottom-7 right-8 text-[10px] font-bold uppercase tracking-[0.18em] select-none"
            style={{ color: 'rgba(255,255,255,0.18)' }}
          >
            Scroll to reveal →
          </p>
        </div>
      </div>

      {/* ─── MOBILE FALLBACK: vertical card stack ────────────────────────── */}
      <div className="md:hidden px-4 py-10 space-y-4">
        {processData.map((stage) => {
          const Icon = stageIcons[stage.num as keyof typeof stageIcons] ?? CheckCircle2;
          return (
            <div
              key={stage.num}
              className="rounded-2xl p-5 flex gap-4"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(200,93,47,0.2)',
              }}
            >
              {/* Left: icon + line */}
              <div className="flex flex-col items-center gap-2 shrink-0">
                <span
                  className="flex size-9 items-center justify-center rounded-xl shrink-0"
                  style={{ background: 'rgba(200,93,47,0.15)', color: '#e37b4f' }}
                >
                  <Icon className="size-4" aria-hidden />
                </span>
                <div className="w-px flex-1" style={{ background: 'rgba(200,93,47,0.2)' }} />
              </div>

              {/* Right: text */}
              <div className="pt-1 pb-2">
                <span
                  className="text-[9.5px] font-extrabold uppercase tracking-[0.18em]"
                  style={{ color: '#c85d2f' }}
                >
                  Stage {stage.num}
                </span>
                <h4 className="mt-1.5 text-[15px] font-extrabold leading-snug text-white">
                  {stage.title}
                </h4>
                <p className="mt-1.5 text-[13px] leading-[1.5]" style={{ color: '#9e9890' }}>
                  {stage.shortDesc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
