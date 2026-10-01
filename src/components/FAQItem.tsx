import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItemData } from '../data/faqData';

interface FAQItemProps {
  item: FAQItemData;
  defaultOpen?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ item, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[#d9d2c6] py-5 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
        aria-expanded={isOpen}
      >
        <span className="text-[17px] md:text-[19px] font-bold text-[#181715] group-hover:text-[#c85d2f] transition-colors pr-6">
          {item.question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-[#d9d2c6] flex items-center justify-center text-[#c85d2f] group-hover:border-[#c85d2f] transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-3 pr-10 text-[15px] leading-relaxed text-[#6e6a63] animate-fade-in max-w-[760px]">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};
