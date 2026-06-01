"use client";
import { programData } from "@/lib/programData";
import { SectionHeader } from "@/components/ui/section-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const facilityIcons: Record<string, string> = {
  field: "🏟️",
  bullpens: "⚾",
  "weight-room": "🏋️",
  "batting-cages": "🎯",
  "locker-room": "🔑",
  campus: "🏛️",
  "student-resources": "📚",
};

export function FacilitiesSection() {
  const { facilities } = programData;

  return (
    <section
      id="facilities"
      className="py-28 px-4 sm:px-6"
      style={{ background: "linear-gradient(180deg, #0d0a0f 0%, #0a0a0a 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Facilities"
          title="Where You'll Train"
          subtitle="First-class facilities built to develop first-class players."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0d0d0d] card-glow"
            >
              {/* Image */}
              <div className="relative">
                <PlaceholderImage
                  label={`${facility.title} Photo`}
                  aspectRatio="aspect-video"
                  className="rounded-none border-0 border-b border-white/[0.06]"
                  icon={facilityIcons[facility.id] || "📷"}
                />
                <div className="absolute inset-0 flex items-end justify-start p-4 pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                    <span className="text-sm">{facilityIcons[facility.id] || "📷"}</span>
                    <span className="text-xs text-white font-medium">{facility.title}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-white/50 leading-relaxed mb-4">{facility.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {facility.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400/60" />
                      <span className="text-xs text-white/40">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Video placeholder button */}
                <button className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs text-white/40 hover:bg-white/[0.07] transition-colors">
                  <span>▶</span> Watch Facility Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
