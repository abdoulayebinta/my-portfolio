"use client";

import React from "react";

interface FrameworkExampleItem {
  number: string;
  title: string;
  content: React.ReactNode;
}

const EXAMPLE_ITEMS: FrameworkExampleItem[] = [
  {
    number: "01",
    title: "WHO",
    content: (
      <div className="space-y-3">
        <p className="text-base leading-relaxed text-foreground">
          Teachers and students were treated as the core product audience, while parents remained an important secondary audience.
        </p>
        <div className="text-sm">
          <p className="text-muted-foreground mb-2">
            <span className="font-medium">Supporting evidence:</span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Parents accounted for 65% of account creation, but that alone did not determine who should sit at the center of the product experience.
          </p>
        </div>
      </div>
    )
  },
  {
    number: "02",
    title: "PROBLEM",
    content: (
      <p className="text-base italic text-foreground">
        [TO CONFIRM: the specific user problem the product vision was intended to solve]
      </p>
    )
  },
  {
    number: "03",
    title: "FUTURE STATE",
    content: (
      <p className="text-base italic text-foreground">
        [TO CONFIRM: the future experience or outcome the product vision described]
      </p>
    )
  },
  {
    number: "04",
    title: "WHY IT MATTERS",
    content: (
      <p className="text-base italic text-foreground">
        [TO CONFIRM: the product or organizational reason this future mattered]
      </p>
    )
  },
  {
    number: "05",
    title: "BOUNDARIES",
    content: (
      <p className="text-base italic text-foreground">
        [TO CONFIRM: principles or constraints that needed to remain true]
      </p>
    )
  }
];

export function ArticleVisionExample() {
  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Applying the framework to real work
          </h2>

          {/* Intro */}
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            A framework only becomes useful when it helps clarify a real product decision.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            Here is a simplified example of how I think about product vision using Boukili, a French-language reading platform for children.
          </p>

          {/* Real-world example container */}
          <div className="bg-soft-peach/20 dark:bg-soft-surface rounded-lg border border-border/40 p-8 md:p-10 mb-12">
            {/* Label */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Real-world example · Boukili
              </p>
            </div>

            {/* Framework items for example */}
            <div className="space-y-10">
              {EXAMPLE_ITEMS.map((item, index) => (
                <div key={item.number}>
                  <div className="flex gap-6 md:gap-8">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span
                        className="text-base font-bold tracking-widest"
                        style={{ color: 'var(--coral-accessible)' }}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </div>

                  {/* Divider between items */}
                  {index < EXAMPLE_ITEMS.length - 1 && (
                    <div className="mt-8 border-b border-border/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Closing paragraph */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-foreground">
              The point of the framework is not to fill in five boxes. It is to expose where the thinking is clear and where important questions are still unresolved.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              In this example, clarifying WHO the product should primarily serve already changes the conversation about what belongs in the vision, what gets prioritized, and what evidence the team still needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
