import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

interface SmoothScrollProps {
  children: ReactNode;
  disable?: boolean;
}

export const SmoothScroll = ({ children, disable = false }: SmoothScrollProps) => {
  useEffect(() => {
    // Disable Lenis when footer curtain reveal is active (fixed footer)
    // or when explicitly disabled (e.g., pages with ScrollTrigger)
    if (disable) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
    };
  }, [disable]);

  return <>{children}</>;
};
