"use client";
import { useEffect, useRef } from "react";
import { programData } from "@/lib/programData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { program } = programData;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
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

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000408 0%, #000d1a 40%, #000510 100%)",
      }}
    >
      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #003087 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #C8102E 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse, #FFD700 0%, transparent 70%)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400">
            {program.conference}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
        </div>

        {/* Main headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6 text-white">
          {program.name.split(" ").slice(0, 1).join(" ")}{" "}
          <span className="gradient-text-gold">
            {program.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
          {program.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#story">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 text-base">
              <span>⚾</span>
              {program.ctaPrimary}
            </Button>
          </a>
          <a href="#recruit-form">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base">
              {program.ctaSecondary}
              <span>→</span>
            </Button>
          </a>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {program.badges.map((badge) => (
            <Badge key={badge} variant="outline" className="text-white/60 border-white/20">
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
