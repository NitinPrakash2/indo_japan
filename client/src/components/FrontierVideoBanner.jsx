import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FrontierVideoBanner = ({ onOpenApply }) => {
  return (
    <section className="relative w-full h-[450px] sm:h-[540px] md:h-[600px] overflow-hidden flex items-center justify-center border-y border-black/10">
      {/* Background Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-105 filter brightness-[0.85] contrast-[1.05]"
      >
        <source src="/fuji-loop.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-[#141312]/60 backdrop-blur-[1px]" />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(20, 19, 18, 0.4) 0%, rgba(20, 19, 18, 0.85) 100%)'
        }}
      />

      {/* Foreground Editorial Quote & CTA with ScrollReveal */}
      <ScrollReveal variant="scale" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/90">
          <Sparkles className="w-3.5 h-3.5 text-[#C83B3B]" />
          <span>BEYOND CONFERENCES & PRESENTATIONS</span>
        </div>

        <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
          "True operational mastery is not studied in lecture halls. It is absorbed on the factory floor, in the boardroom, and across the tea table."
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-xl mx-auto font-sans leading-relaxed">
          Join 24 fellow promoters and chairmen for the definitive 2026 Japan Executive Study Mission.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenApply}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all cursor-pointer active:scale-98"
          >
            <span>Request Delegation Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};
