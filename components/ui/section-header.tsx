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
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/50 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
