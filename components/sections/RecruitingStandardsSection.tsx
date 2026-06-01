"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function RecruitingStandardsSection() {
  const { recruitingStandards } = programData;

  return (
    <section id="standards" className="py-32 px-5 sm:px-8 bg-[#0d0005]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Recruiting Standards"
          title="What We Look For"
          subtitle="Here's what our staff evaluates — athletically, skill-wise, and as a person."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {recruitingStandards.positions.map((pos, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#141414] overflow-hidden card-hover">
              <div className="px-6 py-5 border-b border-white/[0.06] bg-[#C8102E]/[0.06]">
                <div className="text-3xl mb-2">{pos.icon}</div>
                <h3 className="font-black text-white">{pos.position}</h3>
              </div>

              <div className="p-5 space-y-5">
                {[
                  { label: "Athletic Traits", items: pos.athletic, color: "text-orange-400/70" },
                  { label: "Skill Traits", items: pos.skill, color: "text-white/40" },
                  { label: "Character Traits", items: pos.character, color: "text-purple-400/70" },
                  { label: "Academic", items: pos.academic, color: "text-green-400/70" },
                ].map(({ label, items, color }) => (
                  <div key={label}>
                    <p className={`text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-2 ${color}`}>{label}</p>
                    <ul className="space-y-1">
                      {items.map((item, j) => (
                        <li key={j} className="text-xs text-white/45 flex gap-2 leading-relaxed">
                          <span className="text-[#C8102E]/50 flex-shrink-0 mt-0.5">→</span>
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

        <div className="p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] flex items-start gap-3">
          <span className="text-yellow-400 flex-shrink-0">⚠</span>
          <p className="text-sm text-white/40 leading-relaxed">{recruitingStandards.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
