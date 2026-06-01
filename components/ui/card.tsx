"use client";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, glow, gradient }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 bg-[#111] border border-white/[0.06]",
        glow && "card-glow",
        gradient && "gradient-border",
        className
      )}
    >
      {children}
    </div>
  );
}
