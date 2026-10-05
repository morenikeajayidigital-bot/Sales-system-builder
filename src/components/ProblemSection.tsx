import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 border-t border-[#08402F]/10 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08402F] mb-12 sm:mb-16">
          You've felt this before
        </h2>

        <div className="space-y-8 sm:space-y-10 text-base sm:text-xl text-[#08402F] leading-relaxed">
          <p className="font-medium text-[#08402F]">
            You post. Someone replies. They seem interested.
          </p>

          <p className="text-xl sm:text-2xl font-bold text-[#08402F] py-2 border-l-2 border-[#A9832F] pl-4 bg-[#F7F3EA]/50 rounded-r-lg">
            Then nothing.
          </p>

          <p>
            Or someone finds your page and leaves without paying, and you never find out why.
          </p>

          <p>
            It's not that you're bad at this. It's that nothing was set up to catch the interest before it disappeared. Selling isn't luck. It's a system, and once you understand how each piece connects, you stop guessing and start building something that works every time.
          </p>

          <p className="font-semibold text-lg sm:text-2xl text-[#08402F] pt-4">
            That's exactly what this training hands you.
          </p>
        </div>
      </div>
    </section>
  );
};
