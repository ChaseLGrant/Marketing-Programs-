import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { CoachesSection } from "@/components/sections/CoachesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAFBFC]">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <FounderSection />
      <CoachesSection />
      <ComparisonSection />
      <InvestmentSection />
      <FAQSection />
      <ApplicationForm />
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <a
          href="#apply"
          className="block rounded-full bg-[#155DFC] px-5 py-3 text-center text-sm font-extrabold text-white"
        >
          See if your athlete qualifies →
        </a>
      </div>
    </main>
  );
}
