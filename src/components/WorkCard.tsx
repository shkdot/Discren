import React from 'react';
import { WorkItem } from '../data/workData';
import { Maximize2 } from 'lucide-react';

interface WorkCardProps {
  item: WorkItem;
  onOpenLightbox: (item: WorkItem) => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ item, onOpenLightbox }) => {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`View production details for ${item.title}`}
      onClick={() => onOpenLightbox(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(item);
        }
      }}
      className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#aaa195] hover:shadow-md flex flex-col focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <div className="relative aspect-[4/3] bg-[#292722] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#181715]/85 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
            {item.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-[#181715] px-4 py-2 rounded-full text-[12px] font-extrabold flex items-center gap-2 shadow-lg">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>View Production Details</span>
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider mb-1">
            {item.technique}
          </div>
          <h3 className="text-[20px] font-extrabold text-[#181715] tracking-[-0.03em] mb-2 group-hover:text-[#c85d2f] transition-colors">
            {item.title}
          </h3>
          <p className="text-[13px] text-[#6e6a63] leading-relaxed line-clamp-2 mb-4">
            {item.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#d9d2c6]/50 flex items-center justify-between text-[12px] text-[#6e6a63]">
          <span className="font-semibold">{item.fabric}</span>
          <span className="text-[#181715] font-bold">{item.format}</span>
        </div>
      </div>
    </article>
  );
};
