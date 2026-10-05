import React, { useState, useEffect } from 'react';
import { Plus, HelpCircle, ShieldCheck, Mail, Phone } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { fetchSanityData, GET_FAQS } from '../sanity/queries';

const defaultFaqs = [
  {
    q: 'Who is eligible to participate in the 25-leader delegation?',
    a: 'The cohort is strictly reserved for enterprise promoters, chairmen, managing directors, group CEOs, and deep-tech founders. Every applicant is reviewed by our admissions committee to ensure peer-level conversations, non-competing industry verticals, and high strategic relevance.',
  },
  {
    q: 'What is included in the executive delegation enrollment fee?',
    a: 'The fee is comprehensive of 5-star luxury accommodations (The Palace Hotel Tokyo and Nagoya Marriott), private carriage transit on the Shinkansen Gran Class bullet train, all curated Michelin-starred and private Ryotei banquets, factory clearance protocol fees, dedicated bilingual executive interpreters for all sessions, and VIP private coach transit throughout Tokyo and Nagoya.',
  },
  {
    q: 'How does the strict non-competing cohort policy work?',
    a: 'To guarantee absolute candor in boardroom discussions, our admissions committee ensures that direct, head-to-head competitors from the same primary industry vertical are not seated in the same 25-leader delegation. Early applicants receive sector priority.',
  },
  {
    q: 'What are the visa processing protocols for Japan?',
    a: 'Our mission secretariate provides official bilateral invitation letters, institutional sponsorship documentation, and direct facilitation with the Embassy of Japan in New Delhi and Consulates in Mumbai, Chennai, and Kolkata for expedited delegation visa issuance.',
  },
  {
    q: 'Can an enterprise send two delegates (e.g. Promoter & Next-Gen Leader)?',
    a: 'Yes. Up to two senior representatives from the same promoter group or founder team (such as Chairman and Managing Director, or Promoter and Next-Gen CXO) may apply together, subject to the remaining seats within the 25-leader cap.',
  },
  {
    q: 'How are the sessions governed under the Chatham House Rule?',
    a: 'Every meeting—whether with former ministers, Toyota plant directors, or fellow delegates—operates under the Chatham House Rule. Participants are free to use the insights gained, but neither the identity nor the affiliation of the speaker may be disclosed publicly.',
  },
];

export const ExecutiveFaq = ({ onOpenApply }) => {
  const [openIdx, setOpenIdx] = useState(0);
  const [faqs, setFaqs] = useState(defaultFaqs);

  useEffect(() => {
    let isMounted = true;
    fetchSanityData(GET_FAQS).then((data) => {
      if (isMounted && data && Array.isArray(data) && data.length > 0) {
        const mapped = data.map((item) => ({
          q: item.question || item.q,
          a: item.answer || item.a,
        }));
        setFaqs(mapped);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-black/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="up">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C83B3B]"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C83B3B] font-mono">
                DELEGATION PROTOCOLS
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] tracking-tight leading-tight">
              Frequently Addressed Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-3 leading-relaxed font-sans">
              Key details on cohort curation, logistics, security, and bilateral protocol for the 2026 Japan Expedition.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={idx} variant="up" delay={idx * 60}>
                <div
                  className={`bg-white border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'border-[#C83B3B]/35 shadow-sm ring-1 ring-[#C83B3B]/10'
                      : 'border-black/10 shadow-xs hover:border-black/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/80 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-editorial text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#C83B3B]' : 'text-[#141312]'
                    }`}>
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? 'bg-[#C83B3B] text-white border-[#C83B3B] rotate-45 shadow-xs'
                          : 'bg-[#FAF8F5] text-[#333333] border-black/10 rotate-0 hover:bg-[#ECE8DF]'
                      }`}
                    >
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Smooth Collapsible Content Container */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-[#555555] leading-relaxed font-sans border-t border-black/[0.06] pt-4">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Private Concierge Helpdesk */}
        <ScrollReveal variant="up" delay={150}>
          <div className="mt-12 p-6 sm:p-8 bg-white border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C83B3B]/10 text-[#C83B3B] flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-editorial text-lg font-bold text-[#111111]">
                  Have a confidential boardroom inquiry?
                </h4>
                <p className="text-xs text-[#666666]">
                  Speak directly with the Mission Director regarding dual-delegate requests or bilateral deal rooms.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenApply}
                className="px-6 py-3 bg-[#111111] hover:bg-[#C83B3B] text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Request Private Consultation
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
