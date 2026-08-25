import { ArrowRight } from "lucide-react";

export function InvestmentSection() {
  return (
    <section className="bg-[#101828] px-5 py-[72px] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#74A0FD]">
            Before you apply
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            This is for families who want <span className="text-[#74A0FD]">professional recruiting support.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#CDD5E0]">
            The Athlete Market is a hands-on recruiting service, not a free recruiting database. Our
            programs are built for families who want professional guidance and are prepared to invest
            in helping their athlete navigate the process correctly.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[1.5rem] border border-[#74A0FD]/35 bg-[#155DFC]/14 px-6 py-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#74A0FD]">Investment</p>
          <p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
            Private recruiting programs typically require an investment of several thousand dollars,
            depending on the athlete's needs and level of support.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/12 px-6 py-7 text-[15px] leading-7 text-[#CDD5E0]">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#98A2B3]">
              If you're looking for free help
            </p>
            If your family is looking exclusively for free recruiting assistance, we probably aren't
            the right fit right now — and that's completely okay. There's good free information out
            there and we'll point you toward some of it.
          </div>

          <div className="rounded-[1.5rem] border border-[#74A0FD]/45 bg-[#155DFC]/12 px-6 py-7 text-[15px] leading-7 text-[#E4E9F2]">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#74A0FD]">
              If you want it done properly
            </p>
            If you're serious about professional help with one of the biggest decisions of your
            athlete's life, we'd love to learn about them — and to tell you honestly whether we can help.
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#155DFC] px-7 py-4 text-base font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(21,93,252,0.7)] transition hover:bg-[#1447E6]"
          >
            Apply for a recruiting consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-sm text-[#98A2B3]">
            Applications are reviewed individually. We don't take every family.
          </p>
        </div>
      </div>
    </section>
  );
}
