"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NextStepItem {
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const NEXT_STEPS: NextStepItem[] = [
  {
    eyebrow: "SEE IT IN PRACTICE",
    title: "Boukili",
    description: "See how product thinking translates into real product decisions and execution.",
    ctaText: "View Case Study",
    ctaHref: "/work"
  },
  {
    eyebrow: "NEXT IN PRODUCT THINKING",
    title: "Parents sign up, teachers engage: who is the real customer?",
    description: "A field note on why the person creating the account is not always the product's core user.",
    ctaText: "Read the Field Note",
    ctaHref: "/product-thinking/boukili-customer-discovery"
  },
  {
    eyebrow: "LET'S CONNECT",
    title: "Want to talk product?",
    description: "I'm always interested in thoughtful conversations about product, technology, healthcare, education, data, and AI.",
    ctaText: "Get In Touch",
    ctaHref: "/contact"
  }
];

export function ArticleNextSteps() {
  return (
    <section className="py-16 md:py-20 border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Continue Exploring
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Where to go next
          </h2>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {NEXT_STEPS.map((item, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Card */}
              <div className="flex flex-col h-full group">
                {/* Eyebrow */}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {item.eyebrow}
                </p>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center gap-2 font-medium text-sm hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--coral-accessible)' }}
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Divider between items on mobile/tablet */}
              {index < NEXT_STEPS.length - 1 && (
                <div className="md:hidden mt-8 pt-8 border-t border-border/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
