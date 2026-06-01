"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function OutcomesSection() {
  const { outcomes } = programData;

  return (
    <section id="outcomes" className="py-32 px-5 sm:px-8 bg-[#0d0005]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Player Outcomes"
          title="Where Players Go From Here"
          subtitle="The results speak louder than any recruiting pitch ever could."
        />

        {/* Transfer stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {outcomes.transferStats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#141414] p-6 text-center">
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 leading-tight">{stat.label}</div>
              {stat.note && <div className="text-[0.6rem] text-[#C8102E]/50 italic mt-1">{stat.note}</div>}
            </div>
          ))}
        </div>

        {/* Pro players */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <p className="section-eyebrow">Professional Players</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.proPlayers.map((player, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#141414] p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <PlaceholderImage label="" icon="👤" aspectRatio="" className="w-12 h-12 rounded-full flex-shrink-0 aspect-square" />
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

        {/* Testimonials */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <p className="section-eyebrow">Player Testimonials</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#141414] p-7 card-hover relative overflow-hidden">
                <div className="absolute top-5 right-5 text-5xl opacity-[0.06] font-serif select-none">&ldquo;</div>
                <p className="text-sm text-white/55 leading-relaxed mb-6 italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <PlaceholderImage label="" icon="👤" aspectRatio="" className="w-9 h-9 rounded-full flex-shrink-0 aspect-square" />
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/35">
                      {t.position} → <span className="text-[#C8102E]/80">{t.transferDest}</span>
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
