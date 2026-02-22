"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle, Layers, Lightbulb, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/#case-studies">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents (Sticky) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-1">
                <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Contents</p>
                {['Context', 'Problem', 'Vision', 'AI Opportunity', 'System Design', 'Decisions', 'Results'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors border-l-2 border-transparent hover:border-purple-500 pl-4"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="lg:col-span-9 space-y-16">
              
              {/* Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden aspect-video shadow-2xl"
              >
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
              </motion.div>

              {/* Sections */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                
                <div id="context" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Lightbulb size={24} /></div>
                    Context & Background
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{study.content.context}</p>
                </div>

                <div id="problem" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><Target size={24} /></div>
                    The Problem
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{study.content.problem}</p>
                </div>

                <div id="vision" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Target size={24} /></div>
                    Vision & Strategy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{study.content.vision}</p>
                </div>

                <div id="ai-opportunity" className="scroll-mt-24 bg-secondary/30 p-8 rounded-2xl border border-border">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Layers size={24} /></div>
                    AI & Data Opportunity
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{study.content.aiOpportunity}</p>
                </div>

                <div id="system-design" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Layers size={24} /></div>
                    System Design
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{study.content.systemDesign}</p>
                  {/* Placeholder for diagram */}
                  <div className="my-8 p-8 bg-secondary/50 rounded-xl border border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground">
                    [System Architecture Diagram Placeholder]
                  </div>
                </div>

                <div id="decisions" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500"><CheckCircle size={24} /></div>
                    Key Decisions & Tradeoffs
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{study.content.decisions}</p>
                </div>

                <div id="results" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><TrendingUp size={24} /></div>
                    Metrics & Impact
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{study.content.metrics}</p>
                </div>

                <div className="mt-12 pt-12 border-t border-border">
                  <h3 className="text-xl font-bold mb-4">Lessons Learned</h3>
                  <p className="text-muted-foreground italic">"{study.content.lessons}"</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

