/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { WalkAwaySection } from './components/WalkAwaySection.tsx';
import { AudienceSection } from './components/AudienceSection.tsx';
import { WhyITeachSection } from './components/WhyITeachSection.tsx';
import { HonestWordSection } from './components/HonestWordSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyCta } from './components/StickyCta.tsx';
import { EnrollmentModal } from './components/EnrollmentModal.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#08402F] flex flex-col font-sans selection:bg-[#0F6B50] selection:text-white">
      {/* Top Navigation Bar adhering to the Top Bar Contract */}
      <Header onJoinClick={handleOpenModal} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onJoinClick={handleOpenModal} />

        {/* Section 1: You've felt this before */}
        <ProblemSection />

        {/* Section 2: What you will walk away with */}
        <WalkAwaySection />

        {/* Section 3: Who this is for & Who this is not for */}
        <AudienceSection />

        {/* Section 4: Why I teach this */}
        <WhyITeachSection />

        {/* Section 5: An honest word before you join */}
        <HonestWordSection />

        {/* Section 6: Questions (Accordion FAQ) */}
        <FaqSection />

        {/* Section 7: Stop losing people at the exact moment they were ready to say yes */}
        <FinalCtaSection onJoinClick={handleOpenModal} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Sticky Call-To-Action on scroll */}
      <StickyCta onJoinClick={handleOpenModal} />

      {/* Direct WhatsApp Contact Button */}
      <WhatsAppFloatingButton />

      {/* Interactive Checkout / Enrollment Modal */}
      <EnrollmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
