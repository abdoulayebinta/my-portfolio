"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "short" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* AB Monogram - Premium minimal design */}
      <div className="flex items-center justify-center w-10 h-10 relative group">
        {/* Subtle background indicator */}
        <div className="absolute inset-0 rounded-lg bg-secondary/40 dark:bg-secondary/30 transition-colors group-hover:bg-secondary/60 dark:group-hover:bg-secondary/50" />

        {/* Monogram text */}
        <span className="relative font-bold text-sm tracking-tight text-foreground dark:text-foreground transition-colors">
          AB
        </span>
      </div>

      {/* Signature-style name text - only for full variant */}
      {variant === "full" && (
        <span className="hidden sm:inline text-2xl md:text-[28px] lg:text-[32px] font-normal text-foreground dark:text-foreground tracking-wide signature-name">
          Abdoulaye Bah
        </span>
      )}
    </div>
  );
}

