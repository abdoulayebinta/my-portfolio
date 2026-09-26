"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductThinkingCTA() {
  return (
    <section className="py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div style={{
          backgroundColor: 'var(--soft-peach)',
          padding: '1.25rem 1.5rem',
          borderRadius: '0.5rem'
        }} className="dark:bg-soft-surface flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center w-full">
            {/* Left: Heading */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Want to see how I put this thinking into practice?
              </h2>
            </div>

            {/* Center: Supporting copy */}
            <div>
              <p className="text-base md:text-lg text-muted-foreground">
                Explore the case studies behind the thinking.
              </p>
            </div>

            {/* Right: CTAs */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              {/* Primary CTA */}
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-md active:scale-95 whitespace-nowrap"
                style={{
                  backgroundColor: 'var(--coral-accessible)',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors hover:text-primary whitespace-nowrap"
                style={{
                  color: 'var(--coral-accessible)',
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
