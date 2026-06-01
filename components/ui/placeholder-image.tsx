"use client";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
  icon?: string;
}

export function PlaceholderImage({
  label = "Image Placeholder",
  aspectRatio = "aspect-video",
  className,
  icon: _icon,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.08] bg-[#0a0a0a] text-white/20",
        aspectRatio,
        className
      )}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-2 opacity-30">
        <rect x="1" y="1" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 19L8 13L13 18L19 12L27 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[0.6rem] font-medium tracking-widest uppercase opacity-50">{label}</span>
    </div>
  );
}
