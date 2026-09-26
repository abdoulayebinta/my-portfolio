"use client";

import React from "react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface ArticleHeroProps {
  post: ProductThinkingPost;
}

export function ProductThinkingArticleHero({ post }: ArticleHeroProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Product Thinking
          </p>

          {/* Stage + Format */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--coral-accessible)' }}></div>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--coral-accessible)' }}>
              {post.lifecycle || 'Discovery'} · {post.format || 'Decision Memo'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            {post.title}
          </h1>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Context */}
            {post.context && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Context
                </p>
                <p className="text-base text-foreground">
                  {post.context}
                </p>
              </div>
            )}

            {/* My Role */}
            {post.myRole && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  My Role
                </p>
                <p className="text-base text-foreground">
                  {post.myRole}
                </p>
              </div>
            )}
          </div>

          {/* Domains + Reading Time */}
          <div className="flex flex-wrap items-center gap-4">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {post.readingTime && (
              <span className="text-xs text-muted-foreground">
                {post.readingTime} read
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
