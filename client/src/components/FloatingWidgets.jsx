import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export const FloatingWidgets = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Helpdesk (Bottom Left) */}
      <a
        href="https://wa.me/919167561862?text=Hello%20ET%20Immersions%20Japan%20Team"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg shadow-lg hover:scale-102 transition-all duration-200 group text-xs sm:text-sm font-semibold tracking-normal"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-transparent" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Floating Back to Top (Bottom Right) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 stroke-[2.5]" />
      </button>
    </>
  );
};
