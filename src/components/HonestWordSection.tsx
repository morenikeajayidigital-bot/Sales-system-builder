import React from 'react';

export const HonestWordSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 border-t border-[#08402F]/10 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08402F] mb-8 sm:mb-10">
          An honest word before you join
        </h2>

        <div className="text-base sm:text-xl text-[#08402F] leading-relaxed p-6 sm:p-8 bg-[#F7F3EA]/35 rounded-2xl border border-[#08402F]/10">
          <p>
            Nobody can promise you sales, and I won't pretend otherwise. What I can promise is this: if you show up and build alongside me, you leave with a real, working sales system in your hands, not just notes you'll forget by next week. What that system earns you depends on how you use it afterward, and that part is yours.
          </p>
        </div>
      </div>
    </section>
  );
};
