"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function RecruitingStandardsSection() {
  const { recruitingStandards } = programData;

  return (
    <section id="standards" className="py-32 px-5 sm:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Recruiting Standards"
          title="What We Look For"
          subtitle="Here's what our staff evaluates — athletically, skill-wise, and as a person."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {recruitingStandards.positions.map((pos, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="px-6 py-5 border-b border-white/[0.06]">
                <h3 className="font-black text-white">{pos.position}</h3>
              </div>

              <div className="p-5 space-y-5">
                {[
                  { label: "Athletic", items: pos.athletic, color: "text-orange-400/60" },
                  { label: "Skill", items: pos.skill, color: "text-white/35" },
                  { label: "Character", items: pos.character, color: "text-purple-400/60" },
                  { label: "Academic", items: pos.academic, color: "text-green-400/60" },
                ].map(({ label, items, color }) => (
                  <div key={label}>
                    <p className={`text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-2 ${color}`}>{label}</p>
                    <ul className="space-y-1.5">
                      {items.map((item, j) => (
                        <li key={j} className="text-xs text-white/45 flex gap-2.5 leading-relaxed pl-2">
                          <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/30 italic leading-relaxed max-w-3xl">
          {recruitingStandards.disclaimer}
        </p>
      </div>
    </section>
  );
}
