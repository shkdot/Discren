import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { ShieldCheck } from 'lucide-react';

const subtitle = 'Terms for Using Our Website and Services';

const intro: string[] = [
  "These Terms & Conditions describe the general terms that apply when you access or use our website and when you communicate with us regarding apparel printing services.",
  "The website is intended to provide information about our printing capabilities and to help businesses discuss their apparel printing requirements with us.",
  "By accessing or using this website, you agree to follow these Terms & Conditions. If you do not agree with these terms, please do not use the website.",
  "These terms should be read together with our **Privacy Policy**.",
  "**Last Updated: 2026**"
];

type Block = { heading?: string; paragraphs: string[] };
type Section = { id: string; title: string; blocks: Block[] };

/**
 * Detailed policy sections.
 *
 * Each entry automatically becomes a numbered block in the page body and an
 * item in the "On This Page" navigation, so the two stay in sync automatically.
 * Add the policy copy here as `{ id, title, blocks }` objects.
 */
const sections: Section[] = [];

/** Renders **bold** markers from the source copy as <strong>. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
        if (!part.startsWith('**')) return <Fragment key={i}>{part}</Fragment>;

        const inner = part.slice(2, -2);
        // "Privacy Policy" is a real document, so link it rather than bolding it.
        if (inner === 'Privacy Policy') {
          return (
            <Link key={i} to="/privacy" className="font-bold text-[#c85d2f] hover:underline">
              {inner}
            </Link>
          );
        }
        return (
          <strong key={i} className="font-bold text-[#181715]">
            {inner}
          </strong>
        );
      })}
    </>
  );
}

export const Terms: React.FC = () => {
  const hasSections = sections.length > 0;

  return (
    <>
      <SEO
        title="Terms & Conditions â€” DISCREN Apparel Printing"
        description="Terms and Conditions for using the DISCREN website and our B2B apparel printing services in Jogeshwari West, Mumbai."
      />

      <PageHero eyebrow="LEGAL & COMMERCIAL TERMS" title="Terms & Conditions" subtitle={subtitle} />

      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          <div
            className={`grid gap-10 lg:gap-14 items-start ${
              hasSections ? 'lg:grid-cols-[0.36fr_1fr]' : ''
            }`}
          >
            {hasSections && (
              <aside className="lg:sticky lg:top-28">
                <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-4">
                  On This Page
                </div>
                <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-start gap-3 rounded-[12px] px-3 py-2.5 whitespace-nowrap lg:whitespace-normal text-[14px] font-semibold leading-snug text-[#5f5951] hover:bg-[#f4f0e8] hover:text-[#181715] transition-colors"
                    >
                      <span className="text-[11px] font-extrabold tracking-wider text-[#c85d2f] pt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{s.title}</span>
                    </a>
                  ))}
                </nav>
              </aside>
            )}
<div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[28px] p-7 md:p-12">
              {/* Intro */}
              <div className="pb-8 border-b border-[#d9d2c6]">
                <div className="inline-flex items-center gap-2 bg-[#f4f0e8] border border-[#d9d2c6] px-3.5 py-1.5 rounded-full text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>How These Terms Apply</span>
                </div>

                <div className="space-y-4">
                  {intro.map((paragraph, i) => (
                    <p
                      key={i}
                      className={`leading-relaxed ${
                        i === 0
                          ? 'text-[16px] text-[#514d47] font-medium'
                          : 'text-[15px] text-[#6e6a63]'
                      }`}
                    >
                      <Rich text={paragraph} />
                    </p>
                  ))}
                </div>
              </div>

              {/* Detailed sections */}
              {hasSections ? (
                <div className="space-y-12 pt-10">
                  {sections.map((section, i) => (
                    <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f] shrink-0">
                          <span className="text-[13px] font-extrabold">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                          {section.title}
                        </h2>
                      </div>

                      {section.blocks.map((block, bi) => (
                        <div key={bi} className="space-y-3">
                          {block.heading && (
                            <h3 className="text-[16px] font-extrabold text-[#181715] pt-2">{block.heading}</h3>
                          )}
                          {block.paragraphs.map((paragraph, pi) => (
                            <p key={pi} className="text-[15px] text-[#6e6a63] leading-relaxed">
                              <Rich text={paragraph} />
                            </p>
                          ))}
                        </div>
                      ))}
                    </section>
                  ))}
                </div>
              ) : (
                <div className="pt-10">
                  <div className="rounded-[18px] bg-[#f4f0e8] border border-[#d9d2c6] p-7">
                    <h2 className="text-[18px] font-extrabold text-[#181715] mb-2">
                      Detailed terms are being published.
                    </h2>
                    <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                      The summary above governs use of this website. For the full published terms covering
                      printing services, orders, artwork, quality, cancellations and liability, please contact
                      us and we will share them with you directly.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 mt-4 text-[13px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors"
                    >
                      <span>Request the full terms</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Terms;
