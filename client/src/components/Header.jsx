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

  // Bulletproof lock of background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      document.documentElement.classList.add('menu-open');
      document.body.classList.add('menu-open');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.setAttribute('data-menu-open', 'true');

      // Prevent background touch & wheel scrolling on mobile devices and desktop
      const preventScroll = (e) => {
        const isScrollable = e.target.closest('.mobile-menu-scrollable');
        if (!isScrollable) {
          e.preventDefault();
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('keydown', handleKeyDown);
        
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.removeAttribute('data-menu-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Immersion Experience', href: '#experience' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Partner With Us', href: '#partner' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-xl [-webkit-backdrop-blur:16px] ${
          scrolled 
            ? 'bg-[#F6F3ED]/85 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-black/[0.06] py-2.5 sm:py-3' 
            : 'bg-[#F6F3ED]/90 border-b border-black/[0.04] py-3 sm:py-3.5'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(246, 243, 237, 0.85)' : 'rgba(246, 243, 237, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo matching reference screenshot */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#111111] font-sans">
                  ET
                </span>
                <span className="w-0 h-0 border-l-[4px] sm:border-l-[4.5px] border-l-transparent border-r-[4px] sm:border-r-[4.5px] border-r-transparent border-t-[6.5px] sm:border-t-[7px] border-t-[#C83B3B] mx-0.5 inline-block"></span>
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#111111] font-sans">
                  Immersions
                </span>
              </div>
              <span className="text-[8.5px] sm:text-[9.5px] font-medium tracking-normal text-[#666666] -mt-0.5 max-w-[210px] sm:max-w-none truncate">
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
                className="text-[13px] font-normal text-[#2B2B2B] hover:text-[#C83B3B] tracking-normal transition-colors duration-200"
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

          {/* Mobile Menu Toggle with touch-friendly 44px min tap area */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 -mr-1.5 text-[#222222] hover:text-[#C83B3B] transition-colors cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Fullscreen Blurred Backdrop & Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col justify-start bg-black/65 backdrop-blur-2xl transition-all duration-300 lg:hidden touch-none"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Inner Drawer Container */}
          <div 
            className="w-full bg-[#F6F3ED] shadow-2xl border-b border-black/10 flex flex-col max-h-[88vh] animate-in slide-in-from-top-6 duration-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 border-b border-black/8 bg-[#F6F3ED] select-none">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="flex items-center gap-2"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#111111] font-sans">
                      ET
                    </span>
                    <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6.5px] border-t-[#C83B3B] mx-0.5 inline-block"></span>
                    <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#111111] font-sans">
                      Immersions
                    </span>
                  </div>
                  <span className="text-[8.5px] font-medium tracking-normal text-[#666666] -mt-0.5">
                    Global Experiential Learning for Leaders
                  </span>
                </div>
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-1.5 text-[#222222] hover:text-[#C83B3B] transition-colors cursor-pointer rounded-full hover:bg-black/5"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links scrollable list */}
            <div className="mobile-menu-scrollable overflow-y-auto px-5 py-2 divide-y divide-black/6 flex-1 overscroll-contain touch-pan-y">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#C83B3B] py-3.5 transition-colors flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  <span className="text-xs text-[#999999] group-hover:text-[#C83B3B] group-hover:translate-x-1 transition-all">→</span>
                </a>
              ))}
            </div>

            {/* Drawer Action Footer */}
            <div className="p-5 pt-3 pb-6 bg-[#F6F3ED] border-t border-black/6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>Apply to Join</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
