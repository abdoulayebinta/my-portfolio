"use client";

import React from "react";

const CHECKLIST_ITEMS = [
  "Is the primary user clear?",
  "Is the problem stated without assuming a solution?",
  "Does the future state describe an outcome?",
  "Is the reason for pursuing it clear?",
  "Are important boundaries visible?",
  "Could this vision help us choose between two competing opportunities?"
];

export function ArticleVisionTemplate() {
  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A simple product vision template
          </h2>

          {/* Intro */}
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-12">
            When I need to turn the thinking into a concise statement, I use a simple structure like this.
          </p>

          {/* Template Container */}
          <div className="bg-soft-peach/20 dark:bg-soft-surface rounded-lg border border-border/40 p-8 md:p-10 mb-12">
            <div className="space-y-4 text-base leading-relaxed text-foreground">
              <p>
                For{" "}
                <span
                  className="font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: "var(--coral-accessible)",
                    color: "white",
                    opacity: 0.85
                  }}
                >
                  [WHO]
                </span>
                ,
              </p>

              <p>
                who experience{" "}
                <span
                  className="font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: "var(--coral-accessible)",
                    color: "white",
                    opacity: 0.85
                  }}
                >
                  [PROBLEM]
                </span>
                ,
              </p>

              <p>
                we want to create a future where{" "}
                <span
                  className="font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: "var(--coral-accessible)",
                    color: "white",
                    opacity: 0.85
                  }}
                >
                  [FUTURE STATE]
                </span>
                ,
              </p>

              <p>
                because{" "}
                <span
                  className="font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: "var(--coral-accessible)",
                    color: "white",
                    opacity: 0.85
                  }}
                >
                  [WHY IT MATTERS]
                </span>
                ,
              </p>

              <p>
                while staying true to{" "}
                <span
                  className="font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: "var(--coral-accessible)",
                    color: "white",
                    opacity: 0.85
                  }}
                >
                  [BOUNDARIES]
                </span>
                .
              </p>
            </div>
          </div>

          {/* Note about thinking tool */}
          <div className="mb-12 space-y-4">
            <p className="text-base leading-relaxed text-foreground">
              I treat this as a thinking tool, not a fill-in-the-blank formula.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              The quality of the vision depends on the quality of the thinking behind each part. If one of the inputs is vague, the final statement will be vague too.
            </p>
          </div>

          {/* Checklist section */}
          <div className="bg-muted/40 dark:bg-muted/20 rounded-lg border border-border/40 p-6 md:p-8 mb-12">
            <h3 className="text-base font-semibold text-foreground mb-6">
              Before I finalize a vision, I ask:
            </h3>

            <ul className="space-y-3">
              {CHECKLIST_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded border border-border/40 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "var(--coral-accessible)" }}></div>
                  </div>
                  <span className="text-base leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing statement */}
          <p className="text-base leading-relaxed text-foreground">
            If I cannot answer those questions confidently, I go back to the underlying problem rather than polishing the wording.
          </p>
        </div>
      </div>
    </section>
  );
}
