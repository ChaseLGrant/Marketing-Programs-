export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3 text-[#101828]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155DFC] text-lg font-extrabold text-white">
            A
          </span>
          <div>
            <p className="text-lg font-extrabold tracking-[-0.03em]">The Athlete Market</p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6A7282]">
              Private College Recruiting Advisory
            </p>
          </div>
        </a>

        <a
          href="#apply"
          className="inline-flex items-center rounded-full bg-[#155DFC] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_26px_-14px_rgba(21,93,252,0.8)] transition hover:bg-[#1447E6]"
        >
          See if you qualify
        </a>
      </div>
    </header>
  );
}
