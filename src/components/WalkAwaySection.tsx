import React, { useState } from 'react';
import { PAYMENT_URL } from '../constants.ts';

interface DeliverableItem {
  number: number;
  title: string;
  description: string;
  categoryIndex: number;
}

const DELIVERABLES: DeliverableItem[] = [
  {
    number: 1,
    title: 'Business and customer context.',
    description: 'A clear, written structure of your business and your offer, so every piece of copy and every message you write afterward actually fits.',
    categoryIndex: 0,
  },
  {
    number: 2,
    title: 'Customer avatar.',
    description: 'A detailed profile of your ideal buyer: their situation, their frustrations, what they want, and what makes them hesitate before paying.',
    categoryIndex: 0,
  },
  {
    number: 3,
    title: 'Customer insight and research.',
    description: 'How to find out what your buyers actually think and say, so you stop guessing and start speaking their exact language.',
    categoryIndex: 0,
  },
  {
    number: 4,
    title: 'Sales copy that converts.',
    description: 'A complete sales page built from the real questions every buyer asks before they pay.',
    categoryIndex: 1,
  },
  {
    number: 5,
    title: 'Email and WhatsApp sequences.',
    description: 'Follow up messages ready to send, written to keep people engaged instead of letting them go cold.',
    categoryIndex: 1,
  },
  {
    number: 6,
    title: 'Product mockups and descriptions.',
    description: 'Clear visuals and words that show buyers exactly what they\'re getting before they ask.',
    categoryIndex: 1,
  },
  {
    number: 7,
    title: 'Content creation engine.',
    description: 'Specific content creation across social media.',
    categoryIndex: 1,
  },
  {
    number: 8,
    title: 'Payment setup.',
    description: 'Your own payment collection connected and ready, so anyone who wants to buy can pay you without extra steps or confusion.',
    categoryIndex: 2,
  },
];

const CATEGORIES = [
  { title: "Understand exactly who you're selling to", items: [1, 2, 3] },
  { title: "Say the right thing, in the right place", items: [4, 5, 6, 7] },
  { title: "Get paid, without the friction", items: [8] },
];

export const WalkAwaySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | number>('all');

  const filteredItems = activeFilter === 'all' 
    ? DELIVERABLES 
    : DELIVERABLES.filter(item => item.categoryIndex === activeFilter);

  return (
    <section id="curriculum" className="py-20 sm:py-28 lg:py-32 border-t border-[#08402F]/10 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08402F] mb-8 sm:mb-12">
          What you will walk away with
        </h2>

        {/* Interactive Filter Tabs using Brand Emerald & Gold */}
        <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist" aria-label="Curriculum Filter">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0F6B50] ${
              activeFilter === 'all'
                ? 'bg-[#0F6B50] text-[#F7F3EA] shadow-xs'
                : 'text-[#08402F] hover:text-[#0F6B50] bg-[#F7F3EA]/60 border border-[#08402F]/10'
            }`}
          >
            All 8 Deliverables
          </button>
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={activeFilter === idx}
              onClick={() => setActiveFilter(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0F6B50] ${
                activeFilter === idx
                  ? 'bg-[#0F6B50] text-[#F7F3EA] shadow-xs'
                  : 'text-[#08402F] hover:text-[#0F6B50] bg-[#F7F3EA]/60 border border-[#08402F]/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Structured List */}
        <div className="space-y-12 sm:space-y-16">
          {CATEGORIES.map((cat, catIdx) => {
            const itemsInCat = filteredItems.filter(item => item.categoryIndex === catIdx);
            if (itemsInCat.length === 0) return null;

            return (
              <div key={catIdx} className="space-y-6">
                <h3 className="text-lg sm:text-2xl font-bold text-[#08402F] pb-2 border-b border-[#08402F]/10">
                  {cat.title}
                </h3>

                <ol className="space-y-6">
                  {itemsInCat.map((item) => (
                    <li
                      key={item.number}
                      className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-[#FFFFFF] border border-[#08402F]/10 rounded-xl hover:border-[#A9832F] hover:shadow-xs transition-all"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-[#F7F3EA] border border-[#C9A24B]/30 text-[#08402F] font-bold text-sm sm:text-base flex items-center justify-center tabular-nums">
                        {item.number}
                      </span>
                      <div className="text-base sm:text-lg text-[#08402F] leading-relaxed">
                        <strong className="font-bold text-[#08402F]">{item.title}</strong>{' '}
                        <span className="text-[#08402F]/90">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>

        {/* Concluding Paragraph */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-[#08402F]/10">
          <p className="text-lg sm:text-xl font-medium text-[#08402F] leading-relaxed mb-8">
            By the end, you're not holding notes. You're holding a working system: your avatar, your copy, your messages, your mockups, your content creation engine, and your payment setup, all built with your own hands.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#F7F3EA] bg-[#0F6B50] hover:bg-[#0b523e] active:bg-[#08402F] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A9832F] inline-flex items-center justify-center"
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
      </div>
    </section>
  );
};
