"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

const priorityColors: Record<string, { bg: string; text: string; border: string }> = {
  High:     { bg: "bg-[#C8102E]/10",  text: "text-[#C8102E]",  border: "border-[#C8102E]/25" },
  Moderate: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/25" },
  Low:      { bg: "bg-green-500/10",  text: "text-green-400",  border: "border-green-500/25" },
};

export function OpportunityIndexSection() {
  const { opportunityIndex } = programData;

  return (
    <section id="opportunities" className="py-32 px-5 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Opportunity Index"
          title="Current Roster Needs"
          subtitle="Real-time recruiting priorities. Coaches update this regularly to reflect the program's needs."
        />

        {/* Live badge */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/45">
              Last updated: <span className="text-white/70 font-semibold">{opportunityIndex.lastUpdated}</span>
            </span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {opportunityIndex.cards.map((card, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#141414] p-5 text-center card-hover">
              <div className="text-3xl font-black text-white mb-1">{card.value}</div>
              <div className="text-xs font-bold text-white/60 mb-1 leading-tight">{card.label}</div>
              <div className="text-[0.6rem] text-white/25">{card.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Priority table */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#141414] overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
            <span className="font-bold text-white text-sm">Recruiting Priorities</span>
            <span className="text-xs text-white/25">{opportunityIndex.note}</span>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {opportunityIndex.priorities.map((p, i) => {
              const colors = priorityColors[p.priority] || priorityColors.Moderate;
              return (
                <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors">
                  <div className="w-36 flex-shrink-0">
                    <span className="font-bold text-white text-sm">{p.position}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {p.priority}
                  </span>
                  <p className="text-sm text-white/40 flex-1 hidden sm:block">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#recruit-form" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C8102E] hover:bg-[#a00d25] text-white text-sm font-bold transition-colors">
            Submit Your Information →
          </a>
        </div>
      </div>
    </section>
  );
}
