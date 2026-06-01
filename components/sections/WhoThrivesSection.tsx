"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function WhoThrivesSection() {
  const { whoThrives } = programData;

  return (
    <section id="who-thrives" className="py-32 px-5 sm:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Fit Assessment"
          title="Who Thrives Here?"
          subtitle="Be honest with yourself. This program is not for everyone — and that's by design."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Thrives */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-bold text-green-400/70 tracking-[0.2em] uppercase">Athletes Who Thrive</span>
              <div className="flex-1 h-px bg-green-500/15" />
            </div>
            <div className="space-y-6">
              {whoThrives.thrives.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.trait}</h4>
                    <p className="text-sm text-white/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Struggles */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-bold text-[#C8102E]/70 tracking-[0.2em] uppercase">Athletes Who Struggle</span>
              <div className="flex-1 h-px bg-[#C8102E]/15" />
            </div>
            <div className="space-y-6">
              {whoThrives.struggles.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C8102E] flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.trait}</h4>
                    <p className="text-sm text-white/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/30 text-sm mb-5">Still think you&apos;re the right fit?</p>
          <a href="#recruit-form" className="btn-primary px-8 py-4">
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
}
