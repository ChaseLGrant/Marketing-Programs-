"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";

export function DevelopmentSection() {
  const { development } = programData;

  return (
    <section
      id="development"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a0f 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Player Development"
          title="How We Build Players"
          subtitle="Every area of development is intentional, measurable, and individualized."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {development.areas.map((area) => (
            <Card key={area.id} className="p-6 card-glow bg-[#0d0d0d] border-white/[0.06] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                  {area.icon}
                </div>
                <h3 className="font-bold text-white">{area.title}</h3>
              </div>

              <p className="text-xs text-white/50 leading-relaxed mb-5">{area.description}</p>

              {/* Metrics */}
              <div className="space-y-2 mb-5 flex-1">
                {area.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start justify-between gap-2">
                    <span className="text-xs text-white/40">{metric.label}</span>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-bold text-white">{metric.value}</span>
                      {metric.note && (
                        <span className="block text-[10px] text-yellow-400/60 italic">{metric.note}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-white/20 mb-2">Tools & Methods</p>
                <div className="flex flex-wrap gap-1">
                  {area.tools.map((tool, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white/25 italic">
            ⚠ All metrics shown are sample data and representative ranges only. Individual results vary significantly. These figures do not represent guarantees or averages.
          </p>
        </div>
      </div>
    </section>
  );
}
