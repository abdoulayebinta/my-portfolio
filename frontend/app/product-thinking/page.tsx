import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductLifecycleWrapper } from "@/components/sections/product-lifecycle-wrapper";
import { EditorialSection } from "@/components/sections/editorial-section";
import { ProductThinkingCTA } from "@/components/sections/product-thinking-cta";
import { getAllProductThinkingPosts, getFeaturedProductThinkingPost } from "@/lib/product-thinking";

export const metadata: Metadata = {
  title: "Product Thinking | Abdoulaye Bah",
  description: "Product decisions, trade-offs, and lessons from real work.",
};

export default function ProductThinkingPage() {
  const posts = getAllProductThinkingPosts();
  const featured = getFeaturedProductThinkingPost();

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Featured Decision */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column */}
            <div className="md:col-span-7">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Product Thinking
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  How I reason through product problems—and decide what to do next.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I started in software engineering, so I tend to look at product problems from both sides: the person experiencing the problem and the systems, data, integrations, constraints, and failure modes underneath it. Here I share the frameworks, mental models, trade-offs, and technical thinking I use to make product decisions.
                </p>
              </div>
            </div>

            {/* Right Column - Featured Decision */}
            {featured && (
              <div className="md:col-span-5">
                <div className="bg-soft-peach/40 dark:bg-soft-surface border border-border rounded-lg p-6 md:p-8 border-t-4 border-t-[#6366F1]">
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Featured Thinking
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#6366F1]"></div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                        {featured.lifecycle || 'Discovery'} · {featured.format || 'Decision Memo'}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featured.title}
                  </h2>

                  {featured.context && (
                    <div className="mb-5 pb-5 border-b border-border/40">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Context:</span> {featured.context}
                      </p>
                    </div>
                  )}

                  {featured.format === "Field Note" && featured.summary ? (
                    <div className="mb-5 pb-5 border-b border-border/40 bg-muted/30 -mx-6 -mb-5 px-6 py-5">
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-muted-foreground">Supporting lesson:</span>
                      </p>
                      <p className="text-sm text-foreground mt-2">
                        {featured.summary}
                      </p>
                    </div>
                  ) : featured.keyDecision ? (
                    <div className="mb-5 pb-5 border-b border-border/40 bg-muted/30 -mx-6 -mb-5 px-6 py-5">
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-muted-foreground">Key Decision:</span>
                      </p>
                      <p className="text-sm text-foreground mt-2">
                        {featured.keyDecision}
                      </p>
                    </div>
                  ) : null}

                  {featured.myRole && featured.format !== "Field Note" && (
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">My Role:</span> {featured.myRole}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground">
                      {featured.readingTime}
                    </span>
                    <a
                      href={`/product-thinking/${featured.slug}`}
                      className="text-sm font-medium hover:underline transition-colors inline-flex items-center gap-2"
                      style={{ color: 'var(--coral-accessible)' }}
                    >
                      {featured.format === "Field Note" ? "Read the field note" : featured.format === "Framework" ? "Read the framework" : "Read the decision"} →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProductLifecycleWrapper posts={posts} featured={featured} />
      <EditorialSection featuredDecision={featured} />
      <ProductThinkingCTA />

      <Footer />
    </main>
  );
}
