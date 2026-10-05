import React, { useEffect, useState } from 'react';
import { PAYMENT_URL } from '../constants.ts';

interface StickyCtaProps {
  onJoinClick?: () => void;
}

export const StickyCta: React.FC<StickyCtaProps> = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px, hide near the very bottom when final CTA is in view
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const distanceFromBottom = docHeight - (scrollY + winHeight);

      if (scrollY > 450 && distanceFromBottom > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Action"
      className="fixed bottom-0 left-0 right-0 z-30 sm:bottom-6 sm:right-6 sm:left-auto p-3 sm:p-0 bg-[#FFFFFF]/95 sm:bg-transparent border-t border-[#08402F]/10 sm:border-0 shadow-lg sm:shadow-none transition-all"
    >
      <div className="max-w-md mx-auto sm:max-w-none flex items-center justify-between sm:justify-end gap-3">
        <span className="sm:hidden text-xs font-bold text-[#08402F] truncate">
          Sales System Builder
        </span>
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#F7F3EA] bg-[#0F6B50] hover:bg-[#0b523e] active:bg-[#08402F] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#A9832F] inline-flex items-center justify-center"
        >
          Join Sales System Builder
        </a>
      </div>
    </aside>
  );
};
