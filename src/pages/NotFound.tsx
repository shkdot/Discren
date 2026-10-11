import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { CTASection } from '../components/CTASection';
import { ArrowRight } from 'lucide-react';

/** Popular destinations, so a lost visitor still has somewhere to go. */
const destinations = [
  { to: '/', label: 'Home' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/work', label: 'Our Work' },
  { to: '/process', label: 'Process' },
  { to: '/faq', label: 'FAQ' },
];

export const NotFound: React.FC = () => {
  // A 404 must not be indexed. Reset on unmount so real pages stay indexable.
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex, nofollow');

    return () => {
      document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow');
    };
  }, []);

  return (
    <>
      <SEO
        title="Page Not Found — DISCREN Apparel Printing"
        description="The page you are looking for doesn't exist or may have been moved."
      />

      <section className="relative bg-[#181715] text-white overflow-hidden border-b border-[#292722]">
        {/* Decorative backdrop */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(200,93,47,0.16),transparent_70%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(200px,34vw,460px)] leading-none font-extrabold tracking-[-0.06em] text-white/[0.035] select-none">
            404
          </div>
        </div>

        <div className="container-custom relative z-10 py-24 md:py-32 text-center">
          <div className="text-[11px] tracking-[0.16em] uppercase text-[#e37b4f] font-extrabold mb-5">
            Error 404
          </div>

          <h1 className="text-[clamp(38px,7vw,80px)] leading-[0.98] tracking-[-0.055em] font-extrabold mb-5">
            Page Not Found
          </h1>

          <p className="text-[17px] md:text-[19px] text-[#cbc5bc] leading-relaxed max-w-[560px] mx-auto mb-10">
            Looks like this page went off the print. The page you&rsquo;re looking for
            doesn&rsquo;t exist or may have been moved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="white" className="gap-2">
              <span>Go to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              to="/work"
              variant="secondary"
              className="border-white text-white hover:bg-white/10"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Popular destinations — sand band so the error page isn't a dead end */}
      <section className="py-16 md:py-20 bg-[#e7dfd2] border-b border-[#c9c0b2]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
              Popular Pages
            </div>
            <h2 className="text-[clamp(22px,3vw,32px)] leading-[1.1] tracking-[-0.045em] font-extrabold text-[#181715]">
              Looking for something specific?
            </h2>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-3">
            {destinations.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#fbfaf6] border border-[#c9c0b2] text-[14px] font-extrabold text-[#181715] hover:border-[#c85d2f] hover:text-[#c85d2f] transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default NotFound;