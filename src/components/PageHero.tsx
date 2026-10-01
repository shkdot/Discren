import React, { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow = "DISCREN APPAREL PRINTING · JOGESHWARI WEST, MUMBAI",
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="pt-24 pb-14 border-b border-[#d9d2c6]/70 bg-[#f4f0e8]">
      <div className="container-custom">
        <div className="text-[11px] tracking-[0.14em] font-extrabold text-[#c85d2f] uppercase mb-5">
          {eyebrow}
        </div>
        <h1 className="text-[clamp(42px,7vw,84px)] leading-[0.96] tracking-[-0.06em] font-extrabold text-[#181715] max-w-[950px] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-[700px] text-[18px] md:text-[21px] leading-relaxed text-[#514d47] mb-8 font-normal">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
