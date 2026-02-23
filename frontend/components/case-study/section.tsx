"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function CaseStudySection({ id, title, icon, children, className }: CaseStudySectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16 scroll-mt-24 border-b border-border/40 last:border-0", className)}>
      <div className="flex items-center gap-3 mb-8">
        {icon && <div className="p-2 rounded-lg bg-secondary/50 text-purple-500">{icon}</div>}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

