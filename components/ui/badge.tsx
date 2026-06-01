"use client";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "blue" | "red" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white border border-white/20",
    gold: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    blue: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    red: "bg-red-500/20 text-red-400 border border-red-500/30",
    outline: "bg-transparent text-white border border-white/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
