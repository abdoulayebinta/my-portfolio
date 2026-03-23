"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export function TrustedBy() {
  const { t } = useLanguage();

  return (
    <section id="trusted-by" className="w-full py-16 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            {t.trustedBy.title}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.trustedBy.items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-secondary/10 border border-border hover:border-purple-500/30 hover:bg-secondary/20 transition-all duration-300 group text-center h-full"
            >
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {item.location}
              </p>
              <p className="text-sm text-muted-foreground/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

