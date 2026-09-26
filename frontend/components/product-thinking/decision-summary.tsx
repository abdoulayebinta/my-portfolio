"use client";

import React from "react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface DecisionSummaryProps {
  post: ProductThinkingPost;
}

export function DecisionSummary({ post }: DecisionSummaryProps) {
  const hasContent = post.keyDecision || post.tradeOff || post.outcomeOrMeasurement || post.myRole;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            At a Glance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Decision */}
            {post.keyDecision && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Decision
                </p>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  {post.keyDecision}
                </p>
              </div>
            )}

            {/* Trade-Off */}
            {post.tradeOff && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Trade-Off
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  {post.tradeOff}
                </p>
              </div>
            )}

            {/* Outcome / How I'd Measure It */}
            {post.outcomeOrMeasurement && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Outcome / How I'd Measure It
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  {post.outcomeOrMeasurement}
                </p>
              </div>
            )}

            {/* My Role (repeat from hero) */}
            {post.myRole && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  My Role
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  {post.myRole}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
