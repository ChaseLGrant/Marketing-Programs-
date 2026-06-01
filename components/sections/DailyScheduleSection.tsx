"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

const typeConfig: Record<string, { label: string; dotColor: string; textColor: string }> = {
  performance: { label: "Performance", dotColor: "bg-orange-400", textColor: "text-orange-400/70" },
  academic:    { label: "Academic",    dotColor: "bg-blue-400",   textColor: "text-blue-400/70" },
  development: { label: "Development", dotColor: "bg-purple-400", textColor: "text-purple-400/70" },
  practice:    { label: "Practice",    dotColor: "bg-yellow-400", textColor: "text-yellow-400/70" },
  recovery:    { label: "Recovery",    dotColor: "bg-teal-400",   textColor: "text-teal-400/70" },
  competition: { label: "Competition", dotColor: "bg-[#C8102E]",  textColor: "text-[#C8102E]/70" },
};

export function DailyScheduleSection() {
  const { dailySchedule } = programData;

  return (
    <section id="experience" className="py-32 px-5 sm:px-8 bg-black">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="The Palomar Experience"
          title="A Day In The Life"
          subtitle="This is what your daily schedule looks like as a Palomar baseball player. It's demanding by design."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[108px] sm:left-[128px] top-3 bottom-3 w-px bg-white/[0.08]" />

          <div className="space-y-6">
            {dailySchedule.map((item, i) => {
              const config = typeConfig[item.type] || typeConfig.practice;
              return (
                <div key={i} className="flex items-start gap-0">
                  {/* Time */}
                  <div className="w-[108px] sm:w-[128px] flex-shrink-0 pt-1 pr-5 text-right">
                    <span className="text-xs font-bold text-white/30 leading-tight">{item.time}</span>
                  </div>

                  {/* Dot on line */}
                  <div className="flex-shrink-0 mt-[5px] z-10 -ml-[3px]">
                    <div className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1 pb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-sm mb-1">{item.activity}</h4>
                        <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                      </div>
                      <span className={`text-[0.6rem] font-bold tracking-[0.12em] uppercase flex-shrink-0 mt-0.5 ${config.textColor}`}>
                        {config.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-xs text-white/20 mt-4 italic">
          Schedule varies by season. Representative of a typical in-season week.
        </p>
      </div>
    </section>
  );
}
