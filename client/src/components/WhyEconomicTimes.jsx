import React from 'react';
import { Shield, Users, Newspaper, KeyRound, Briefcase, GraduationCap } from 'lucide-react';

export const WhyEconomicTimes = () => {
  const points = [
    {
      icon: Shield,
      title: 'Trust of The Economic Times',
      desc: 'Curated with the editorial rigour, credibility, and institutional standing of India’s most respected business authority.',
    },
    {
      icon: Users,
      title: 'Curated Peer Cohort',
      desc: 'Selective, non-competing groups of senior founders, promoters, and enterprise CXOs travelling together for high-trust exchange.',
    },
    {
      icon: Newspaper,
      title: 'Editorial Intelligence',
      desc: 'In-depth market, sector, and target company dossiers prepared by ET’s senior analysts, newsrooms, and bilateral policy desks.',
    },
    {
      icon: KeyRound,
      title: 'Unmatched Institutional Access',
      desc: 'Behind-closed-doors access to Japanese boardrooms, Ministry delegates (METI), state innovation labs, and industrial plants.',
    },
    {
      icon: Briefcase,
      title: 'Commercial & Strategic Curation',
      desc: 'Every session, factory walk, and dinner is engineered strictly around commercial value, partnerships, and executive takeaways.',
    },
    {
      icon: GraduationCap,
      title: 'Continued Alumni Network',
      desc: 'Lifetime membership to an exclusive private alumni circle of Indian leaders actively learning from and trading with the world.',
    },
  ];

  return (
    <section id="why-et" className="py-24 bg-[#ECE7DC] border-y border-black/5 relative overflow-hidden">
      {/* Subtle Architectural Linework */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 600" className="w-full h-full" fill="none" stroke="currentColor">
          <line x1="0" y1="300" x2="1000" y2="300" strokeWidth="2" />
          <line x1="500" y1="0" x2="500" y2="600" strokeWidth="2" />
          <circle cx="500" cy="300" r="250" strokeWidth="1.5" />
          <circle cx="500" cy="300" r="150" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B]">
            THE ET IMMERSIONS ADVANTAGE
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#1A1A1A] mt-2">
            Why <span className="italic text-[#C83B3B]">The Economic Times?</span>
          </h2>
          <p className="text-sm text-[#555555] mt-3">
            Leveraging decades of bilateral trust, editorial depth, and convening power to deliver unprecedented global access.
          </p>
        </div>

        {/* 3x2 Charcoal Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-[#242220] p-8 text-white rounded-none border border-white/10 hover:border-[#C83B3B]/60 transition-all duration-300 hover:-translate-y-1 shadow-md group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C83B3B] mb-6 group-hover:bg-[#C83B3B] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="h-[2px] w-8 bg-[#C83B3B] mb-4"></div>
                <h3 className="font-editorial text-xl font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
