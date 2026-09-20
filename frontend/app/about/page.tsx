import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutStory } from "@/components/sections/about-story";

export const metadata: Metadata = {
  title: "About | Abdoulaye Bah",
  description: "Background, experience, and philosophy behind my approach to product management and building digital products.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <AboutStory />

      <Footer />
    </main>
  );
}
