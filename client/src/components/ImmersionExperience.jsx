import React from 'react';
import { Target, Repeat, Heart, Cpu, Network, ShieldCheck } from 'lucide-react';

export const ImmersionExperience = () => {
  const experiences = [
    {
      icon: Target,
      title: 'Operational Excellence',
      tag: 'METHODOLOGY',
      desc: 'Discover firsthand how world-renowned production systems, zero-defect philosophies, and legendary brands are engineered from shop-floor to boardroom.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Repeat,
      title: 'Kaizen & Compounding Improvement',
      tag: 'PHILOSOPHY',
      desc: 'Witness how daily micro-optimizations across teams and assembly lines compound into insurmountable global competitive advantages.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Heart,
      title: 'Ikigai & Purpose-Driven Leadership',
      tag: 'LEADERSHIP',
      desc: 'Leadership rooted in deep social purpose, long-term stakeholder stewardship, harmony, and resilience across multi-generational horizons.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Cpu,
      title: 'Automation & High-Tech Infrastructure',
      tag: 'INNOVATION',
      desc: 'Tour autonomous manufacturing plants, robotic logistics hubs, and high-speed transit systems defining the frontier of Industry 4.0.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: Network,
      title: 'Future-Ready Business Systems',
      tag: 'SCALE & RELIABILITY',
      desc: 'Examine organizational blueprints engineered to maintain precision, reliability, supply-chain integrity, and rapid agility under global shocks.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: ShieldCheck,
      title: 'Home for Undisputed Brands',
      tag: 'BRAND TRUST',
      desc: 'Deconstruct how Japanese conglomerates cultivate enduring consumer trust, minimalist luxury, and brand equity that spans centuries.',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="experience" className="py-14 sm:py-24 bg-[#F6F3ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B]">
            CORE CURRICULUM & FIELD VISITS
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#1A1A1A] mt-2">
            Japan Immersion <span className="italic text-[#C83B3B]">Experience</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-2.5 max-w-xl mx-auto px-2">
            Designed to help Indian entrepreneurs and executive leaders experience the operating principles behind Japanese mastery firsthand.
          </p>
        </div>

        {/* 3-Column Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="group relative h-[340px] sm:h-[420px] rounded-none overflow-hidden border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-5 sm:p-7"
              >
                {/* Background Image with Zoom on Hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                  style={{ backgroundImage: `url(${exp.image})` }}
                ></div>

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Content Overlay */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#C83B3B] group-hover:bg-[#C83B3B] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#C83B3B] bg-white/10 backdrop-blur-sm px-2.5 py-1 uppercase">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-white group-hover:text-[#F6F3ED] transition-colors leading-tight">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {exp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
