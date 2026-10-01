import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/companyData';
import { MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4f0e8] pt-16 pb-8 border-t border-[#d9d2c6]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12">
          {/* Brand Col with Official Logo Seal */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <img 
                src="/logo/discren-d-mark.png" 
                alt="DISCREN Apparel Printing Logo" 
                className="h-[44px] w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[25px] font-extrabold tracking-[-0.06em] text-[#181715] leading-none">
                  DISCREN<span className="text-[#c85d2f]">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold text-[#6e6a63]">
                  Garment Printing & Production
                </span>
              </div>
            </Link>

            <p className="text-[#6e6a63] text-[14px] leading-relaxed max-w-[330px]">
              B2B apparel printing for clothing brands, garment manufacturers and businesses. Based in Jogeshwari West, Mumbai.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[13px] font-bold text-[#181715]">
              <MapPin className="w-4 h-4 text-[#c85d2f]" />
              <span>Jogeshwari West, Mumbai, MH</span>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-[12px] uppercase font-extrabold tracking-[0.12em] text-[#181715] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link to="/" className="text-[#625e57] hover:text-[#181715] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-[#625e57] hover:text-[#181715] transition-colors">About DISCREN</Link></li>
              <li><Link to="/capabilities" className="text-[#625e57] hover:text-[#181715] transition-colors">Printing Capabilities</Link></li>
              <li><Link to="/work" className="text-[#625e57] hover:text-[#181715] transition-colors">Our Work</Link></li>
              <li><Link to="/process" className="text-[#625e57] hover:text-[#181715] transition-colors">Production Process</Link></li>
              <li><Link to="/faq" className="text-[#625e57] hover:text-[#181715] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-[#625e57] hover:text-[#181715] transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Printing Capabilities */}
          <div>
            <h4 className="text-[12px] uppercase font-extrabold tracking-[0.12em] text-[#181715] mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link to="/capabilities#screen-printing" className="text-[#625e57] hover:text-[#181715] transition-colors">Screen Printing</Link></li>
              <li><Link to="/capabilities#dtf-printing" className="text-[#625e57] hover:text-[#181715] transition-colors">DTF Printing</Link></li>
              <li><Link to="/capabilities#puff-printing" className="text-[#625e57] hover:text-[#181715] transition-colors">Puff Printing</Link></li>
              <li><Link to="/capabilities#high-density" className="text-[#625e57] hover:text-[#181715] transition-colors">High-Density 3D</Link></li>
              <li><Link to="/capabilities#cut-panel-printing" className="text-[#625e57] hover:text-[#181715] transition-colors">Cut Panel Printing</Link></li>
              <li><Link to="/capabilities#finished-garments" className="text-[#625e57] hover:text-[#181715] transition-colors">Finished Garments</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[12px] uppercase font-extrabold tracking-[0.12em] text-[#181715] mb-4">
              Contact & Location
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link to="/contact" className="text-[#625e57] hover:text-[#181715] transition-colors">Jogeshwari West, Mumbai</Link></li>
              <li><Link to="/contact" className="text-[#625e57] hover:text-[#181715] transition-colors">Phone — {companyData.phonePlaceholder}</Link></li>
              <li><a href={companyData.whatsappPlaceholder} className="text-[#625e57] hover:text-[#181715] transition-colors">WhatsApp — Connect</a></li>
              <li><Link to="/contact" className="text-[#625e57] hover:text-[#181715] transition-colors">Email — {companyData.emailPlaceholder}</Link></li>
              <li className="flex items-center gap-1.5">
                <InstagramIcon className="w-4 h-4 text-[#625e57]" />
                <a href={companyData.instagramPlaceholder} target="_blank" rel="noreferrer" className="text-[#625e57] hover:text-[#181715] transition-colors">Instagram — DISCREN</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-[#d9d2c6] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#777168] text-[12px]">
          <span>© 2026 DISCREN. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-[#181715] transition-colors font-semibold">Privacy Policy</Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-[#181715] transition-colors font-semibold">Terms & Conditions</Link>
            <span>·</span>
            <span>Jogeshwari West, Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
