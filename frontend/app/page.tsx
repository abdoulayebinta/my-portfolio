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
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <Hero />

      <FeaturedVideo />
      
      <AboutStory />

      <CaseStudies />
      
      <Skills />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-secondary/20 p-8 rounded-2xl border border-border relative"
              >
                <Quote className="absolute top-6 right-6 text-purple-500/20 w-10 h-10" />
                <p className="text-muted-foreground mb-6 italic">&quot;{t.content}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image 
                      src={t.avatar} 
                      alt={t.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Blog />
      
      <Contact />
      
      <Footer />
    </main>
  );
}

