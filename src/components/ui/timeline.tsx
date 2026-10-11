// Built using Hyperiux Vault: https://vault.hyperiux.com
// Adapted for Vite + React (no Next.js "use client" directive needed)

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/* ─── Inline stand-in for @gsap/react's useGSAP ───────────────────────────
   Mirrors its default revertOnUpdate: false. One gsap.context lives for the
   component's lifetime; the callback is re-added when dependencies change;
   the context is reverted only on unmount.                                  */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// ─── Reduced-motion helpers ────────────────────────────────────────────────
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}
function getServerReducedMotionSnapshot() { return false; }

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────
const monthOrder = {
  January: 1, February: 2, March: 3, April: 4,
  May: 5, June: 6, July: 7, August: 8,
  September: 9, October: 10, November: 11, December: 12,
} as const;

export type JourneyItem = {
  id: string;
  year?: string;
  month?: Month | string;
  title?: string;
  content: string;
  subContent?: string;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  /** Reveal animation duration in seconds. */
  duration?: number;
  /** Fallback reveal duration when `duration` is omitted, in seconds. */
  scrollDuration?: number;
  /** Override the top-row journey items. */
  topItems?: JourneyItem[];
  /** Override the bottom-row journey items. */
  bottomItems?: JourneyItem[];
};

// ─── Default data (DISCREN company milestones) ─────────────────────────────
export const defaultTopItems: JourneyItem[] = [
  {
    id: "2010-january",
    year: "2010",
    month: "January",
    content: "Farooqui Arts founded in Jogeshwari West — the print heritage that DISCREN is built on",
  },
  {
    id: "2016-march",
    year: "2016",
    month: "March",
    content: "First bulk B2B garment contracts secured with Mumbai-based clothing labels",
  },
  {
    id: "2020-june",
    year: "2020",
    month: "June",
    content: "Discharge & water-based ink range added, opening premium fashion-label accounts",
  },
  {
    id: "2024-january",
    year: "2024",
    month: "January",
    content: "DISCREN brand launched — dedicated B2B identity with structured workflow and MOQ system",
  },
];

export const defaultBottomItems: JourneyItem[] = [
  {
    id: "2012-september",
    year: "2012",
    month: "September",
    content: "High-density 3D silicone and puff techniques introduced for streetwear clients",
  },
  {
    id: "2018-november",
    year: "2018",
    month: "November",
    content: "Metallic foil, glow-in-the-dark & reflective specialty inks added to capability set",
  },
  {
    id: "2022-april",
    year: "2022",
    month: "April",
    content: "Cut-panel job-work expanded — supporting garment manufacturers pre-assembly",
  },
];

