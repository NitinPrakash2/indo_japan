import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FrontierBentoMatrix } from './components/FrontierBentoMatrix';
import { ExpeditionItinerary } from './components/ExpeditionItinerary';
import { InstitutionalEcosystem } from './components/InstitutionalEcosystem';
import { DistinguishedHosts } from './components/DistinguishedHosts';
import { CohortExclusivity } from './components/CohortExclusivity';
import { ExecutiveInclusions } from './components/ExecutiveInclusions';
import { FrontierVideoBanner } from './components/FrontierVideoBanner';
import { ExecutiveFaq } from './components/ExecutiveFaq';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ApplyModal } from './components/ApplyModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';

function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F6F3ED] text-[#222222] selection:bg-[#C83B3B] selection:text-white flex flex-col">
      {/* SaaS Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Top Fixed Header with Frosted Glassmorphism */}
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      {/* Main Executive Mission Architecture */}
      <main className="flex-1">
        {/* 1. Hero: Zen & Frontier Innovation */}
        <Hero onOpenApply={() => setIsApplyOpen(true)} />

        {/* 2. The 4 Strategic Pillars: Bento Matrix */}
        <FrontierBentoMatrix onOpenApply={() => setIsApplyOpen(true)} />

        {/* 3. The 5-Day Closed-Door Expedition Itinerary (Interactive) */}
        <ExpeditionItinerary onOpenApply={() => setIsApplyOpen(true)} />

        {/* 4. Japanese Industrial Titans & Government Ministries Lineup */}
        <InstitutionalEcosystem />

        {/* 5. Faculty, Statesmen & Thought Leaders Dossier */}
        <DistinguishedHosts onOpenApply={() => setIsApplyOpen(true)} />

        {/* 6. The 25-Leader Cohort Exclusivity & Chatham House Protocol */}
        <CohortExclusivity onOpenApply={() => setIsApplyOpen(true)} />

        {/* 7. 5-Star Luxury Accommodations, Gran Class & Concierge */}
        <ExecutiveInclusions />

        {/* 8. Cinematic Looping Video Banner */}
        <FrontierVideoBanner onOpenApply={() => setIsApplyOpen(true)} />

        {/* 9. Delegation Protocols & Comprehensive FAQ */}
        <ExecutiveFaq onOpenApply={() => setIsApplyOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Widgets & Executive Application Dossier Modal */}
      <FloatingWidgets />
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}

export default App;
