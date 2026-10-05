import React, { useState, useEffect } from 'react';
import { 
  Clock, ShieldCheck, ArrowRight, Building2, 
  Train, CheckCircle2, Lock 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { fetchSanityData, GET_ITINERARY } from '../sanity/queries';
import { urlFor } from '../sanity/image';
import hotelImg from '../assets/japan_palace_hotel.webp';
import roboticsImg from '../assets/japan_robotics_factory.webp';
import kaisekiImg from '../assets/japan_kaiseki_dining.webp';
import trainImg from '../assets/japan_shinkansen.webp';
import zenImg from '../assets/hero_japan_executive.webp';

// Precision helper to format '&' with single, clean typography spacing
const renderCleanAmp = (text) => {
  if (typeof text !== 'string') return text;
  if (!text.includes('&')) return text;
  
  // Split on & with any surrounding whitespace stripped
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

export const ExpeditionItinerary = ({ onOpenApply }) => {
  const [activeDay, setActiveDay] = useState(1);

  const defaultItineraryData = [
    {
      day: 1,
      date: 'Saturday, 29 August 2026',
      dateShort: '29 AUG',
      city: 'Tokyo',
      tabLabel: 'AI & Governance',
      theme: 'The Frontier of AI & Modern Corporate Governance',
      image: hotelImg,
      overview: 'Convene in Tokyo for an intensive closed-door immersion into Japan’s modern technology architecture, AI-driven automation, and boardroom governance at iconic industrial headquarters.',
      accessBadge: 'CHATHAM HOUSE RULE • C-SUITE ONLY',
      keyFacilities: [
        'Sony Global Technology Headquarters (Minato City)',
        'SoftBank Vision & Cobot Innovation Lab',
        'Historic Akasaka Kaiseki Ryotei Pavilion'
      ],
      timeline: [
        {
          time: '09:30 AM',
          tag: 'MACRO STRATEGY',
          title: 'Macro Strategy Briefing: The 2030 Japan Industrial Blueprint',
          host: 'Former METI Vice-Minister & Leading Tokyo University Economists',
          desc: 'An unvarnished strategic briefing on how Japanese conglomerates are navigating US-China decoupling, currency realignment, and the global semiconductor race.',
        },
        {
          time: '01:45 PM',
          tag: 'R&D LAB ACCESS',
          title: 'Frontier AI & Autonomous Sensory R&D Walkthrough',
          host: 'Sony Global Technology Headquarters, Minato City',
          desc: 'Behind-closed-doors walkthrough of proprietary intelligent sensor labs, automotive vision systems, and edge-computing AI deployment architectures.',
        },
        {
          time: '04:30 PM',
          tag: 'ROBOTICS SUITE',
          title: 'SoftBank Robotics & Autonomous Logistics Showcase',
          host: 'SoftBank Vision & Cobot Innovation Lab',
          desc: 'Live operational demonstration of autonomous fleet coordination, warehouse robotics, and human-assisting cobot algorithms.',
        },
        {
          time: '07:30 PM',
          tag: 'CULTURAL RECEPTION',
          title: 'Delegation Welcome Banquet: Traditional Ryotei Experience',
          host: 'Historic Kaiseki Pavilion, Akasaka',
          desc: 'High-trust inaugural dinner setting bilateral delegate priorities. Private cultural protocol and formal introduction of cohort dignitaries.',
        },
      ],
      keyTakeaways: [
        'How Japanese boards enforce 10-year technology capital expenditure roadmaps',
        'Integration of edge-AI into physical consumer and industrial hardware',
        'Direct bilateral technology transfer frameworks for Indian conglomerates',
      ],
    },
    {
      day: 2,
      date: 'Sunday, 30 August 2026',
      dateShort: '30 AUG',
      city: 'Nagoya & Aichi',
      tabLabel: 'Monozukuri & TPS',
      theme: 'Monozukuri: Zero-Defect Smart Plants & Fanuc Robotics',
      image: roboticsImg,
      overview: 'Travel via Shinkansen Gran Class to the industrial manufacturing heartland of Japan to examine zero-defect production lines, Kaizen methodologies, and lights-out robotics.',
      accessBadge: 'FACTORY FLOOR CLEARANCE GRANTED',
      keyFacilities: [
        'Toyota Motomachi & Tsutsumi Assembly Complex',
        'Fanuc Robot Village Automated Cleanrooms',
        'Nagoya Marriott Executive Tower Conclave'
      ],
      timeline: [
        {
          time: '08:15 AM',
          tag: 'SHINKANSEN TRANSIT',
          title: 'Shinkansen Gran Class Private Carriage Transit',
          host: 'Tokyo Station → Nagoya Station (Speed: 285 km/h)',
          desc: 'Onboard executive strategy discussion: "The Physics of Shinkansen Maintenance: 0.0 seconds average delay doctrine."',
        },
        {
          time: '11:00 AM',
          tag: 'TPS MASTER COMPLEX',
          title: 'Toyota Motomachi & Tsutsumi Assembly Complex',
          host: 'Toyota Motor Corporation (TPS Master Facility)',
          desc: 'Exclusive access to the birthplace of Lean: Just-in-Time, Andon cord line-stopping empowerment, and digital-twin automated assembly.',
        },
        {
          time: '03:15 PM',
          tag: 'LIGHTS-OUT PLANT',
          title: 'Fanuc Robot Village: Lights-Out Autonomous Manufacturing',
          host: 'Fanuc Global Headquarters & Robot Plant',
          desc: 'Witness self-replicating robotics where machines build precision industrial robots 24/7 in completely unlit, automated cleanrooms.',
        },
        {
          time: '07:30 PM',
          tag: 'EXECUTIVE DINNER',
          title: 'Executive Dinner with Chubu Industrial Confederation',
          host: 'Nagoya Marriott Executive Tower',
          desc: 'Private networking with tier-1 automotive, aerospace, and precision robotics supplier CEOs.',
        },
      ],
      keyTakeaways: [
        'Deploying Andon empowerment: enabling any worker to stop the assembly line for quality',
        'The economics of lights-out robotic machining centers and predictive maintenance',
        'Direct procurement and joint-venture sourcing channels in Aichi prefecture',
      ],
    },
    {
      day: 3,
      date: 'Monday, 31 August 2026',
      dateShort: '31 AUG',
      city: 'Ginza & Tokyo',
      tabLabel: '100-Year Dynasties',
      theme: 'Shinise: The 100-Year Enterprise & Consumer Supremacy',
      image: kaisekiImg,
      overview: 'Deconstruct how Japanese consumer and retail powerhouses engineer hyper-efficient supply chains, iconic brand equity, and survive across centuries.',
      accessBadge: 'PRIVATE FLAGSHIP & LAB ACCESS',
      keyFacilities: [
        'Fast Retailing (Uniqlo) Global Innovation Center',
        'Nihonbashi Legacy Guild & Mitsukoshi Archives',
        'Shiseido S/PARK Global Research Center'
      ],
      timeline: [
        {
          time: '09:30 AM',
          tag: 'SUPPLY CHAIN R&D',
          title: 'Fast Retailing (Uniqlo) Global Innovation Lab',
          host: 'Ariake Global Innovation Center, Tokyo Bay',
          desc: 'Deep dive into demand-driven predictive supply chains, automated fabric R&D, and global omnichannel logistics architecture.',
        },
        {
          time: '02:00 PM',
          tag: 'SHINISE MASTERCLASS',
          title: 'The Shinise Masterclass: 300-Year Merchant Dynasties',
          host: 'Nihonbashi Legacy Guild & Mitsukoshi Archives',
          desc: 'Closed-door roundtable with 10th-generation Japanese promoters on succession law, debt-free balance sheets, and crisis management.',
        },
        {
          time: '04:30 PM',
          tag: 'MATERIALS SCIENCE',
          title: 'Shiseido Beauty & Materials Research Center',
          host: 'S/PARK Global Research Center, Yokohama',
          desc: 'How Japan’s foremost beauty dynasty blends biotechnology, sensory customer science, and relentless brand reinvention.',
        },
        {
          time: '07:30 PM',
          tag: 'OMOTENASHI STUDY',
          title: 'Omotenashi Luxury Hospitality & Private Tasting',
          host: 'Ginza Private Members Club',
          desc: 'Experiential study of Omotenashi: anticipating customer needs before they are articulated, applied to modern luxury and B2B services.',
        },
      ],
      keyTakeaways: [
        'Centennial governance: balancing family bloodline rights with meritocratic management',
        'Demand-driven rapid inventory cycling that eliminates dead retail stock',
        'Applying Omotenashi principles to enterprise client retention and brand premium',
      ],
    },
    {
      day: 4,
      date: 'Tuesday, 01 September 2026',
      dateShort: '01 SEP',
      city: 'Tokyo',
      tabLabel: 'METI Policy & Deals',
      theme: 'Bilateral Capital, METI Policy & Co-Investment Syndicates',
      image: trainImg,
      overview: 'Direct engagement with Japan’s central policymakers and sovereign capital deployers. Focus on semiconductor supply chains, green hydrogen, and cross-border M&A.',
      accessBadge: 'MINISTERIAL & DIPLOMATIC CLEARANCE',
      keyFacilities: [
        'Ministry of Economy, Trade & Industry (METI) Chambers',
        'JETRO Toranomon M&A Syndicate Suites',
        'Marubeni & Mitsubishi Trading House Suites'
      ],
      timeline: [
        {
          time: '10:00 AM',
          tag: 'MINISTERIAL FORUM',
          title: 'METI Ministerial Roundtable: Indo-Japan Corridor 2030',
          host: 'Ministry of Economy, Trade & Industry (METI), Kasumigaseki',
          desc: 'High-level dialogue on bilateral subsidies, semiconductor fabrication alliances, and sovereign infrastructure guarantees.',
        },
        {
          time: '01:30 PM',
          tag: 'DEAL ROOMS',
          title: 'JETRO Global Partnering & M&A Syndicate',
          host: 'Japan External Trade Organization (JETRO) HQ, Toranomon',
          desc: 'Curated one-on-one deal rooms matching Indian corporate leaders with Japanese firms seeking international expansion and capital partners.',
        },
        {
          time: '04:30 PM',
          tag: 'TRADING HOUSE ARCHITECTURE',
          title: 'Sogo Shosha Strategy: The Trading House Operating Model',
          host: 'Marubeni / Mitsubishi Corporation Executive Suite',
          desc: 'How Japan’s giant trading houses hedge sovereign risks, secure global rare earths, and finance multi-billion-dollar global supply chains.',
        },
        {
          time: '07:30 PM',
          tag: 'AMBASSADORIAL GALA',
          title: 'Bilateral Ambassadorial Gala & Sovereign Dinner',
          host: 'Embassy of India & Japan-India Chamber of Commerce',
          desc: 'Formal state-level networking banquet with ambassadors, commercial attachés, and enterprise chairs.',
        },
      ],
      keyTakeaways: [
        'Accessing Japanese government subsidies for Indian manufacturing joint ventures',
        'Structuring cross-border M&A with risk-averse Japanese parent companies',
        'Securing strategic equity from Japanese trading houses for Indian ventures',
      ],
    },
    {
      day: 5,
      date: 'Wednesday, 02 September 2026',
      dateShort: '02 SEP',
      city: 'Kyoto & Tokyo',
      tabLabel: 'Zen & Graduation',
      theme: 'The Zen of Enduring Leadership & Graduation Gala',
      image: zenImg,
      overview: 'A philosophical retreat to ancient temples to integrate the week’s lessons. Clarify your 10-year enterprise strategy through Zen meditation, followed by the black-tie delegation gala.',
      accessBadge: 'HISTORIC TEMPLE PRIVATE CONCLAVE',
      keyFacilities: [
        'Private Zen Sanctuary at Daitoku-ji Temple (Kyoto)',
        'Kyoto International Conference Center (KICC)',
        'Historic Imperial Villa Grounds'
      ],
      timeline: [
        {
          time: '09:00 AM',
          tag: 'ZEN RETREAT',
          title: 'Zazen Mindfulness & Strategic Clarity with Zen Abbot',
          host: 'Private Zen Sanctuary at Daitoku-ji Temple',
          desc: 'Early morning silent meditation and philosophical inquiry into non-attachment, strategic patience, and ethical stewardship.',
        },
        {
          time: '01:00 PM',
          tag: 'ROADMAP CONCLAVE',
          title: 'The Synthesis Conclave: Designing Your 5-Year Roadmap',
          host: 'Kyoto International Conference Center (KICC)',
          desc: 'Facilitated synthesis workshop: converting insights from Toyota, METI, and Shinise into actionable enterprise transformation charters.',
        },
        {
          time: '06:30 PM',
          tag: 'GRADUATION GALA',
          title: 'Black-Tie Delegation Concluding Banquet & Charter Honors',
          host: 'Historic Imperial Villa Grounds',
          desc: 'Formal graduation gala, conferral of Japan Immersion Fellowships, and chartering of the permanent 2026 Alumni C-Suite Network.',
        },
      ],
      keyTakeaways: [
        'Personal leadership grounding: navigating high-pressure boardroom crises with Zen composure',
        'Complete, signed delegation synthesis roadmap ready for implementation back home',
        'Lifelong membership in the private Indo-Japan C-Suite Delegation Circle',
      ],
    },
  ];

  const [itineraryData, setItineraryData] = useState(defaultItineraryData);

  useEffect(() => {
    let isMounted = true;
    fetchSanityData(GET_ITINERARY).then((data) => {
      if (isMounted && data && Array.isArray(data) && data.length > 0) {
        const mapped = data.map((d) => ({
          ...d,
          image: d.image?.asset ? urlFor(d.image).auto('format').fit('max').width(1200).url() : null,
        }));
        setItineraryData(mapped);
      }
    });
    return () => { isMounted = false; };
  }, []);

  const current = itineraryData.find((item) => item.day === activeDay) || itineraryData[0];

  return (
    <section id="itinerary" className="py-20 sm:py-28 bg-[#F6F3ED] border-b border-black/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal variant="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] font-mono">
                THE 5-DAY FIELD CURRICULUM
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] tracking-tight leading-tight">
              The Closed-Door Expedition Map
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2.5 leading-relaxed max-w-xl mx-auto font-sans">
              Every hour is engineered for strategic high-trust exchange. From ministerial policy briefings to assembly line Gemba walks and private temple retreats.
            </p>
          </div>
        </ScrollReveal>

        {/* 5-Day Executive Navigator Tabs with ScrollReveal */}
        <ScrollReveal variant="scale" delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-6">
            {itineraryData.map((item) => {
              const isSelected = item.day === activeDay;
              return (
                <button
                  key={item.day}
                  type="button"
                  onClick={() => setActiveDay(item.day)}
                  className={`p-3.5 sm:p-4 text-left transition-all duration-200 border cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#141312] text-white border-[#141312] shadow-md -translate-y-0.5'
                      : 'bg-white hover:bg-[#FAF8F5] text-[#222222] border-black/10 hover:border-black/25 shadow-xs'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#C83B3B]" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-bold tracking-[0.16em] uppercase font-mono ${
                        isSelected ? 'text-[#C83B3B]' : 'text-[#777777]'
                      }`}>
                        DAY 0{item.day}
                      </span>
                      <span className={`text-[10px] font-mono tracking-wider ${
                        isSelected ? 'text-white/60' : 'text-black/40'
                      }`}>
                        {item.dateShort}
                      </span>
                    </div>

                    <p className={`text-xs sm:text-sm font-bold leading-tight mb-1 ${
                      isSelected ? 'text-white' : 'text-[#141312]'
                    }`}>
                      {renderCleanAmp(item.tabLabel)}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-current/10 flex items-center justify-between text-[10px]">
                    <span className={`font-serif tracking-wide ${isSelected ? 'text-white/70' : 'text-[#666666]'}`}>
                      {renderCleanAmp(item.city)}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C83B3B]"></span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Master Day Container with ScrollReveal */}
        <ScrollReveal variant="up" delay={120}>
          <div className="bg-white border border-black/10 shadow-sm overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-black/10 bg-[#FAF8F5]">
            
            {/* Metadata Line */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                <span className="px-2.5 py-1 bg-[#C83B3B] text-white text-[10px] font-bold uppercase tracking-wider font-mono">
                  DAY 0{current.day}
                </span>
                <span className="font-mono text-xs font-bold text-[#141312] uppercase tracking-wide">
                  {current.city}
                </span>
                <span className="text-black/20 hidden sm:inline">•</span>
                <span className="text-xs text-[#666666] font-mono">
                  {current.date}
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-black/10 text-[10.5px] font-mono uppercase text-[#333333] shadow-2xs">
                <Lock className="w-3 h-3 text-[#C83B3B]" />
                <span>{current.accessBadge}</span>
              </div>
            </div>

            {/* Title & Overview + CTA */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#141312] leading-[1.2] mb-2.5">
                  {renderCleanAmp(current.theme)}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans">
                  {current.overview}
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenApply}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C83B3B] hover:bg-[#B32D2D] text-white text-xs font-bold uppercase tracking-widest shadow-sm transition-all cursor-pointer active:scale-98"
              >
                <span>Request Clearance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Symmetrical Two-Column Content Area */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Field Sessions (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Aligned Column Header */}
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C83B3B]" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#141312]">
                      Field Itinerary &amp; Protocol
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666] uppercase bg-black/[0.04] px-2 py-0.5">
                    4 Sessions
                  </span>
                </div>

                {/* Session Cards */}
                <div className="space-y-3.5">
                  {current.timeline.map((session, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 sm:p-5 bg-[#FAF8F5] border border-black/[0.07] hover:border-black/25 transition-all group"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-white bg-[#141312] px-2 py-0.5">
                            {session.time}
                          </span>
                          <span className="text-[9.5px] font-bold uppercase tracking-widest text-[#C83B3B] font-mono">
                            {session.tag}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-black/35">
                          0{idx + 1} / 04
                        </span>
                      </div>

                      <h5 className="font-editorial text-base sm:text-lg font-bold text-[#141312] mb-1 leading-snug group-hover:text-[#C83B3B] transition-colors">
                        {renderCleanAmp(session.title)}
                      </h5>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#55524E] mb-2 font-sans">
                        <Building2 className="w-3.5 h-3.5 text-[#C83B3B] shrink-0" />
                        <span>{renderCleanAmp(session.host)}</span>
                      </div>

                      <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed font-sans">
                        {renderCleanAmp(session.desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Executive Capabilities Dossier (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Aligned Column Header (Matches Left Column Header Height & Baseline) */}
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C83B3B]" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#141312]">
                      Executive Briefing Dossier
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-[#C83B3B] uppercase bg-[#C83B3B]/10 px-2 py-0.5 font-bold">
                    C-Suite Value
                  </span>
                </div>

                {/* Day Visual Feature Card with Frosted Glass Badge */}
                {current.image && (
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden border border-black/10 shadow-xs group">
                    <img
                      src={current.image}
                      alt={current.theme}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C83B3B] animate-pulse" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white drop-shadow-sm">
                          {current.city} • FIELD ACCESS
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-mono font-bold uppercase text-white border border-white/20 shadow-xs">
                        DAY 0{current.day} FEATURE
                      </span>
                    </div>
                  </div>
                )}

                {/* Takeaways Card */}
                <div className="bg-[#FAF8F5] border border-black/[0.07] p-5 sm:p-6 space-y-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] block">
                    STRATEGIC CAPABILITIES
                  </span>

                  <div className="space-y-3">
                    {current.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-[#333333] leading-relaxed font-sans">
                        <div className="w-4 h-4 rounded-full bg-[#C83B3B]/10 text-[#C83B3B] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="flex-1">{renderCleanAmp(takeaway)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-black/[0.06]">
                    <p className="text-[11px] text-[#777777] italic leading-normal">
                      * All sessions operate strictly under the Chatham House Rule. Photography inside robotics cleanrooms and ministerial chambers is restricted under security protocol.
                    </p>
                  </div>
                </div>

                {/* Facilities Unlocked Today Card */}
                <div className="bg-[#FAF8F5] border border-black/[0.07] p-5 space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#141312] block">
                    CLOSED-DOOR SITES UNLOCKED TODAY
                  </span>
                  <div className="space-y-2">
                    {current.keyFacilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#333333] font-medium font-sans">
                        <span className="w-1.5 h-1.5 bg-[#C83B3B] shrink-0"></span>
                        <span>{renderCleanAmp(fac)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Executive Transit Protocol */}
                <div className="p-4 bg-[#141312] text-white flex items-center gap-3.5 shadow-xs">
                  <div className="w-9 h-9 bg-white/10 flex items-center justify-center shrink-0">
                    <Train className="w-4 h-4 text-[#C83B3B]" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold block text-white/95 mb-0.5">Transit Protocol</span>
                    <span className="text-white/60">Dedicated luxury motorcoach &amp; Shinkansen Gran Class carriages.</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