// ─── Component ──────────────────────────────────────────────────────────────
export default function Timeline({
  title = "Our Story",
  periodLabel = "2010 – 2024",
  textColor = "#181715",
  mutedTextColor = "#6e6a63",
  activeColor = "#c85d2f",
  backgroundColor = "#1b1a18",
  imageUrl = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  imageAlt = "DISCREN screen printing studio — inks and fabric on the press table",
  duration,
  scrollDuration = 1.2,
  topItems = defaultTopItems,
  bottomItems = defaultBottomItems,
}: TimelineProps) {
  const sectionRef     = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion  = usePrefersReducedMotion();
  const animDuration   = duration ?? scrollDuration;
  const normDuration   = Math.max(0.2, animDuration);

  // Merge and sort all items chronologically for sequential reveal
  const allItems: JourneyItem[] = [...topItems, ...bottomItems].sort((a, b) => {
    const yr = Number(a.year) - Number(b.year);
    if (yr !== 0) return yr;
    return monthOrder[a.month] - monthOrder[b.month];
  });

  const sectionStyle: CSSProperties = { color: textColor, backgroundColor };
  const activeStyle: CSSProperties  = { backgroundColor: activeColor };
  const mutedStyle: CSSProperties   = { color: mutedTextColor };

  // ── Horizontal slide animation ──────────────────────────────────────────
  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isMobile    = window.innerWidth < 600;
    const slidePercent = isMobile ? -57 : -65;
    const lineWidth    = isMobile ? "65%" : "98%";
    const lineStart    = isMobile ? "top 30%" : "top 25%";
    const slideEnd     = isMobile ? "82% 50%" : "92% bottom";
    const lineEnd      = isMobile ? "80% 50%" : "92% bottom";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: slideEnd,
        scrub: true,
      },
      defaults: { ease: "none" },
    });

    tl.fromTo(wholeSliderRef.current, { xPercent: 0 }, { xPercent: slidePercent });

    if (reducedMotion) {
      gsap.set(".journey-line", { width: lineWidth });
      return;
    }

    gsap.to(".journey-line", {
      width: lineWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: lineStart,
        end: lineEnd,
        scrub: true,
      },
    });
  }, { dependencies: [reducedMotion], scope: sectionRef });

  // ── Per-item text & line reveal animations ──────────────────────────────
  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (reducedMotion) {
      allItems.forEach((item) => {
        gsap.set(`.jl-${item.id}`, { scaleY: 1 });
        gsap.set(`.jd-${item.id}`, { scale: 1 });
        gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: "transform" });
        gsap.set(`.description-${item.id}`, { opacity: 1, clearProps: "transform" });
      });
      return;
    }

    allItems.forEach((item) => {
      gsap.set(`.jl-${item.id}`, { scaleY: 0, transformOrigin: "bottom bottom" });
      gsap.set(`.jd-${item.id}`, { scale: 0 });
      gsap.set(`.title-${item.id}`, { opacity: 1 });
      gsap.set(`.description-${item.id}`, { opacity: 1 });
    });

    const titleSplits:       Partial<Record<string, SplitTextInstance>> = {};
    const descriptionSplits: Partial<Record<string, SplitTextInstance>> = {};

    allItems.forEach((item) => {
      titleSplits[item.id]       = new SplitText(`.title-${item.id}`,       { type: "chars, words, lines", mask: "lines" });
      descriptionSplits[item.id] = new SplitText(`.description-${item.id}`, { type: "chars, words, lines", mask: "lines" });
    });

    const createItemTimeline = (item: JourneyItem, startPos: number, endPos: number) => {
      const isTop = topItems.some((t) => t.id === item.id);
      if (!isTop) gsap.set(`.jl-${item.id}`, { transformOrigin: "top top" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `${startPos}% 30%`,
          end:   `${endPos}% 50%`,
          scrub: true,
        },
      });

      tl.to(`.jl-${item.id}`, { scaleY: 1, duration: normDuration * 0.4 })
        .to(`.jd-${item.id}`, { scale: 1,  duration: normDuration * 0.4 }, "<")
        .fromTo(titleSplits[item.id]?.lines ?? [],
          { y: 100 },
          { y: 0, delay: -0.8 * normDuration, duration: normDuration, stagger: 0.02, ease: "power2.out" }
        )
        .fromTo(descriptionSplits[item.id]?.lines ?? [],
          { y: 100 },
          { y: 0, duration: normDuration, stagger: 0.02, ease: "power2.out" },
          "<"
        );
    };

    const positions: ReadonlyArray<readonly [number, number]> =
      window.innerWidth < 600
        ? [[22,32],[28,38],[36,46],[45,55],[52,62],[60,70],[69,79]]
        : [[6,26],[16,36],[26,46],[35,55],[45,65],[55,75],[65,85]];

    allItems.forEach((item, idx) => {
      const [s, e] = positions[Math.min(idx, positions.length - 1)];
      createItemTimeline(item, s, e);
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      Object.values(titleSplits).forEach((s) => s?.revert?.());
      Object.values(descriptionSplits).forEach((s) => s?.revert?.());
      window.removeEventListener("resize", onResize);
    };
  }, { dependencies: [normDuration, reducedMotion], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="h-[200vw] max-[600px]:h-[400vh] w-full relative"
      style={sectionStyle}
    >
      <div className="h-screen w-screen sticky top-[0%] pt-[10%] overflow-hidden max-[600px]:top-[5%]">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[30vw] w-[240vw] items-center gap-[5vw] px-[5vw] max-[600px]:h-[80vh] max-[600px]:w-[800vw] max-[600px]:px-[7vw]"
        >
          {/* ── Left image ────────────────────────────────────────────── */}
          <div className="h-full w-[30vw] overflow-hidden rounded-[1vw] max-[600px]:h-[65vw] max-[600px]:w-[85vw] max-[600px]:rounded-[5vw]">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>

          {/* ── Timeline track ─────────────────────────────────────────── */}
          <div className="relative h-full w-full">
            {/* Horizontal journey line */}
            <div className="w-full absolute left-0 top-[49%] translate-y-[-50%] flex items-center h-fit">
              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full"
                style={activeStyle}
              />
              <div
                className="h-px w-[0%] rounded-full journey-line"
                style={activeStyle}
              />
              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full"
                style={activeStyle}
              />
            </div>

            {/* ── TOP HALF: title + top-row items ───────────────────── */}
            <div className="flex h-1/2 w-full items-center justify-start gap-[.5vw]">
              {/* Section heading */}
              <div className="h-full w-[20%] pt-[2vw] max-[600px]:h-fit max-[600px]:pt-[5vw]">
                <h2
                  className="w-[65%] text-[3vw] leading-[0.95] max-[600px]:text-[8.5vw] font-extrabold tracking-[-0.04em]"
                  style={{ color: textColor }}
                >
                  {title}
                </h2>
              </div>

              {/* Top milestone items */}
              <div className="w-full flex h-full gap-x-[15vw] max-[600px]:gap-x-[40vw]">
                {topItems.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[30vw] px-[3vw] max-[600px]:flex max-[600px]:w-[70vw] max-[600px]:flex-col max-[600px]:px-[7vw]"
                  >
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] translate-x-[-50%] relative aspect-square rounded-full jd-${item.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`h-[94%] w-px origin-bottom rounded-full jl-${item.id}`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="mt-[-1vw] space-y-[1vw] max-[600px]:mt-[-2vw]">
                      <h4
                        className={`title-${item.id} text-[2.5vw] leading-none max-[600px]:text-[6.4vw] font-extrabold tracking-[-0.03em]`}
                        style={{ color: textColor }}
                      >
                        {item.year} {item.month}
                      </h4>
                      <p
                        className={`description-${item.id} w-[90%] text-[1.5vw] leading-[1.15] max-[600px]:w-[90%] max-[600px]:text-[4.8vw]`}
                        style={mutedStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── BOTTOM HALF: period label + bottom-row items ──────── */}
            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-[34%] pt-[2vw] max-[600px]:pt-[5vw] max-[600px]:w-[30%] h-full">
                <p
                  className="text-[1.65vw] leading-none max-[600px]:text-[4.2vw]"
                  style={mutedStyle}
                >
                  {periodLabel}
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[20vw] ml-[7vw] max-[600px]:gap-x-[40vw] max-[600px]:ml-[7vw]">
                {bottomItems.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[25vw] px-[3vw] max-[600px]:w-[70vw] max-[600px]:px-[7vw]"
                  >
                    <div className="w-full absolute left-0 bottom-[-1%] h-full">
                      <div
                        className={`h-[94%] origin-top w-px rounded-full max-[600px]:h-full jl-${item.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] translate-x-[-50%] relative w-auto aspect-square rounded-full jd-${item.id}`}
                        style={activeStyle}
                      />
                    </div>

                    <div className="flex h-full w-full flex-col justify-end space-y-[1vw]">
                      <h4
                        className={`title-${item.id} text-[2.5vw] leading-none max-[600px]:text-[6.4vw] font-extrabold tracking-[-0.03em]`}
                        style={{ color: textColor }}
                      >
                        {item.year} {item.month}
                      </h4>
                      <p
                        className={`description-${item.id} w-[90%] text-[1.5vw] leading-[1.15] max-[600px]:w-[90%] max-[600px]:text-[4.8vw]`}
                        style={mutedStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
