"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const typeConfig: Record<string, { label: string; dot: string; bg: string; border: string }> = {
  performance: { label: "Performance", dot: "bg-orange-400", bg: "bg-orange-500/[0.06]", border: "border-orange-500/15" },
  academic:    { label: "Academic",    dot: "bg-blue-400",   bg: "bg-blue-500/[0.06]",   border: "border-blue-500/15" },
  development: { label: "Development", dot: "bg-purple-400", bg: "bg-purple-500/[0.06]", border: "border-purple-500/15" },
  practice:    { label: "Practice",    dot: "bg-yellow-400", bg: "bg-yellow-500/[0.06]", border: "border-yellow-500/15" },
  recovery:    { label: "Recovery",    dot: "bg-teal-400",   bg: "bg-teal-500/[0.06]",   border: "border-teal-500/15" },
  competition: { label: "Competition", dot: "bg-[#C8102E]",  bg: "bg-[#C8102E]/[0.06]",  border: "border-[#C8102E]/15" },
};

export function DailyScheduleSection() {
  const { dailySchedule } = programData;

  return (
    <section id="experience" className="py-32 px-5 sm:px-8 bg-[#0d0005]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="The Palomar Experience"
          title="A Day In The Life"
          subtitle="This is what your daily schedule looks like as a Palomar baseball player. It's demanding by design."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[108px] sm:left-[128px] top-3 bottom-3 w-px bg-white/[0.06]" />

          <div className="space-y-5">
            {dailySchedule.map((item, i) => {
              const config = typeConfig[item.type] || typeConfig.practice;
              return (
                <div key={i} className="flex items-start gap-0">
                  {/* Time */}
                  <div className="w-[108px] sm:w-[128px] flex-shrink-0 pt-4 pr-4">
                    <span className="text-xs font-bold text-white/35 leading-tight">{item.time}</span>
                  </div>

                  {/* Dot */}
                  <div className="flex-shrink-0 mt-[18px] z-10 -ml-[3px]">
                    <div className={cn("w-1.5 h-1.5 rounded-full", config.dot)} />
                  </div>

                  {/* Card */}
                  <div className={cn("ml-5 flex-1 rounded-2xl border p-4 sm:p-5", config.bg, config.border)}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-sm mb-1">{item.activity}</h4>
                        <p className="text-xs text-white/45 leading-relaxed">{item.description}</p>
                      </div>
                      <span className={cn("text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-lg flex-shrink-0", config.bg, config.border, "border text-white/40")}>
                        {config.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-xs text-white/20 mt-10 italic">
          Schedule varies by season. Representative of a typical in-season week.
        </p>
      </div>
    </section>
  );
}
