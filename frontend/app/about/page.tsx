import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutStory } from "@/components/sections/about-story";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "About | Abdoulaye Bah",
  description: "Background, experience, and philosophy behind my approach to product management and building digital products.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        </div>
      </section>

      <AboutStory />
      <Contact />

      <Footer />
    </main>
  );
}
