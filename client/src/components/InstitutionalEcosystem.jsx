import React from 'react';
import { Building2, Landmark, ShieldCheck, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const InstitutionalEcosystem = () => {
  const institutions = [
    {
      name: 'Toyota Motor Corporation',
      role: 'Monozukuri, Zero-Defect TPS & Smart Factory Floor',
      tag: 'EST. 1937',
      category: 'Automotive & Lean Robotics',
      location: 'Nagoya / Aichi',
    },
    {
      name: 'Sony Group Corporation',
      role: 'Frontier AI, Sensor Technology & Autonomous Mobility Labs',
      tag: 'EST. 1946',
      category: 'Sensors, AI & Media Tech',
      location: 'Minato, Tokyo',
    },
    {
      name: 'Fanuc Corporation',
      role: 'Lights-Out Autonomous Factory & Self-Replicating Robotics',
      tag: 'EST. 1972',
      category: 'Industrial Automation & CNC',
      location: 'Yamanashi Prefecture',
    },
    {
      name: 'SoftBank Group & Robotics',
      role: 'Global AI Investments, Cobots & Autonomous Logistics',
      tag: 'EST. 1981',
      category: 'Deep Tech & Capital',
      location: 'Tokyo HQ',
    },
    {
      name: 'Ministry of Economy, Trade & Industry (METI)',
      role: 'Sovereign Bilateral Policy, Subsidies & Tech Alliances',
      tag: 'GOVERNMENT',
      category: 'Government & National Policy',
      location: 'Kasumigaseki, Tokyo',
    },
    {
      name: 'Japan External Trade Organization (JETRO)',
      role: 'Cross-Border M&A Deal Rooms & Joint Venture Frameworks',
      tag: 'BILATERAL',
      category: 'Bilateral Trade Promotion',
      location: 'Toranomon, Tokyo',
    },
    {
      name: 'Fast Retailing (Uniqlo)',
      role: 'Automated Supply Chain Architecture & Digital Retail Agility',
      tag: 'EST. 1963',
      category: 'Global Retail & Supply Chain',
      location: 'Ariake Innovation Hub',
    },
    {
      name: 'Shiseido Global Innovation Hub',
      role: '150-Year Enterprise Longevity & Sensory Biomaterials Science',
      tag: 'EST. 1872',
      category: 'Shinise Dynasty & R&D',
      location: 'Yokohama Innovation City',
    },
  ];

  return (
    <section className="py-20 bg-[#161514] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle Japanese Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        
        {/* Section Header with Balanced Grid Alignment */}
        <ScrollReveal variant="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-12 sm:mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] font-mono">
                  THE CLOSED-DOOR ECOSYSTEM
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Institutional Host <span className="clean-amp text-[0.88em]">&amp;</span> Boardroom Lineup
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed font-sans border-l-2 border-[#C83B3B] pl-4 sm:pl-5">
                Direct, facilitated access to Japan's most formidable industrial dynasties, sovereign policymaking ministries, and next-generation robotics laboratories.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Institution Grid - Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {institutions.map((inst, idx) => (
            <ScrollReveal
              key={idx}
              variant="up"
              delay={(idx % 4) * 80}
            >
              <div
                className="h-full p-6 bg-[#1F1D1C] border border-white/8 hover:border-[#C83B3B]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C83B3B] font-mono">
                      {inst.category}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-white/40 group-hover:text-white/80 transition-colors uppercase">
                      {inst.tag}
                    </span>
                  </div>

                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-white transition-colors">
                    {inst.name}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed font-sans mb-6">
                    {inst.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
                  <span className="font-mono text-[10.5px]">{inst.location}</span>
                  <span className="text-[#C83B3B] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bilateral Protocol Badge */}
        <ScrollReveal variant="up" delay={150}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-white/[0.03] border border-white/10 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C83B3B] shrink-0" />
              <span>
                All enterprise exchanges and factory floor walkthroughs operate under formal bilateral security and non-disclosure protocols.
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#C83B3B] uppercase shrink-0">
              OFFICIAL BILATERAL CORRIDOR
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
