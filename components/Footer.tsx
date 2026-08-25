export function Footer() {
  return (
    <footer className="bg-[#101828] px-5 py-12 text-[#98A2B3] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <a href="#top" className="inline-flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155DFC] text-lg font-extrabold text-white">
            A
          </span>
          <span className="text-xl font-extrabold tracking-[-0.03em]">The Athlete Market</span>
        </a>

        <p className="mt-5 max-w-5xl text-sm leading-7 text-[#8892A4]">
          The Athlete Market is an independent recruiting advisory service. We are not affiliated
          with, endorsed by, or acting on behalf of the NCAA, NAIA, NJCAA, or any college,
          university, or athletic program. We do not guarantee scholarships, offers, roster spots,
          or admission. We provide professional guidance, evaluation, strategy, and support
          throughout the recruiting process.
        </p>

        <div className="mt-8 border-t border-white/12 pt-5 text-sm font-semibold">
          © {new Date().getFullYear()} The Athlete Market · {" "}
          <a href="#apply" className="text-[#74A0FD] transition hover:text-white">
            Apply
          </a>
        </div>
      </div>
    </footer>
  );
}
