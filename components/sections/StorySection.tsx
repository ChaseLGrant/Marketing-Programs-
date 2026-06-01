"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function StorySection() {
  const { story } = programData;

  return (
    <section id="story" className="py-32 px-5 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Palomar Story"
          title="More Than Baseball."
          subtitle="We build players who are ready for the next level — on the field, in the classroom, and as people."
        />

        {/* Mission & Philosophy — wide cards with breathing room */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl bg-[#141414] border border-white/[0.07] p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full bg-[#C8102E]" />
              <h3 className="font-bold text-white text-lg">Our Mission</h3>
            </div>
            <p className="text-white/55 leading-7 text-sm sm:text-base">{story.mission}</p>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-white/[0.07] p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full bg-[#C8102E]" />
              <h3 className="font-bold text-white text-lg">Our Philosophy</h3>
            </div>
            <p className="text-white/55 leading-7 text-sm sm:text-base">{story.philosophy}</p>
          </div>
        </div>

        {/* History — full bleed statement */}
        <div className="rounded-2xl border border-[#C8102E]/20 bg-[#0d0005] p-8 sm:p-12 mb-8">
          <p className="section-eyebrow mb-4">Program History</p>
          <p className="text-lg sm:text-xl text-white/65 leading-relaxed max-w-4xl">
            {story.history}
          </p>
        </div>

        {/* What makes us unique — clean grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {story.uniqueFactors.map((factor, i) => (
            <div key={i} className="rounded-2xl bg-[#141414] border border-white/[0.07] p-6 card-hover">
              <div className="text-2xl mb-4">{["🔗", "🏆", "👤", "📚"][i]}</div>
              <h4 className="font-bold text-white text-sm mb-2">{factor.title}</h4>
              <p className="text-xs text-white/45 leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>

        {/* Why athletes choose */}
        <div className="rounded-2xl bg-[#141414] border border-white/[0.07] p-8 sm:p-10">
          <p className="section-eyebrow mb-6">Why Athletes Choose Palomar</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {story.whyAthletsChoose.map((reason, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-[#C8102E]/20 border border-[#C8102E]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white/65 text-sm leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
