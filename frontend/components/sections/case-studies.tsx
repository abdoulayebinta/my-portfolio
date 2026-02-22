"use client";

import React from "react";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl">
              Deep dives into complex problems solved with AI, Data, and Product Strategy.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-secondary/20 rounded-3xl p-6 md:p-8 border border-border hover:border-purple-500/30 transition-colors"
            >
              <div className="order-2 md:order-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-background border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-500 transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {study.description}
                </p>
                <Link href={`/case-studies/${study.slug}`}>
                  <Button variant="outline" className="group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all">
                    Read Case Study
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 md:order-2 relative aspect-video rounded-2xl overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

