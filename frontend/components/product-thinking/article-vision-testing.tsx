"use client";

import React from "react";

interface TestItem {
  number: string;
  title: string;
  question: string;
  explanation: string;
}

const TEST_ITEMS: TestItem[] = [
  {
    number: "01",
    title: "IS IT SPECIFIC ABOUT WHO?",
    question: "Can the team identify whose future we are trying to improve?",
    explanation:
      "If the vision could apply equally to every possible user, it is probably too broad."
  },
  {
    number: "02",
    title: "DOES IT DESCRIBE AN OUTCOME, NOT A FEATURE?",
    question: "A vision should describe what becomes meaningfully better for the user.",
    explanation:
      "It should leave room for different solutions rather than locking the team into a feature or technology too early."
  },
  {
    number: "03",
    title: "DOES IT HELP US SAY NO?",
    question: "A useful vision creates boundaries.",
    explanation:
      "If two opportunities compete for attention, the vision should help the team identify which one moves the product closer to the intended future."
  },
  {
    number: "04",
    title: "CAN MULTIPLE STRATEGIES SUPPORT IT?",
    question: "A vision should be more durable than a roadmap.",
    explanation:
      "The strategy, technology, or sequence of initiatives may change while the future we are trying to create remains stable."
  },
  {
    number: "05",
    title: "CAN THE TEAM EXPLAIN IT SIMPLY?",
    question: "People across product, design, engineering, and the business should be able to understand the direction without needing a long presentation.",
    explanation: ""
  }
];

export function ArticleVisionTesting() {
  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How I test whether a vision is useful
          </h2>

          {/* Intro */}
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            Once I have a draft vision, I do not evaluate it by how inspiring it sounds. I evaluate whether it can actually help a team make product decisions.
          </p>

          {/* Test Items */}
          <div className="space-y-8 mb-12">
            {TEST_ITEMS.map((item, index) => (
              <div key={item.number}>
                <div className="flex gap-6 md:gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span
                      className="text-lg md:text-xl font-bold tracking-widest"
                      style={{ color: 'var(--coral-accessible)' }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base font-medium text-foreground mb-3">
                      {item.question}
                    </p>
                    {item.explanation && (
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {item.explanation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Divider between items (but not after the last one) */}
                {index < TEST_ITEMS.length - 1 && (
                  <div className="mt-8 border-b border-border/30" />
                )}
              </div>
            ))}
          </div>

          {/* Decision Test Callout */}
          <div className="bg-muted/40 dark:bg-muted/20 rounded-lg p-6 md:p-8 border border-border/40">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The Decision Test
            </h3>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-foreground">
                When I am unsure whether a vision is useful, I ask:
              </p>
              <p className="text-base font-medium text-foreground italic px-4 md:px-6 py-3 border-l-2" style={{ borderLeftColor: 'var(--coral-accessible)' }}>
                "If we had two reasonable product opportunities in front of us, would this vision help us choose between them?"
              </p>
              <p className="text-base leading-relaxed text-foreground">
                If the answer is no, the vision probably needs more clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
