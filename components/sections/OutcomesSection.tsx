"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function OutcomesSection() {
  const { outcomes } = programData;

  return (
    <section id="outcomes" className="py-32 px-5 sm:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Player Outcomes"
          title="Where Players Go From Here"
          subtitle="The results speak louder than any recruiting pitch ever could."
        />

        {/* Transfer stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {outcomes.transferStats.map((stat, i) => (
            <div key={i} className="card p-6 text-center">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-xs text-white/40 leading-tight">{stat.label}</div>
              {stat.note && <div className="text-[0.6rem] text-[#C8102E]/50 italic mt-2">{stat.note}</div>}
            </div>
          ))}
        </div>

        {/* Pro players */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <p className="section-eyebrow">Professional Players</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.proPlayers.map((player, i) => (
              <div key={i} className="card card-interactive p-6">
                <div className="flex items-center gap-3 mb-4">
                  <PlaceholderImage label="" aspectRatio="" className="w-12 h-12 rounded-full flex-shrink-0 aspect-square bg-[#0a0a0a]" />
                  <div>
                    <div className="font-bold text-white text-sm">{player.name}</div>
                    <div className="text-xs text-white/40">{player.position}</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#C8102E] mb-2">{player.outcome}</div>
                <p className="text-xs text-white/40 italic leading-relaxed">&ldquo;{player.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials — editorial quote style */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <p className="section-eyebrow">Player Testimonials</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="space-y-0">
            {outcomes.testimonials.map((t, i) => (
              <div key={i} className={`py-10 ${i < outcomes.testimonials.length - 1 ? "border-b border-white/[0.06]" : ""} relative`}>
                <div className="absolute top-8 left-0 text-8xl text-white opacity-[0.05] font-serif select-none leading-none">&ldquo;</div>
                <div className="pl-8 sm:pl-12">
                  <p className="text-base sm:text-lg text-white/55 leading-relaxed italic mb-6 max-w-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <span className="text-white/20">·</span>
                    <div className="text-xs text-white/35">
                      {t.position} <span className="text-white/20">→</span> <span className="text-[#C8102E]/70">{t.transferDest}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
