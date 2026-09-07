"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const stages = [
  { name: "Requirements", completed: true },
  { name: "Redesign", completed: true },
  { name: "Build", current: true, completed: false },
  { name: "UAT & Launch", completed: false }
];

export function CurrentlyBuilding() {
  return (
    <section className="pt-0 pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Container with peach background */}
        <div className="max-w-5xl bg-soft-peach dark:bg-soft-accent rounded-[10px] border border-border/20 dark:border-border/10 p-6 md:p-10">
          {/* Eyebrow Label */}
          <div className="mb-6 inline-block">
            <span className="tag-featured">Currently Building</span>
          </div>

          {/* Content */}
          <Link href="#" className="group block">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">

              {/* Left: Visual + Content */}
              <div className="flex gap-5 flex-grow min-w-0">
                {/* Visual Image - Larger */}
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-sm">
                    <Image
                      src="/visuals/boukili-visual.png"
                      alt="Boukili Digital Reading Platform"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 112px, 128px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  {/* Title - 2 lines max */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-foreground mb-2 leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2">
                    Boukili — Digital Reading Platform Modernization
                  </h3>

                  {/* Role */}
                  <div className="text-sm font-semibold text-primary dark:text-primary mb-3">
                    Product Manager
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground dark:text-muted-foreground mb-4 leading-relaxed">
                    Modernizing a French-language digital reading platform for children with improved accessibility, user experience, platform capabilities, and new learning features.
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-2">
                    {["EdTech", "Product Modernization", "Accessibility", "Platform"].map((tag) => (
                      <span
                        key={tag}
                        className="tag-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Timeline */}
              <div className="flex flex-col gap-4 w-full md:w-auto md:flex-shrink-0 md:min-w-80">
                {/* Timeline Container */}
                <div className="flex items-start relative">
                  {/* Continuous Background Line */}
                  <div className="absolute top-8 left-0 right-0 h-0.5 flex">
                    {stages.map((stage, idx) => (
                      <React.Fragment key={`line-${idx}`}>
                        <div className={`flex-1 h-full ${
                          stage.completed || (stage.current && stages[Math.max(0, idx - 1)]?.completed)
                            ? "bg-primary dark:bg-primary"
                            : "bg-muted-foreground/20 dark:bg-muted-foreground/10"
                        }`} />
                      </React.Fragment>
                    ))}
                  </div>

                  {stages.map((stage, idx) => (
                    <React.Fragment key={stage.name}>
                      {/* Stage Column */}
                      <div className="flex flex-col items-center flex-1 relative z-10">
                        {/* Circle Indicator */}
                        <div className="relative mb-3 bg-background dark:bg-background px-1">
                          {stage.completed ? (
                            <div className="w-8 h-8 rounded-full bg-primary dark:bg-primary flex items-center justify-center shadow-sm">
                              <CheckCircle2 size={20} className="text-white dark:text-white" />
                            </div>
                          ) : stage.current ? (
                            <div className="w-8 h-8 rounded-full bg-primary dark:bg-primary ring-3 ring-primary/30 dark:ring-primary/30 shadow-sm"></div>
                          ) : (
                            <div className="w-8 h-8 rounded-full border-2 border-muted-foreground/30 dark:border-muted-foreground/20 bg-background dark:bg-background"></div>
                          )}
                        </div>

                        {/* Stage Label */}
                        <span className={`text-xs font-semibold text-center leading-tight whitespace-nowrap px-1 ${
                          stage.completed ? "text-primary dark:text-primary" :
                          stage.current ? "text-primary dark:text-primary" :
                          "text-muted-foreground dark:text-muted-foreground"
                        }`}>
                          {stage.name}
                        </span>

                        {/* Current Label */}
                        {stage.current && (
                          <span className="text-xs font-medium text-primary dark:text-primary mt-1">
                            Current
                          </span>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                {/* CTA - Bottom Right */}
                <button className="flex items-center gap-2 text-sm font-medium text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary transition-colors self-start md:self-end group">
                  View the Rebuild
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
