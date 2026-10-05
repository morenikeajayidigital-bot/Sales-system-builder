import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../constants.ts';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-40"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with us on WhatsApp at ${WHATSAPP_DISPLAY}`}
        className="group flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0F6B50] hover:bg-[#0b523e] text-[#F7F3EA] rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-[#C9A24B]/30 focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
      >
        <span className="w-5 h-5 flex items-center justify-center shrink-0">
          <WhatsAppIcon size={20} className="w-5 h-5" />
        </span>
        <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
