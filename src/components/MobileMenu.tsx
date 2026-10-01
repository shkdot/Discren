import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { companyData } from '../data/companyData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Our Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#181715]/60 backdrop-blur-md flex justify-end animate-fade-in">
      <div className="w-full max-w-sm bg-[#f4f0e8] h-full flex flex-col justify-between p-6 overflow-y-auto shadow-2xl border-l border-[#d9d2c6]">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#d9d2c6]">
            <NavLink to="/" onClick={onClose} className="flex items-center gap-2.5">
              <img src="/logo/discren-d-mark.png" alt="DISCREN Logo" className="h-[32px] w-auto" />
              <span className="text-[20px] font-extrabold tracking-[-0.06em] text-[#181715]">
                DISCREN<span className="text-[#c85d2f]">.</span>
              </span>
            </NavLink>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#d9d2c6] text-[#181715] hover:bg-[#fbfaf6]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="py-6 space-y-1.5">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-4 rounded-xl text-[17px] font-extrabold transition-colors ${
                    isActive ? 'bg-[#1b1a18] text-white' : 'text-[#181715] hover:bg-[#fbfaf6]'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#d9d2c6] space-y-3">
          <Button to="/contact" variant="primary" onClick={onClose} className="w-full justify-between">
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button href={companyData.whatsappPlaceholder} variant="secondary" className="w-full justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#c85d2f]" />
            <span>WhatsApp Us</span>
          </Button>

          <div className="text-center pt-3 text-[12px] text-[#6e6a63]">
            {companyData.location}
          </div>
        </div>
      </div>
    </div>
  );
};
