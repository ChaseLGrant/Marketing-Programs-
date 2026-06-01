"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function UniformsSection() {
  const { uniforms } = programData;

  return (
    <section id="uniforms" className="py-32 px-5 sm:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Uniforms & Gear"
          title="What You'll Wear"
          subtitle="Every player who joins Palomar Baseball is equipped with everything they need to compete and represent the program."
        />

        {/* Intro statement */}
        <div className="mb-12">
          <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-3xl">
            {uniforms.intro}
          </p>
        </div>

        {/* Uniform photo gallery */}
        <div className="mb-12">
          <p className="section-eyebrow mb-6">Uniforms</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {uniforms.uniformPhotos.map((photo, i) => (
              <div key={i} className="card card-interactive overflow-hidden">
                {photo.image ? (
                  <img src={photo.image} alt={photo.label} className="w-full aspect-square object-cover" />
                ) : (
                  <PlaceholderImage label={photo.label} aspectRatio="aspect-square" className="rounded-none border-0 bg-[#0a0a0a]" />
                )}
                <div className="p-4">
                  <p className="font-semibold text-white text-sm">{photo.label}</p>
                  {photo.description && <p className="text-xs text-white/40 mt-1">{photo.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gear & Equipment */}
        <div className="mb-12">
          <p className="section-eyebrow mb-6">Gear & Equipment</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {uniforms.gearItems.map((item, i) => (
              <div key={i} className="card card-interactive overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full aspect-video object-cover" />
                ) : (
                  <PlaceholderImage label={item.name} aspectRatio="aspect-video" className="rounded-none border-0 bg-[#0a0a0a]" />
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-white text-sm">{item.name}</h3>
                    {item.provided && (
                      <span className="px-2 py-0.5 rounded-md bg-[#C8102E]/15 border border-[#C8102E]/25 text-[0.6rem] font-bold text-[#C8102E] flex-shrink-0">
                        PROVIDED
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/45 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's included summary */}
        <div>
          <p className="section-eyebrow mb-6">What Every Player Receives</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {uniforms.included.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                    <path d="M1 3.5L3 5.5L7 1" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-white/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
