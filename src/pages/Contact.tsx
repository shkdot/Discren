import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { CTASection } from '../components/CTASection';
import { companyData } from '../data/companyData';
import { MapPin, Phone, Mail, MessageSquare, Clock, ArrowRight, CheckCircle2, FileText, Search, Cpu, FlaskConical, ShieldCheck, HelpCircle } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us & Request a Quote — DISCREN Apparel Printing"
        description="Contact DISCREN in Jogeshwari West, Mumbai. Request a quote or discuss your bulk garment job-work requirement with 25+ years of apparel printing experience."
      />

      {/* Hero Section */}
      <PageHero
        eyebrow="25+ YEARS OF APPAREL PRINTING EXPERIENCE · JOGESHWARI WEST, MUMBAI"
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

              {/* Checklist Card */}
              <div className="bg-[#1b1a18] text-white rounded-[24px] p-7 space-y-3">
                <div className="flex items-center gap-2 text-[#e37b4f] font-extrabold text-[12px] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Before You Contact Us</span>
                </div>
                <h4 className="text-[17px] font-extrabold">Having basic details ready helps:</h4>
                <p className="text-[13px] text-[#d1ccc4] leading-relaxed">
                  <strong>Garment · Quantity · Artwork · Printing Method / Finish · Required Timeline</strong>
                </p>
                <p className="text-[12px] text-[#a8a39a]">
                  You don't need to know everything in advance. Share what you have, and we'll discuss the remaining details with you.
                </p>
              </div>
            </div>
          </div>

          {/* Section: What Happens After You Contact Us */}
          <div className="mb-20 pt-16 border-t border-[#d9d2c6]">
            <div className="max-w-[720px] mb-12">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                WHAT HAPPENS AFTER YOU CONTACT US
              </div>
              <h2 className="text-[34px] md:text-[46px] leading-[1.0] tracking-[-0.05em] font-extrabold text-[#181715] mb-4">
                From Enquiry to a Clear Production Plan.
              </h2>
              <p className="text-[16px] text-[#6e6a63] leading-relaxed">
                Once you send us your requirement, we first look at the details you've provided and understand what you're trying to produce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7">
                <span className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider block mb-2">01</span>
                <h3 className="text-[20px] font-extrabold text-[#181715] mb-2">We Review Your Requirement</h3>
                <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                  We look at the garment, quantity, artwork, printing method and desired result to understand the job.
                </p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7">
                <span className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider block mb-2">02</span>
                <h3 className="text-[20px] font-extrabold text-[#181715] mb-2">We Discuss the Printing Approach</h3>
                <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                  If you know your method, we work with that. If unsure, we discuss suitable options based on fabric and desired finish.
                </p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7">
                <span className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider block mb-2">03</span>
                <h3 className="text-[20px] font-extrabold text-[#181715] mb-2">We Clarify the Details</h3>
                <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                  We discuss artwork, colours, placement, garment condition, quantities and other production details properly.
                </p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7">
                <span className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider block mb-2">04</span>
                <h3 className="text-[20px] font-extrabold text-[#181715] mb-2">Sampling When Required</h3>
                <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                  For unfamiliar fabrics or new requirements, a paid sample can be produced before bulk production.
                </p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7">
                <span className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider block mb-2">05</span>
                <h3 className="text-[20px] font-extrabold text-[#181715] mb-2">Quotation & Confirmation</h3>
                <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                  We discuss applicable pricing, production timeline and terms. Production moves forward after order confirmation.
                </p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[22px] p-7">
                <span className="text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider block mb-2">06</span>
                <h3 className="text-[20px] font-extrabold text-[#181715] mb-2">Production Execution</h3>
                <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                  The approved requirement moves into production, continuously observed so issues can be addressed as they arise.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Make Your Enquiry Easier */}
          <div className="pt-16 border-t border-[#d9d2c6]">
            <div className="max-w-[720px] mb-12">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#c85d2f] font-extrabold mb-3">
                ENQUIRY HELPER
              </div>
              <h2 className="text-[34px] md:text-[46px] leading-[1.0] tracking-[-0.05em] font-extrabold text-[#181715] mb-4">
                Make Your Enquiry Easier.
              </h2>
              <p className="text-[16px] text-[#6e6a63] leading-relaxed">
                You don't need to have every production detail finalized before contacting us. However, having the following information ready can help us understand your requirement more quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[20px] p-6">
                <h4 className="font-extrabold text-[#181715] text-[16px] mb-2">01 — Garment</h4>
                <p className="text-[13px] text-[#6e6a63]">What are you printing on? T-shirts, polos, hoodies, shirts, sportswear, uniforms or another garment.</p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[20px] p-6">
                <h4 className="font-extrabold text-[#181715] text-[16px] mb-2">02 — Quantity</h4>
                <p className="text-[13px] text-[#6e6a63]">Approximate number of pieces you need printed (e.g. ~50, 100, 500, 1,000+ pieces).</p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[20px] p-6">
                <h4 className="font-extrabold text-[#181715] text-[16px] mb-2">03 — Artwork</h4>
                <p className="text-[13px] text-[#6e6a63]">Share the design you're planning to print, along with any relevant colour or placement details.</p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[20px] p-6">
                <h4 className="font-extrabold text-[#181715] text-[16px] mb-2">04 — Printing Requirement</h4>
                <p className="text-[13px] text-[#6e6a63]">Tell us the method or finish you have in mind — screen printing, puff, high-density or DTF — or ask for guidance.</p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[20px] p-6">
                <h4 className="font-extrabold text-[#181715] text-[16px] mb-2">05 — Timeline</h4>
                <p className="text-[13px] text-[#6e6a63]">Mention when you need production completed, particularly for collection launches or deadlines.</p>
              </div>

              <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[20px] p-6">
                <h4 className="font-extrabold text-[#181715] text-[16px] mb-2">06 — Anything Specific</h4>
                <p className="text-[13px] text-[#6e6a63]">Include any details that affect the job, such as cut panels, finished garments, or fabric composition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTASection
        kicker="25+ YEARS OF APPAREL PRINTING EXPERIENCE · JOGESHWARI WEST, MUMBAI"
        title="Ready to Discuss Your Requirement?"
        description="Whether you're planning a new clothing collection, producing garments in bulk or looking for a printing partner for your business, start by telling us what you need."
      />
    </>
  );
};
