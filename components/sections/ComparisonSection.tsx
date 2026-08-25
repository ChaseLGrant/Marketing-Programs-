import { Check, X } from "lucide-react";

const withoutGuidance = [
  "Randomly emailing schools",
  "Attending every expensive showcase",
  "Guessing which programs are realistic",
  "Waiting for coaches to reach out",
  "Not knowing when to follow up",
  "Parents learning recruiting themselves",
  "Spending money without a strategy",
];

const withGuidance = [
  "A personalized recruiting plan",
  "A targeted college list",
  "Strategic coach communication",
  "Professional player evaluation",
  "Camp and showcase guidance",
  "Ongoing recruiting support",
  "A team working behind the scenes",
];

export function ComparisonSection() {
  return (
    <section className="bg-[#F3F4F6] px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">
            The difference
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl">
            Recruiting shouldn't feel like <span className="text-[#155DFC]">guessing.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-[#6A7282]">Without guidance</h3>
            <ul className="mt-4 space-y-4">
              {withoutGuidance.map((item) => (
                <li key={item} className="flex gap-3 border-b border-[#E5E7EB] pb-4 text-[15px] font-semibold text-[#6A7282] last:border-b-0 last:pb-0">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[#A9B4C6]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-[#101828] bg-[#101828] p-6 shadow-[0_28px_52px_-32px_rgba(16,24,40,0.7)] sm:p-8">
            <span className="inline-flex rounded-full bg-[#155DFC] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
              With The Athlete Market
            </span>
            <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-white">A team behind your athlete</h3>
            <ul className="mt-4 space-y-4">
              {withGuidance.map((item) => (
                <li key={item} className="flex gap-3 border-b border-white/12 pb-4 text-[15px] font-semibold text-[#E4E9F2] last:border-b-0 last:pb-0">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#74A0FD]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
