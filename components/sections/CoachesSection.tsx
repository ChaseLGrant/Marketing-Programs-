"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";

export function CoachesSection() {
  const { coaches } = programData;

  return (
    <section
      id="coaches"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0f14 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Coaching Staff"
          title="Meet The Staff"
          subtitle="The people who will develop, challenge, and advocate for you every single day."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0d0d0d] flex flex-col card-glow"
            >
              {/* Photo */}
              <div className="relative">
                <PlaceholderImage
                  label="Coach Photo"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-none border-0 border-b border-white/[0.06]"
                  icon="👤"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#003087]/80 backdrop-blur-sm text-xs text-white font-semibold border border-[#003087]/50">
                    {coach.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{coach.nameDisplay}</h3>
                <p className="text-sm text-blue-400 font-medium mb-4">{coach.role}</p>

                <p className="text-sm text-white/50 leading-relaxed mb-5">{coach.bio}</p>

                {/* Divider */}
                <div className="border-t border-white/[0.06] pt-5 mb-4">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                    Recruiting Philosophy
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed italic">
                    &ldquo;{coach.recruitingPhilosophy}&rdquo;
                  </p>
                </div>

                {/* Values */}
                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                    Values In Athletes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coach.valuesInAthletes.map((v, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/60"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Advice */}
                <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-xs font-semibold tracking-widest uppercase text-yellow-400/70 mb-2">
                    Advice For Recruits
                  </p>
                  <p className="text-xs text-white/50 leading-relaxed">{coach.adviceForRecruits}</p>
                </div>

                <div className="mt-auto">
                  <Button variant="outline" className="w-full">
                    <span>▶</span> Watch Coach Introduction
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
