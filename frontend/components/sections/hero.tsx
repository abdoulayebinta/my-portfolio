"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">Open to new opportunities</span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Building the next generation of <br />
            <span className="text-gradient">Intelligent Products</span>
          </h1>

          <p
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Strategic AI & Data Product Manager bridging the gap between technical complexity and user value. Specializing in LLMs, Predictive Analytics, and Enterprise Scale.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#case-studies">
              <Button size="lg" variant="gradient" className="w-full sm:w-auto group">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Floating Cards / Visuals */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                <Brain size={24} />
              </div>
              <h3 className="font-semibold mb-2">AI Strategy</h3>
              <p className="text-sm text-muted-foreground">Defining the "Why" and "How" of AI adoption.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                <Database size={24} />
              </div>
              <h3 className="font-semibold mb-2">Data Systems</h3>
              <p className="text-sm text-muted-foreground">Architecting scalable data pipelines & infrastructure.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                <Globe size={24} />
              </div>
              <h3 className="font-semibold mb-2">Global Impact</h3>
              <p className="text-sm text-muted-foreground">Scaling products to millions of users worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

