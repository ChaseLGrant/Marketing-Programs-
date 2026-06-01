"use client";
import { useEffect, useRef } from "react";
import { programData } from "@/lib/programData";

export function HeroSection() {
  const { program } = programData;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0d0005 50%, #050505 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      {/* Red glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #C8102E 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #C8102E 0%, transparent 70%)" }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

      <div className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto pt-16">
        {/* Eyebrow line */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-[#C8102E]/40" />
          <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#C8102E]">
            {program.conference}
          </span>
          <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-[#C8102E]/40" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6">
          <span className="text-white">Palomar</span>
          <br />
          <span className="text-[#C8102E]">Baseball</span>
        </h1>

        <p className="text-base sm:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          {program.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#story"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2">
            ⚾ Explore The Program
          </a>
          <a href="#recruit-form"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/25 hover:border-white/50 hover:bg-white/[0.04] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
            Submit Recruiting Info →
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {program.badges.map((badge) => (
            <span key={badge}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-white/50 border border-white/[0.12] bg-white/[0.03]">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-[0.6rem] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
