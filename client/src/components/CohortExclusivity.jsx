import React from 'react';
import { ShieldCheck, PieChart, Check, ArrowRight, Lock, Users, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

// Precision helper to format '&' with single, clean typography spacing
const renderCleanAmp = (text) => {
  if (typeof text !== 'string') return text;
  if (!text.includes('&')) return text;
  const parts = text.split(/\s*&\s*/);
  return parts.map((chunk, i) => (
    <React.Fragment key={i}>
      {chunk}
      {i < parts.length - 1 && (
        <span className="font-sans font-normal text-[0.88em] mx-1.5 inline-block text-current select-none">
          &amp;
        </span>
      )}
    </React.Fragment>
  ));
};

export const CohortExclusivity = ({ onOpenApply }) => {
  const demographics = [
    {
      percentage: '40%',
      segment: 'Promoters & Family Business Heads',
      badge: '$50M–$1B+ SCALE',
      detail: 'Next-gen and veteran business family heads leading enterprises scaling beyond $50M–$1B+ turnovers.',
    },
    {
      percentage: '35%',
      segment: 'Managing Directors & Group CEOs',
      badge: 'COMMAND & OPS',
      detail: 'Corporate leaders navigating complex multi-facility supply chains, industrial robotics, and global markets.',
    },
    {
      percentage: '25%',
      segment: 'CTOs & Deep-Tech Founders',
      badge: 'FRONTIER TECH',
      detail: 'High-growth technology pioneers seeking Japanese precision hardware, sensor JVs, and sovereign capital.',
    },
  ];

  const protocols = [
    {
      title: 'Strict Non-Competing Curation',
      desc: 'To preserve complete candor, no direct competitors within the same primary vertical are admitted to the same 25-leader cohort.',
    },
    {
      title: 'Chatham House Governance',
      desc: 'All roundtable discussions, boardroom questions, and minister briefings are off-the-record and protected by bilateral non-disclosure protocols.',
    },
    {
      title: 'Direct Promoter-to-Promoter Access',
      desc: 'Skip intermediaries and business consultants. You engage directly with Japanese chairmen and decision-makers who approve capital and JVs.',
    },
    {
      title: 'Permanent 2026 Alumni Charter',
      desc: 'Delegates are inducted into the exclusive bilateral alumni circle, receiving ongoing deal flow introductions and Tokyo boardroom concierge.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F6F3ED] border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal variant="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] font-mono">
                THE 25-LEADER COHORT
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] tracking-tight leading-tight">
              Strictly Peer-Curated. Capped at 25 Delegates.
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-3 leading-relaxed max-w-xl mx-auto font-sans">
              The transformative power of an immersion is determined by who travels alongside you. Our admissions committee rigorously screens every applicant to ensure peer-level conversations.
            </p>
          </div>
        </ScrollReveal>

        {/* Redefined Executive Matrix: Contrast Dual-Console Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT PANEL: Rich Sumi-Ink Dark Console */}
          <ScrollReveal variant="left" className="h-full">
            <div className="h-full bg-[#141312] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl border border-black/20">
            {/* Subtle Vermilion Ambient Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C83B3B]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header aligned with Right Column */}
              <div className="pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] flex items-center gap-1.5 font-mono">
                    <PieChart className="w-3.5 h-3.5" />
                    <span>COHORT ARCHITECTURE</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 bg-white/10 px-2.5 py-1 border border-white/10">
                    25 Seats Capped
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Target Delegate Demographics
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1 font-sans">
                  Strict ratio balance ensuring every conversation operates at peer level
                </p>
              </div>

              {/* 3 Demographic Archetypes */}
              <div className="space-y-4">
                {demographics.map((demo, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 bg-white/[0.04] border border-white/[0.08] hover:border-[#C83B3B]/50 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#C83B3B] leading-none">
                          {demo.percentage}
                        </span>
                        <h4 className="font-editorial text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#C83B3B] transition-colors">
                          {renderCleanAmp(demo.segment)}
                        </h4>
                      </div>
                      <span className="text-[9.5px] font-mono uppercase tracking-wider text-white/50 bg-white/5 px-2 py-0.5 border border-white/5">
                        {demo.badge}
                      </span>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed font-sans pl-0.5 mb-3">
                      {demo.detail}
                    </p>

                    {/* Proportional Progress Track */}
                    <div className="w-full bg-white/10 h-1 overflow-hidden">
                      <div 
                        className={`h-full ${idx === 0 ? 'bg-[#C83B3B]' : idx === 1 ? 'bg-white/80' : 'bg-white/50'}`} 
                        style={{ width: demo.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Bar (Aligned height & baseline with CTA button) */}
            <div className="mt-8 pt-5 border-t border-white/10">
              <div className="h-13 px-5 bg-black/60 border border-white/10 flex items-center justify-between text-xs font-mono tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C83B3B] animate-pulse" />
                  <span className="text-white/90">SEATS RESERVED: 18 / 25</span>
                </div>
                <span className="text-[#C83B3B] font-bold">7 SEATS REMAINING</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT PANEL: Crisp Editorial Ivory White Console */}
        <ScrollReveal variant="right" className="h-full">
          <div className="h-full bg-white border border-black/10 p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-xl">
            <div>
              {/* Header aligned with Left Column */}
              <div className="pb-6 border-b border-black/10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] flex items-center gap-1.5 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>BOARDROOM GOVERNANCE</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C83B3B] bg-[#C83B3B]/10 px-2.5 py-1 font-semibold border border-[#C83B3B]/20">
                    Strict Screening
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141312] tracking-tight">
                  The High-Trust Boardroom Protocol
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] mt-1 font-sans">
                  Four non-negotiable covenants binding all 25 participating leaders
                </p>
              </div>

              {/* 4 Governance Protocol Items */}
              <div className="space-y-3.5">
                {protocols.map((proto, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF8F5] border border-black/[0.08] hover:border-black/25 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C83B3B]/10 text-[#C83B3B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h5 className="font-editorial text-sm sm:text-base font-bold text-[#141312] group-hover:text-[#C83B3B] transition-colors leading-snug">
                          {renderCleanAmp(proto.title)}
                        </h5>
                        <span className="text-[9.5px] font-mono text-black/30">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] leading-relaxed font-sans">
                        {proto.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Button (Aligned height & baseline with Left Status Bar) */}
            <div className="mt-8 pt-5 border-t border-black/10">
              <button
                type="button"
                onClick={onOpenApply}
                className="w-full h-13 px-6 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Submit Executive Profile for Screening</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
