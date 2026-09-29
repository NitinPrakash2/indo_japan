import React from 'react';
import { 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Users, 
  Award 
} from 'lucide-react';
import heroBgImg from '../assets/hero_japan_executive.webp';

export const Hero = ({ onOpenApply }) => {
  const scrollToItinerary = () => {
    const el = document.getElementById('itinerary');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPillars = () => {
    const el = document.getElementById('pillars');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="banner" className="relative isolate overflow-hidden bg-[#F6F3ED] border-b border-black/[0.08] min-h-[720px] lg:min-h-[850px] flex flex-col justify-center">
      {/* Cinematic High-Resolution Japan Background Image */}
      <img
        src={heroBgImg}
        alt="Mount Fuji, Pagoda and Golden Sunrise in Japan"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-30 w-full h-full object-cover object-[center_32%] pointer-events-none filter brightness-[0.98] contrast-[1.03] saturate-[1.08]"
      />

      {/* Atmospheric Soft Gradient Overlays to keep image vividly visible while ensuring text readability */}
      <div 
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(246, 243, 237, 0.78) 0%, 
              rgba(246, 243, 237, 0.42) 28%, 
              rgba(246, 243, 237, 0.48) 60%, 
              rgba(246, 243, 237, 0.94) 94%,
              #F6F3ED 100%
            )
          `
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(246, 243, 237, 0.85) 0%, rgba(246, 243, 237, 0.35) 65%, transparent 100%)'
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-12 sm:pb-16 flex flex-col items-center text-center">
        
        {/* Status Capsule: 25-Leader Delegation */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-black/10 shadow-sm backdrop-blur-md mb-5 animate-in fade-in duration-700">
          <span className="w-2 h-2 rounded-full bg-[#C83B3B] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.20em] font-bold text-[#141312]">
            EXCLUSIVE 25-LEADER DELEGATION • TOKYO & NAGOYA 2026
          </span>
          <span className="hidden sm:inline-block w-px h-3 bg-black/15" />
          <span className="hidden sm:inline text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#C83B3B] font-bold">
            CONFIDENTIAL ADMISSIONS
          </span>
        </div>

        {/* Brand Seal Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-8 sm:w-12 bg-black/20" />
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.22em] uppercase font-bold text-[#444444]">
            THE ECONOMIC TIMES IMMERSIONS
          </span>
          <span className="h-px w-8 sm:w-12 bg-black/20" />
        </div>

        {/* Majestic Editorial Main Headline */}
        <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold text-[#141312] leading-[1.12] tracking-tight max-w-4xl mx-auto mb-5 drop-shadow-xs">
          The Zen of Precision Meets <br className="hidden sm:inline" />
          <span className="italic text-[#C83B3B] font-normal block sm:inline mt-1 sm:mt-0">
            The Frontier of Autonomous AI
          </span>
        </h1>

        {/* Authoritative Subtitle Narrative */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-[#2D2A26] font-normal px-2 mb-7">
          A high-trust, 5-day closed-door expedition strictly curated for 25 Indian enterprise chairmen, promoters, and deep-tech founders. Direct boardroom dialogues, zero-defect robotics facilities, and the longevity operating systems of 100-year Japanese dynasties.
        </p>

        {/* Glassmorphic Event Metadata Ribbon */}
        <div className="inline-flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-[13px] text-[#141312] font-semibold py-3 px-6 sm:px-8 rounded-full bg-white/85 border border-black/12 backdrop-blur-md shadow-xs mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C83B3B] shrink-0" />
            <span className="tracking-wide">Tokyo <span className="clean-amp text-[0.88em]">&amp;</span> Nagoya, Japan</span>
          </div>
          <span className="hidden sm:inline text-black/20">•</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C83B3B] shrink-0" />
            <span className="tracking-wide">29 August – 02 September 2026</span>
          </div>
          <span className="hidden sm:inline text-black/20">•</span>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#C83B3B] shrink-0" />
            <span className="tracking-wide">Strictly Capped at 25 Leaders</span>
          </div>
        </div>

        {/* Dual Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-4">
          <button
            type="button"
            onClick={onOpenApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C83B3B] hover:bg-[#B52D2D] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-[0_8px_25px_rgba(200,59,59,0.32)] hover:shadow-[0_10px_32px_rgba(200,59,59,0.42)] transition-all cursor-pointer active:scale-98"
          >
            <span>Apply for Delegation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={scrollToItinerary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/90 hover:bg-white text-[#141312] border border-black/15 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md transition-all shadow-xs hover:border-black/30 cursor-pointer active:scale-98"
          >
            <Compass className="w-4 h-4 text-[#C83B3B]" />
            <span>View 5-Day Roadmap</span>
          </button>
        </div>

        {/* Chatham House Rule Trust Assurance */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-[#666666] font-mono mb-12">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C83B3B]" />
          <span>Conducted under strict Chatham House Rule • Non-competing cohort curation</span>
        </div>

        {/* Telemetry Metric Strip (The 4 Frosted Glass Metric Cards) */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="bg-white/85 backdrop-blur-md border border-black/[0.10] p-4 sm:p-5 shadow-sm hover:border-[#C83B3B]/40 hover:bg-white/95 transition-all">
            <div className="flex items-center justify-between text-[#C83B3B] mb-1.5">
              <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#141312]">05</span>
              <Calendar className="w-4 h-4 opacity-75" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#141312]">Curated Days</p>
            <p className="text-[11px] text-[#666666] mt-0.5">Tokyo & Nagoya industrial heartland</p>
          </div>

          <div className="bg-white/85 backdrop-blur-md border border-black/[0.10] p-4 sm:p-5 shadow-sm hover:border-[#C83B3B]/40 hover:bg-white/95 transition-all">
            <div className="flex items-center justify-between text-[#C83B3B] mb-1.5">
              <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#141312]">14+</span>
              <Award className="w-4 h-4 opacity-75" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#141312]">Boardroom Dialogues</p>
            <p className="text-[11px] text-[#666666] mt-0.5">CEOs, METI policy & tech leaders</p>
          </div>

          <div className="bg-white/85 backdrop-blur-md border border-black/[0.10] p-4 sm:p-5 shadow-sm hover:border-[#C83B3B]/40 hover:bg-white/95 transition-all">
            <div className="flex items-center justify-between text-[#C83B3B] mb-1.5">
              <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#141312]">04</span>
              <Compass className="w-4 h-4 opacity-75" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#141312]">Frontier Lab Visits</p>
            <p className="text-[11px] text-[#666666] mt-0.5">Zero-defect robotics & smart factory floors</p>
          </div>

          <div className="bg-white/85 backdrop-blur-md border border-black/[0.10] p-4 sm:p-5 shadow-sm hover:border-[#C83B3B]/40 hover:bg-white/95 transition-all">
            <div className="flex items-center justify-between text-[#C83B3B] mb-1.5">
              <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#141312]">25</span>
              <Users className="w-4 h-4 opacity-75" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#141312]">Delegates Only</p>
            <p className="text-[11px] text-[#666666] mt-0.5">Strict peer-curation under Chatham House Rule</p>
          </div>
        </div>

        {/* Linear/SaaS-Style Scroll Down Prompter */}
        <div className="pt-10 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={scrollToPillars}
            className="group inline-flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#666666] hover:text-[#C83B3B] transition-colors cursor-pointer"
          >
            <span className="group-hover:translate-y-0.5 transition-transform">SCROLL TO EXPLORE</span>
            <div className="w-5 h-8 rounded-full border border-black/25 group-hover:border-[#C83B3B] flex items-start justify-center p-1 transition-colors bg-white/50 backdrop-blur-xs">
              <div className="w-1 h-2 rounded-full bg-[#C83B3B] animate-soft-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
