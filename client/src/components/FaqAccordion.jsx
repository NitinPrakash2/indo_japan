import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqAccordion = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Who is the immersion designed for?',
      a: 'The immersion is designed for CEOs, founders, promoters, CXOs and other senior decision-makers looking to learn from leading global business ecosystems and build relevant cross-border relationships.',
    },
    {
      q: 'How are participants selected?',
      a: 'Participation is strictly application-led. The Economic Times editorial and curation committee evaluates each applicant to ensure a non-competing, highly accomplished cohort of leaders to maintain premium peer interactions.',
    },
    {
      q: 'How large is the cohort?',
      a: 'Cohorts are intentionally capped at 25-30 leaders to enable intimate, high-impact boardroom conversations, seamless logistics, and authentic peer networking.',
    },
    {
      q: 'Can more than one leader from my organisation participate?',
      a: 'Yes, subject to cohort composition and sector balance. Two senior representatives (e.g. Founder and CEO, or Chairman and Successor) frequently participate together.',
    },
    {
      q: 'How do I apply and when is participation confirmed?',
      a: 'Submit an expression of interest through our online portal. The ET curation team reviews your profile within 48 hours and conducts a brief discovery call before issuing official confirmation.',
    },
    {
      q: 'What can I expect during the Immersion?',
      a: 'The itinerary integrates private factory walkthroughs, robotics testing facilities, Japanese boardroom roundtables, policy briefings, delegate dinners, and curated cultural experiences that reveal Japan beyond the boardroom.',
    },
    {
      q: 'Which companies and institutions will we visit?',
      a: 'Curated itineraries feature undisputed Fortune 500 enterprises, advanced robotics plants, Shinkansen operational hubs, and innovation agencies like METI and JETRO. Specific confirmed names are shared in your pre-departure playbook.',
    },
    {
      q: 'Will we interact directly with local business leaders?',
      a: 'Yes. Direct, unmoderated interaction is core to ET Immersions. You will converse with managing directors, chief engineers, and veteran entrepreneurs.',
    },
    {
      q: 'Will we receive context before visits and sessions?',
      a: 'Yes. Each delegate receives the ET Executive Intelligence Briefing detailing company histories, operating numbers, Kaizen case studies, and bilateral trade nuances.',
    },
    {
      q: 'Is the Immersion entirely business-focused, or does it include cultural experiences?',
      a: 'Business mastery is the foundation, but Japanese business cannot be separated from Japanese culture. Selected cultural masterclasses (tea ceremony, Zen discipline, Omotenashi hospitality) are seamlessly integrated.',
    },
    {
      q: 'What is included in the Immersion?',
      a: 'The delegation fee covers all scheduled industrial visits, ET Global Summit passes, five-star luxury hotel accommodation in Tokyo, bullet train & executive motorcoach transport, bilingual interpreters, official banquets, and permanent alumni access.',
    },
    {
      q: 'What is not included?',
      a: 'Personal incidental expenses, optional leisure activities outside the official itinerary, international flight tickets (unless opted into the flight package), and personal visa processing fees.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#F6F3ED] border-b border-black/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C83B3B]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#1A1A1A] mt-2">
            Everything You Need to <span className="italic text-[#C83B3B]">Know</span>
          </h2>
          <p className="text-sm text-[#666666] mt-3">
            Clear answers regarding cohort curation, visits, logistics, and registration guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-black/10 border-t border-b border-black/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${
                    isOpen ? 'text-[#C83B3B] font-editorial' : 'text-[#222222] group-hover:text-[#C83B3B]'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isOpen 
                      ? 'border-[#C83B3B] bg-[#C83B3B] text-white' 
                      : 'border-black/15 bg-white text-[#555555] group-hover:border-[#C83B3B]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pb-2 text-xs sm:text-sm text-[#555555] leading-relaxed pr-10 animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
