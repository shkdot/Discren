import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  lead?: string;
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  lead,
  className = '',
  dark = false,
}) => {
  return (
    <div className={`max-w-[720px] mb-12 ${className}`}>
      {kicker && (
        <div className={`text-[11px] tracking-[0.14em] uppercase font-extrabold mb-3 ${dark ? 'text-[#e37b4f]' : 'text-[#c85d2f]'}`}>
          {kicker}
        </div>
      )}
      <h2 className={`text-[clamp(34px,5vw,62px)] leading-[1.0] tracking-[-0.055em] font-extrabold mb-5 ${dark ? 'text-white' : 'text-[#181715]'}`}>
        {title}
      </h2>
      {lead && (
        <p className={`text-[17px] md:text-[18px] leading-relaxed max-w-[650px] ${dark ? 'text-[#d5d0c8]' : 'text-[#6e6a63]'}`}>
          {lead}
        </p>
      )}
    </div>
  );
};
