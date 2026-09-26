"use client";

import React from "react";

const OPEN_QUESTIONS = [
  {
    id: 1,
    question: "How should PMs evaluate non-deterministic AI features?",
    tags: ["AI", "Product"]
  },
  {
    id: 2,
    question: "Where should product responsibility end and platform responsibility begin?",
    tags: ["Platforms", "System Design"]
  },
  {
    id: 3,
    question: "How much user data is actually necessary for personalization?",
    tags: ["Privacy", "Data"]
  }
];

export function CurrentlyExploring() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        Currently Exploring
      </p>

      <h3 className="text-2xl md:text-3xl font-bold mb-3">
        Currently Exploring
      </h3>

      <p className="text-base text-muted-foreground mb-8">
        Questions I'm actively investigating.
      </p>

      <div className="space-y-6">
        {OPEN_QUESTIONS.map((item, index) => (
          <div key={item.id}>
            <p className="text-base text-foreground mb-3">
              {item.question}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {index < OPEN_QUESTIONS.length - 1 && (
              <div className="border-b border-border/40 my-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
