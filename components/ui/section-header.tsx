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
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
        {title}
      </h2>
      <div className={cn("divider mb-6", centered && "mx-auto")} />
      {subtitle && (
        <p className={cn("text-base text-white/45 max-w-xl leading-relaxed font-light", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
