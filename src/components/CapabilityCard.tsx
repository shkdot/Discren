import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CapabilityItem } from '../data/capabilitiesData';

interface CapabilityCardProps {
  item: CapabilityItem;
  onSelect?: (item: CapabilityItem) => void;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ item, onSelect }) => {
  return (
    <article 
      className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[18px] p-7 min-h-[210px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#aaa195] hover:shadow-sm group cursor-pointer"
      onClick={() => onSelect ? onSelect(item) : null}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] text-[#c85d2f] font-extrabold tracking-wider">{item.num}</span>
          {item.badge && (
            <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#f4f0e8] text-[#6e6a63] border border-[#d9d2c6]">
              {item.badge}
            </span>
          )}
        </div>
        <h3 className="text-[22px] md:text-[24px] tracking-[-0.035em] font-extrabold text-[#181715] mb-2 group-hover:text-[#c85d2f] transition-colors">
          {item.title}
        </h3>
        <p className="text-[14px] text-[#6e6a63] leading-relaxed">
          {item.shortDesc}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#d9d2c6]/40 flex items-center justify-between text-[13px] font-bold text-[#181715] group-hover:text-[#c85d2f]">
        <span>Explore Capability</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
};
