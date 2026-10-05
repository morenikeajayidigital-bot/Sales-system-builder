import React from 'react';
import { RenLogo } from './RenLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { PAYMENT_URL, PAYMENT_URL_DISPLAY, WHATSAPP_URL, WHATSAPP_DISPLAY } from '../constants.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#08402F]/10 py-12 sm:py-16 bg-[#F7F3EA]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#08402F]/10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <RenLogo size="sm" />
              <span className="w-px h-4 bg-[#08402F]/20" aria-hidden="true" />
              <span className="text-sm font-bold tracking-tight text-[#08402F]">
                Sales System Builder
              </span>
            </div>
            <p className="text-xs text-[#08402F]/60">
              © {new Date().getFullYear()} REN DIGITALS. Sales System Builder. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-[#0F6B50] hover:text-[#0b523e] underline decoration-[#0F6B50]/30 hover:decoration-[#0F6B50] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50] rounded-md"
            >
              Pay: {PAYMENT_URL_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F6B50] hover:text-[#0b523e] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50] rounded-md"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-[#08402F]/60">
            Have questions before paying? Chat with us anytime on WhatsApp.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-6 text-xs sm:text-sm font-medium text-[#08402F]">
            <a href="#overview" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Overview
            </a>
            <a href="#curriculum" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Curriculum
            </a>
            <a href="#fit" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Fit
            </a>
            <a href="#story" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Story
            </a>
            <a href="#questions" className="hover:text-[#A9832F] transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6B50]">
              Questions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
