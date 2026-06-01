"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function NotableAlumniSection() {
  const { notableAlumni } = programData;

  return (
    <section id="alumni" className="py-32 px-5 sm:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Notable Alumni"
          title="Comets Who Made It"
          subtitle="Palomar players who went on to compete professionally. This is where development leads."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {notableAlumni.map((alum, i) => (
            <div key={i} className="card card-interactive overflow-hidden flex flex-col">
              {/* Photo */}
              <div className="relative">
                {alum.photo ? (
                  <img src={alum.photo} alt={alum.name} className="w-full aspect-square object-cover object-top" />
                ) : (
                  <PlaceholderImage label="Player Photo" aspectRatio="aspect-square" className="rounded-none border-0 bg-[#0a0a0a]" />
                )}
                {alum.palmarHOF && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-yellow-500/90 text-[0.6rem] font-black text-black tracking-wide">
                    HALL OF FAME
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#111111] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <h3 className="font-black text-white text-lg leading-tight">{alum.name}</h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs font-bold text-[#C8102E]">{alum.position}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-xs text-white/35">Palomar {alum.era}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/25 mb-2">Professional Teams</p>
                  <div className="flex flex-wrap gap-1.5">
                    {alum.mlbTeams.map((team, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.07] text-white/60 font-medium">
                        {team}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-white/20 mb-1">Draft</p>
                  <p className="text-xs text-white/50 leading-relaxed">{alum.draftInfo}</p>
                </div>

                <div className="flex-1">
                  <p className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-white/20 mb-2">At Palomar</p>
                  <p className="text-xs text-white/40 leading-relaxed">{alum.atPalomar}</p>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <p className="text-xs text-white/45 leading-relaxed italic">{alum.careerHighlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-white/[0.06] pt-12">
          <p className="text-white/40 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            Every recruit who walks through our doors has a chance to write their own story.
          </p>
          <a href="#recruit-form" className="btn-primary px-8 py-4">
            Start Your Story
          </a>
        </div>
      </div>
    </section>
  );
}
