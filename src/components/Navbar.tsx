import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Our Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-[#f4f0e8]/95 backdrop-blur-md border-[#d9d2c6]/80 shadow-xs' 
          : 'bg-[#f4f4f0e8]/90 backdrop-blur-sm border-[#d9d2c6]/70'
      }`}>
        <div className="container-custom">
          <nav className="min-h-[76px] flex items-center justify-between gap-6">
            {/* Logo Image + Text Brand Mark */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img 
                src="/logo/discren-d-mark.png" 
                alt="DISCREN Logo Mark" 
                className="h-[38px] w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-[22px] font-extrabold tracking-[-0.06em] text-[#181715] leading-none">
                  DISCREN<span className="text-[#c85d2f]">.</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.14em] font-extrabold text-[#6e6a63]">
                  Garment Printing
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7 text-[14px] text-[#45413b]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-[#181715] relative py-1 ${
                      isActive 
                        ? 'text-[#181715] font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#c85d2f]' 
                        : 'text-[#6e6a63]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="px-[17px] py-[11px] border border-[#181715] rounded-full text-[13px] font-bold text-[#181715] bg-transparent hover:bg-[#181715] hover:text-white transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                to="/contact"
                className="px-3.5 py-2 border border-[#181715] rounded-full text-[12px] font-bold text-[#181715]"
              >
                Quote
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full border border-[#d9d2c6] text-[#181715] hover:bg-[#fbfaf6] focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
