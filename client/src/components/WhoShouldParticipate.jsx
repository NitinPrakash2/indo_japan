import React from 'react';

export const WhoShouldParticipate = () => {
  const sectors = [
    'Manufacturing',
    'Automotive & Mobility',
    'Retail & Consumer',
    'Healthcare',
    'Technology & Services',
  ];

  // Repeat for continuous seamless horizontal ticker
  const tickerItems = [...sectors, ...sectors, ...sectors];

  const columns = [
    ['Entrepreneurs', 'Professionals'],
    ['MSME owners', 'Family business successors'],
    ['Manufacturers', 'Emerging leaders'],
    ['Startup founders', 'Next-generation entrepreneurs'],
  ];

  return (
    <section className="py-20 bg-[#F6F3ED] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Top Hospitality Banner Bar (matching Screenshot 2) */}
        <div className="bg-white border border-black/8 py-8 px-6 text-center shadow-xs">
          <p className="font-editorial text-lg sm:text-xl text-[#333333] font-normal tracking-wide">
            Travel, Accommodation, Hospitality and Curated Local Experiences.
          </p>
        </div>

        {/* Main "Who Should Participate?" White Card Container */}
        <div className="bg-white border border-black/8 p-8 sm:p-14 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
            {/* Left Title in Serif */}
            <div className="lg:col-span-4 shrink-0">
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#1A1A1A] leading-[1.15]">
                Who Should<br />Participate?
              </h2>
            </div>

            {/* Right: Horizontally Scrolling Marquee Ticker */}
            <div className="lg:col-span-8 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              <div className="flex gap-4 animate-marquee-left whitespace-nowrap pause-hover py-2">
                {tickerItems.map((sector, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-[#F2EDE4] hover:bg-[#E8E1D5] text-[#222222] font-medium text-xs sm:text-sm tracking-wide rounded-none shrink-0 transition-colors shadow-2xs"
                  >
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom 4-Column Bullet Grid */}
          <div className="pt-8 border-t border-black/8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {columns.map((col, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  {col.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#C83B3B] shrink-0"></div>
                      <span className="text-sm font-medium text-[#333333]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
