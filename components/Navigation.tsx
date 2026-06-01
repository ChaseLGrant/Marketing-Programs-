"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Coaches", href: "#coaches" },
  { label: "Who Thrives", href: "#who-thrives" },
  { label: "Development", href: "#development" },
  { label: "Facilities", href: "#facilities" },
  { label: "Uniforms & Gear", href: "#uniforms" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/palomar-logo.png"
              alt="Palomar Comets"
              className="h-9 w-auto"
            />
            <span className="font-bold text-white tracking-tight text-sm hidden sm:block">
              Palomar Baseball
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-xs text-white/55 hover:text-white hover:bg-white/[0.05] transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="#recruit-form"
              className="hidden sm:flex items-center px-4 py-2 rounded-lg bg-[#C8102E] hover:bg-[#a00d25] text-white text-xs font-bold transition-colors"
            >
              Get Recruited
            </a>
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-white/60 hover:text-white text-xs font-medium transition-all"
            >
              Coach Login
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {mobileOpen ? (
                  <path d="M2 2L14 14M2 14L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M2 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-black/98 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 py-5 grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-white/65 hover:text-white hover:bg-white/[0.05] font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="px-5 pb-5 grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-4">
            <a
              href="#recruit-form"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-3 rounded-xl bg-[#C8102E] text-white text-sm font-bold"
            >
              Get Recruited
            </a>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-3 rounded-xl border border-white/20 text-white/70 text-sm font-medium"
            >
              Coach Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
