"use client";

import React from "react";

interface MistakeItem {
  number: string;
  title: string;
  example?: string;
  whyItFails: string;
  betterQuestion?: string;
}

const MISTAKE_ITEMS: MistakeItem[] = [
  {
    number: "01",
    title: "TURNING THE VISION INTO A FEATURE",
    example: "Build an AI-powered personalized learning platform.",
    whyItFails:
      "It commits to a solution before the team has established the future outcome it is trying to create.",
    betterQuestion: "What should become meaningfully better for the user?"
  },
  {
    number: "02",
    title: "MAKING IT SO BROAD THAT EVERYTHING FITS",
    whyItFails:
      "A vision like \"empower every learner to succeed\" may sound inspiring, but it does not create enough direction. If almost any feature can be justified by the vision, the vision is not helping the team prioritize.",
    betterQuestion: undefined
  },
  {
    number: "03",
    title: "CONFUSING VISION WITH STRATEGY",
    whyItFails:
      "The vision describes the future we want to create. Strategy describes the choices we make about how to get there. A strategy may change as the market, technology, evidence, or constraints change. The vision should usually be more durable.",
    betterQuestion: undefined
  },
  {
    number: "04",
    title: "WRITING THE VISION FOR THE PRESENT PRODUCT",
    whyItFails:
      "A vision should not simply describe what the product already does. It should create useful tension between the current reality and the future state the team is trying to reach.",
    betterQuestion: undefined
  },
  {
    number: "05",
    title: "WRITING IT ONCE AND NEVER USING IT AGAIN",
    whyItFails:
      "A vision has little value if it only appears in a strategy deck. I want the vision to show up in: prioritization discussions, roadmap conversations, product reviews, trade-off decisions, debates about what not to build.",
    betterQuestion: undefined
  }
];

export function ArticleVisionMistakes() {
  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Common ways product visions go wrong
          </h2>

          {/* Intro */}
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            Most weak product visions are not obviously bad. They usually sound reasonable, but they fail when the team needs them to guide an actual decision.
          </p>

          {/* Mistake Items */}
          <div className="space-y-8">
            {MISTAKE_ITEMS.map((item, index) => (
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
                    {/* Title */}
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                      {item.title}
                    </h3>

                    {/* Example */}
                    {item.example && (
                      <div className="mb-4 italic text-muted-foreground">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                          Example of weak framing:
                        </span>
                        <p className="text-base">"{item.example}"</p>
                      </div>
                    )}

                    {/* Why It Fails */}
                    <div className="mb-4">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                        Why it fails:
                      </span>
                      <p className="text-base leading-relaxed text-foreground">
                        {item.whyItFails}
                      </p>
                    </div>

                    {/* Better Question */}
                    {item.betterQuestion && (
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-2">
                          Better question:
                        </span>
                        <p className="text-base leading-relaxed text-foreground">
                          {item.betterQuestion}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider between items (but not after the last one) */}
                {index < MISTAKE_ITEMS.length - 1 && (
                  <div className="mt-8 border-b border-border/30" />
                )}
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <p className="mt-12 text-base leading-relaxed text-foreground">
            A strong product vision is not successful because people remember the exact words. It is successful when the team consistently makes better decisions because the direction is clear.
          </p>
        </div>
      </div>
    </section>
  );
}
