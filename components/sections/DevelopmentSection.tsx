"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function DevelopmentSection() {
  const { development } = programData;

  return (
    <section id="development" className="py-32 px-5 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Player Development"
          title="How We Build Players"
          subtitle="Every area of development is intentional, measurable, and individualized."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {development.areas.map((area) => (
            <div key={area.id} className="rounded-2xl border border-white/[0.07] bg-[#141414] p-6 flex flex-col card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center text-xl">
                  {area.icon}
                </div>
                <h3 className="font-bold text-white text-sm leading-tight">{area.title}</h3>
              </div>

              <p className="text-xs text-white/45 leading-relaxed mb-5">{area.description}</p>

              {/* Metrics */}
              <div className="space-y-2.5 mb-5 flex-1">
                {area.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start justify-between gap-2">
                    <span className="text-xs text-white/35">{metric.label}</span>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-bold text-white">{metric.value}</span>
                      {metric.note && <span className="block text-[0.6rem] text-[#C8102E]/60 italic">{metric.note}</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/20 mb-2">Tools & Methods</p>
                <div className="flex flex-wrap gap-1">
                  {area.tools.map((tool, i) => (
                    <span key={i} className="text-[0.6rem] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/35">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/20 italic mt-8">
          ⚠ All metrics are sample data and representative ranges only. Individual results vary. These figures do not represent guarantees.
        </p>
      </div>
    </section>
  );
}
