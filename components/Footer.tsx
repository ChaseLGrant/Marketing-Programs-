"use client";
import { programData } from "@/lib/programData";
import Link from "next/link";

export function Footer() {
  const { program } = programData;

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a] py-14 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/palomar-logo.svg" alt="Palomar Comets" className="h-10 w-auto" />
              <div>
                <div className="font-black text-white">{program.shortName}</div>
                <div className="text-xs text-white/35">{program.location}</div>
              </div>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              An elite recruiting platform showcasing the culture, development system, and facilities of Palomar College Baseball.
            </p>
          </div>

          {/* Sections */}
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/25 mb-4">Program</p>
            <ul className="space-y-2">
              {["#story", "#coaches", "#development", "#facilities", "#uniforms"].map((href) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/40 hover:text-white transition-colors capitalize">
                    {href.replace("#", "").replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/25 mb-4">Recruits</p>
            <ul className="space-y-2">
              {["#opportunities", "#outcomes", "#faq", "#recruit-form"].map((href) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/40 hover:text-white transition-colors capitalize">
                    {href.replace("#", "").replace("-", " ")}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="text-sm text-white/40 hover:text-white transition-colors">
                  Coach Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">© 2025 Palomar College Baseball. All rights reserved.</p>
          <p className="text-xs text-white/20">
            Powered by <span className="text-white/35 font-semibold">Program Showcase</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
