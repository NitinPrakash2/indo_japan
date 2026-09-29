import React, { useEffect, useRef } from 'react';

export const ScrollProgressBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateBar = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0 && barRef.current) {
        const progress = Math.min(1, Math.max(0, totalScroll / windowHeight));
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateBar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <div 
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-[#C83B3B] via-[#E24A4A] to-[#C83B3B] origin-left shadow-sm"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />
    </div>
  );
};
