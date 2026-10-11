import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { ShieldCheck, FileText, DollarSign, PackageCheck, AlertTriangle, RefreshCw, Scale } from 'lucide-react';

export const TermsConditions: React.FC = () => {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions — DISCREN Apparel Printing',
    description: 'Terms and commercial conditions for B2B apparel printing services provided by DISCREN in Jogeshwari West, Mumbai.',
  };

  return (
    <>
      <SEO
        title="Terms & Conditions — DISCREN Apparel Printing Mumbai"
        description="Terms & Conditions for using the DISCREN website and apparel printing services in Jogeshwari West, Mumbai. Pricing, payment terms (50% advance / 50% before dispatch), sampling, and order production guidelines."
        keywords="terms and conditions DISCREN, apparel printing commercial terms Mumbai, garment job work payment policy, sampling policy apparel printing"
        schema={termsSchema}
      />

      <PageHero
        eyebrow="LEGAL & COMMERCIAL TERMS"
        title="Terms & Conditions"
        subtitle="Terms for Using Our Website and Services. These Terms & Conditions describe the general terms that apply when you access or use our website and when you communicate with us regarding apparel printing services."
      />

      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom max-w-[920px]">
          <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[28px] p-8 md:p-14 shadow-xs space-y-12">
            
            {/* Intro header */}
            <div className="pb-8 border-b border-[#d9d2c6]">
              <div className="inline-flex items-center gap-2 bg-[#f4f0e8] border border-[#d9d2c6] px-3.5 py-1.5 rounded-full text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Commercial Agreement Framework</span>
              </div>
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#181715] tracking-[-0.04em] mb-4">
                Terms for Using Our Website & Services
              </h2>
              <p className="text-[16px] text-[#514d47] leading-relaxed mb-4">
                The website is intended to provide information about our printing capabilities and to help businesses discuss their apparel printing requirements with us. By accessing or using this website, you agree to follow these Terms & Conditions. These terms should be read together with our <strong>Privacy Policy</strong>.
              </p>
              <div className="text-[13px] font-bold text-[#6e6a63]">
                Last Updated: 2026
              </div>
            </div>

            {/* 1. Website Information & Use */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  1. Website Information & Use
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                The information provided on this website gives visitors an overview of our apparel printing capabilities, processes, and B2B services.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-5 bg-[#f4f0e8] rounded-[18px]">
                  <h4 className="font-extrabold text-[#181715] text-[15px] mb-1">No Automatic Order Confirmation</h4>
                  <p className="text-[13px] text-[#6e6a63]">Submitting an enquiry through the website does <strong>not automatically create an order or confirm a printing service</strong>. An order is confirmed only after requirements, pricing, quantities, timelines, and details are discussed and explicitly agreed upon.</p>
                </div>
                <div className="p-5 bg-[#f4f0e8] rounded-[18px]">
                  <h4 className="font-extrabold text-[#181715] text-[15px] mb-1">Lawful Website Use</h4>
                  <p className="text-[13px] text-[#6e6a63]">You agree to use the website for lawful business purposes without attempting unauthorized access to systems or data.</p>
                </div>
              </div>
            </div>

            {/* 2. Printing Services & Orders */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  2. Printing Services & Orders
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Our apparel printing services are executed according to agreed order specifications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#f4f0e8] p-5 rounded-[18px]">
                  <h4 className="font-extrabold text-[#181715] text-[14px] mb-1">Artwork Rights</h4>
                  <p className="text-[13px] text-[#6e6a63]">Customers must provide artwork in high-resolution vector formats and ensure they own or hold rights to print supplied logos or graphics.</p>
                </div>
                <div className="bg-[#f4f0e8] p-5 rounded-[18px]">
                  <h4 className="font-extrabold text-[#181715] text-[14px] mb-1">Paid Sampling</h4>
                  <p className="text-[13px] text-[#6e6a63]">Where sampling is requested or required for fabric testing, paid sample production is conducted prior to bulk run approval.</p>
                </div>
              </div>
            </div>

            {/* 3. Pricing, Payment & Production Timelines */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  3. Pricing, Payment & Production Timelines
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Pricing is determined by order quantity, fabric composition, printing method, color count, and visual finish.
              </p>

              <div className="bg-[#1b1a18] text-white p-6 rounded-[20px] space-y-4">
                <h4 className="text-[16px] font-extrabold text-[#e37b4f]">Commercial Terms Summary</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                  <div className="bg-white/10 p-3.5 rounded-[12px]">
                    <span className="block text-[11px] text-[#d1ccc4] uppercase">General Payment Terms</span>
                    <span className="font-bold text-white">50% Advance · 50% Before Dispatch</span>
                  </div>
                  <div className="bg-white/10 p-3.5 rounded-[12px]">
                    <span className="block text-[11px] text-[#d1ccc4] uppercase">Normal Production Turnaround</span>
                    <span className="font-bold text-white">Approx. 2–4 Weeks (Workload dependent)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Customer-Supplied Materials */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  4. Customer-Supplied Garments & Panels
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Clients providing blank garments or unstitched cut panels must ensure items are delivered properly sorted by size and style. We are not responsible for pre-existing fabric defects, weave inconsistencies, or manufacturing flaws present prior to printing.
              </p>
            </div>

            {/* 5. Print Quality & Variations */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  5. Print Quality & Tolerances
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Minor variations in print tone or texture may occur naturally across different fabric dye lots or garment fabric blends. Where an approved physical sample exists, bulk production follows the sample standard.
              </p>
            </div>

            {/* 6. Limitation of Liability */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  6. Limitation of Liability
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                General website content serves informational purposes. Official commercial obligations are defined solely in the written order confirmation agreed for your specific project.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        kicker="COMMERCIAL INQUIRIES"
        title="Have a Specific Production Question?"
        description="Discuss your garment specifications, payment terms, or custom sampling requirements with our team in Jogeshwari West."
      />
    </>
  );
};
