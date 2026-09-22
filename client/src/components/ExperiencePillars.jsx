import React from 'react';
import { Building2, MessageSquare, Trophy, Network, BookMarked, Handshake, Globe, Plane, FileText } from 'lucide-react';

export const ExperiencePillars = () => {
  const pillars = [
    {
      icon: Building2,
      title: 'Curated Business Access',
      desc: 'Exclusive on-site walkthroughs across landmark factories, R&D laboratories, automated distribution centers, and iconic institutions.',
    },
    {
      icon: MessageSquare,
      title: 'High-Impact Leadership Dialogues',
      desc: 'Intimate roundtables and Q&A sessions with Japanese corporate directors, shopfloor senseis, and seasoned entrepreneurs.',
    },
    {
      icon: Trophy,
      title: 'ET Global Leadership Summit',
      desc: 'Full delegate participation in the flagship ET Global Future Business & Leadership Summit in Tokyo with keynote policy addresses.',
    },
    {
      icon: Network,
      title: 'Vetted Peer Cohort',
      desc: 'Travel and collaborate alongside 25-30 hand-selected Indian founders, legacy business successors, and CXOs across industries.',
    },
    {
      icon: BookMarked,
      title: 'Intelligence & Executive Playbook',
      desc: 'Comprehensive pre-departure industry dossiers, daily guided reflections, and practical frameworks to implement in your enterprise.',
    },
    {
      icon: Handshake,
      title: 'Strategic Bilateral Connections',
      desc: 'Structured networking opportunities with trade federations, JETRO officers, venture capitalists, and prospective Japanese partners.',
    },
    {
      icon: Globe,
      title: 'ET Immersions Alumni Network',
      desc: 'Permanent integration into the private ET global alumni network, quarterly briefings, and recurring international delegations.',
    },
    {
      icon: Plane,
      title: 'Seamless Executive Hospitality',
      desc: 'Five-star central Tokyo accommodations, private bullet train transit, dedicated executive translators, and curated culinary experiences.',
    },
    {
      icon: FileText,
      title: 'Post-Immersion Strategic Report',
      desc: 'Co-published executive takeaways, media visibility through ET B2B channels, and personalized delegation certification.',
    },
  ];

  return (
    <section className="py-24 bg-[#F6F3ED]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B]">
            WHAT YOUR IMMERSION INCLUDES
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#1A1A1A] mt-2">
            Experience <span className="italic text-[#C83B3B]">Pillars</span>
          </h2>
          <p className="text-sm text-[#666666] mt-3">
            An end-to-end executive program that balances institutional depth, peer learning, and seamless luxury logistics.
          </p>
        </div>

        {/* 3x3 White Card Grid with Red Left Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 border-l-4 border-[#C83B3B] border-t border-r border-b border-black/8 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F6F3ED] flex items-center justify-center text-[#C83B3B] group-hover:bg-[#C83B3B] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#C83B3B] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
