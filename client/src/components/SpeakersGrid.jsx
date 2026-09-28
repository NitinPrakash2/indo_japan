import React from 'react';
import { ExternalLink } from 'lucide-react';


export const SpeakersGrid = () => {
  const speakers = [
    {
      name: 'Dr. Hiroshi Tanaka',
      role: 'Head of Industrial Robotics & AI',
      company: 'Tokyo Institute of Technology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Akiko Takahashi',
      role: 'Managing Director, Global Strategy',
      company: 'Mitsubishi Corporation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Kenji Sato',
      role: 'Chief Kaizen & Quality Officer',
      company: 'Automotive Quality Council Japan',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Yuka Matsumoto',
      role: 'Partner, Cross-Border Venture Fund',
      company: 'SoftBank Vision Network',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Suresh Narayanan',
      role: 'Chairman & Managing Director',
      company: 'India-Japan Business Forum',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Masayuki Morikawa',
      role: 'Vice President of Research',
      company: 'Research Institute of Economy & Trade',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Meenakshi Sundaram',
      role: 'Chief Technology Officer',
      company: 'NextGen Mobility Solutions',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Takashi Endo',
      role: 'Director of Smart Cities & Rail',
      company: 'East Japan Railway Corporation',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Reiko Shimizu',
      role: 'Executive Director, Sustainable Trade',
      company: 'JETRO (Japan External Trade Org)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces&q=80',
    },
    {
      name: 'Rajesh Gopinath',
      role: 'Senior Advisor & Board Member',
      company: 'Bilateral Trade Strategic Council',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop&crop=faces&q=80',
    },
  ];

  return (
    <section id="speakers" className="py-14 sm:py-24 bg-[#F6F3ED] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B]">
            DISTINGUISHED LEADERSHIP
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#1A1A1A] mt-2">
            Speakers & <span className="italic text-[#C83B3B]">Faculty</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-2.5 max-w-xl mx-auto px-2">
            Engage directly with global industry veterans, policy architects, Japanese corporate directors, and innovation leaders.
          </p>
        </div>

        {/* 5-Column Responsive Speaker Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-6 lg:gap-8">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="group text-center flex flex-col items-center">
              <div className="relative w-full aspect-square mb-2.5 sm:mb-4 overflow-hidden rounded-xs bg-[#EAE6DD] border border-black/10 group-hover:border-[#C83B3B]/60 transition-all duration-300">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2 sm:p-3">
                  <span className="text-[9px] sm:text-[10px] text-white uppercase tracking-wider font-semibold">
                    View Profile
                  </span>
                </div>
              </div>

              <h3 className="font-editorial text-sm sm:text-base lg:text-lg font-bold text-[#1A1A1A] group-hover:text-[#C83B3B] transition-colors leading-tight">
                {speaker.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#555555] font-medium mt-1 leading-tight line-clamp-2">
                {speaker.role}
              </p>
              <p className="text-[10px] sm:text-[11px] font-bold text-[#C83B3B] mt-1 uppercase tracking-wide">
                {speaker.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
