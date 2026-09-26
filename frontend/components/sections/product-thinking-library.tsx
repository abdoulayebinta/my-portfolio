"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProductThinkingPost } from "@/lib/product-thinking";
import type { ProductThinkingPost } from "@/lib/product-thinking";

const LIFECYCLE_COLORS: Record<string, { border: string; dot: string; label: string }> = {
  "Product Vision": {
    border: "border-t-[#EC4899]",
    dot: "bg-[#EC4899]",
    label: "text-[#EC4899]"
  },
  Ideation: {
    border: "border-t-[#F59E0B]",
    dot: "bg-[#F59E0B]",
    label: "text-[#F59E0B]"
  },
  Discovery: {
    border: "border-t-[#6366F1]",
    dot: "bg-[#6366F1]",
    label: "text-[#6366F1]"
  },
  Prioritization: {
    border: "border-t-[#4F46E5]",
    dot: "bg-[#4F46E5]",
    label: "text-[#4F46E5]"
  },
  Roadmapping: {
    border: "border-t-[#10B981]",
    dot: "bg-[#10B981]",
    label: "text-[#10B981]"
  },
  Execution: {
    border: "border-t-[#4338CA]",
    dot: "bg-[#4338CA]",
    label: "text-[#4338CA]"
  },
  "Measurement & Learning": {
    border: "border-t-[#8B5CF6]",
    dot: "bg-[#8B5CF6]",
    label: "text-[#8B5CF6]"
  }
};

interface ProductThinkingLibraryProps {
  posts: ProductThinkingPost[];
  featured?: ProductThinkingPost | null;
  filterStage?: string | null;
}

export function ProductThinkingLibrary({ posts, featured, filterStage }: ProductThinkingLibraryProps) {
  // Build the set of pieces to display
  let displayPosts: ProductThinkingPost[] = [...posts];

  // Add featured draft piece if it exists and not already in posts
  if (featured && featured.draft && !displayPosts.find(p => p.slug === featured.slug)) {
    displayPosts.unshift(featured);
  }

  // Filter by stage if one is selected
  if (filterStage) {
    displayPosts = displayPosts.filter(post => post.lifecycle === filterStage);
  }

  if (displayPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Published Thinking</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Frameworks, playbooks, technical thinking, and lessons from real product work.
          </p>
        </div>

        {/* Product Thinking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map(post => {
            const lifecycle = post.lifecycle || "Discovery";
            const colors = LIFECYCLE_COLORS[lifecycle];

            return (
              <Link
                key={post.slug}
                href={`/product-thinking/${post.slug}`}
                className="group h-full"
              >
                <div className={`h-full p-6 md:p-7 rounded-lg border ${colors.border} border-t-4 bg-card hover:bg-muted/50 transition-all duration-200 flex flex-col`}>
                  {/* Header: Stage and Format */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${colors.label}`}>
                        {lifecycle}
                        {post.format && ` · ${post.format}`}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Summary or Key Decision */}
                  {post.format === "Field Note" && post.summary ? (
                    <div className="mb-5 pb-5 border-b border-border/40 flex-grow">
                      <p className="text-sm text-foreground leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                  ) : post.keyDecision ? (
                    <div className="mb-5 pb-5 border-b border-border/40 flex-grow">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Key Decision
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {post.keyDecision}
                      </p>
                    </div>
                  ) : null}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer: Reading time and link */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
                    <span className="text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                    <div
                      className="flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      style={{ color: 'var(--coral-accessible)' }}
                    >
                      <span className="text-xs font-medium">Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
