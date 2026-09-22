import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header = ({ onOpenApply }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Immersion Experience', href: '#experience' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Partner With Us', href: '#partner' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-xl [-webkit-backdrop-blur:16px] ${
        scrolled 
          ? 'bg-[#F6F3ED]/65 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-black/[0.06] py-3' 
          : 'bg-[#F6F3ED]/75 border-b border-black/[0.04] py-3.5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(246, 243, 237, 0.65)' : 'rgba(246, 243, 237, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo matching reference screenshot */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xl tracking-tight text-[#111111] font-sans">
                ET
              </span>
              <span className="w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-t-[7px] border-t-[#C83B3B] mx-0.5 inline-block"></span>
              <span className="font-extrabold text-xl tracking-tight text-[#111111] font-sans">
                Immersions
              </span>
            </div>
            <span className="text-[9.5px] font-medium tracking-normal text-[#666666] -mt-0.5">
              Global Experiential Learning for Leaders
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[12.5px] font-medium text-[#2B2B2B] hover:text-[#C83B3B] tracking-normal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-wider rounded-none shadow-xs transition-all duration-200 cursor-pointer active:scale-98"
          >
            <span>Apply to Join</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#222222] hover:text-[#C83B3B] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F3ED]/90 backdrop-blur-2xl border-b border-black/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#222222] hover:text-[#C83B3B] py-1.5 border-b border-black/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenApply();
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#C83B3B] text-white text-xs font-bold uppercase tracking-widest"
          >
            <span>Apply to Join</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
