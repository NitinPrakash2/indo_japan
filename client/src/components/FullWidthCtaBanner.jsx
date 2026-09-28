import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FullWidthCtaBanner = ({ onOpenApply }) => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-18 sm:py-28 md:py-36 text-center text-white">
      {/* Background Loop Video (Mount Fuji with Passing Clouds) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-20 w-full h-full object-cover object-center opacity-65 pointer-events-none"
        aria-hidden="true"
      >
        <source src="/fuji-loop.mp4" type="video/mp4" />
        <source src="https://img.etb2bimg.com/files/cp/upload-1786606589-upload-1785848156-fuji-loop-1-1.mp4" type="video/mp4" />
      </video>

      {/* Radial Gradient Vignette Overlay matching exact reference site */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(10, 10, 10, 0.35) 0%, rgba(10, 10, 10, 0.78) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Red Tagline */}
        <p className="font-sans text-[11px] sm:text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#C83B3B] mb-3 sm:mb-4">
          Join the Japan Immersion
        </p>

        {/* Elegant Editorial Heading */}
        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.15] tracking-tight mb-4 sm:mb-5 px-2">
          Built for people going somewhere
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed mb-7 sm:mb-8 px-2">
          Explore our experiences. Discover what’s coming next.
        </p>

        {/* Apply CTA Button */}
        <div>
          <button
            type="button"
            onClick={onOpenApply}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs md:text-[13px] font-medium uppercase tracking-[0.18em] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
