"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export function FacilitiesSection() {
  const { facilities } = programData;

  return (
    <section id="facilities" className="py-32 px-5 sm:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Facilities"
          title="Where You'll Train"
          subtitle="First-class facilities built to develop first-class players."
        />

        {/* Featured first facility — large 2-col */}
        <div className="card overflow-hidden mb-6">
          <div className="grid md:grid-cols-2">
            <PlaceholderImage label="Field Photo" aspectRatio="aspect-video md:aspect-auto md:h-full" className="rounded-none border-0 min-h-[220px] bg-[#0a0a0a]" />
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span className="section-eyebrow mb-3">Main Field</span>
              <h3 className="text-2xl font-black text-white mb-3">{facilities[0].title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{facilities[0].description}</p>
              <ul className="space-y-2.5">
                {facilities[0].features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-white/40">
                    <div className="w-1 h-1 rounded-full bg-[#C8102E] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Remaining facilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.slice(1).map((facility) => (
            <div key={facility.id} className="card card-interactive overflow-hidden">
              <PlaceholderImage
                label={`${facility.title} Photo`}
                aspectRatio="aspect-video"
                className="rounded-none border-0 bg-[#0a0a0a]"
              />
              <div className="p-6">
                <h3 className="font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed mb-4">{facility.description}</p>
                <ul className="space-y-1.5">
                  {facility.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/35">
                      <div className="w-1 h-1 rounded-full bg-[#C8102E]/60 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                  {facility.features.length > 3 && (
                    <li className="text-xs text-white/20 italic pl-3">+{facility.features.length - 3} more</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
