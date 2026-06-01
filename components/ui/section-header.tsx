"use client";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <p className="section-eyebrow mb-4">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
        {title}
      </h2>
      <div className={cn("section-divider mb-5", centered && "mx-auto")} />
      {subtitle && (
        <p className="text-base text-white/45 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
