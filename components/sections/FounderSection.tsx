const chips = [
  "Former college baseball player",
  "~6 yrs in college baseball",
  "JUCO recruiting coordinator",
];

export function FounderSection() {
  return (
    <section className="px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">
            Who you're working with
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl">
            He spent six years on the <span className="text-[#155DFC]">other side of the recruiting desk.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <div>
            <div className="aspect-[4/5] rounded-[1.5rem] border border-[#E5E7EB] bg-gradient-to-b from-[#EFF6FF] to-white p-8 shadow-[0_18px_40px_-28px_rgba(16,24,40,0.4)]">
              <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] border border-dashed border-[#C6D2E6] bg-[#F7F9FC] text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#155DFC] text-3xl font-extrabold text-white">
                  CG
                </div>
                <p className="mt-5 text-xl font-extrabold tracking-[-0.02em] text-[#101828]">Chase Grant</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#6A7282]">
                  Founder of The Athlete Market and former college recruiting coordinator.
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm font-bold text-[#4A5565]">Chase Grant · Founder</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-bold text-[#155DFC]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4A5565]">
              <p>
                Chase Grant played college baseball, then spent roughly six years working inside
                college baseball and recruiting — including as a recruiting coordinator at the
                junior-college level. He read the emails families sent. He watched the film they
                submitted. He sat in the room when a class came together.
              </p>
              <p>Over years of working with athletes, families, and college coaches, he kept seeing the same thing:</p>
              <blockquote className="border-l-4 border-[#155DFC] pl-5 text-2xl font-extrabold tracking-[-0.03em] text-[#101828] sm:text-3xl">
                Families were spending thousands on travel teams, showcases, lessons, equipment, and camps — with almost no professional guidance on the recruiting process itself.
              </blockquote>
              <p>Every other part of development had a coach. The most consequential part didn't.</p>
              <p>
                The Athlete Market was built to change that. Today it brings together current and
                former college coaches, professional coaches, former college athletes, and real
                recruiting experience — so families don't have to guess their way through the one
                part of the journey they only get to do once.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
