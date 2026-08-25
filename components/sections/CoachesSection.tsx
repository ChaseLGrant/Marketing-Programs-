import { ArrowRight } from "lucide-react";

const stats = [
  { value: "100+", label: "Real college & pro coaches on the team" },
  { value: "D1–JUCO", label: "Every division represented" },
  { value: "7+", label: "Sports and growing" },
];

export function CoachesSection() {
  return (
    <section id="coaches" className="px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">
            Your athlete's corner
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl">
            An elite recruiting team of <span className="text-[#155DFC]">100+ real college and professional coaches.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4A5565]">
            Real, current and former college and pro coaches — the people who actually sit in the
            room when a recruiting class comes together. We pull the right ones for your athlete's
            sport, position, and level, so the plan is built by people who recruit that level for a living.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[1.35rem] border border-[#E5E7EB] bg-white p-6 text-center shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
            >
              <div className="text-4xl font-extrabold tracking-[-0.04em] text-[#155DFC]">{stat.value}</div>
              <div className="mt-2 text-sm font-bold text-[#4A5565]">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-[#4A5565]">
          You don't have to figure out which coach your athlete needs. That's our job — we match the
          right person to the sport, position, and level, and we stay in it with you.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#155DFC] px-7 py-4 text-base font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(21,93,252,0.7)] transition hover:bg-[#1447E6]"
          >
            See if your athlete qualifies
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://theathletemarket.com/search/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#155DFC] px-7 py-4 text-base font-extrabold text-[#155DFC] transition hover:bg-[#EFF6FF]"
          >
            Browse the full coach roster
          </a>
        </div>
      </div>
    </section>
  );
}
