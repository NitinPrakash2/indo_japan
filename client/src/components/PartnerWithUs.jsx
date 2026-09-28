import React from 'react';

export const PartnerWithUs = ({ onOpenApply }) => {
  const items = [
    'Strategic Partnerships',
    'Thought Leadership',
    'Delegate Participation',
    'Customised Initiatives',
  ];

  return (
    <section id="partner" className="w-full bg-[#F5F2EB] py-12 sm:py-16 px-3 sm:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#ECE8E0] rounded-xl overflow-hidden shadow-xs border border-black/5">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 p-6 sm:p-12 lg:p-16 flex flex-col justify-center bg-[#ECE8E0]">
            <span className="text-[#C83B3B] text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3 sm:mb-4 block">
              PARTNER WITH US
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal text-[#1F1F1F] leading-[1.18] mb-4 sm:mb-6">
              Create meaningful engagement with the{' '}
              <span className="text-[#C83B3B] block sm:inline">business community.</span>
            </h2>

            <p className="text-[#555555] text-xs sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Co-create platforms that deliver genuine value through thought leadership, stakeholder engagement, distinctive brand experiences and high-value business networking.
            </p>

            <div>
              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto inline-block text-center bg-[#C83B3B] hover:bg-[#B33232] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 sm:py-4 transition-colors duration-200 cursor-pointer shadow-xs active:scale-98"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Right Visual Column matching extracted DOM */}
          <div 
            className="lg:col-span-6 relative min-h-[300px] sm:min-h-[440px] p-6 sm:p-12 lg:p-16 flex flex-col justify-center bg-cover bg-right bg-no-repeat overflow-hidden"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80')` 
            }}
          >
            {/* Soft gradient mask overlay matching exact site */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECE8E0] via-[#ECE8E0]/90 to-transparent pointer-events-none"></div>

            {/* Content list with exact wireframe globe icons */}
            <div className="relative z-10 space-y-5 sm:space-y-7 lg:space-y-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C83B3B] bg-white/40 backdrop-blur-xs flex items-center justify-center shrink-0 text-[#C83B3B] group-hover:bg-[#C83B3B] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
                    </svg>
                  </div>
                  <span className="font-editorial text-lg sm:text-2xl font-semibold text-[#C83B3B] tracking-normal group-hover:text-[#B33232] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
