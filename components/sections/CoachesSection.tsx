"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function CoachesSection() {
  const { coaches } = programData;

  return (
    <section id="coaches" className="py-32 px-5 sm:px-8 bg-[#0d0005]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Coaching Staff"
          title="Meet The Staff"
          subtitle="The people who will develop, challenge, and advocate for you every single day."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div key={coach.id} className="rounded-2xl overflow-hidden border border-white/[0.07] bg-[#141414] flex flex-col card-hover">
              {/* Photo */}
              <div className="relative">
                <PlaceholderImage
                  label="Coach Photo"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-none border-0"
                  icon="👤"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#141414] to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="px-3 py-1 rounded-md bg-[#C8102E] text-xs text-white font-bold">
                    {coach.role}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1 gap-5">
                <div>
                  <h3 className="text-xl font-black text-white">{coach.nameDisplay}</h3>
                  <p className="text-xs text-[#C8102E] font-semibold mt-1 tracking-wide uppercase">{coach.role}</p>
                </div>

                <p className="text-sm text-white/50 leading-relaxed">{coach.bio}</p>

                <div className="border-t border-white/[0.07] pt-5">
                  <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/25 mb-3">Philosophy</p>
                  <p className="text-sm text-white/55 leading-relaxed italic">&ldquo;{coach.recruitingPhilosophy}&rdquo;</p>
                </div>

                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/25 mb-3">Values In Athletes</p>
                  <div className="flex flex-wrap gap-2">
                    {coach.valuesInAthletes.map((v, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white/55">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-[#C8102E]/[0.07] border border-[#C8102E]/15 p-4">
                  <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#C8102E]/70 mb-2">Advice For Recruits</p>
                  <p className="text-xs text-white/50 leading-relaxed">{coach.adviceForRecruits}</p>
                </div>

                <div className="mt-auto">
                  <button className="w-full px-4 py-3 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white/55 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2">
                    ▶ Watch Coach Introduction
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
