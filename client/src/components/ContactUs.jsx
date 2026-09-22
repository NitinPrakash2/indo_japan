import React from 'react';

export const ContactUs = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F5F2EB] border-t border-black/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Centered Large Editorial Serif Title matching Screenshot 1 */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1A1A] tracking-tight">
            Contact Us
          </h2>
        </div>

        {/* 2 Centered Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Card 1: For delegation */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-base sm:text-lg text-black mb-4 tracking-normal">
              For delegation
            </h3>
            <div className="w-full bg-white rounded-2xl py-8 px-6 text-center shadow-xs border border-black/5 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-base sm:text-lg text-[#1A1A1A] mb-1.5">
                Jyoti Singh
              </h4>
              <a
                href="mailto:jyoti.singh1@timesinternet.in"
                className="text-sm text-[#555555] hover:text-black transition-colors block"
              >
                jyoti.singh1@timesinternet.in
              </a>
              <a
                href="tel:9167561862"
                className="text-sm text-[#555555] hover:text-black transition-colors block mt-1"
              >
                9167561862
              </a>
            </div>
          </div>

          {/* Card 2: For Partnership */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-base sm:text-lg text-black mb-4 tracking-normal">
              For Partnership
            </h3>
            <div className="w-full bg-white rounded-2xl py-8 px-6 text-center shadow-xs border border-black/5 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-base sm:text-lg text-[#1A1A1A] mb-1.5">
                Pankaj Srivastava
              </h4>
              <a
                href="mailto:pankaj.srivastava@timesinternet.in"
                className="text-sm text-[#555555] hover:text-black transition-colors block"
              >
                pankaj.srivastava@timesinternet.in
              </a>
              <a
                href="tel:9415252503"
                className="text-sm text-[#555555] hover:text-black transition-colors block mt-1"
              >
                9415252503
              </a>
            </div>
          </div>
        </div>

        {/* Centered Escalation Notice */}
        <div className="mt-14 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
            For any issues requiring immediate escalation, please write to{' '}
            <a
              href="mailto:shahbaz.khan@timesinternet.in"
              className="font-bold text-black hover:underline"
            >
              shahbaz.khan@timesinternet.in
            </a>{' '}
            - Md. Shahbaz Khan, Director - Special Initiatives & Business Strategy, The Economic Times Business Verticals
          </p>
        </div>
      </div>
    </section>
  );
};
