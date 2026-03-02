"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export function TrustedBy() {
  const { t } = useLanguage();

  return (
    <section className="w-full border-y border-border/50 bg-secondary/20 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            {t.trustedBy.title}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {t.trustedBy.logos.map((logo, index) => (
            <div 
              key={index} 
              className="relative h-16 w-32 md:w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 p-2 rounded-lg dark:bg-white/90 dark:hover:bg-white"
            >
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill
                className="object-contain p-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

