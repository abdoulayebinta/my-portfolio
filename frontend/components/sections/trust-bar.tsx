"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { CheckCircle2, Building2, Landmark, BookOpen, Languages, Globe } from "lucide-react";

export function TrustBar() {
  const { t } = useLanguage();

  const icons = [Building2, Landmark, BookOpen, Languages, Globe];

  return (
    <section className="w-full border-y border-border/50 bg-secondary/20 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
          {t.affiliations.map((badge, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300 group cursor-default"
              >
                <div className="p-2 rounded-full bg-background border border-border group-hover:border-purple-500/30 group-hover:shadow-sm transition-all">
                  <Icon size={18} className="text-muted-foreground group-hover:text-purple-500 transition-colors" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

