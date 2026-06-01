"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const typeColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  performance: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", dot: "bg-orange-400" },
  academic: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", dot: "bg-blue-400" },
  development: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", dot: "bg-purple-400" },
  practice: { bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400", dot: "bg-yellow-400" },
  recovery: { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-400", dot: "bg-teal-400" },
  competition: { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400", dot: "bg-red-400" },
};

export function DailyScheduleSection() {
  const { dailySchedule } = programData;

  return (
    <section
      id="experience"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #070a0f 0%, #0a0a0a 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="The Palomar Experience"
          title="A Day In The Life"
          subtitle="This is what your daily schedule looks like as a Palomar baseball player. It's demanding by design."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[100px] sm:left-[120px] top-0 bottom-0 w-px bg-white/[0.07]" />

          <div className="space-y-6">
            {dailySchedule.map((item, i) => {
              const colors = typeColors[item.type] || typeColors.practice;
              return (
                <div key={i} className="flex items-start gap-0 relative">
                  {/* Time */}
                  <div className="w-[100px] sm:w-[120px] flex-shrink-0 pt-1">
                    <span className="text-xs font-bold text-white/40 tracking-wide">
                      {item.time}
                    </span>
                  </div>

                  {/* Dot on line */}
                  <div className="flex-shrink-0 relative flex flex-col items-center mt-2 -ml-[4px] z-10">
                    <div className={cn("w-2 h-2 rounded-full", colors.dot)} />
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      "ml-6 flex-1 rounded-xl p-4 border",
                      colors.bg,
                      colors.border,
                      "hover:opacity-90 transition-opacity"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">{item.activity}</h4>
                        <p className="text-xs text-white/50 mt-1 leading-relaxed">{item.description}</p>
                      </div>
                      <span
                        className={cn(
                          "text-xs font-semibold tracking-wide uppercase px-2 py-1 rounded-md flex-shrink-0",
                          colors.bg,
                          colors.text,
                          "border",
                          colors.border
                        )}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-white/30 italic">
            Schedule varies by season. This represents a typical in-season week.
          </p>
        </div>
      </div>
    </section>
  );
}
