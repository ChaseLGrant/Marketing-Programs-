"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function WhoThrivesSection() {
  const { whoThrives } = programData;

  return (
    <section
      id="who-thrives"
      className="py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0f14 0%, #070a0f 100%)" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Fit Assessment"
          title="Who Thrives Here?"
          subtitle="Be honest with yourself. This program is not for everyone — and that's by design."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Thrives */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
              <span className="text-sm font-bold text-green-400 tracking-wide uppercase">Athletes Who Thrive</span>
              <div className="flex-1 h-px bg-gradient-to-l from-green-500/30 to-transparent" />
            </div>
            <div className="space-y-4">
              {whoThrives.thrives.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-green-500/10 bg-green-500/[0.04] hover:bg-green-500/[0.07] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.trait}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Struggles */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
              <span className="text-sm font-bold text-red-400 tracking-wide uppercase">Athletes Who Struggle</span>
              <div className="flex-1 h-px bg-gradient-to-l from-red-500/30 to-transparent" />
            </div>
            <div className="space-y-4">
              {whoThrives.struggles.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-red-500/10 bg-red-500/[0.04] hover:bg-red-500/[0.07] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.trait}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">
            Still think you&apos;re the right fit?
          </p>
          <a
            href="#recruit-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003087] hover:bg-[#004bb5] text-white text-sm font-semibold transition-colors"
          >
            Start Your Application →
          </a>
        </div>
      </div>
    </section>
  );
}
