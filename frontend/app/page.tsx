"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { CaseStudies } from "@/components/sections/case-studies";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a Product Manager with a background in Data Science and Engineering. I've spent the last 5 years building AI-powered products that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My philosophy is simple: <strong className="text-foreground">Technology should serve humanity, not the other way around.</strong> I thrive in ambiguous environments, love turning chaos into structure, and am obsessed with user experience.
            </p>
          </div>
        </div>
      </section>

      <CaseStudies />
      
      <Skills />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/20 p-8 rounded-2xl border border-border relative"
              >
                <Quote className="absolute top-6 right-6 text-purple-500/20 w-10 h-10" />
                <p className="text-muted-foreground mb-6 italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
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

