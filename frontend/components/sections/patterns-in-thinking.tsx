"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface PatternsInThinkingProps {
  featuredDecision?: ProductThinkingPost;
}

const PRINCIPLES = [
  {
    id: 1,
    title: "The buyer isn't always the user.",
    evidence:
      "In Boukili, parents accounted for 65% of account creation, while the product decision centered teachers and students as the core audience.",
    decisionSlug: "boukili-customer-discovery"
  }
];

export function PatternsInThinking({ featuredDecision }: PatternsInThinkingProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        Patterns in My Thinking
      </p>

      <h3 className="text-2xl md:text-3xl font-bold mb-3">
        Patterns in My Thinking
      </h3>

      <p className="text-base text-muted-foreground mb-8">
        Principles that guide my decisions, with the evidence behind them.
      </p>

      <div className="space-y-8">
        {PRINCIPLES.map((principle, index) => (
          <div key={principle.id}>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-sm font-bold text-muted-foreground">
                {String(principle.id).padStart(2, "0")}
              </span>
              <h4 className="text-lg md:text-xl font-bold">
                {principle.title}
              </h4>
            </div>

            <p className="text-base text-muted-foreground mb-4 ml-12">
              {principle.evidence}
            </p>

            <div className="ml-12">
              <Link
                href={`/product-thinking/${principle.decisionSlug}`}
                className="inline-flex items-center gap-2 group"
                style={{ color: 'var(--coral-accessible)' }}
              >
                <span className="text-sm font-medium">See the field note</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {index < PRINCIPLES.length - 1 && (
              <div className="border-b border-border/40 mt-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
