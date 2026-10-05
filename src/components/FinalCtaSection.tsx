import React from 'react';
import { PAYMENT_URL } from '../constants.ts';

interface FinalCtaSectionProps {
  onJoinClick?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 border-t border-[#08402F]/10 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#08402F] mb-10 sm:mb-12 leading-[1.18] text-balance">
          Stop losing people at the exact moment they were ready to say yes
        </h2>

        <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-[#08402F] leading-relaxed mb-12 sm:mb-14">
          <p>
            You already know what happens if nothing changes. Someone shows interest, the conversation goes quiet, and you tell yourself you'll fix it later.
          </p>

          <p className="font-semibold text-lg sm:text-2xl text-[#08402F] py-2 border-l-2 border-[#A9832F] pl-4 bg-[#F7F3EA]/50 rounded-r-lg">
            Later is how the leads keep leaving.
          </p>

          <p>
            Build the system now, and stop losing what was already yours to close.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-[#F7F3EA] bg-[#0F6B50] hover:bg-[#0b523e] active:bg-[#08402F] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A9832F] inline-flex items-center justify-center"
          >
            Join Sales System Builder
          </a>
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
        </div>
      </div>
    </section>
  );
};
