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
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1 + 0.3,
        opacity: Math.random() * 0.18 + 0.03,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle red glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #C8102E 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #C8102E 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto pt-16">
        {/* Program logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/palomar-logo.png"
            alt="Palomar Comets"
            className="h-20 sm:h-28 w-auto"
            style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.6))" }}
          />
        </div>

        {/* Conference badge */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#C8102E]/70">
            {program.conference}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-black tracking-tighter leading-none mb-6">
          <span className="block text-6xl sm:text-8xl md:text-9xl text-white">PALOMAR</span>
          <span className="block text-6xl sm:text-8xl md:text-9xl text-[#C8102E]">BASEBALL</span>
        </h1>

        <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed mb-12 font-light mt-4">
          {program.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#story" className="btn-primary w-full sm:w-auto px-8 py-4 text-sm">
            Explore The Program
          </a>
          <a href="#recruit-form" className="btn-ghost w-full sm:w-auto px-8 py-4 text-sm">
            Submit Info
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {program.badges.map((badge) => (
            <span key={badge}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-white/30 border border-white/10 bg-white/[0.02]">
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/20" />
        <span className="text-[0.6rem] tracking-[0.25em] uppercase text-white/25 font-medium">scroll</span>
      </div>
    </section>
  );
}
