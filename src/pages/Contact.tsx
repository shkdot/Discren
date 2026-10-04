import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { companyData } from '../data/companyData';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

/** What happens after an enquiry is submitted. */
const nextSteps = [
  { title: 'We Review Your Requirement', text: 'We look at the garment, quantity, artwork, printing method and desired result to understand the job.' },
  { title: 'We Discuss the Printing Approach', text: 'If you know your method, we work with that. If unsure, we discuss suitable options based on fabric and desired finish.' },
  { title: 'We Clarify the Details', text: 'We discuss artwork, colours, placement, garment condition, quantities and other production details properly.' },
  { title: 'Sampling When Required', text: 'For unfamiliar fabrics or new requirements, a paid sample can be produced before bulk production.' },
  { title: 'Quotation & Confirmation', text: 'We discuss applicable pricing, production timeline and terms. Production moves forward after order confirmation.' },
  { title: 'Production Execution', text: 'The approved requirement moves into production, continuously observed so issues can be addressed as they arise.' },
];

/** Details that speed up a quote — mirrors the client checklist on the Process page. */
const enquiryHelper = [
  { title: 'Garment', text: 'What are you printing on? T-shirts, polos, hoodies, shirts, sportswear, uniforms or another garment.' },
  { title: 'Quantity', text: 'Approximate number of pieces you need printed (e.g. ~50, 100, 500, 1,000+ pieces).' },
  { title: 'Artwork', text: 'Share the design you\'re planning to print, along with any relevant colour or placement details.' },
  { title: 'Printing Requirement', text: 'Tell us the method or finish you have in mind — screen printing, puff, high-density or DTF — or ask for guidance.' },
  { title: 'Timeline', text: 'Mention when you need production completed, particularly for collection launches or deadlines.' },
  { title: 'Anything Specific', text: 'Include any details that affect the job, such as cut panels, finished garments, or fabric composition.' },
];

