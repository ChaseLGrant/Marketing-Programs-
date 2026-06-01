"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Coaches", href: "#coaches" },
  { label: "Development", href: "#development" },
  { label: "Facilities", href: "#facilities" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#003087] flex items-center justify-center text-sm font-bold">
              P
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block">
              Palomar Baseball
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#recruit-form"
              className="hidden sm:flex items-center px-4 py-2 rounded-lg bg-[#003087] hover:bg-[#004bb5] text-white text-sm font-semibold transition-colors"
            >
              Get Recruited
            </a>
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Coach Login
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/20 text-white/70"
              aria-label="Menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                {mobileOpen ? (
                  <path d="M2 2L16 16M2 16L16 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M2 4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 14H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/70 hover:text-white font-medium py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#recruit-form"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-lg bg-[#003087] text-white text-sm font-semibold"
            >
              Get Recruited
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
