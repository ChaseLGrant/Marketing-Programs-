"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function WhyProgramsSection() {
  const { whyPrograms } = programData;

  return (
    <section
      id="why-programs"
      className="py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #000d1a 50%, #0a0a0a 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #003087 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Program Showcase Platform"
          title={whyPrograms.headline}
          subtitle={whyPrograms.subheadline}
        />

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {whyPrograms.benefits.map((benefit, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-6 hover:border-blue-500/20 hover:bg-[#0d1020] transition-all"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-white text-sm mb-2">{benefit.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {whyPrograms.pricing.map((tier, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border"
              style={{
                border: "1px solid rgba(0,48,135,0.4)",
                background: "linear-gradient(135deg, #000d1a 0%, #0a0a0a 100%)",
              }}
            >
              <div className="px-6 py-5 border-b border-white/[0.06]">
                <div className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-1">{tier.tier}</div>
                <div className="text-3xl font-black text-white">{tier.price}</div>
                <p className="text-xs text-white/40 mt-1">{tier.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M1 6L5 10L13 1" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs text-white/60">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/30 mb-4">Interested in Program Showcase for your program?</p>
          <a
            href="mailto:info@programshowcase.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003087] hover:bg-[#004bb5] text-white text-sm font-semibold transition-colors"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
