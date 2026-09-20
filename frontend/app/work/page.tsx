import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ProfessionalCaseStudies } from "@/components/sections/professional-case-studies";
import { ExperimentsBuilds } from "@/components/sections/experiments-builds";

export const metadata: Metadata = {
  title: "Work | Abdoulaye Bah",
  description: "Case studies of key projects, challenges overcome, and impact delivered across healthcare, EdTech, and platform modernization initiatives.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-eyebrow">Work</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Product Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Case studies and product builds across healthcare, EdTech, data platforms, integrations, and product modernization.
          </p>
        </div>
      </section>

      <ProfessionalCaseStudies />
      <ExperimentsBuilds />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in how I approach product problems?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore my product thinking or get in touch to discuss products, opportunities, and ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/product-thinking">
                <Button variant="secondary">
                  Product Thinking →
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="default">
                  Get in Touch →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
