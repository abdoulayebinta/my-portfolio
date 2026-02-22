"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-6 hover:bg-secondary/80 transition-colors cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">Open to new opportunities</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Building the next generation of <br />
              <span className="text-gradient">Intelligent Products</span>
            </h1>

            <p
              className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Hi, I'm <strong className="text-foreground">Abdoulaye Binta Bah</strong>. A Strategic AI & Data Product Manager shaping decision intelligence across healthcare, education, and global systems. Specializing in LLMs, Predictive Analytics, and Enterprise Scale.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link href="#case-studies" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto group text-base h-12 px-8">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Professional Photo */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative w-full max-w-md aspect-[4/5] group">
              {/* Abstract Background Shapes behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-500/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-700" />
              
              {/* Image Container */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10 bg-secondary/20 backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                
                {/* Placeholder Professional Image */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Abdoulaye Bah - AI Product Manager" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="glass p-4 rounded-xl flex items-center gap-3 border border-white/20 bg-black/40 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Abdoulaye Bah</p>
                      <p className="text-white/70 text-xs">AI Product Leader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Cards - Moved to bottom */}
        <div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500"
        >
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500 group-hover:scale-110 transition-transform">
              <Brain size={24} />
            </div>
            <h3 className="font-semibold mb-2">AI Strategy</h3>
            <p className="text-sm text-muted-foreground">Defining the "Why" and "How" of AI adoption.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
              <Database size={24} />
            </div>
            <h3 className="font-semibold mb-2">Data Systems</h3>
            <p className="text-sm text-muted-foreground">Architecting scalable data pipelines & infrastructure.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h3 className="font-semibold mb-2">Global Impact</h3>
            <p className="text-sm text-muted-foreground">Scaling products to millions of users worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

