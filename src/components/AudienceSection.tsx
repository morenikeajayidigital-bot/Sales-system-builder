import React from 'react';

export const AudienceSection: React.FC = () => {
  return (
    <section id="fit" className="py-20 sm:py-28 lg:py-32 border-t border-[#08402F]/10 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {/* Who this is for */}
          <div className="space-y-6 p-6 sm:p-8 bg-[#F7F3EA]/40 rounded-2xl border border-[#08402F]/10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08402F]">
              Who this is for
            </h2>
            <p className="text-base sm:text-lg text-[#08402F]/90 leading-relaxed">
              Freelancers, coaches, consultants, and small business owners who already have something worth selling and are tired of watching interest disappear before it turns into payment. It's also for anyone who wants to learn this skill properly and use it again and again, for their own business or for someone else's.
            </p>
          </div>

          {/* Who this is not for */}
          <div className="space-y-6 p-6 sm:p-8 bg-white rounded-2xl border border-[#08402F]/10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08402F]">
              Who this is not for
            </h2>
            <p className="text-base sm:text-lg text-[#08402F]/90 leading-relaxed">
              This isn't for anyone looking for a shortcut with no effort attached. You build every piece yourself here, with guidance, not a done for you handoff. If you're not ready to sit down and actually build, this isn't the right time for you to join.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
