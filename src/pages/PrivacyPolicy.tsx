import React from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { ShieldCheck, Lock, Eye, FileText, Database, Cookie, ExternalLink, UserCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — DISCREN Apparel Printing"
        description="DISCREN Privacy Policy. Learn how we handle contact, business, and inquiry information for our B2B apparel printing services in Jogeshwari West, Mumbai."
      />

      <PageHero
        eyebrow="LEGAL & DATA COMMITMENT"
        title="Privacy Policy"
        subtitle="Your Information, Handled Responsibly. We respect your privacy and are committed to handling the information you share with us responsibly."
      />

      <section className="py-16 md:py-24 bg-[#f4f0e8]">
        <div className="container-custom max-w-[920px]">
          <div className="bg-[#fbfaf6] border border-[#d9d2c6] rounded-[28px] p-8 md:p-14 shadow-xs space-y-12">
            
            {/* Header statement */}
            <div className="pb-8 border-b border-[#d9d2c6]">
              <div className="inline-flex items-center gap-2 bg-[#f4f0e8] border border-[#d9d2c6] px-3.5 py-1.5 rounded-full text-[12px] font-extrabold text-[#c85d2f] uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Responsible Data Management</span>
              </div>
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#181715] tracking-[-0.04em] mb-4">
                Your Information, Handled Responsibly.
              </h2>
              <p className="text-[16px] text-[#514d47] leading-relaxed">
                This Privacy Policy explains what information may be collected when you use our website, how we may use that information, and the choices available to you. By using this website or submitting an enquiry, you acknowledge the practices described in this Privacy Policy.
              </p>
              <div className="mt-4 text-[13px] font-bold text-[#6e6a63]">
                Last Updated: 2026
              </div>
            </div>

            {/* Section 1: Information We May Collect */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  1. Information We May Collect
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                When you contact us, request a quotation or submit information through our website, we may receive information that you choose to provide. This may include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#f4f0e8] border border-[#d9d2c6]/70 rounded-[18px] p-5">
                  <h4 className="font-extrabold text-[#181715] text-[15px] mb-1.5">Contact Details</h4>
                  <p className="text-[13px] text-[#6e6a63] leading-relaxed">Your name, phone number, email address and contact details provided in your form.</p>
                </div>

                <div className="bg-[#f4f0e8] border border-[#d9d2c6]/70 rounded-[18px] p-5">
                  <h4 className="font-extrabold text-[#181715] text-[15px] mb-1.5">Business Information</h4>
                  <p className="text-[13px] text-[#6e6a63] leading-relaxed">Company name, garment specifications, quantities, artwork files or print requirements.</p>
                </div>

                <div className="bg-[#f4f0e8] border border-[#d9d2c6]/70 rounded-[18px] p-5">
                  <h4 className="font-extrabold text-[#181715] text-[15px] mb-1.5">Enquiry Content</h4>
                  <p className="text-[13px] text-[#6e6a63] leading-relaxed">Specific instructions included in an enquiry, quotation request or direct message.</p>
                </div>
              </div>

              <p className="text-[14px] text-[#6e6a63] leading-relaxed pt-2">
                We only request information that is relevant to understanding and responding to your requirement. We may also receive basic technical information automatically when you use the website.
              </p>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  2. How We Use Your Information
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Information you provide to us may be used to understand and respond to your enquiry and to provide information related to our apparel printing services.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 bg-[#f4f0e8] rounded-[16px]">
                  <span className="font-extrabold text-[#c85d2f] text-[15px] shrink-0">•</span>
                  <div>
                    <strong className="block text-[#181715] text-[15px]">Respond to Enquiries</strong>
                    <span className="text-[13px] text-[#6e6a63]">Contact you regarding your printing requirement, questions or requests submitted through the website.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#f4f0e8] rounded-[16px]">
                  <span className="font-extrabold text-[#c85d2f] text-[15px] shrink-0">•</span>
                  <div>
                    <strong className="block text-[#181715] text-[15px]">Prepare Quotations & Discuss Requirements</strong>
                    <span className="text-[13px] text-[#6e6a63]">Understand garment type, quantity, artwork, and printing method so we can evaluate pricing, sampling, and production details.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#f4f0e8] rounded-[16px]">
                  <span className="font-extrabold text-[#c85d2f] text-[15px] shrink-0">•</span>
                  <div>
                    <strong className="block text-[#181715] text-[15px]">Provide Services & Maintain Communication</strong>
                    <span className="text-[13px] text-[#6e6a63]">Carry out requested apparel printing job-work and maintain appropriate communication records for our business relationship.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Sharing of Your Information */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  3. Sharing of Your Information
                </h3>
              </div>
              <p className="text-[15px] font-bold text-[#181715] leading-relaxed">
                We do not sell or rent your personal information to third parties.
              </p>
              <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                Information you provide may be shared only where reasonably necessary to operate our website, respond to your enquiry, provide a service you have requested, or meet a legal or regulatory requirement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#f4f0e8] p-5 rounded-[18px]">
                  <h4 className="font-extrabold text-[#181715] text-[14px] mb-1">Service Providers</h4>
                  <p className="text-[13px] text-[#6e6a63]">Certain hosting, communication, or technical services may process data solely to assist our website operations.</p>
                </div>
                <div className="bg-[#f4f0e8] p-5 rounded-[18px]">
                  <h4 className="font-extrabold text-[#181715] text-[14px] mb-1">Legal Requirements</h4>
                  <p className="text-[13px] text-[#6e6a63]">We may disclose information where required by law, legal process, or lawful governmental request.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Data Security & Retention */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  4. Data Security & Retention
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                We take reasonable administrative, technical and organizational measures to protect the information you provide to us from unauthorized access, misuse, loss or disclosure.
              </p>
              <p className="text-[14px] text-[#6e6a63] leading-relaxed">
                We retain information for as long as reasonably necessary to respond to enquiries, fulfill order job-work, maintain business records, and meet applicable legal requirements.
              </p>
            </div>

            {/* Section 5: Cookies & Website Technology */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <Cookie className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  5. Cookies & Website Technology
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Our website may use essential cookies or similar technologies for proper functioning (e.g. page navigation, security, form processing) and performance analytics to optimize website experience. You can manage or restrict cookies through your browser settings.
              </p>
            </div>

            {/* Section 6: Third-Party Links & Services */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  6. Third-Party Links & External Services
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Our website may contain links to external channels (such as WhatsApp, Instagram, or Google Maps). When following an external link, that platform's own privacy policy applies. We recommend reviewing their privacy policies.
              </p>
            </div>

            {/* Section 7: Your Privacy Rights & Choices */}
            <div className="space-y-4 pt-6 border-t border-[#d9d2c6]">
              <div className="flex items-center gap-3 text-[#181715]">
                <div className="p-2.5 rounded-xl bg-[#f4f0e8] text-[#c85d2f]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.03em]">
                  7. Your Privacy Rights & Contact
                </h3>
              </div>
              <p className="text-[15px] text-[#6e6a63] leading-relaxed">
                Depending on applicable law, you may have rights to access, correct, or request deletion of personal information you have provided to us. To make a privacy-related request, please reach out via our contact page.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};
