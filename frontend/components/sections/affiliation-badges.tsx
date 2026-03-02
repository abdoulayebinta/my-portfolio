"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { CheckCircle2 } from "lucide-react";

export function AffiliationBadges() {
  const { t } = useLanguage();

  return (
    <section className="w-full border-y border-border/50 bg-secondary/20 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {t.affiliations.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm hover:border-purple-500/30 hover:shadow-md transition-all duration-300 cursor-default group"
            >
              <CheckCircle2 size={16} className="text-purple-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

