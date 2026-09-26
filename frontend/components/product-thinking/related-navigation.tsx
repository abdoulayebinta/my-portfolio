"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface RelatedNavigationProps {
  post: ProductThinkingPost;
  nextPost?: ProductThinkingPost | null;
}

export function RelatedNavigation({ post, nextPost }: RelatedNavigationProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Related Case Study */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Related Case Study
            </p>
            <h3 className="text-lg font-bold mb-2">
              Boukili
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Digital reading platform for Franco-Ontarian children
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 group"
              style={{ color: 'var(--coral-accessible)' }}
            >
              <span className="text-sm font-medium">View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Next Product Thinking Piece */}
          {nextPost && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Next Product Thinking Piece
              </p>
              <h3 className="text-lg font-bold mb-2">
                {nextPost.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {nextPost.summary}
              </p>
              <Link
                href={`/product-thinking/${nextPost.slug}`}
                className="inline-flex items-center gap-2 group"
                style={{ color: 'var(--coral-accessible)' }}
              >
                <span className="text-sm font-medium">Continue Reading</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mt-16 pt-12 border-t border-border/40">
          <div className="bg-soft-peach/40 dark:bg-soft-surface rounded-lg px-6 md:px-10 py-5 md:py-7 flex items-center">
            <div className="w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Have a product problem worth discussing?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let's talk through challenges, decisions, and tradeoffs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-md active:scale-95"
                style={{
                  backgroundColor: 'var(--coral-accessible)',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
