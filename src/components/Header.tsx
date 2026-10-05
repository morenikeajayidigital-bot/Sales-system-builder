import React from 'react';
import { RenLogo } from './RenLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { PAYMENT_URL, WHATSAPP_URL } from '../constants.ts';

interface HeaderProps {
  onJoinClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-xs border-b border-[#08402F]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand wordmark lockup */}
        <a
          href="#"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#0F6B50] rounded-lg"
          aria-label="REN DIGITALS - Sales System Builder"
        >
          <RenLogo size="sm" />
          <span className="hidden sm:inline-block w-px h-5 bg-[#08402F]/20" aria-hidden="true" />
          <span className="text-sm sm:text-base font-bold tracking-tight text-[#08402F] group-hover:text-[#0F6B50] transition-colors">
            Sales System Builder
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm font-medium text-[#08402F]">
          <a
            href="#overview"
            className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]"
          >
            Overview
          </a>
          <a
            href="#curriculum"
            className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]"
          >
            Curriculum
          </a>
          <a
            href="#fit"
            className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]"
          >
            Fit
          </a>
          <a
            href="#story"
            className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]"
          >
            Story
          </a>
          <a
            href="#questions"
            className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]"
          >
            Questions
          </a>
        </nav>

        {/* Zone 3: Primary action button in Emerald + WhatsApp Inquiry */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0F6B50] hover:text-[#0b523e] bg-[#F7F3EA] hover:bg-[#eae3d2] border border-[#0F6B50]/20 rounded-xl transition-all shadow-2xs"
          >
            <WhatsAppIcon size={15} />
            <span className="hidden sm:inline">Ask on WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#F7F3EA] bg-[#0F6B50] hover:bg-[#0b523e] active:bg-[#08402F] rounded-xl transition-all shadow-xs whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A9832F]"
          >
            Join Sales System Builder
          </a>
        </div>
      </div>
    </header>
  );
};
