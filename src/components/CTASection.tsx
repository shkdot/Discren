import React from 'react';
import { Button } from './Button';
import { companyData } from '../data/companyData';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  kicker?: string;
  title?: string;
  description?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  kicker = "07 / START A CONVERSATION",
  title = "Have an Apparel Printing Requirement?",
  description = "Tell us what you're producing, how many pieces you need, and what you're looking to achieve. We'll understand the requirement and help you take the next step toward production.",
}) => {
  return (
    <section className="w-full bg-[#1b1a18] text-white py-16 md:py-24 border-t border-[#292722]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-[720px]">
            <div className="text-[11px] tracking-[0.14em] font-extrabold text-[#e37b4f] uppercase mb-4">
              {kicker}
            </div>
            <h2 className="text-[clamp(34px,5vw,58px)] leading-[1.0] tracking-[-0.05em] font-extrabold text-white mb-5">
              {title}
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#d1ccc4] leading-relaxed max-w-[620px]">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Button to="/contact" variant="white" className="gap-2">
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>

            <Button href={companyData.whatsappPlaceholder} variant="secondary" className="border-white text-white hover:bg-white/10 gap-2">
              <MessageSquare className="w-4 h-4 text-[#e37b4f]" />
              <span>WhatsApp Us</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
