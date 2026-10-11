import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';
import { InstagramIcon } from './Icons';

const footerLinkClass = 'text-[14px] text-[#a9a49b] hover:text-white transition-colors';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#06172e] text-white border-t border-white/10 overflow-hidden">
      <div aria-hidden="true" className="absolute z-0 inset-x-0 bottom-10 select-none pointer-events-none overflow-hidden text-center text-[clamp(88px,17.4vw,248px)] leading-[0.72] tracking-[-0.09em] font-extrabold text-[#16304f] whitespace-nowrap">
        DISCREN
      </div>

      <div className="container-custom relative z-10 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr] gap-x-10 gap-y-12 pb-14 md:pb-16">
          <div className="max-w-[360px]">
            <Link to="/" className="inline-block group">
              <span className="block text-[32px] font-extrabold tracking-[-0.07em] leading-none transition-colors group-hover:text-[#e37b4f]">DISCREN<span className="text-[#e37b4f]">.</span></span>
              <span className="block mt-2 text-[9px] uppercase tracking-[0.16em] font-extrabold text-[#a9a49b]">Apparel Printing & Production</span>
            </Link>

            <p className="mt-6 text-[15px] leading-relaxed text-[#aeb9ca]">
              Practical B2B apparel printing for clothing brands, garment manufacturers and businesses that need reliable production support.
            </p>

            <form className="mt-8" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="flex gap-3">
                <input id="footer-email" type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-[13px] text-white placeholder:text-[#8793a7] outline-none transition-colors focus:border-[#e37b4f]" />
                <button type="submit" aria-label="Subscribe to updates" className="w-[52px] rounded-xl bg-white text-[#06172e] grid place-items-center hover:bg-[#e37b4f] hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <label className="mt-4 flex items-start gap-2.5 text-[12px] leading-snug text-[#aeb9ca] cursor-pointer">
                <input type="checkbox" className="mt-0.5 accent-[#e37b4f]" />
                <span>I consent to receive newsletters and updates.</span>
              </label>
            </form>

            <a href={companyData.googleMapsPlaceholder} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-[#e37b4f] hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />
              <span>{companyData.location}</span>
            </a>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-white mb-5">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/" className={footerLinkClass}>Home</Link></li>
              <li><Link to="/about" className={footerLinkClass}>About DISCREN</Link></li>
              <li><Link to="/capabilities" className={footerLinkClass}>Capabilities</Link></li>
              <li><Link to="/work" className={footerLinkClass}>Our Work</Link></li>
              <li><Link to="/process" className={footerLinkClass}>Production Process</Link></li>
              <li><Link to="/faq" className={footerLinkClass}>FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-white mb-5">Printing methods</h4>
            <ul className="space-y-3">
              <li><Link to="/capabilities#plastisol-printing" className={footerLinkClass}>Plastisol Printing</Link></li>
              <li><Link to="/capabilities#water-based-printing" className={footerLinkClass}>Water-Based Printing</Link></li>
              <li><Link to="/capabilities#discharge-printing" className={footerLinkClass}>Discharge Printing</Link></li>
              <li><Link to="/capabilities#high-density" className={footerLinkClass}>High-Density (HD)</Link></li>
              <li><Link to="/capabilities#puff-printing" className={footerLinkClass}>Puff Printing</Link></li>
              <li><Link to="/capabilities#metallic-foil-printing" className={footerLinkClass}>Metallic / Foil</Link></li>
              <li><Link to="/capabilities#reflective-glow-printing" className={footerLinkClass}>Glow / Reflective</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-white mb-5">Get in touch</h4>
            <ul className="space-y-3 text-[14px]">
              <li><a href={companyData.phoneHref} className={footerLinkClass}>{companyData.phonePlaceholder}</a></li>
              <li><a href={companyData.emailHref} className={footerLinkClass}>{companyData.emailPlaceholder}</a></li>
              <li><a href={companyData.whatsappPlaceholder} target="_blank" rel="noreferrer" className={footerLinkClass}>WhatsApp</a></li>
              <li><Link to="/contact" className={footerLinkClass}>Request a quote</Link></li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#a9a49b] mb-3">Follow our work</p>
              <a href={companyData.instagramPlaceholder} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[13px] font-bold text-[#c6c1b8] hover:text-[#e37b4f] transition-colors">
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#8998ac]">
          <span>© 2026 DISCREN. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>Jogeshwari West, Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
