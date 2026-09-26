"use client";

import React from "react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface ArticleVideoProps {
  post: ProductThinkingPost;
}

export function ArticleVideo({ post }: ArticleVideoProps) {
  // Only render if videoUrl exists
  if (!post.videoUrl) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Watch
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prefer watching?
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
            I walk through the framework, how I use it, and where the trade-offs show up.
          </p>

          {/* Video Container */}
          <div className="mb-6">
            <div className="relative w-full bg-muted rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={post.videoUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={post.videoTitle || "Product Thinking Framework"}
              ></iframe>
            </div>
          </div>

          {/* Optional metadata below video */}
          {(post.videoTitle || post.videoDuration) && (
            <div className="text-sm text-muted-foreground">
              {post.videoTitle && <span>{post.videoTitle}</span>}
              {post.videoTitle && post.videoDuration && <span> · </span>}
              {post.videoDuration && <span>{post.videoDuration}</span>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
