"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";

export function StorySection() {
  const { story } = programData;

  return (
    <section id="story" className="py-32 px-5 sm:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="The Palomar Story"
          title="More Than Baseball."
          subtitle="We build players who are ready for the next level — on the field, in the classroom, and as people."
          centered={false}
        />

        {/* Mission & Philosophy — left border editorial cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border-l-2 border-[#C8102E] pl-6 py-2">
            <h3 className="font-bold text-white text-base mb-3">Our Mission</h3>
            <p className="text-white/55 leading-7 text-sm">{story.mission}</p>
          </div>

          <div className="border-l-2 border-[#C8102E] pl-6 py-2">
            <h3 className="font-bold text-white text-base mb-3">Our Philosophy</h3>
            <p className="text-white/55 leading-7 text-sm">{story.philosophy}</p>
          </div>
        </div>

        {/* History — pull quote style */}
        <div className="mb-12 px-0 sm:px-8 py-10">
          <p className="section-eyebrow mb-5">Program History</p>
          <p className="text-2xl font-light text-white/60 italic leading-relaxed max-w-4xl">
            {story.history}
          </p>
        </div>

        {/* Unique factors — numbered, no icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {story.uniqueFactors.map((factor, i) => (
            <div key={i} className="card p-6">
              <div className="text-sm font-black text-[#C8102E] mb-4 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="font-bold text-white text-sm mb-2">{factor.title}</h4>
              <p className="text-xs text-white/45 leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>

        {/* Why athletes choose — 2-col list */}
        <div>
          <p className="section-eyebrow mb-6">Why Athletes Choose Palomar</p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {story.whyAthletsChoose.map((reason, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0 mt-2" />
                <span className="text-white/60 text-sm leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
