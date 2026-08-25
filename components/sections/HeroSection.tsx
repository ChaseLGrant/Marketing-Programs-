"use client";

import { ArrowRight, Lock } from "lucide-react";
import { sports, gradYears } from "@/lib/applicationOptions";
import { useState } from "react";

export function HeroSection() {
  const [sport, setSport] = useState("");
  const [gradYear, setGradYear] = useState("");

  const startApplication = () => {
    window.dispatchEvent(
      new CustomEvent("athlete-market:start-application", {
        detail: { sport, gradYear },
      })
    );

    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] mx-auto h-[32rem] w-[32rem] rounded-full bg-[#155DFC]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#155DFC]">
            Private college recruiting advisory
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[#101828] sm:text-5xl lg:text-7xl">
            By the time most families start recruiting,{" "}
            <span className="text-[#155DFC]">coaches are already building their class.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4A5565] sm:text-xl">
            College recruiting happens earlier than most parents realize. Waiting for coaches to
            find your athlete can mean missing opportunities before you even know they existed.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_60px_-36px_rgba(16,24,40,0.45)] sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-[#101828]">
            See if your athlete qualifies
          </h2>
          <p className="mt-2 text-sm text-[#6A7282]">Start with two questions. About 60 seconds total.</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <select
              aria-label="Sport"
              value={sport}
              onChange={(event) => setSport(event.target.value)}
              className="h-14 rounded-2xl border-2 border-[#E5E7EB] bg-white px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
            >
              <option value="">Sport…</option>
              {sports.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <select
              aria-label="Graduation year"
              value={gradYear}
              onChange={(event) => setGradYear(event.target.value)}
              className="h-14 rounded-2xl border-2 border-[#E5E7EB] bg-white px-4 text-base font-medium text-[#101828] outline-none transition focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/15"
            >
              <option value="">Grad year…</option>
              {gradYears.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={startApplication}
            className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#155DFC] px-6 text-base font-extrabold text-white shadow-[0_14px_30px_-12px_rgba(21,93,252,0.7)] transition hover:bg-[#1447E6]"
          >
            Start application
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#6A7282]">
            <Lock className="h-4 w-4" />
            For families serious about playing at the next level
          </div>
        </div>
      </div>
    </section>
  );
}
