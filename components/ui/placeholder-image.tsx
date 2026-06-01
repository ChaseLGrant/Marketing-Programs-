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
  icon = "📷",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] text-white/30",
        aspectRatio,
        className
      )}
    >
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
    </div>
  );
}
