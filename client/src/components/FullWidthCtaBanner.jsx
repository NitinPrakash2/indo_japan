import React from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';

export const FullWidthCtaBanner = ({ onOpenApply }) => {
  return (
    <section className="relative py-28 px-6 text-center text-white overflow-hidden bg-[#0A0E1A]">
      {/* Background Image of Mount Fuji with dramatic dark gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1600&auto=format&fit=crop&q=80')`,
        }}
      ></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-black/60 to-[#0B1120]/80"></div>

      <div className="relative max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C83B3B] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#C83B3B]" />
          <span className="text-white">Limited Cohort Size • Application Led</span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Join The <span className="italic text-[#C83B3B]">Japan Immersion</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Step beyond conventional business travel. Immerse yourself in the ecosystems, institutions, and visionary leaders defining the next century of industry.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 shadow-xl cursor-pointer active:scale-98"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Brochure</span>
          </a>
        </div>
      </div>
    </section>
  );
};
