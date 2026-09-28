import React from 'react';
import { Globe2, BookOpen, Layers, Users2, Compass, Award } from 'lucide-react';

export const VisionOverview = () => {
  const cards = [
    {
      icon: Globe2,
      title: 'Gain Global Exposure',
      subtitle: 'Broaden your perspective. Expand your possibilities.',
      desc: 'Step beyond familiar markets and experience how the world’s leading economies think, innovate, and grow with direct access to global business ecosystems.',
    },
    {
      icon: BookOpen,
      title: 'Curated Executive Learning',
      subtitle: 'Where travel transforms into executive learning.',
      desc: 'Thoughtfully designed to combine industry interactions, expert insights, company visits, and meaningful executive networking.',
    },
    {
      icon: Layers,
      title: 'World-Class Business Systems',
      subtitle: 'Discover the practices behind global excellence.',
      desc: 'Witness first-hand how top Japanese organisations drive innovation, operational excellence, Kaizen, and multi-decade quality standards.',
    },
    {
      icon: Users2,
      title: 'Culture Behind Success',
      subtitle: 'Great businesses are built on great cultures.',
      desc: 'Explore leadership values, discipline, customer obsession, and Ikigai philosophy that power sustainable success across industries.',
    },
    {
      icon: Compass,
      title: 'Future-Ready Leadership',
      subtitle: 'Prepare to lead in a rapidly changing world.',
      desc: 'Equip leaders with global insights, practical frameworks, and strategic perspectives to build resilient, agile businesses.',
    },
    {
      icon: Award,
      title: 'Elite Peer Network',
      subtitle: 'Non-competing senior executive cohort.',
      desc: 'Exchange high-level strategic intelligence with a vetted cohort of Indian founders, CXOs, and industry leaders.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-24 bg-[#F6F3ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C83B3B] uppercase">
                THE ET IMMERSIONS PHILOSOPHY
              </span>
              <div className="h-[2px] w-12 bg-[#C83B3B] mt-1.5"></div>
            </div>

            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.2]">
              The future belongs to those who <span className="italic text-[#C83B3B]">keep learning.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              <p>
                The pace of business has never been faster. Markets are evolving. Technology is reshaping industries. Customer expectations are changing overnight.
              </p>
              <p>
                The businesses that thrive won’t necessarily be the biggest. They’ll be the ones that continue to learn. Not from textbooks. Not from presentations. But from the businesses, cultures and ecosystems shaping the future.
              </p>
              <p className="font-semibold text-[#1A1A1A] pt-2">
                That’s why ET Immersions exist.
              </p>
            </div>
          </div>

          {/* Right 3x2 Card Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-none border border-black/8 hover:border-[#C83B3B]/40 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F6F3ED] flex items-center justify-center text-[#C83B3B] mb-4 group-hover:bg-[#C83B3B] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="h-[2px] w-8 bg-[#C83B3B] mb-3 opacity-60"></div>
                    <h3 className="font-editorial text-lg font-bold text-[#1A1A1A] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C83B3B] mb-2">
                      {card.subtitle}
                    </p>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
