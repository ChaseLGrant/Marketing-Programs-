"use client";
import { programData } from "@/lib/programData";

export function Footer() {
  const { program } = programData;

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#003087] flex items-center justify-center text-sm font-bold">
              P
            </div>
            <div>
              <div className="font-bold text-white">{program.shortName}</div>
              <div className="text-xs text-white/40">{program.location}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            {["#story", "#coaches", "#development", "#facilities", "#opportunities", "#outcomes", "#faq", "#recruit-form"].map((href) => (
              <a key={href} href={href} className="hover:text-white transition-colors capitalize">
                {href.replace("#", "").replace("-", " ")}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © 2025 Palomar College Baseball. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Powered by{" "}
            <span className="text-white/40 font-medium">Program Showcase</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
