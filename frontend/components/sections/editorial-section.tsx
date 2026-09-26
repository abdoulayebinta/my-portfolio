"use client";

import React from "react";
import { CurrentlyExploring } from "./currently-exploring";
import { PatternsInThinking } from "./patterns-in-thinking";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface EditorialSectionProps {
  featuredDecision?: ProductThinkingPost;
}

export function EditorialSection({ featuredDecision }: EditorialSectionProps) {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="md:pr-8 md:border-r border-border/40">
            <CurrentlyExploring />
          </div>

          {/* Right Column */}
          <div className="md:pl-8">
            <PatternsInThinking featuredDecision={featuredDecision} />
          </div>
        </div>
      </div>
    </section>
  );
}
