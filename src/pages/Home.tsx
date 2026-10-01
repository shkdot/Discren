import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { CapabilityCard } from '../components/CapabilityCard';
import { ProcessStep } from '../components/ProcessStep';
import { FAQItem } from '../components/FAQItem';
import { CTASection } from '../components/CTASection';
import { capabilitiesData } from '../data/capabilitiesData';
import { processData } from '../data/processData';
import { faqData } from '../data/faqData';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const selectedFaqs = faqData.slice(0, 6);

  return (
    <>
      <SEO 
        title="DISCREN — B2B Apparel Printing in Mumbai"
        description="B2B apparel printing for clothing brands and garment businesses in Jogeshwari West, Mumbai. Screen printing, DTF, puff, high-density and cut panel printing."
      />

      {/* Hero Section - Viewport-Fitted Desktop View (No Scrolling Required) */}
      <section className="relative bg-[#181715] text-white min-h-[calc(100vh-76px)] flex items-center py-10 lg:py-0 overflow-hidden border-b border-[#292722]">
        
        {/* Background Image positioned to highlight the right side */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home-hero-image.png" 
            alt="DISCREN Apparel Printing Factory Production" 
            className="w-full h-full object-cover object-right scale-105 transition-transform duration-1000 opacity-70 lg:opacity-90"
          />
          {/* Subtle gradient overlay ensuring crisp text contrast on left while leaving right side highlighted */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#181715] via-[#181715]/90 to-transparent lg:via-[#181715]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 my-auto py-4">
          <div className="max-w-[820px]">
            <div className="text-[11px] md:text-[12px] tracking-[0.15em] font-extrabold text-[#e37b4f] uppercase mb-4 md:mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e37b4f] animate-pulse"></span>
              <span>B2B APPAREL PRINTING · JOGESHWARI WEST, MUMBAI</span>
            </div>

            <h1 className="text-[clamp(36px,5.2vw,70px)] leading-[0.95] tracking-[-0.06em] font-extrabold text-white mb-4 md:mb-6">
              Printing Built Around the <span className="text-[#e37b4f] underline decoration-[#e37b4f]/30 underline-offset-8">Garment.</span>
            </h1>

            <p className="max-w-[640px] text-[16px] md:text-[19px] leading-[1.45] text-[#d1ccc4] mb-6 md:mb-8 font-normal">
              We help clothing brands and garment businesses turn their designs into production-ready prints — choosing the right printing approach for the garment, the artwork and the result you want to achieve.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8 md:mb-10">
              <Button to="/contact" variant="white" className="px-7 py-3 shadow-lg text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                Discuss Your Requirement
              </Button>
              <Button to="/work" variant="secondary" className="px-7 py-3 border-white text-white hover:bg-white/10 text-[13px] md:text-[14px] min-h-[46px] md:min-h-[50px]">
                View Our Work
              </Button>
            </div>

            {/* Hero Meta Badges */}
            <div className="pt-4 md:pt-5 border-t border-white/15 flex flex-wrap gap-x-7 gap-y-2 text-[#d1ccc4] text-[12px] md:text-[13px] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>14+ years of printing experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>MOQ from ~50 pieces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e37b4f]"></span>
                <span>Bulk orders up to 1,000+ pieces</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 bg-[#f4f0e8]">
        <div className="container-custom">
          <SectionHeading
            kicker="01 / EXPERTISE"
            title="More Than Printing. The Right Approach."
            lead="Every garment and every design can call for a different printing approach. We understand the requirement first, then help determine a suitable way to achieve the intended result."
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
            {/* Dark Feature Card */}
            <div className="bg-[#1b1a18] text-white rounded-[22px] p-8 md:p-11 min-h-[400px] flex flex-col justify-between shadow-sm">
              <div className="w-[70px] h-[70px] rounded-full border border-[#77716a] flex flex-col items-center justify-center font-extrabold text-[12px] leading-tight text-center text-white mb-8">
                <span>14+</span>
                <span>YEARS</span>
              </div>

              <div>
                <h3 className="text-[28px] md:text-[34px] leading-[1.08] tracking-[-0.04em] font-extrabold mb-4 max-w-[500px]">
                  Practical printing experience, applied to the job.
                </h3>
                <p className="text-[#d5d0c8] text-[15px] md:text-[16px] leading-relaxed max-w-[520px]">
                  If a customer is unsure about the right method, we explain the options. When a fabric or print presents uncertainty, a sample can be produced and tested before bulk production.
                </p>
              </div>
            </div>

            {/* 4 Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[#d9d2c6] border border-[#d9d2c6] rounded-[22px] overflow-hidden">
              <div className="bg-[#fbfaf6] p-7 flex flex-col justify-center">
                <strong className="block text-[20px] tracking-[-0.025em] font-extrabold text-[#181715] mb-2">
                  Method selection
                </strong>
                <span className="text-[#6e6a63] text-[14px] leading-relaxed">
                  Printing approach considered around the garment, artwork and intended result.
                </span>
              </div>

              <div className="bg-[#fbfaf6] p-7 flex flex-col justify-center">
                <strong className="block text-[20px] tracking-[-0.025em] font-extrabold text-[#181715] mb-2">
                  Practical advice
                </strong>
                <span className="text-[#6e6a63] text-[14px] leading-relaxed">
                  We help customers understand what different approaches are likely to produce.
                </span>
              </div>

              <div className="bg-[#fbfaf6] p-7 flex flex-col justify-center">
                <strong className="block text-[20px] tracking-[-0.025em] font-extrabold text-[#181715] mb-2">
                  Sampling
                </strong>
                <span className="text-[#6e6a63] text-[14px] leading-relaxed">
                  Paid samples can be made for review before bulk production.
                </span>
              </div>

              <div className="bg-[#fbfaf6] p-7 flex flex-col justify-center">
                <strong className="block text-[20px] tracking-[-0.025em] font-extrabold text-[#181715] mb-2">
                  Process adjustment
                </strong>
                <span className="text-[#6e6a63] text-[14px] leading-relaxed">
                  When a result needs improvement, the process can be reviewed and adjusted.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-28 bg-[#f4f0e8] border-t border-[#d9d2c6]/60">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              kicker="02 / CAPABILITIES"
              title="Printing Capabilities for Different Production Needs"
              lead="From everyday apparel production to more specialized print finishes, we work across multiple printing methods and garment formats."
              className="mb-0"
            />
            <Link 
              to="/capabilities" 
              className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors shrink-0 mb-4"
            >
              <span>View All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilitiesData.map((cap) => (
              <Link key={cap.id} to={`/capabilities#${cap.id}`}>
                <CapabilityCard item={cap} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Production Banner */}
      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          <div className="bg-[#e7dfd2] rounded-[28px] p-8 md:p-14 border border-[#c9c0b2]">
            <div className="max-w-[720px] mb-10">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                03 / BULK PRODUCTION
              </div>
              <h2 className="text-[clamp(34px,5vw,54px)] leading-[1.0] tracking-[-0.055em] font-extrabold text-[#181715] mb-4">
                From Small Runs to Bulk Production
              </h2>
              <p className="text-[17px] text-[#6e6a63] leading-relaxed">
                Whether you're developing a new collection or producing at scale, we work with businesses across a range of apparel printing quantities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 pb-8 border-y border-[#c9c0b2]">
              <div className="pr-4">
                <b className="block text-[36px] md:text-[42px] tracking-[-0.055em] font-extrabold text-[#181715] mb-1">~50+</b>
                <span className="text-[13px] text-[#69635b] font-medium">Approximate starting MOQ</span>
              </div>
              <div className="pr-4">
                <b className="block text-[36px] md:text-[42px] tracking-[-0.055em] font-extrabold text-[#181715] mb-1">1,000+</b>
                <span className="text-[13px] text-[#69635b] font-medium">Bulk order quantities</span>
              </div>
              <div className="pr-4">
                <b className="block text-[36px] md:text-[42px] tracking-[-0.055em] font-extrabold text-[#181715] mb-1">3 days*</b>
                <span className="text-[13px] text-[#69635b] font-medium">Approx. 1,000-piece capacity under suitable conditions</span>
              </div>
              <div>
                <b className="block text-[36px] md:text-[42px] tracking-[-0.055em] font-extrabold text-[#181715] mb-1">2–4 wks</b>
                <span className="text-[13px] text-[#69635b] font-medium">Normal production turnaround, depending on workload</span>
              </div>
            </div>

            <p className="text-[12px] text-[#71695f] mt-5">
              *Capacity depends on the production conditions and requirements of the order.
            </p>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-20 md:py-28 bg-[#f4f0e8] border-t border-[#d9d2c6]/60">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              kicker="04 / PROCESS"
              title="A Clear Process From Artwork to Production"
              lead="Good printing starts before the first production piece is printed."
              className="mb-0"
            />
            <Link 
              to="/process" 
              className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors shrink-0 mb-4"
            >
              <span>Explore Full Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#d9d2c6]">
            {processData.slice(0, 6).map((step) => (
              <ProcessStep key={step.num} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-28 bg-[#f4f0e8] border-t border-[#d9d2c6]/60">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              kicker="05 / OUR WORK"
              title="Work That Speaks for Itself."
              lead="A visual selection of printing work across different techniques, garment formats and production requirements."
              className="mb-0"
            />
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors shrink-0 mb-4"
            >
              <span>View Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-4">
            {/* Visual Shirt Mockup Card */}
            <div className="rounded-[22px] min-h-[460px] bg-gradient-to-br from-[#292722] via-[#555047] to-[#ece6dc] relative overflow-hidden p-8 flex flex-col justify-between shadow-sm">
              <div className="text-white text-[10px] tracking-[0.15em] font-extrabold uppercase">
                PRINT / FORM / TEXTURE
              </div>

              <div className="my-auto py-12 flex justify-center">
                <div className="w-[220px] h-[240px] md:w-[260px] md:h-[280px] bg-[#eee9df] rounded-t-[28px] rounded-b-[15px] -rotate-6 shadow-2xl relative flex items-center justify-center border border-white/40">
                  <div className="border-2 border-[#272522] px-6 py-4 text-center font-black tracking-widest text-[20px] text-[#272522]">
                    DISCREN
                  </div>
                </div>
              </div>

              <div className="text-white text-[13px] font-semibold">
                Screen Printing & Apparel Job-Work · Mumbai
              </div>
            </div>

            {/* Side Portfolio Mini Cards */}
            <div className="grid grid-cols-1 gap-4">
              <Link to="/work" className="bg-[#292722] text-white border border-[#292722] rounded-[22px] p-7 min-h-[220px] flex flex-col justify-between hover:border-[#555047] transition-all group">
                <div>
                  <span className="text-[11px] text-[#e37b4f] font-extrabold uppercase tracking-wider block mb-2">01 / Focus</span>
                  <h3 className="text-[25px] tracking-[-0.04em] font-extrabold mb-2 group-hover:text-[#e37b4f] transition-colors">Screen Printing</h3>
                  <p className="text-[#cbc5bc] text-[13px] leading-relaxed">
                    Detailed apparel prints across different garment and design requirements.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[13px] font-bold text-white">
                  <span>Explore Showcase</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link to="/work" className="bg-[#fbfaf6] text-[#181715] border border-[#d9d2c6] rounded-[22px] p-7 min-h-[220px] flex flex-col justify-between hover:border-[#aaa195] transition-all group">
                <div>
                  <span className="text-[11px] text-[#c85d2f] font-extrabold uppercase tracking-wider block mb-2">02 / Specialty</span>
                  <h3 className="text-[25px] tracking-[-0.04em] font-extrabold mb-2 group-hover:text-[#c85d2f] transition-colors">Puff & High-Density</h3>
                  <p className="text-[#6e6a63] text-[13px] leading-relaxed">
                    Raised and dimensional finishes for added depth and texture.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-[13px] font-bold text-[#181715]">
                  <span>Explore Finishes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="py-20 md:py-28 bg-[#f4f0e8] border-t border-[#d9d2c6]/60">
        <div className="container-custom">
          <SectionHeading
            kicker="06 / WORKING TOGETHER"
            title="Straightforward Printing for Apparel Businesses."
            lead="Practical information, clear expectations and a process designed around bulk apparel production."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Production Details */}
            <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-8 md:p-10">
              <h3 className="text-[25px] tracking-[-0.04em] font-extrabold text-[#181715] mb-6">
                Production Details
              </h3>
              <div className="space-y-4 text-[14px]">
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">MOQ</span>
                  <span className="text-[#6e6a63] text-right">Approx. 50 pieces</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Mixed sizes</span>
                  <span className="text-[#6e6a63] text-right">Yes, when properly sorted</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Sampling</span>
                  <span className="text-[#6e6a63] text-right">Paid sampling available</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Pricing</span>
                  <span className="text-[#6e6a63] text-right">Can reduce with quantity</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Turnaround</span>
                  <span className="text-[#6e6a63] text-right">Approx. 2–4 weeks</span>
                </div>
              </div>
            </div>

            {/* Commercial Terms */}
            <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-8 md:p-10">
              <h3 className="text-[25px] tracking-[-0.04em] font-extrabold text-[#181715] mb-6">
                Commercial Terms
              </h3>
              <div className="space-y-4 text-[14px]">
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Payment</span>
                  <span className="text-[#6e6a63] text-right">50% advance</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Balance</span>
                  <span className="text-[#6e6a63] text-right">50% before dispatch</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Location</span>
                  <span className="text-[#6e6a63] text-right">Jogeshwari West, Mumbai</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Transport</span>
                  <span className="text-[#6e6a63] text-right">Varies by customer/order</span>
                </div>
                <div className="pt-3 border-t border-[#d9d2c6] flex justify-between gap-4">
                  <span className="font-semibold text-[#181715]">Bulk capacity</span>
                  <span className="text-[#6e6a63] text-right">Up to 1,000+ pieces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 md:py-28 bg-[#f4f0e8] border-t border-[#d9d2c6]/60">
        <div className="container-custom max-w-[850px]">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-2">
                FAQ
              </div>
              <h2 className="text-[38px] md:text-[48px] tracking-[-0.055em] font-extrabold text-[#181715]">
                Frequently Asked Questions
              </h2>
            </div>
            <Link to="/faq" className="hidden sm:inline-flex items-center gap-2 text-[14px] font-bold text-[#c85d2f] hover:underline">
              <span>View All Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-1">
            {selectedFaqs.map((faq, idx) => (
              <FAQItem key={faq.id} item={faq} defaultOpen={idx === 0} />
            ))}
          </div>

          <div className="mt-8 pt-6 text-center sm:hidden">
            <Link to="/faq" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#c85d2f]">
              <span>View All FAQ Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTASection />
    </>
  );
};
