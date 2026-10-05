import React from 'react';

export const WhyITeachSection: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 lg:py-32 border-t border-[#08402F]/10 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Author Picture Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#0F6B50]/20 bg-[#F7F3EA] aspect-[4/5] max-w-sm mx-auto lg:max-w-none shadow-md">
              <img
                src="/author-profile.jpg?v=2"
                alt="Creator of Sales System Builder"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://i.postimg.cc/0NFNqFzD/IMG-20260922-WA0009.jpg';
                }}
              />
            </div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08402F]">
              Why I teach this
            </h2>

            <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-[#08402F] leading-relaxed">
              <p>
                I used to post products on WhatsApp and Instagram and watch people get excited, then disappear. For a long time, I thought something was wrong with me.
              </p>

              <p className="font-semibold text-lg sm:text-2xl text-[#08402F] py-2 border-l-2 border-[#A9832F] pl-4 bg-[#F7F3EA]/50 rounded-r-lg">
                It wasn't. Nothing was set up to catch the interest before it went cold.
              </p>

              <p>
                I studied this until I understood exactly why leads were dying and built the system that fixed it, piece by piece. I'm still using what I built, right now, in my own business. This training is me handing you that same system, built step by step, so you can do for your business what I did for mine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
