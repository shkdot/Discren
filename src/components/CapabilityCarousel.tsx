import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CapabilityItem } from '../data/capabilitiesData';
import { SectionHeading } from './SectionHeading';

interface CapabilityCarouselProps {
  items: CapabilityItem[];
}

const getImagePath = (image: string) => image.replace(/\.png$/, '.webp');

/** An automatically advancing, manually controllable capability showcase. */
export const CapabilityCarousel: React.FC<CapabilityCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  useEffect(() => {
    if (items.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => goTo(activeIndex + 1), 3500);
    return () => window.clearInterval(interval);
  }, [activeIndex, items.length]);

  if (!items.length) return null;

  const activeItem = items[activeIndex];
  const nextItem = items[(activeIndex + 1) % items.length];
  const visibleMethods = [-1, 0, 1].map((offset) => {
    const index = (activeIndex + offset + items.length) % items.length;
    return { item: items[index], index };
  });

  return (
    <div className="grid md:grid-cols-[0.82fr_1.18fr] gap-10 md:gap-12 lg:gap-16 items-center">
      <div className="max-w-[420px]">
        <SectionHeading
          compact
          kicker="02 / CAPABILITIES"
          title="Printing Methods for Every Garment."
          lead="From everyday apparel production to specialized print finishes, we work across multiple methods and garment formats."
          className="mb-6"
        />

        <div className="border-t border-[#d9d2c6] mt-7">
          {visibleMethods.map(({ item, index }) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              aria-current={index === activeIndex}
              className={`w-full flex items-center justify-between gap-4 py-4 text-left border-b border-[#d9d2c6] transition-all ${index === activeIndex ? 'text-[#9e4522] bg-[#ead8ca] px-4 -mx-4 rounded-[12px] border-transparent' : 'text-[#5f5951] hover:text-[#181715] hover:px-2'}`}
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="w-6 text-[11px] font-extrabold tracking-[0.12em]">{item.num}</span>
                <span className="text-[16px] md:text-[17px] font-extrabold tracking-[-0.025em] truncate">{item.title}</span>
              </span>
              <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${index === activeIndex ? 'bg-[#c85d2f]' : 'bg-[#c9c0b2]'}`} />
            </button>
          ))}
        </div>

        <Link
          to={`/capabilities#${activeItem.id}`}
          className="inline-flex items-center gap-2 mt-5 text-[13px] font-extrabold text-[#c85d2f] hover:text-[#181715] transition-colors"
        >
          <span>View all printing methods</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div>
        <div className="relative h-[360px] sm:h-[440px] lg:h-[430px] pr-5 sm:pr-10" aria-live="polite">
          <div className="absolute inset-y-5 right-0 w-[79%] rounded-[24px] overflow-hidden border border-[#c9c0b2] opacity-55">
            <img src={getImagePath(nextItem.image)} alt="" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#1b1a18]/35" />
          </div>

          {items.map((item, index) => (
            <Link
              key={item.id}
              to={`/capabilities#${item.id}`}
              aria-hidden={index !== activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
              className={`absolute inset-y-0 left-0 w-[84%] sm:w-[82%] overflow-hidden rounded-[24px] border transition-all duration-700 ease-out ${
                index === activeIndex
                  ? 'translate-x-0 scale-100 opacity-100 z-10 border-[#e37b4f]/70 shadow-2xl'
                  : 'translate-x-[18%] scale-[0.94] opacity-0 pointer-events-none border-[#c9c0b2]'
              }`}
            >
              <img
                src={getImagePath(item.image)}
                alt={`${item.title} apparel print detail`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-[#181715]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                <div>
                  {item.badge && <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#e37b4f]">{item.badge}</span>}
                  <p className="text-white text-[18px] sm:text-[22px] font-extrabold tracking-[-0.035em] mt-1">{item.title}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-white text-[#181715] grid place-items-center shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between gap-5 mt-6">
          <div className="flex items-center gap-2" aria-label="Capability carousel navigation">
            <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous capability" className="w-11 h-11 rounded-full border border-[#bdb4a7] grid place-items-center text-[#181715] hover:bg-[#181715] hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next capability" className="w-11 h-11 rounded-full border border-[#bdb4a7] grid place-items-center text-[#181715] hover:bg-[#181715] hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-1.5" aria-label="Choose a capability">
            {items.map((item, index) => (
              <button key={item.id} type="button" onClick={() => goTo(index)} aria-label={`Show ${item.title}`} aria-current={index === activeIndex} className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#c85d2f]' : 'w-1.5 bg-[#c9c0b2] hover:bg-[#8a837a]'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
