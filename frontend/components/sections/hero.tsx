"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Globe, Sparkles, CheckCircle2, Building2, GraduationCap, HeartPulse, Landmark, Cpu, Network, Zap, Layers, Bot, Activity } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              AI & Data Product Manager shaping <span className="text-gradient">decision intelligence</span> across healthcare, education, and global systems.
            </h1>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                <span>Ex-World Health Organization</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                <span>7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                <span>Global Impact</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                <span>Millions of Users</span>
              </div>
            </div>

            <p
              className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Hi, I'm <strong className="text-foreground">Abdoulaye Binta Bah</strong>. AI & Data Product Manager with global experience building real-time data and decision platforms at scale, from crisis response to enterprise AI systems.
            </p>

            {/* Bold Differentiator */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-10 max-w-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-2 rounded-full bg-purple-500/20 text-purple-500 mt-0.5 relative z-10">
                <Activity size={20} />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-foreground text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
                  Strategic Impact
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Designed platforms used in <span className="text-foreground font-semibold">crisis environments</span> and supported health systems across <span className="text-foreground font-semibold">20+ countries</span>.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
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

            {/* Core AI Competencies */}
            <div className="w-full border-t border-border/50 pt-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Core AI Competencies
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "LLMs & GenAI", icon: Bot },
                  { name: "Decision Intelligence", icon: Brain },
                  { name: "Predictive Systems", icon: Zap },
                  { name: "RAG Architecture", icon: Layers },
                  { name: "Enterprise AI", icon: Network }
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/40 border border-white/5 hover:border-purple-500/30 hover:bg-secondary/60 transition-all duration-300 group cursor-default">
                    <tech.icon size={14} className="text-purple-500 group-hover:text-purple-400 transition-colors" />
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Photo */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative w-full max-w-md aspect-[4/5] group">
              {/* Enhanced Animated Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-bl from-indigo-600 via-purple-600 to-pink-500 rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
              
              {/* Image Container with Darker, Premium Styling */}
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-black/80 backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-[1.01]">
                
                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20 z-10 mix-blend-overlay" />
                
                {/* Placeholder Professional Image - Using a darker, more dramatic placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Abdoulaye Bah - AI Product Manager" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-110 saturate-0 group-hover:saturate-100 transition-all"
                />

                {/* Floating Badge on Image - Enhanced Glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="glass p-4 rounded-xl flex items-center gap-3 border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm tracking-wide">Abdoulaye Bah</p>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider">AI Product Leader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Credibility Strip */}
        <div className="w-full border-y border-white/5 bg-white/5 backdrop-blur-sm py-8 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto px-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              Trusted by teams across
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 group">
                <HeartPulse className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg group-hover:text-foreground transition-colors">Healthcare</span>
              </div>
              <div className="flex items-center gap-2 group">
                <GraduationCap className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg group-hover:text-foreground transition-colors">EdTech</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Landmark className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg group-hover:text-foreground transition-colors">Government</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Globe className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg group-hover:text-foreground transition-colors">Global NGOs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards - Moved to bottom */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500"
        >
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group border border-white/5 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 bg-secondary/20 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/30">
              <Brain size={28} />
            </div>
            <h3 className="font-bold text-lg mb-3 group-hover:text-purple-400 transition-colors">AI Product Strategy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              Driving product vision for Generative AI and ML, moving from experimental pilots to scalable enterprise solutions.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 bg-secondary/20 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/30">
              <Database size={28} />
            </div>
            <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors">Intelligent Data Systems</h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              Architecting real-time data platforms that enable critical decision intelligence during global crises and operations.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group border border-white/5 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 bg-secondary/20 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/0 group-hover:shadow-orange-500/30">
              <Globe size={28} />
            </div>
            <h3 className="font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors">Global Scale & Impact</h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              Scaling data and AI products used by millions across global health and education ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

