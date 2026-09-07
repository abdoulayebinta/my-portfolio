"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Home() {
  return (
    <section
      id="home"
      className="relative pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-[520px]">

          {/* Left column - Content */}
          <div className="flex flex-col space-y-8">

            {/* Main headline and Focus Areas */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Technical Product Manager & Builder
              </h1>

              {/* Focus Areas */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary dark:text-primary uppercase tracking-widest">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Healthcare', 'EdTech', 'Platforms', 'APIs', 'Data', 'AI'].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-xs font-medium text-foreground dark:text-foreground bg-soft-peach dark:bg-soft-peach border border-border/20 dark:border-border/30 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Supporting paragraph */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              <span className="font-medium text-foreground">Hi, I'm Abdoulaye.</span> I'm a former software engineer turned Product Manager and builder. I combine product thinking with technical depth in system design, data flows, integrations, and platform modernization—bringing that hybrid mindset to healthcare and EdTech products generating millions of user interactions and digital health platforms deployed globally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/work" className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  View Case Studies
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="https://www.linkedin.com/in/abdoulayebintabah/" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none linkedin-button-wrapper">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto gap-2 linkedin-cta"
                >
                  Connect on LinkedIn
                  <ArrowRight size={18} className="linkedin-arrow" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right column - Professional image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border/30 dark:border-border/20 shadow-sm">
                <Image
                  src="https://github.com/abdoulayebinta.png"
                  alt="Abdoulaye Bah"
                  fill
                  className="object-cover hero-photo"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
