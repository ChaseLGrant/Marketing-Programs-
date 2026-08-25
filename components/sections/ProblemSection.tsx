import { ArrowRight, CircleHelp } from "lucide-react";

const facts = [
  "College programs have a limited number of roster spots, and they fill in a specific order.",
  "Coaches evaluate athletes years in advance — often long before a family starts paying attention.",
  "Recruiting classes take shape early, and quietly. Nothing is announced while it's happening.",
  "Divisions, conferences, and individual programs all recruit on different timelines and rules.",
];

const knowledge = [
  "Who to contact",
  "When to contact them",
  "What information to send",
  "Which programs realistically fit",
  "Which camps are worth attending",
  "When to follow up",
  "How to get evaluated",
  "How to build relationships with staffs",
];

export function ProblemSection() {
  return (
    <section className="px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">
            The problem
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl">
            Talent isn't always the problem. <span className="text-[#155DFC]">Timing is.</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] bg-[#EFF6FF] px-6 py-8 text-center">
          <p className="text-2xl font-extrabold tracking-[-0.03em] text-[#101828] sm:text-3xl">
            “If they're good enough, coaches will find them.”
          </p>
          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#155DFC]">
            The most expensive assumption in youth sports
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-[#4A5565]">
          Sometimes that's true. Often it isn't — because being good enough and being <em>found in time</em> are two different things.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {facts.map((fact, index) => (
            <div
              key={fact}
              className="rounded-[1.25rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF6FF] text-xs font-extrabold text-[#155DFC]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-base leading-7 text-[#4A5565]">{fact}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#E5E7EB] bg-[#F3F4F6] p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-[#101828]">
            Meanwhile, your athlete is expected to already know:
          </h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {knowledge.map((item) => (
              <div key={item} className="flex items-center gap-3 text-[15px] font-semibold text-[#4A5565]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#155DFC]">
                  <CircleHelp className="h-3.5 w-3.5" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-2xl font-extrabold tracking-[-0.03em] text-[#101828] sm:text-4xl">
          Your athlete shouldn't lose an opportunity because your family didn't know how the system worked.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-7 py-4 text-base font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(21,93,252,0.7)] transition hover:bg-[#1447E6]"
          >
            See if your athlete qualifies
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
