import React, { useEffect } from 'react';
import { WorkItem } from '../data/workData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface WorkLightboxProps {
  item: WorkItem | null;
  onClose: () => void;
}

export const WorkLightbox: React.FC<WorkLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#181715]/80 text-white hover:bg-[#181715] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full md:w-1/2 bg-[#1b1a18] relative min-h-[280px] md:min-h-full flex items-center justify-center p-6">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full max-h-[450px] object-cover rounded-[16px] shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c85d2f] bg-[#f4f0e8] px-3 py-1 rounded-full border border-[#d9d2c6]">
                {item.category}
              </span>
              <span className="text-[12px] text-[#6e6a63] font-medium">{item.format}</span>
            </div>

            <h2 className="text-[26px] md:text-[30px] font-extrabold text-[#181715] tracking-[-0.04em] leading-tight mb-3">
              {item.title}
            </h2>

            <p className="text-[14px] text-[#6e6a63] leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-[#d9d2c6] mb-6">
              <h4 className="text-[11px] uppercase tracking-widest font-extrabold text-[#181715]">
                B2B Production Details
              </h4>

              <div className="grid grid-cols-2 gap-3 text-[13px]">
                <div className="bg-[#f4f0e8] p-3 rounded-[12px]">
                  <span className="block text-[11px] text-[#6e6a63] mb-0.5">Technique</span>
                  <span className="font-bold text-[#181715]">{item.technique}</span>
                </div>
                <div className="bg-[#f4f0e8] p-3 rounded-[12px]">
                  <span className="block text-[11px] text-[#6e6a63] mb-0.5">Fabric Base</span>
                  <span className="font-bold text-[#181715]">{item.fabric}</span>
                </div>
                <div className="bg-[#f4f0e8] p-3 rounded-[12px]">
                  <span className="block text-[11px] text-[#6e6a63] mb-0.5">Ink System</span>
                  <span className="font-bold text-[#181715]">{item.details.inkType}</span>
                </div>
                <div className="bg-[#f4f0e8] p-3 rounded-[12px]">
                  <span className="block text-[11px] text-[#6e6a63] mb-0.5">Placement</span>
                  <span className="font-bold text-[#181715]">{item.details.placement}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#d9d2c6] flex items-center justify-between">
            <Button to="/contact" variant="primary" className="w-full text-center gap-2">
              <span>Discuss Similar Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
