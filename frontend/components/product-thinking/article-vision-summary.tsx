"use client";

import React from "react";

const VISION_ITEMS = [
  "clarify who the product is primarily for",
  "describe the future outcome we want to create",
  "separate the vision from the solution",
  "explain why the future is worth pursuing",
  "make important boundaries visible",
  "evaluate competing opportunities",
  "say no to work that does not move the product toward that future",
  "keep the team aligned even when the roadmap changes"
];

export function ArticleVisionSummary() {
  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What I want a product vision to do
          </h2>

          {/* Intro */}
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            A strong product vision should reduce ambiguity, not add more words.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            By the time the vision is useful, I should be able to use it to guide real product conversations.
          </p>

          {/* Checklist */}
          <div className="mb-12">
            <p className="text-base font-medium text-foreground mb-6">
              A useful product vision should help me:
            </p>

            <ul className="space-y-3">
              {VISION_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded border border-border/40 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "var(--coral-accessible)" }}></div>
                  </div>
                  <span className="text-base leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Final Takeaway */}
          <div className="bg-soft-peach/20 dark:bg-soft-surface rounded-lg border border-border/40 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The Test
            </p>

            <p className="text-base leading-relaxed text-foreground mb-4">
              My test is simple:
            </p>

            <p className="text-base font-medium italic text-foreground px-4 md:px-6 py-3 border-l-2 mb-4" style={{ borderLeftColor: 'var(--coral-accessible)' }}>
              If the vision only sounds good in a presentation, it is not doing enough.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              I want a vision that survives contact with prioritization, technical constraints, new evidence, and difficult trade-offs.
            </p>

            <p className="text-base leading-relaxed text-foreground mt-4">
              That is when it becomes a product tool rather than a statement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
