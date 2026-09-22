import React from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';

export const Hero = ({ onOpenApply }) => {
  return (
    <section className="relative overflow-hidden bg-[#F6F3ED] pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-black/5">
      {/* Background Decorative Graphic (Subtle Japanese Motif) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
        <svg viewBox="0 0 800 800" className="w-[1100px] h-[1100px]" fill="currentColor">
          <circle cx="400" cy="400" r="300" stroke="#C83B3B" strokeWidth="4" fill="none" />
          <circle cx="400" cy="400" r="220" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeDasharray="8 8" />
          <path d="M150 400 H 650 M 400 150 V 650" stroke="#1A1A1A" strokeWidth="1.5" />
          <text x="400" y="440" fontSize="160" textAnchor="middle" fontFamily="serif" fill="#C83B3B">日本</text>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Top Kanji Stamp & Edition Badge */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="kanji-stamp shadow-sm">
            日
          </div>
          <div className="h-4 w-[1px] bg-[#C83B3B]/40"></div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B]">
            GLOBAL LEADERSHIP IMMERSION
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#1A1A1A] leading-none">
            Japan
          </h1>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-[#666666] mt-3">
            EDITION • EXECUTIVE IMMERSION PROGRAM
          </p>
        </div>

        {/* Lead Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#444444] font-normal leading-relaxed mb-8">
          Curated for business leaders, with access to influential companies, industry leaders and institutions — complemented by peer exchange, innovation visits and experiences that reveal Japan beyond the boardroom.
        </p>

        {/* Date and Location Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 bg-white border border-black/8 rounded-none shadow-xs mb-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1A1A1A] uppercase">
            <MapPin className="w-4 h-4 text-[#C83B3B]" />
            <span>Tokyo, Japan</span>
          </div>
          <div className="hidden sm:block h-4 w-[1px] bg-black/15"></div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1A1A1A] uppercase">
            <Calendar className="w-4 h-4 text-[#C83B3B]" />
            <span>29 August – 02 September 2026</span>
          </div>
        </div>

        {/* Action CTA */}
        <div>
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
          >
            <span>Apply to Join</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
