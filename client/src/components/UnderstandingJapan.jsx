import React, { useState } from 'react';

export const UnderstandingJapan = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'leaders',
      label: 'UNDISPUTED LEADERS',
      title: 'Undisputed Leaders',
      desc: 'Japan is widely celebrated for producing some of the best brands in the world. Renowned for meticulous craftsmanship, reliability, and minimalist design, these companies excel across multiple industries.',
      bullets: [
        'Uncompromising quality & durability',
        'Meticulous attention to detail',
        'Harmonious blend of craftsmanship and innovation',
      ],
      // Golden Tokyo night lights / constellation map
      bgImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'culture',
      label: 'SOCIAL & CULTURAL LIFE',
      title: 'Social And Cultural Life',
      desc: 'Japanese culture blends long-standing traditions with modern lifestyles. Cultural values influence social behavior, work ethics, and community life.',
      bullets: [
        'Respect and harmony',
        'Traditional arts and customs',
        'Modern urban culture',
      ],
      // Shinjuku Kabukicho illuminated neon streetscape at night
      bgImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'food',
      label: 'FOOD & DRINK',
      title: 'Food And Drink',
      desc: 'Japanese cuisine brings together seasonal ingredients, regional character, and precise preparation. Every meal reflects a deep appreciation for balance, presentation, and natural flavour.',
      bullets: [
        'Seasonal ingredients and presentation',
        'Distinct regional specialities',
        'Craftsmanship in every preparation',
      ],
      // Japanese culinary art & sushi presentation
      bgImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1600&auto=format&fit=crop&q=80',
    },
    {
      id: 'tech',
      label: 'TECHNOLOGY & INNOVATION',
      title: 'Technology And Innovation',
      desc: 'Japan combines engineering precision with forward-looking research. Its technology influences transportation, manufacturing, robotics, and everyday life around the world.',
      bullets: [
        'Advanced mobility and robotics',
        'Precision-led manufacturing',
        'Research-driven digital innovation',
      ],
      // Futuristic Shinkansen bullet train / high-tech mobility
      bgImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&auto=format&fit=crop&q=80',
    },
  ];

  // Specific brand logos matching Screenshot 1 (Uniqlo, Suzuki, Asics, Bridgestone, Daikin, Komatsu, Fujifilm, Mitsubishi, Nissan, Casio, Muji, Hitachi)
  const column1Logos = [
    { type: 'uniqlo', bg: 'bg-[#E60012]', text: 'text-white' },
    { type: 'asics', bg: 'bg-white', text: 'text-black' },
    { type: 'bridgestone', bg: 'bg-white', text: 'text-black' },
    { type: 'daikin', bg: 'bg-white', text: 'text-[#0097E6]' },
    { type: 'komatsu', bg: 'bg-white', text: 'text-[#004B93]' },
    { type: 'fujifilm-green', bg: 'bg-[#008B68]', text: 'text-white' },
    { type: 'mitsubishi', bg: 'bg-white', text: 'text-black' },
    { type: 'suzuki', bg: 'bg-white', text: 'text-[#003B71]' },
    { type: 'nissan-red', bg: 'bg-[#C3002F]', text: 'text-white' },
    { type: 'hitachi', bg: 'bg-white', text: 'text-black' },
  ];

  const column2Logos = [
    { type: 'fujifilm-green', bg: 'bg-[#008B68]', text: 'text-white' },
    { type: 'mitsubishi', bg: 'bg-white', text: 'text-black' },
    { type: 'nissan-red', bg: 'bg-[#C3002F]', text: 'text-white' },
    { type: 'yamaha', bg: 'bg-[#582C83]', text: 'text-white' },
    { type: 'casio', bg: 'bg-white', text: 'text-[#004098]' },
    { type: 'muji', bg: 'bg-[#7F0019]', text: 'text-white' },
    { type: 'hitachi', bg: 'bg-white', text: 'text-black' },
    { type: 'uniqlo', bg: 'bg-[#E60012]', text: 'text-white' },
    { type: 'asics', bg: 'bg-white', text: 'text-black' },
    { type: 'suzuki', bg: 'bg-white', text: 'text-[#003B71]' },
  ];

  const column3Logos = [
    { type: 'suzuki', bg: 'bg-white', text: 'text-[#003B71]' },
    { type: 'uniqlo', bg: 'bg-[#E60012]', text: 'text-white' },
    { type: 'asics', bg: 'bg-white', text: 'text-black' },
    { type: 'bridgestone', bg: 'bg-white', text: 'text-black' },
    { type: 'daikin', bg: 'bg-white', text: 'text-[#0097E6]' },
    { type: 'komatsu', bg: 'bg-white', text: 'text-[#004B93]' },
    { type: 'fujifilm-green', bg: 'bg-[#008B68]', text: 'text-white' },
    { type: 'mitsubishi', bg: 'bg-white', text: 'text-black' },
    { type: 'nissan-red', bg: 'bg-[#C3002F]', text: 'text-white' },
    { type: 'casio', bg: 'bg-white', text: 'text-[#004098]' },
  ];

  const renderLogoContent = (item) => {
    switch (item.type) {
      case 'uniqlo':
        return (
          <div className="flex flex-col items-center justify-center p-2 text-center">
            <span className="text-white font-black text-xs sm:text-sm tracking-tight leading-tight uppercase font-sans">
              UNI<br />QLO
            </span>
          </div>
        );
      case 'suzuki':
        return (
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <span className="text-[#E60012] font-black text-xl italic leading-none mb-0.5">S</span>
            <span className="text-[#003B71] font-black text-[11px] tracking-widest uppercase font-sans">
              SUZUKI
            </span>
          </div>
        );
      case 'asics':
        return (
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-2xl font-black italic tracking-tighter lowercase text-black font-sans">
              a<span className="font-extrabold not-italic">sics</span>
            </span>
          </div>
        );
      case 'bridgestone':
        return (
          <div className="flex items-center justify-center gap-1.5 p-3">
            <span className="text-red-600 font-black text-xl italic">B</span>
            <span className="text-black font-extrabold text-xs tracking-wider uppercase font-sans">
              BRIDGESTONE
            </span>
          </div>
        );
      case 'daikin':
        return (
          <div className="flex items-center justify-center gap-1.5 p-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0097E6]">
              <polygon points="12,2 22,20 2,20" />
            </svg>
            <span className="text-[#0097E6] font-black text-sm tracking-widest font-sans">
              DAIKIN
            </span>
          </div>
        );
      case 'komatsu':
        return (
          <div className="flex items-center justify-center p-4">
            <span className="text-[#004B93] font-black text-sm sm:text-base tracking-widest uppercase font-sans">
              KOMATSU
            </span>
          </div>
        );
      case 'fujifilm-green':
        return (
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <span className="text-white font-black text-xs sm:text-sm tracking-wider uppercase font-sans">
              FUJIFILM
            </span>
          </div>
        );
      case 'mitsubishi':
        return (
          <div className="flex flex-col items-center justify-center p-2 text-center">
            <div className="w-4 h-4 mb-1 relative flex items-center justify-center">
              <div className="w-2 h-2 bg-[#E60012] rotate-45"></div>
            </div>
            <span className="text-black font-bold text-[11px] leading-tight font-sans">
              Mitsubishi<br />Corporation
            </span>
          </div>
        );
      case 'nissan-red':
        return (
          <div className="flex flex-col items-center justify-center p-3">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white font-black text-[9px] tracking-widest uppercase">
                NISSAN
              </span>
            </div>
          </div>
        );
      case 'yamaha':
        return (
          <div className="flex flex-col items-center justify-center p-3">
            <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center mb-1">
              <span className="text-white font-black text-lg">✦</span>
            </div>
            <span className="text-white font-bold text-[10px] tracking-wider uppercase font-sans">
              YAMAHA
            </span>
          </div>
        );
      case 'casio':
        return (
          <div className="flex flex-col items-center justify-center p-3">
            <span className="text-[#004098] font-black text-sm sm:text-base tracking-widest uppercase font-sans">
              CASIO
            </span>
            <span className="text-[8px] text-slate-400 font-mono">USA</span>
          </div>
        );
      case 'muji':
        return (
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <span className="text-white font-black text-base tracking-widest uppercase font-sans">
              MUJI
            </span>
            <span className="text-white/80 text-[10px] tracking-wider font-serif">
              無印良品
            </span>
          </div>
        );
      case 'hitachi':
        return (
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <span className="text-black font-black text-sm tracking-widest uppercase font-sans">
              HITACHI
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  const renderLogoColumn = (logos, animationClass, hiddenOnMobile = false) => {
    const doubled = [...logos, ...logos];
    return (
      <div className={`relative overflow-hidden h-[340px] sm:h-[460px] lg:h-[540px] w-24 sm:w-32 lg:w-36 ${hiddenOnMobile ? 'hidden sm:block' : 'block'}`}>
        <div className={`flex flex-col gap-2.5 sm:gap-3.5 ${animationClass} pause-hover`}>
          {doubled.map((item, idx) => (
            <div
              key={idx}
              className={`w-24 sm:w-32 lg:w-36 h-20 sm:h-24 lg:h-28 ${item.bg} flex items-center justify-center shadow-md border border-white/10 shrink-0 transition-transform duration-300 hover:scale-102`}
            >
              {renderLogoContent(item)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const current = tabs[activeTab];

  return (
    <section className="bg-[#090D16] text-white py-14 sm:py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
      
      {/* Dynamic Background Image Layers with Smooth Ken-Burns & Crossfade Animation */}
      {tabs.map((tab, idx) => (
        <div
          key={tab.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out pointer-events-none ${
            activeTab === idx 
              ? 'opacity-40 scale-100 blur-0' 
              : 'opacity-0 scale-108 blur-xs pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${tab.bgImage})` }}
        />
      ))}

      {/* Dark Gradient Overlay to ensure text readability across all background images */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-[#090D16]/85 to-[#090D16]/40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative & Interactive Tabs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B] block">
              UNDERSTANDING JAPAN
            </span>

            {/* Tab Buttons (Horizontally scrollable on mobile) */}
            <div className="flex border-b border-white/15 gap-4 sm:gap-6 pt-2 overflow-x-auto flex-nowrap scrollbar-none pb-1">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`pb-3 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer relative shrink-0 ${
                    activeTab === idx
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                  {activeTab === idx && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C83B3B] transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic Content with Smooth Entrance Animation */}
            <div key={activeTab} className="space-y-5 sm:space-y-6 animate-in fade-in-50 duration-500">
              {/* Tab Title in Playfair Display Serif */}
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white leading-tight">
                {current.title}
              </h2>

              {/* Tab Description */}
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                {current.desc}
              </p>

              {/* Red Bullet Points */}
              <div className="space-y-3 pt-1 sm:pt-2">
                {current.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C83B3B] shrink-0"></div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Vertically Scrolling Marquee Columns of Japanese Brand Logos */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end gap-2.5 sm:gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] pt-4 lg:pt-0">
            {renderLogoColumn(column1Logos, 'animate-marquee-up', false)}
            {renderLogoColumn(column2Logos, 'animate-marquee-down', false)}
            {renderLogoColumn(column3Logos, 'animate-marquee-up', true)}
          </div>

        </div>
      </div>
    </section>
  );
};
