import React from 'react';
import { PAYMENT_URL, PAYMENT_URL_DISPLAY, WHATSAPP_URL } from '../constants.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface HeroProps {
  onJoinClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="overview" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Audience Declaration */}
        <p className="text-base sm:text-lg font-medium text-[#08402F]/75 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          For freelancers, coaches, consultants, and small business owners ready to stop guessing and start selling with a real system.
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#08402F] leading-[1.12] mb-8 sm:mb-10 text-balance">
          Walk away owning a complete sales system, built by your own hands, in days.
        </h1>

        {/* Lead Explanation */}
        <p className="text-base sm:text-xl text-[#08402F] leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12 font-normal">
          Sales System Builder is a hands-on training where you build everything that turns an interested stranger into a paying customer: who they are, what to say to them, where they land, how they pay, and how they come back. Every piece is built by you, for your own business, using AI to do the heavy lifting.
        </p>

        {/* Primary CTA & Reassurance */}
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-[#F7F3EA] bg-[#0F6B50] hover:bg-[#0b523e] active:bg-[#08402F] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A9832F] inline-flex items-center justify-center"
          >
            Join Sales System Builder
          </a>

          {/* Payment Link Alongside CTA */}
          <p className="text-xs text-[#08402F]/70">
            Payment link:{' '}
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#0F6B50] hover:text-[#0b523e] underline decoration-[#0F6B50]/30 hover:decoration-[#0F6B50] transition-colors"
            >
              {PAYMENT_URL}
            </a>
          </p>

          <div className="flex items-center justify-center gap-2.5">
            <img
              src="/author-profile.jpg?v=2"
              alt="Instructor"
              className="w-6 h-6 rounded-full object-cover object-top border border-[#0F6B50]/30 shrink-0"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://i.postimg.cc/0NFNqFzD/IMG-20260922-WA0009.jpg';
              }}
            />
            <p className="text-xs sm:text-sm text-[#08402F]/70 font-medium">
              No tech background needed. No agency fee. No developer required.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F6B50] hover:text-[#0b523e] underline decoration-[#0F6B50]/30 hover:decoration-[#0F6B50] transition-colors pt-1"
          >
            <WhatsAppIcon size={16} />
            <span>Have questions first? Talk directly with me on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
