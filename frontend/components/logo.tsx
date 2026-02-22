"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "short" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5 font-bold tracking-tight group", className)}>
      {/* Icon / Symbol */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          {/* Abstract Monogram 'A' / Network Node */}
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text */}
      {variant !== "icon" && (
        <div className="flex flex-col leading-none">
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:to-purple-500 transition-all duration-300">
            {variant === "full" ? "Abdoulaye Bah" : "AB"}
          </span>
          {variant === "full" && (
            <span className="text-[0.65rem] text-muted-foreground font-medium tracking-widest uppercase">
              Product Manager
            </span>
          )}
        </div>
      )}
    </div>
  );
}

