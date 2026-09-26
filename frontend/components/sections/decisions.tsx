"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface DecisionsProps {
  posts: ProductThinkingPost[];
  filterStage?: string | null;
}

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

export function Decisions({ posts, filterStage }: DecisionsProps) {
  const published = posts.filter(p => !p.featured && !p.draft);

  const filteredPosts = filterStage
    ? published.filter(p => p.lifecycle === filterStage)
    : published;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Decisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => {
            const lifecycle = post.lifecycle || "Execution";
            const colors = LIFECYCLE_COLORS[lifecycle];

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className={`h-full p-6 rounded-lg border ${colors.border} border-t-4 bg-card hover:bg-muted/50 transition-colors`}>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${colors.label}`}>
                        {lifecycle}
                      </span>
                    </div>
                    {post.format && (
                      <p className="text-xs text-muted-foreground font-medium">
                        {post.format}
                      </p>
                    )}
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.keyDecision || post.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--coral-accessible)' }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No decisions found for this stage.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
