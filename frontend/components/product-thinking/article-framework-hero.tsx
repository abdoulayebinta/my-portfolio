"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface ArticleFrameworkHeroProps {
  post: ProductThinkingPost;
}

export function ArticleFrameworkHero({ post }: ArticleFrameworkHeroProps) {
  return (
    <section className="py-12 md:py-16 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back Link */}
        <Link
          href="/product-thinking"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Product Thinking</span>
        </Link>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Product Thinking
          </p>

          {/* Stage + Format Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--coral-accessible)' }}></div>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--coral-accessible)' }}>
              {post.lifecycle} · {post.format}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          {/* Intro/Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {post.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags && post.tags.map(tag => (
              <span
                key={tag}
                className="text-xs bg-muted px-3 py-1.5 rounded-md text-muted-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
