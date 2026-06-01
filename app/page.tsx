import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { CoachesSection } from "@/components/sections/CoachesSection";
import { WhoThrivesSection } from "@/components/sections/WhoThrivesSection";
import { DailyScheduleSection } from "@/components/sections/DailyScheduleSection";
import { DevelopmentSection } from "@/components/sections/DevelopmentSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { UniformsSection } from "@/components/sections/UniformsSection";
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

      <HeroSection />
      <StorySection />
      <CoachesSection />
      <WhoThrivesSection />
      <DailyScheduleSection />
      <DevelopmentSection />
      <FacilitiesSection />
      <UniformsSection />
      <RecruitingStandardsSection />
      <OpportunityIndexSection />
      <OutcomesSection />
      <FAQSection />
      <RecruitFormSection />
      <WhyProgramsSection />

      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3">
        <a
          href="#recruit-form"
          className="block w-full text-center px-4 py-3 rounded-xl bg-[#C8102E] text-white text-sm font-bold"
        >
          Get Recruited by Palomar Baseball →
        </a>
      </div>
    </main>
  );
}
