"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function WhyProgramsSection() {
  const { whyPrograms } = programData;

  return (
    <section id="why-programs" className="py-32 px-5 sm:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Program Showcase Platform"
          title={whyPrograms.headline}
          subtitle={whyPrograms.subheadline}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {whyPrograms.benefits.map((benefit, i) => (
            <div key={i} className="card card-interactive p-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mb-4" />
              <h3 className="font-bold text-white text-sm mb-2">{benefit.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {whyPrograms.pricing.map((tier, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-[#C8102E]/25 bg-[#0a0a0a]">
              <div className="px-6 py-5 border-b border-[#C8102E]/15">
                <div className="section-eyebrow mb-2">{tier.tier}</div>
                <div className="text-4xl font-black text-white">{tier.price}</div>
                <p className="text-xs text-white/40 mt-2">{tier.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2.5">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5L4.5 8.5L11 1" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs text-white/55">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/25 mb-5">Interested in Program Showcase for your program?</p>
          <a href="mailto:info@programshowcase.com" className="btn-primary px-8 py-4">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
