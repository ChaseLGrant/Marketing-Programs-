"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export function WhoThrivesSection() {
  const { whoThrives } = programData;

  return (
    <section id="who-thrives" className="py-32 px-5 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Fit Assessment"
          title="Who Thrives Here?"
          subtitle="Be honest with yourself. This program is not for everyone — and that's by design."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Thrives */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-green-400 tracking-[0.15em] uppercase">Athletes Who Thrive</span>
              <div className="flex-1 h-px bg-green-500/20" />
            </div>
            <div className="space-y-3">
              {whoThrives.thrives.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-green-500/10 bg-green-500/[0.04] hover:bg-green-500/[0.07] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.trait}</h4>
                    <p className="text-xs text-white/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Struggles */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-[#C8102E] tracking-[0.15em] uppercase">Athletes Who Struggle</span>
              <div className="flex-1 h-px bg-[#C8102E]/20" />
            </div>
            <div className="space-y-3">
              {whoThrives.struggles.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-[#C8102E]/10 bg-[#C8102E]/[0.04] hover:bg-[#C8102E]/[0.07] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C8102E]/15 flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.trait}</h4>
                    <p className="text-xs text-white/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm mb-4">Still think you&apos;re the right fit?</p>
          <a href="#recruit-form" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C8102E] hover:bg-[#a00d25] text-white text-sm font-bold transition-colors">
            Start Your Application →
          </a>
        </div>
      </div>
    </section>
  );
}
