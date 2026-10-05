import React, { useState, useEffect } from 'react';
import { Bed, Train, Utensils, Languages, PlaneTakeoff, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { fetchSanityData, GET_INCLUSIONS } from '../sanity/queries';
import { urlFor } from '../sanity/image';
import hotelImg from '../assets/japan_palace_hotel.webp';
import trainImg from '../assets/japan_shinkansen.webp';
import kaisekiImg from '../assets/japan_kaiseki_dining.webp';

const defaultInclusions = [
  {
    icon: Bed,
    iconType: 'Bed',
    image: hotelImg,
    title: '5-Star Luxury Accommodations',
    place: 'The Palace Hotel Tokyo & Nagoya Marriott',
    desc: 'Prime luxury suites in Tokyo’s financial district overlooking the Imperial Palace gardens, with full executive club lounge privileges.',
  },
  {
    icon: Train,
    iconType: 'Train',
    image: trainImg,
    title: 'Shinkansen Gran Class Private Carriage',
    place: 'Tokyo ↔ Nagoya Bullet Rail',
    desc: 'Reserved private carriage on Japan’s legendary high-speed Shinkansen, complete with onboard refreshments and dedicated luggage handling.',
  },
  {
    icon: Utensils,
    iconType: 'Utensils',
    image: kaisekiImg,
    title: 'Private Michelin-Starred Kaiseki Banquets',
    place: 'Historic Tokyo & Kyoto Ryotei',
    desc: 'Curated culinary diplomacy dinners, private tea ceremonies with grandmasters, and executive networking at Tokyo’s most exclusive private member clubs.',
  },
  {
    icon: Languages,
    iconType: 'Languages',
    title: 'Dedicated Bilingual Executive Concierge',
    place: 'Bilingual Japanese-English Specialists',
    desc: 'Every boardroom session, plant tour, and dinner is staffed by professional executive interpreters ensuring zero nuance is lost in translation.',
  },
  {
    icon: PlaneTakeoff,
    iconType: 'PlaneTakeoff',
    title: 'VIP Airport Meet-and-Greet & Transit',
    place: 'Tokyo Haneda (HND) & Narita (NRT)',
    desc: 'Expedited customs and airside greeting upon arrival, accompanied by private luxury executive coach transit throughout the entire expedition.',
  },
  {
    icon: ShieldCheck,
    iconType: 'ShieldCheck',
    title: 'Comprehensive Bilateral Security & Protocol',
    place: 'High Commission & State Protocol Standards',
    desc: 'Full consular registration, 24/7 medical contingency desk, and dedicated delegation mission director oversight throughout Japan.',
  },
];

const iconMap = {
  Bed,
  Train,
  Utensils,
  Languages,
  PlaneTakeoff,
  ShieldCheck,
};

export const ExecutiveInclusions = () => {
  const [inclusions, setInclusions] = useState(defaultInclusions);

  useEffect(() => {
    let isMounted = true;
    fetchSanityData(GET_INCLUSIONS).then((data) => {
      if (isMounted && data && Array.isArray(data) && data.length > 0) {
        const mapped = data.map((item) => ({
          ...item,
          icon: iconMap[item.iconType] || Bed,
          image: item.image?.asset ? urlFor(item.image).auto('format').fit('max').width(1200).url() : null,
        }));
        setInclusions(mapped);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="inclusions" className="py-20 sm:py-28 bg-[#F6F3ED] border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal variant="up">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] font-mono">
                BESPOKE EXECUTIVE HOSPITALITY
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] tracking-tight leading-tight">
              White-Glove Executive Inclusions
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-3 leading-relaxed max-w-xl mx-auto font-sans">
              Designed for senior leaders who value flawless operational precision. Every hotel, transfer, and dining experience reflects the pinnacle of Japanese Omotenashi hospitality.
            </p>
          </div>
        </ScrollReveal>

        {/* 6-Card Grid with Staggered ScrollReveal & Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, idx) => {
            const Icon = item.icon;
            const hasImage = Boolean(item.image);
            return (
              <ScrollReveal
                key={idx}
                variant="up"
                delay={(idx % 3) * 110}
              >
                <div
                  className="h-full bg-white/90 backdrop-blur-md border border-black/10 shadow-xs hover:shadow-xl hover:border-black/25 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Photo Header if available */}
                  {hasImage ? (
                    <div className="relative h-48 w-full overflow-hidden bg-black/10">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Floating Frosted Glass Icon Badge */}
                      <div className="absolute bottom-3 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-[#141312] shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-[#C83B3B]" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C83B3B]">
                          VIP PROTOCOL
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {!hasImage && (
                        <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-black/10 text-[#C83B3B] flex items-center justify-center mb-5 group-hover:bg-[#C83B3B] group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      )}

                      <h3 className="font-editorial text-xl font-bold text-[#141312] mb-1.5 leading-snug group-hover:text-[#C83B3B] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-[11px] font-semibold text-[#C83B3B] tracking-wide mb-3">
                        {item.place}
                      </p>

                      <p className="text-xs text-[#555555] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <ScrollReveal variant="up" delay={150}>
          <div className="mt-12 p-5 bg-[#141312] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
              <span className="text-white/80">
                Delegation fee is comprehensive of 5-star lodging, bullet rail, all curated banquets, and interpretation. Flights arranged on request.
              </span>
            </div>
            <span className="text-[#C83B3B] font-mono tracking-widest uppercase shrink-0 font-bold">
              ALL-INCLUSIVE EXECUTIVE PASS
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
