import React from 'react';
import { Award, Briefcase, GraduationCap, Globe2, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import ambassadorImg from '../assets/host_ambassador.webp';
import fujimotoImg from '../assets/host_professor_fujimoto.webp';
import kitanoImg from '../assets/host_dr_kitano.webp';
import tanimotoImg from '../assets/host_yuka_tanimoto.webp';

export const DistinguishedHosts = ({ onOpenApply }) => {
  const leaders = [
    {
      name: 'H.E. Kenji Hiramatsu',
      role: 'Former Ambassador of Japan to India',
      organization: 'President, Japan Institute of International Affairs (JIIA)',
      image: ambassadorImg,
      topic: 'Bilateral Geopolitical Corridors & Supply-Chain Sovereignty',
      desc: 'Former top envoy spearheading the $35B Japan-India bilateral investment pact. Briefs delegates on cross-border diplomacy, strategic joint ventures, and governmental incentives.',
      credentials: ['Ex-Ambassador to India', 'Ministry of Foreign Affairs Senior Envoy', 'Bilateral Economic Architect'],
    },
    {
      name: 'Prof. Takahiro Fujimoto',
      role: 'Global Authority on Monozukuri & TPS',
      organization: 'Director, Manufacturing Management Research Center (University of Tokyo)',
      image: fujimotoImg,
      topic: 'The Architecture of Zero-Defect Manufacturing & Kaizen',
      desc: 'World’s foremost academic authority on the Toyota Production System. Decodes the architectural difference between modular Western assembly and Japanese integrated craft.',
      credentials: ['Harvard D.B.A.', 'Tokyo University Emeritus', 'Author of "The Evolution of a Manufacturing System"'],
    },
    {
      name: 'Dr. Hiroaki Kitano',
      role: 'CEO, Sony AI & CTO, Sony Group',
      organization: 'Sony Group Corporation / The Systems Biology Institute',
      image: kitanoImg,
      topic: 'Human-Centric AI & Autonomous Physical Intelligence',
      desc: 'Pioneering researcher bridging autonomous robotics, culinary sensory intelligence, and next-generation edge AI operating systems.',
      credentials: ['Nature Scientific Laureate', 'RoboCup Founder', 'Turing AI World Forum Keynote'],
    },
    {
      name: 'Yuka Tanimoto',
      role: 'Executive Managing Editor',
      organization: 'Forbes Japan / International Economic Anchor',
      image: tanimotoImg,
      topic: 'Centennial Shinise Dynasties & Multi-Generational Wealth',
      desc: 'Has interviewed over 1,000 global CEOs, prime ministers, and dynastic family promoters. Unpacks succession governance and stakeholder stewardship.',
      credentials: ['Bloomberg Anchor Ex-Tokyo', 'World Economic Forum Media Fellow', 'Centennial Governance Author'],
    },
  ];

  return (
    <section id="hosts" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal variant="up">
          <div className="mb-14 sm:mb-16 pb-6 border-b border-black/10">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] font-mono">
                DISTINGUISHED DIALOGUE FACULTY
              </span>
            </div>

            {/* Split Row: Heading and Description Perfectly Aligned */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] leading-[1.14] tracking-tight max-w-2xl">
                Hosts, Economists <span className="clean-amp text-[0.88em]">&amp;</span> Industrial Dignitaries
              </h2>
              <div className="lg:max-w-md shrink-0 lg:pt-1">
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans border-l-2 border-[#C83B3B]/40 pl-4">
                  Engage directly with the statesmen who shaped bilateral policy, the academic masters of Monozukuri, and the architects of frontier Japanese artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Leaders Grid with Staggered ScrollReveal & Frosted Glass Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {leaders.map((leader, idx) => (
            <ScrollReveal
              key={idx}
              variant="up"
              delay={(idx % 2) * 120}
            >
              <div
                className="h-full bg-white/90 backdrop-blur-md border border-black/10 shadow-xs hover:shadow-xl hover:border-black/25 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row group"
              >
                {/* Leader Photo Column with Frosted Glass Badge */}
                <div className="sm:w-48 md:w-52 shrink-0 relative bg-black/5 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 sm:h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden" />
                  
                  {/* Subtle red indicator pin */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-md border border-black/10 text-[9px] font-mono font-bold uppercase text-[#C83B3B] shadow-2xs">
                    DELEGATION FACULTY
                  </div>
                </div>

                {/* Content Column */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Focus Badge */}
                    <div className="inline-block px-2.5 py-1 bg-[#1A1A1A]/[0.04] border border-black/8 text-[9px] sm:text-[9.5px] font-mono font-bold tracking-[0.14em] uppercase text-[#C83B3B] mb-3">
                      {leader.topic}
                    </div>

                    <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#141312] mb-1 group-hover:text-[#C83B3B] transition-colors">
                      {leader.name}
                    </h3>
                    
                    <p className="text-xs font-bold text-[#C83B3B] tracking-wide mb-0.5">
                      {leader.role}
                    </p>
                    <p className="text-[11px] text-[#666666] font-medium mb-3">
                      {leader.organization}
                    </p>

                    <p className="text-xs text-[#555555] leading-relaxed font-sans mb-5">
                      {leader.desc}
                    </p>
                  </div>

                  {/* Credentials / Badges */}
                  <div className="pt-4 border-t border-black/[0.08] flex flex-wrap gap-1.5">
                    {leader.credentials.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#FAF8F5] border border-black/8 text-[9.5px] text-[#444444] font-medium"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#C83B3B]"></span>
                        <span>{cred}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Executive Curation Notice */}
        <ScrollReveal variant="fade" delay={150}>
          <div className="mt-12 text-center p-6 bg-[#FAF8F5] border border-black/10">
            <p className="text-xs text-[#555555] max-w-2xl mx-auto leading-relaxed">
              * Additional C-Suite keynote speakers from Toyota Motor Corporation, SoftBank, and the Tokyo Stock Exchange will be confirmed to the registered 25-leader cohort in the private delegation briefing pack.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
