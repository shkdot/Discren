import React from 'react';
import { Button } from './Button';
import { companyData } from '../data/companyData';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

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
    <section className="relative bg-[#fbfaf6] py-16 md:py-24 border-t border-[#d9d2c6]">
      <div className="container-custom">
        <div className="relative mx-auto max-w-[980px] rounded-[28px] bg-[#1b1a18] text-white p-8 md:p-12 lg:p-14 shadow-[0_40px_90px_-30px_rgba(27,27,24,0.45)] border border-[#292722] overflow-hidden">
          <div aria-hidden="true" className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#c85d2f]/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#e37b4f]/10 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-[720px]">
              <div className="text-[11px] tracking-[0.14em] font-extrabold text-[#e37b4f] uppercase mb-4">
                {kicker}
              </div>
              <h2 className="text-[clamp(30px,4.5vw,52px)] leading-[1.0] tracking-[-0.05em] font-extrabold text-white mb-5">
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

              <a
                href={companyData.whatsappPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[50px] px-6 rounded-full font-extrabold text-[14px] transition-all duration-200 border border-[#25D366] bg-[#25D366] text-white hover:bg-[#1ebe5a] hover:border-[#1ebe5a] select-none active:scale-[0.98] gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};