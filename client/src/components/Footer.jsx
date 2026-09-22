import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#ECECEC] text-[#555555] pt-8 pb-6 border-t border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Logo & Social Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DCDCDC]">
          {/* ET Business Verticals Logo matching Screenshot 2 */}
          <div className="flex items-center gap-2.5">
            <div className="bg-[#D32F2F] text-white font-bold px-1.5 py-0.5 text-xs font-sans rounded-xs tracking-tighter">
              ET
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-bold tracking-tight text-[#222222]">
                THE ECONOMIC TIMES
              </span>
              <span className="text-[10px] text-[#777777] font-sans -mt-0.5">
                Business Verticals
              </span>
            </div>
          </div>

          {/* LinkedIn Icon in thin circular border matching Screenshot 2 */}
          <a
            href="https://www.linkedin.com/company/etb2b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-[#888888] flex items-center justify-center text-xs font-bold text-[#555555] hover:text-black hover:border-black transition-colors"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>

        {/* Escalation Notice & Links Grid Section */}
        <div className="py-6 space-y-6">
          {/* Escalation Notice */}
          <p className="text-[12px] md:text-[13px] leading-relaxed text-[#666666] max-w-4xl">
            For any issues requiring immediate escalation, please write to{' '}
            <a
              href="mailto:shahbaz.khan@timesinternet.in"
              className="font-bold text-[#333333] hover:text-black hover:underline"
            >
              shahbaz.khan@timesinternet.in
            </a>{' '}
            - Md. Shahbaz Khan, Director - Special Initiatives & Business Strategy, The Economic Times Business Verticals.
          </p>

          {/* 2-Column Links Grid matching Screenshot 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
            {/* Column 1 */}
            <ul className="space-y-2 text-[13px] text-[#555555]">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Advertise with us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-black transition-colors">RSS Feeds</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Invite Friends</a></li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2 text-[13px] text-[#555555]">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Guest-Post Guidelines</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#DCDCDC] text-center">
          <p className="text-[12px] text-[#777777]">
            Copyright © 2026 EconomictimesB2B.com . All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
