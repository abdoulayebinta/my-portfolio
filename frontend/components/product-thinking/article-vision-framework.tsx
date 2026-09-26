"use client";

import React from "react";

interface FrameworkItem {
  number: string;
  title: string;
  question: string;
  explanation: string;
}

const FRAMEWORK_ITEMS: FrameworkItem[] = [
  {
    number: "01",
    title: "WHO",
    question: "Who are we trying to create value for?",
    explanation:
      "Be specific about the people whose problem or outcome should shape the product. The buyer, account creator, administrator, and end user may not be the same person."
  },
  {
    number: "02",
    title: "PROBLEM",
    question: "What meaningful problem or unmet need are we trying to change?",
    explanation:
      "Describe the problem in terms of the user's reality, not the feature we already want to build."
  },
  {
    number: "03",
    title: "FUTURE STATE",
    question: "What should be meaningfully different if we succeed?",
    explanation:
      "Describe the future experience or outcome we want to create without jumping directly to a particular solution."
  },
  {
    number: "04",
    title: "WHY IT MATTERS",
    question: "Why is this future worth pursuing?",
    explanation:
      "Connect the user outcome to the broader product or organizational reason for investing in it."
  },
  {
    number: "05",
    title: "BOUNDARIES",
    question: "What must remain true as we pursue the vision?",
    explanation:
      "Capture the principles or constraints that should continue guiding decisions—for example accessibility, privacy, trust, interoperability, or simplicity when they are genuinely relevant to the product."
  }
];

export function ArticleVisionFramework() {
  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My product vision framework
          </h2>

          {/* Intro */}
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            When I work on a product vision, I try to make five things explicit. The goal is not to write a beautiful sentence first. The goal is to create enough clarity that the team can make better decisions afterward.
          </p>

          {/* Framework Items */}
          <div className="space-y-8">
            {FRAMEWORK_ITEMS.map((item, index) => (
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
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.explanation}
                    </p>
                  </div>
                </div>

                {/* Divider between items (but not after the last one) */}
                {index < FRAMEWORK_ITEMS.length - 1 && (
                  <div className="mt-8 border-b border-border/30" />
                )}
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <p className="mt-12 text-base leading-relaxed text-foreground">
            Together, these five questions give me a direction I can use to evaluate strategies, opportunities, features, and trade-offs.
          </p>
        </div>
      </div>
    </section>
  );
}
