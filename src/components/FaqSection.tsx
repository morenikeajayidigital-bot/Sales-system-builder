import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { WHATSAPP_URL } from '../constants.ts';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need a tech background?',
    answer: 'No. Everything is taught in plain language, and AI carries most of the heavy lifting.',
  },
  {
    id: 'faq-2',
    question: 'Do I need an existing business already?',
    answer: "It helps, since you'll be building everything around your own offer as we go.",
  },
  {
    id: 'faq-3',
    question: 'Will this guarantee me sales?',
    answer: 'No training honestly can. You leave with the system and the skill to use it. What it earns you comes from how you apply it.',
  },
  {
    id: 'faq-4',
    question: 'What exactly do I leave with?',
    answer: 'Your own customer avatar, your own sales copy, your own email and WhatsApp sequences, your own product mockups, your own content creation engine, and your own payment setup, ready to use immediately.',
  },
];

export const FaqSection: React.FC = () => {
  // First item open by default for immediate discoverability
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="questions" className="py-20 sm:py-28 lg:py-32 border-t border-[#08402F]/10 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08402F] mb-12 sm:mb-16">
          Questions
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all ${
                  isOpen
                    ? 'border-[#0F6B50] bg-[#F7F3EA]/30 shadow-xs'
                    : 'border-[#08402F]/10 hover:border-[#08402F]/30 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-content`}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0F6B50] rounded-xl"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-[#0F6B50]' : 'text-[#08402F]'
                  }`}>
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? 'bg-[#0F6B50] text-[#F7F3EA]'
                        : 'bg-[#F7F3EA] text-[#0F6B50] border border-[#08402F]/10'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`${faq.id}-content`}
                    role="region"
                    className="px-6 pb-6 pt-1 text-base sm:text-lg text-[#08402F]/90 leading-relaxed"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dedicated WhatsApp Inquiries Contact Card */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F7F3EA] rounded-2xl border border-[#08402F]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-[#08402F]">
              Have a question before you join?
            </h3>
            <p className="text-sm text-[#08402F]/80 leading-relaxed">
              Message us directly on WhatsApp to get more information or talk to somebody before paying.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#0F6B50] hover:bg-[#0b523e] text-[#F7F3EA] text-sm font-semibold rounded-xl transition-all shadow-xs shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
          >
            <WhatsAppIcon size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
