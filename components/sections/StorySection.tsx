"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";

export function StorySection() {
  const { story } = programData;

  return (
    <section id="story" className="py-28 px-4 sm:px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="The Palomar Story"
          title="More Than Baseball."
          subtitle="We build players who are ready for the next level — on the field, in the classroom, and as people."
        />

        {/* Mission & Philosophy */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="p-8 gradient-border bg-[#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#003087]/20 flex items-center justify-center text-base">
                🎯
              </div>
              <h3 className="font-bold text-white text-lg">Our Mission</h3>
            </div>
            <p className="text-white/60 leading-relaxed">{story.mission}</p>
          </Card>

          <Card className="p-8 gradient-border bg-[#0d0d0d]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#C8102E]/20 flex items-center justify-center text-base">
                💡
              </div>
              <h3 className="font-bold text-white text-lg">Our Philosophy</h3>
            </div>
            <p className="text-white/60 leading-relaxed">{story.philosophy}</p>
          </Card>
        </div>

        {/* Program history full-width */}
        <div
          className="relative rounded-2xl overflow-hidden mb-16 p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, #000d1a 0%, #001a33 50%, #000d1a 100%)",
            border: "1px solid rgba(0,48,135,0.3)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full"
            style={{ background: "radial-gradient(circle, #003087 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3">
              Program History
            </p>
            <p className="text-xl sm:text-2xl font-light text-white/70 leading-relaxed max-w-4xl">
              {story.history}
            </p>
          </div>
        </div>

        {/* What makes us unique */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {story.uniqueFactors.map((factor, i) => (
            <Card key={i} className="p-6 card-glow bg-[#0d0d0d] border-white/[0.06]">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xl mb-4">
                {["🔗", "🏆", "👤", "📚"][i]}
              </div>
              <h4 className="font-bold text-white mb-2">{factor.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{factor.description}</p>
            </Card>
          ))}
        </div>

        {/* Why athletes choose */}
        <div className="bg-[#0d0d0d] rounded-2xl border border-white/[0.06] p-8 sm:p-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 mb-6">
            Why Athletes Choose Palomar
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {story.whyAthletsChoose.map((reason, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#003087]/30 border border-[#003087]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
