"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Home as HomeSection } from "@/components/sections/home";
import { ImpactMetrics } from "@/components/sections/impact-metrics";
import { FeaturedWork } from "@/components/sections/featured-work";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <HomeSection />

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Featured Work */}
      <FeaturedWork />

      {/* Currently Building */}
      <CurrentlyBuilding />

      {/* What Colleagues Say */}
      <TestimonialsPreview />

      {/* Final CTA */}
      <section className="pt-20 md:pt-24 pb-20 md:pb-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Let's build products that matter.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore my case studies and product thinking, or connect with me to discuss opportunities, products, and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work">
              <Button size="lg" variant="secondary" className="gap-2">
                View Case Studies
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/product-thinking">
              <Button size="lg" variant="secondary" className="gap-2">
                Product Thinking
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get In Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

