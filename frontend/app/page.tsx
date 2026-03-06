"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturedVideo } from "@/components/sections/featured-video";
import { AboutStory } from "@/components/sections/about-story";
import { Skills } from "@/components/sections/skills";
import { CaseStudies } from "@/components/sections/case-studies";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { TrustedBy } from "@/components/sections/trusted-by";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <Hero />

      <TrustedBy />

      <FeaturedVideo />

      <AboutStory />

      <CaseStudies />

      <Skills />

      <Blog />
      
      <Contact />
      
      <Footer />
    </main>
  );
}

