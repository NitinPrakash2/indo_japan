import React from 'react';
import fujiPagodaImg from '../assets/max-bender-FuxYvi-hcWQ-unsplash.jpg';
import titleBadge from '../assets/hero_japan_title_badge.webp';

export const Hero = ({ onOpenApply }) => {
  return (
    <section id="banner" className="relative isolate overflow-hidden bg-[#F8F6F1] min-h-[520px] sm:min-h-[640px] flex items-center justify-center">
      {/* Background Fuji & Pagoda Image with the exact Japanese paper effect */}
      <img
        src={fujiPagodaImg}
        alt="Mount Fuji and Chureito Pagoda Japan"
        className="absolute inset-0 -z-20 w-full h-full object-cover object-[center_32%] pointer-events-none opacity-30 mix-blend-multiply filter contrast-[0.98] saturate-[0.90]"
      />

      {/* Atmospheric Soft Gradient Overlays (exact reference website style) */}
      {/* 1. Overall high-key paper wash */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(248, 246, 241, 0.60) 0%, rgba(248, 246, 241, 0.35) 45%, rgba(248, 246, 241, 0.25) 100%)'
        }}
        aria-hidden="true"
      />

      {/* 2. Soft radial glow in center so text has maximum clarity and contrast */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 85% 70% at 50% 48%, rgba(248, 246, 241, 0.92) 0%, rgba(248, 246, 241, 0.45) 65%, transparent 100%)'
        }}
        aria-hidden="true"
      />

      {/* 3. Bottom melt gradient into next section */}
      <div 
        className="absolute inset-x-0 bottom-0 -z-10 h-36 sm:h-48 md:h-72 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(248, 246, 241, 0.7) 45%, #F8F6F1 100%)'
        }}
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="w-full max-w-[82rem] mx-auto px-4 sm:px-6 md:px-12 pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-24 text-center">
        {/* Title Graphic / Badge (ET Immersions Japan Edition with Kanji Stamp) */}
        <h1 className="m-0 flex justify-center items-center" id="hero-title">
          <img
            src={titleBadge}
            alt="ET Immersions — Japan Edition: Experience Japan through business, leadership & culture"
            className="h-auto w-full max-w-[17rem] xs:max-w-[19rem] sm:max-w-[26rem] md:max-w-[32rem] object-contain drop-shadow-xs"
          />
        </h1>

        {/* Lead Narrative & Details */}
        <div className="mt-5 sm:mt-8">
          <div className="grid justify-items-center gap-5 sm:gap-6">
            <p className="max-w-2xl mx-auto text-sm sm:text-[0.9375rem] md:text-[1.0625rem] leading-[1.65] text-[#4A4A4A] font-normal font-sans px-2">
              Curated for business leaders, with access to influential companies, industry leaders and institutions — complemented by peer exchange, innovation visits and experiences that reveal Japan beyond the boardroom.
            </p>

            {/* Red Separator + Location & Dates */}
            <div className="grid gap-1.5 sm:gap-2 border-t-2 border-[#C83B3B] pt-3.5 sm:pt-4 w-full max-w-[300px]">
              <p className="font-sans tracking-[0.2em] sm:tracking-[0.22em] uppercase text-[#1A1A1A] text-sm md:text-base font-semibold">
                Tokyo, Japan
              </p>
              <p className="font-sans tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[#1A1A1A] text-[10px] sm:text-[0.6875rem] font-medium">
                29 August – 02 September 2026
              </p>
            </div>

            {/* Apply CTA Button */}
            <div className="flex w-full max-w-xs flex-col sm:flex-row sm:max-w-none items-center justify-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenApply}
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 px-8 text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase text-white bg-[#C83B3B] border border-[#C83B3B] hover:bg-[#B32D2D] hover:border-[#B32D2D] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer active:scale-98"
              >
                <span>Apply to join</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
