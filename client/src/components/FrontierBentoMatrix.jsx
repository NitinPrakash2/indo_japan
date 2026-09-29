import React from 'react';
import { Cpu, Shield, TrendingUp, Sparkles, ArrowUpRight, Zap, Target, Repeat } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import roboticsImg from '../assets/japan_robotics_factory.jpg';

export const FrontierBentoMatrix = ({ onOpenApply }) => {
  const pillars = [
    {
      id: 'monozukuri',
      title: 'Monozukuri: Zero-Defect Precision',
      tag: 'OPERATIONAL SUPREMACY',
      description: 'The Japanese craft philosophy that treats engineering as sacred duty. Study firsthand how Toyota (TPS) and Fanuc design zero-defect assembly lines where human intuition orchestrates autonomous robotic cells.',
      stat: '99.999%',
      statLabel: 'Production Yield Standard',
      icon: Cpu,
      bgImage: roboticsImg,
      colSpan: 'md:col-span-7',
      highlights: ['Toyota Motomachi Smart Line Access', 'Autonomous Poka-Yoke Error Proofing', 'Shop-Floor Gemba Walk Protocol'],
    },
    {
      id: 'shinise',
      title: 'Shinise: The 100-Year Dynasty Protocol',
      tag: 'GOVERNANCE & LONGEVITY',
      description: 'Japan is home to over 33,000 enterprises that have survived for more than a century. Unpack the succession frameworks, debt-resilient balance sheets, and stakeholder stewardship that outlast recessions, wars, and technological upheavals.',
      stat: '33,000+',
      statLabel: 'Centennial Enterprises in Japan',
      icon: Shield,
      colSpan: 'md:col-span-5',
      highlights: ['Multi-Generational Capital Preservation', 'Stakeholder Sanpo-Yoshi Philosophy', 'Crisis-Proof Balance Sheet Architecture'],
    },
    {
      id: 'corridor',
      title: 'The $50B Indo-Japan Frontier Corridor',
      tag: 'BILATERAL STRATEGY',
      description: 'Direct high-level access to the Ministry of Economy, Trade & Industry (METI) and JETRO. Explore joint ventures, semiconductor supply chains, green hydrogen pacts, and co-investment syndicates linking Indian scale with Japanese R&D.',
      stat: '$50 Billion',
      statLabel: 'Committed Bilateral Investment',
      icon: TrendingUp,
      colSpan: 'md:col-span-5',
      highlights: ['METI Ministerial Policy Roundtables', 'Semiconductor & Precision Hardware JVs', 'Direct Japanese Institutional Co-Investment'],
    },
    {
      id: 'kaizen-ai',
      title: 'Kaizen Re-Engineered: Human-Robot AI Symbiosis',
      tag: 'NEXT-GEN INTELLIGENCE',
      description: 'While global tech seeks to replace human labor, Japanese titans build collaborative intelligence: autonomous cobots, digital twins, and worker-led algorithmic optimization that compounds competitive advantage on a daily cadence.',
      stat: '3.8x',
      statLabel: 'Productivity Lift via Cobot Kaizen',
      icon: Sparkles,
      colSpan: 'md:col-span-7',
      highlights: ['Agentic Shop-Floor AI Deployments', 'Human-Centric Cobot Automation', 'Compounding Micro-Innovation Culture'],
    },
  ];

  return (
    <section id="pillars" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal variant="up">
          <div className="mb-14 sm:mb-16 pb-6 border-b border-black/10">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] font-mono">
                THE STRATEGIC IMPERATIVE • 4 PILLARS
              </span>
            </div>

            {/* Split Row: Heading and Description Perfectly Aligned */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] leading-[1.14] tracking-tight max-w-2xl">
                Why Global Leaders Look to Japan Now
              </h2>
              <div className="lg:max-w-md shrink-0 lg:pt-1">
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans border-l-2 border-[#C83B3B]/40 pl-4">
                  While Silicon Valley builds transient software, Japan constructs the enduring physical architecture the world depends upon: zero-defect hardware, centennial resilience, and human-dignity robotics.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid with Staggered ScrollReveal & Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const hasBg = Boolean(pillar.bgImage);
            return (
              <ScrollReveal
                key={pillar.id}
                variant="scale"
                delay={idx * 110}
                className={pillar.colSpan}
              >
                <div
                  className="h-full relative bg-white/90 backdrop-blur-md border border-black/[0.08] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:border-black/25 transition-all duration-300 group"
                >
                  {/* Subtle Background Photography for featured cards */}
                  {hasBg && (
                    <>
                      <img
                        src={pillar.bgImage}
                        alt={pillar.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500 -z-10 pointer-events-none filter contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/60 -z-10" />
                    </>
                  )}

                  {/* Top Badge & Metric */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="inline-block px-3 py-1 bg-[#1A1A1A]/[0.04] border border-black/10 text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#333333]">
                        {pillar.tag}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-black/10 flex items-center justify-center text-[#C83B3B] group-hover:bg-[#C83B3B] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-editorial text-xl sm:text-2xl lg:text-[26px] font-bold text-[#141312] mb-3 leading-snug group-hover:text-[#C83B3B] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#4A4744] mb-8 font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Highlights & Big Metric */}
                  <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="space-y-1.5">
                      {pillar.highlights.map((item, idxHighlight) => (
                        <div key={idxHighlight} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#2A2928] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C83B3B]"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="block font-editorial text-2xl sm:text-3xl font-extrabold text-[#111111] leading-none">
                        {pillar.stat}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-[#777777] font-medium tracking-wide">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Insight Quote */}
        <ScrollReveal variant="up" delay={200}>
          <div className="mt-12 p-6 sm:p-8 bg-[#1A1918] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-[#C83B3B]">
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C83B3B]">
                THE EXECUTIVE MANDATE
              </span>
              <p className="font-editorial text-base sm:text-xl font-medium text-white/95 leading-relaxed">
                "We don't travel to Japan to observe history. We travel to decode the operating systems that will safeguard our companies for the next fifty years."
              </p>
            </div>
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-98 shrink-0 cursor-pointer"
            >
              <span>Request Program Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
