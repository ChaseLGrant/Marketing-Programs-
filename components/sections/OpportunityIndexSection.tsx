"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

const priorityColors: Record<string, { bg: string; text: string; border: string }> = {
  High: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
  Moderate: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  Low: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
};

export function OpportunityIndexSection() {
  const { opportunityIndex } = programData;

  return (
    <section
      id="opportunities"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0d0a12 0%, #0a0a0a 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Opportunity Index"
          title="Current Roster Needs"
          subtitle="Real-time recruiting priorities. Coaches update this regularly to reflect the program's needs."
        />

        {/* Last updated */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/50">
              Last updated: <span className="text-white/70 font-medium">{opportunityIndex.lastUpdated}</span>
            </span>
          </div>
        </div>

        {/* Stats grid — Zillow-style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {opportunityIndex.cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-5 text-center hover:border-white/[0.12] transition-colors"
            >
              <div className="text-3xl font-black text-white mb-1">{card.value}</div>
              <div className="text-xs font-bold text-white/70 mb-1">{card.label}</div>
              <div className="text-[10px] text-white/30">{card.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Recruiting priorities */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
            <span className="text-sm font-bold text-white">Recruiting Priorities</span>
            <span className="text-xs text-white/30">{opportunityIndex.note}</span>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {opportunityIndex.priorities.map((p, i) => {
              const colors = priorityColors[p.priority] || priorityColors.Moderate;
              return (
                <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors">
                  <div className="w-32 flex-shrink-0">
                    <span className="font-semibold text-white text-sm">{p.position}</span>
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0 ${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    {p.priority}
                  </div>
                  <p className="text-sm text-white/40 flex-1">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#recruit-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003087] hover:bg-[#004bb5] text-white text-sm font-semibold transition-colors"
          >
            Submit Your Information →
          </a>
        </div>
      </div>
    </section>
  );
}
