import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Product Thinking | Abdoulaye Bah",
  description: "Insights on product strategy, technical decision-making, and lessons learned from building at scale across healthcare and EdTech.",
};

export default function ProductThinkingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Thinking</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights on product strategy, technical decision-making, and lessons learned from building at scale across healthcare and EdTech.
            </p>
          </div>
        </div>
      </section>

      <Blog />
      <Contact />

      <Footer />
    </main>
  );
}
