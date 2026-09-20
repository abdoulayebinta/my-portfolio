"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutStory() {
  return (
    <>
      {/* Section 1: About Me Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl">

            {/* Text Column */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                A Product Thinker & Technical Builder
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Content to be added
                </p>
              </div>
            </div>

            {/* Portrait Column */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border/40">
                <p className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  [Portrait image here]
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 2: My Career Journey */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Career Journey</h2>
            <p className="text-lg text-muted-foreground">
              Content to be added
            </p>
          </div>

          <div className="space-y-12">
            {/* Career milestone 1 */}
            <div className="border-l-2 border-primary/30 pl-8">
              <div className="flex gap-3 mb-2">
                <div className="text-sm font-semibold text-primary">Timeline</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Role / Company</h3>
              <p className="text-muted-foreground leading-relaxed">
                Content to be added
              </p>
            </div>

            {/* Career milestone 2 */}
            <div className="border-l-2 border-primary/30 pl-8">
              <div className="flex gap-3 mb-2">
                <div className="text-sm font-semibold text-primary">Timeline</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Role / Company</h3>
              <p className="text-muted-foreground leading-relaxed">
                Content to be added
              </p>
            </div>

            {/* Career milestone 3 */}
            <div className="border-l-2 border-primary/30 pl-8">
              <div className="flex gap-3 mb-2">
                <div className="text-sm font-semibold text-primary">Timeline</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Role / Company</h3>
              <p className="text-muted-foreground leading-relaxed">
                Content to be added
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 3: How I Work + What I Focus On */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How I Work + What I Focus On</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Subsection 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Principles</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">Content to be added</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">Content to be added</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">Content to be added</p>
                </div>
              </div>
            </div>

            {/* Subsection 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">Content to be added</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">Content to be added</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-muted-foreground">Content to be added</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 4: Beyond the Role + Recommendations */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Beyond the Role</h2>

          <div className="space-y-8">

            {/* Subsection */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Interests & Influences</h3>
              <p className="text-muted-foreground leading-relaxed">
                Content to be added
              </p>
            </div>

            {/* Recommendations/Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Recommended Reads</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-soft-peach/30 border border-border/40">
                  <p className="text-sm text-muted-foreground">Content to be added</p>
                </div>
                <div className="p-4 rounded-lg bg-soft-peach/30 border border-border/40">
                  <p className="text-sm text-muted-foreground">Content to be added</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 5: Closing CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Content to be added
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <Button variant="secondary" className="[cursor:pointer]">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="default" className="[cursor:pointer]">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
