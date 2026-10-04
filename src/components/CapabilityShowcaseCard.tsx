import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CapabilityItem } from '../data/capabilitiesData';

interface CapabilityShowcaseCardProps {
  item: CapabilityItem;
}

/**
 * CapabilityShowcaseCard — image-led card used on dark homepage sections,
 * where the flat CapabilityCard treatment blends into the background.
 */
export const CapabilityShowcaseCard: React.FC<CapabilityShowcaseCardProps> = ({ item }) => {
  return (
    <Link
      to={`/capabilities#${item.id}`}
      className="group flex flex-col rounded-[22px] overflow-hidden bg-[#242220] border border-white/10 transition-colors duration-300 hover:border-[#e37b4f]/70"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#181715]">
        <img
          src={item.image}
          alt={`${item.title} — DISCREN printing capability`}
          className="w-full h-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242220] via-[#242220]/25 to-transparent" />

        <span className="absolute top-4 left-4 text-[11px] font-extrabold tracking-[0.14em] text-[#e37b4f]">
          {item.num}
        </span>

        {item.badge && (
          <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-[0.12em] px-2.5 py-1 rounded-full bg-[#181715]/80 backdrop-blur-md text-[#d5d0c8] border border-white/15">
            {item.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-[21px] md:text-[23px] tracking-[-0.035em] font-extrabold text-white mb-2 transition-colors group-hover:text-[#e37b4f]">
          {item.title}
        </h3>
        <p className="text-[14px] text-[#a9a49b] leading-relaxed mb-6">
          {item.shortDesc}
        </p>

        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-extrabold text-[#e37b4f]">
          <span>Explore Capability</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
};
