"use client";

import React from "react";

export function ArticleVisionIntro() {
  const comparisons = [
    {
      label: "Mission",
      description: "Why the organization exists."
    },
    {
      label: "Strategy",
      description: "The choices we make about how we will move toward the vision."
    },
    {
      label: "Roadmap",
      description: "The sequence of problems, outcomes, and initiatives we believe will move us forward."
    },
    {
      label: "Vision",
      description: "The future state we are trying to create."
    }
  ];

  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What a product vision actually is
          </h2>

          {/* Body Copy */}
          <div className="space-y-4 mb-12">
            <p className="text-base leading-relaxed text-foreground">
              A product vision describes the future we are trying to create for a specific group of people and why that future matters.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              For me, a useful vision is not simply an inspirational statement. It is a decision-making tool.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              When a team is debating features, priorities, technical investments, or trade-offs, the vision should help answer a simple question:
            </p>

            <p className="text-lg font-medium text-foreground italic px-4 md:px-6 py-3 border-l-2" style={{ borderLeftColor: 'var(--coral-accessible)' }}>
              "Does this move us closer to the future we said we wanted to create?"
            </p>

            <p className="text-base leading-relaxed text-foreground">
              If the vision cannot help the team make those decisions, it is probably too vague to be useful.
            </p>
          </div>

          {/* Supporting Block */}
          <div className="bg-soft-peach/20 dark:bg-soft-surface rounded-lg p-6 md:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              A vision is not the same as...
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {comparisons.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
