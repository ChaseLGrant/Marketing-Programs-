"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function RecruitingStandardsSection() {
  const { recruitingStandards } = programData;

  return (
    <section
      id="standards"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a12 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Recruiting Standards"
          title="What We Look For"
          subtitle="Here's what our staff evaluates — athletically, skill-wise, and as a person."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {recruitingStandards.positions.map((pos, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] overflow-hidden card-glow"
            >
              {/* Header */}
              <div
                className="px-6 py-5 border-b border-white/[0.06]"
                style={{
                  background: "linear-gradient(135deg, rgba(0,48,135,0.15) 0%, rgba(0,0,0,0) 100%)",
                }}
              >
                <div className="text-3xl mb-2">{pos.icon}</div>
                <h3 className="font-bold text-white text-lg">{pos.position}</h3>
              </div>

              <div className="p-5 space-y-5">
                {/* Athletic */}
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-orange-400/70 mb-2">
                    Athletic Traits
                  </p>
                  <ul className="space-y-1">
                    {pos.athletic.map((a, j) => (
                      <li key={j} className="text-xs text-white/50 flex gap-2">
                        <span className="text-orange-400/50 flex-shrink-0">→</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill */}
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-blue-400/70 mb-2">
                    Skill Traits
                  </p>
                  <ul className="space-y-1">
                    {pos.skill.map((s, j) => (
                      <li key={j} className="text-xs text-white/50 flex gap-2">
                        <span className="text-blue-400/50 flex-shrink-0">→</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Character */}
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-purple-400/70 mb-2">
                    Character Traits
                  </p>
                  <ul className="space-y-1">
                    {pos.character.map((c, j) => (
                      <li key={j} className="text-xs text-white/50 flex gap-2">
                        <span className="text-purple-400/50 flex-shrink-0">→</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Academic */}
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-green-400/70 mb-2">
                    Academic Expectations
                  </p>
                  <ul className="space-y-1">
                    {pos.academic.map((a, j) => (
                      <li key={j} className="text-xs text-white/50 flex gap-2">
                        <span className="text-green-400/50 flex-shrink-0">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.04] flex items-start gap-3">
          <span className="text-yellow-400 text-lg flex-shrink-0">⚠</span>
          <p className="text-sm text-white/40 leading-relaxed">
            {recruitingStandards.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
