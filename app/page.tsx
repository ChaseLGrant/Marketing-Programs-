import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { CoachesSection } from "@/components/sections/CoachesSection";
import { WhoThrivesSection } from "@/components/sections/WhoThrivesSection";
import { DailyScheduleSection } from "@/components/sections/DailyScheduleSection";
import { DevelopmentSection } from "@/components/sections/DevelopmentSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { RecruitingStandardsSection } from "@/components/sections/RecruitingStandardsSection";
import { OpportunityIndexSection } from "@/components/sections/OpportunityIndexSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { RecruitFormSection } from "@/components/sections/RecruitFormSection";
import { WhyProgramsSection } from "@/components/sections/WhyProgramsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navigation />

      {/* S1: Cinematic Hero */}
      <HeroSection />

      {/* S2: The Palomar Story */}
      <StorySection />

      {/* S3: Meet The Coaching Staff */}
      <CoachesSection />

      {/* S4: Who Thrives Here */}
      <WhoThrivesSection />

      {/* S5: The Palomar Experience */}
      <DailyScheduleSection />

      {/* S6: Player Development System */}
      <DevelopmentSection />

      {/* S7: Facilities Showcase */}
      <FacilitiesSection />

      {/* S8: Recruiting Standards */}
      <RecruitingStandardsSection />

      {/* S9: Opportunity Index */}
      <OpportunityIndexSection />

      {/* S10: Player Outcomes */}
      <OutcomesSection />

      {/* S11: FAQ */}
      <FAQSection />

      {/* S12: Recruit Inquiry Form */}
      <RecruitFormSection />

      {/* S14: Why Programs Use This */}
      <WhyProgramsSection />

      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-black/90 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3 pb-safe">
        <a
          href="#recruit-form"
          className="block w-full text-center px-4 py-3 rounded-xl bg-[#003087] text-white text-sm font-bold"
        >
          Get Recruited by Palomar Baseball →
        </a>
      </div>
    </main>
  );
}
