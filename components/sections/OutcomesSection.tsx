"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function OutcomesSection() {
  const { outcomes } = programData;

  return (
    <section
      id="outcomes"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #070910 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Player Outcomes"
          title="Where Players Go From Here"
          subtitle="The results speak louder than any recruiting pitch ever could."
        />

        {/* Transfer stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {outcomes.transferStats.map((stat, i) => (
            <div key={i} className="rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-6 text-center">
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 leading-tight">{stat.label}</div>
              {stat.note && (
                <div className="text-[10px] text-yellow-400/50 italic mt-1">{stat.note}</div>
              )}
            </div>
          ))}
        </div>

        {/* Pro players */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">Professional Players</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.proPlayers.map((player, i) => (
              <div key={i} className="rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-5 card-glow">
                <div className="flex items-center gap-3 mb-4">
                  <PlaceholderImage label="" icon="👤" aspectRatio="" className="w-12 h-12 rounded-full flex-shrink-0 aspect-square" />
                  <div>
                    <div className="font-bold text-white text-sm">{player.name}</div>
                    <div className="text-xs text-blue-400">{player.position}</div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-yellow-400 mb-2">{player.outcome}</div>
                <p className="text-xs text-white/40 italic leading-relaxed">&ldquo;{player.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">Player Testimonials</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] p-6 card-glow relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-4xl opacity-10 font-serif">&ldquo;</div>
                <p className="text-sm text-white/60 leading-relaxed mb-6 italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <PlaceholderImage label="" icon="👤" aspectRatio="" className="w-10 h-10 rounded-full flex-shrink-0 aspect-square" />
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/40">
                      {t.position} → <span className="text-blue-400">{t.transferDest}</span>
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
