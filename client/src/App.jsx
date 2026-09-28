import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisionOverview } from './components/VisionOverview';
import { UnderstandingJapan } from './components/UnderstandingJapan';
import { SpeakersGrid } from './components/SpeakersGrid';
import { ImmersionExperience } from './components/ImmersionExperience';
import { WhyEconomicTimes } from './components/WhyEconomicTimes';
import { ExperiencePillars } from './components/ExperiencePillars';
import { WhoShouldParticipate } from './components/WhoShouldParticipate';
import { FullWidthCtaBanner } from './components/FullWidthCtaBanner';
import { FaqAccordion } from './components/FaqAccordion';
import { PartnerWithUs } from './components/PartnerWithUs';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ApplyModal } from './components/ApplyModal';

function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F6F3ED] text-[#222222] selection:bg-[#C83B3B] selection:text-white flex flex-col">
      {/* Top Header */}
      <Header onOpenApply={() => setIsApplyOpen(true)} />

      {/* Main Summit Content */}
      <main className="flex-1">
        <Hero onOpenApply={() => setIsApplyOpen(true)} />
        <VisionOverview />
        <UnderstandingJapan />
        <SpeakersGrid />
        <ImmersionExperience />
        <WhyEconomicTimes />
        <ExperiencePillars />
        <WhoShouldParticipate />
        <FullWidthCtaBanner onOpenApply={() => setIsApplyOpen(true)} />
        <FaqAccordion />
        <PartnerWithUs onOpenApply={() => setIsApplyOpen(true)} />
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals and Floating Widgets */}
      <FloatingWidgets />
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </div>
  );
}

export default App;
