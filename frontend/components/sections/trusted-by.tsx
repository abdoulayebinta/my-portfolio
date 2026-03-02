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
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {t.trustedBy.logos.map((logo, index) => (
            <div key={index} className="relative h-12 w-32 md:w-40">
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

