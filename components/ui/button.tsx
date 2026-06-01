"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-[#003087] hover:bg-[#004bb5] text-white border border-[#003087] shadow-lg shadow-blue-900/30",
      secondary: "bg-[#C8102E] hover:bg-[#e01535] text-white border border-[#C8102E] shadow-lg shadow-red-900/30",
      outline: "bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white/50",
      ghost: "bg-transparent hover:bg-white/5 text-white border-none",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer tracking-wide",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