const experienceLabel = companyData.experienceYears.toUpperCase();
const heroEyebrow = `${experienceLabel} OF APPAREL PRINTING EXPERIENCE · ${companyData.area.toUpperCase()}, ${companyData.city.toUpperCase()}`;

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us & Request a Quote — DISCREN Apparel Printing"
        description="Contact DISCREN in Jogeshwari West, Mumbai. Request a quote or discuss your bulk garment job-work requirement with a B2B apparel printing partner."
      />

      {/* Hero Section */}
      <PageHero
        eyebrow={heroEyebrow}
        title="Let's Talk About Your Printing Requirement."
        subtitle="Planning a new apparel collection, producing garments for your business, or looking for a printing partner for your next bulk order? Tell us what you're producing, how many pieces you need, what garment you're working with and what you want the finished print to look like."
      >
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#quote-form" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-full font-extrabold text-[14px] bg-[#1b1a18] text-white hover:bg-[#2c2a27] transition-all">
            Request a Quote →
          </a>
          <a href={companyData.whatsappPlaceholder} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center min-h-[50px] px-7 rounded-full font-extrabold text-[14px] border border-[#181715] text-[#181715] hover:bg-[#181715] hover:text-white transition-all gap-2">
            <MessageSquare className="w-4 h-4 text-[#c85d2f]" />
            <span>WhatsApp Us →</span>
          </a>
        </div>
      </PageHero>

      {/* Main Content Area */}
      <section id="quote-form" className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom">
          
          {/* Top Form + Location Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-10 items-start mb-20">
            {/* Interactive Form */}
            <div>
              <ContactForm />
            </div>

            {/* Sidebar Contact & Location Cards */}
            <div className="space-y-6">
              {/* Production Unit & Nearby landmark */}
              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] p-7 shadow-xs">
                <div className="flex items-center gap-3 text-[#c85d2f] font-extrabold text-[12px] uppercase tracking-wider mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Our Location</span>
                </div>
                <h3 className="text-[22px] font-extrabold text-[#181715] mb-1">
                  Based in Jogeshwari West, Mumbai
                </h3>
                <p className="text-[14px] text-[#6e6a63] leading-relaxed mb-4">
                  Our apparel printing work is based in <strong>Jogeshwari West, Mumbai</strong>, making it convenient for clothing brands, garment businesses and local production partners to coordinate printing requirements with us.
                </p>

                <div className="space-y-2 pt-3 border-t border-[#d9d2c6] text-[13px]">
                  <div className="flex justify-between">
                    <span className="font-bold text-[#181715]">Location:</span>
                    <span className="text-[#6e6a63]">Jogeshwari West, Mumbai</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-[#181715]">Nearby:</span>
                    <span className="text-[#6e6a63]">Opposite Vijay Vishal Building</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-[#181715]">Business Type:</span>
                    <span className="text-[#6e6a63]">B2B Apparel Printing</span>
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <a
                    href={companyData.googleMapsPlaceholder}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-extrabold text-[#181715] hover:text-[#c85d2f] transition-colors"
                  >
                    <span>Get Directions</span>
                    <span className="text-[#c85d2f]">→</span>
                  </a>
                </div>
              </div>

              {/* Speak With Us Directly */}
              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[24px] p-7 shadow-xs space-y-4">
                <div className="text-[#c85d2f] font-extrabold text-[12px] uppercase tracking-wider mb-1">
                  Contact Us Directly
                </div>
                <h4 className="text-[18px] font-extrabold text-[#181715]">
                  Prefer to Speak With Us Directly?
                </h4>
                <p className="text-[13px] text-[#6e6a63] leading-relaxed">
                  For printing requirements that are easier to explain over a conversation, you can contact us directly and discuss the job with our team.
                </p>

                <div className="pt-3 border-t border-[#d9d2c6] flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[#181715] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#c85d2f]" />
                    <span>WhatsApp</span>
                  </span>
                  <a
                    href={companyData.whatsappPlaceholder}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-extrabold text-[#c85d2f] hover:underline"
                  >
                    WhatsApp Us →
                  </a>
                </div>

                <div className="pt-3 border-t border-[#d9d2c6] flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[#181715] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#6e6a63]" />
                    <span>Phone</span>
                  </span>
                  <span className="text-[13px] text-[#6e6a63] font-medium">{companyData.phonePlaceholder}</span>
                </div>

                <div className="pt-3 border-t border-[#d9d2c6] flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[#181715] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#6e6a63]" />
                    <span>Email</span>
                  </span>
                  <span className="text-[13px] text-[#6e6a63] font-medium">{companyData.emailPlaceholder}</span>
                </div>

                <div className="pt-3 border-t border-[#d9d2c6] flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[#181715] flex items-center gap-2">
                    <InstagramIcon className="w-4 h-4 text-[#6e6a63]" />
                    <span>Instagram</span>
                  </span>
                  <a
                    href={companyData.instagramPlaceholder}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-[#6e6a63] hover:text-[#181715] font-medium"
                  >
                    @DISCREN
                  </a>
                </div>
              </div>

              {/* Checklist Card — condensed; the full detail lives in the enquiry helper below */}
              <div className="bg-[#1b1a18] text-white rounded-[24px] p-7 space-y-3">
                <div className="flex items-center gap-2 text-[#e37b4f] font-extrabold text-[12px] uppercase tracking-wider">
                  <span>Before You Contact Us</span>
                </div>
                <p className="text-[13px] text-[#d1ccc4] leading-relaxed">
                  Having <strong className="text-white">garment, quantity, artwork, printing method, finish and timeline</strong> ready helps us quote faster.
                </p>
                <p className="text-[12px] text-[#a8a39a]">
                  You don't need to know everything in advance — share what you have and we'll discuss the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 / WHAT HAPPENS NEXT — inverted band to break the cream */}
      <section className="py-20 md:py-28 bg-[#1b1a18] text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#e37b4f] font-extrabold mb-3">
                01 / WHAT HAPPENS NEXT
              </div>
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.05em] font-extrabold mb-4">
                From Enquiry to a Clear Production Plan.
              </h2>
              <p className="text-[16px] text-[#d1ccc4] leading-relaxed max-w-[440px]">
                Once you send us your requirement, we first look at the details you've provided and understand what you're trying to produce.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
              {nextSteps.map((step, i) => (
                <div key={step.title} className="border-t border-white/15 pt-5">
                  <span className="block text-[11px] font-extrabold tracking-[0.14em] text-[#e37b4f] mb-2.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[18px] tracking-[-0.03em] font-extrabold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#a9a49b] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* 02 / ENQUIRY HELPER — sand band, hairline list rather than another card grid */}
      <section className="py-20 md:py-28 bg-[#e7dfd2] border-y border-[#c9c0b2]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                02 / ENQUIRY HELPER
              </div>
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.05em] font-extrabold text-[#181715] mb-4">
                Make Your Enquiry Easier.
              </h2>
              <p className="text-[16px] text-[#5f5951] leading-relaxed max-w-[440px]">
                You don't need to have every production detail finalized before contacting us. Having the following ready helps us understand your requirement more quickly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {enquiryHelper.map((item, i) => (
                <div key={item.title} className="rounded-[18px] bg-[#fbfaf6] border border-[#c9c0b2] p-6">
                  <span className="block text-[11px] font-extrabold tracking-[0.14em] text-[#c85d2f] mb-2.5">
                    {String(i + 1).padStart(2, '0')} — {item.title}
                  </span>
                  <p className="text-[13.5px] text-[#5f5951] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* Final CTA Banner */}
      <CTASection
        kicker={heroEyebrow}
        title="Ready to Discuss Your Requirement?"
        description="Whether you're planning a new clothing collection, producing garments in bulk or looking for a printing partner for your business, start by telling us what you need."
      />
    </>
  );
};
