"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, Globe, Sparkles, CheckCircle2, HeartPulse, GraduationCap, Landmark, Cpu, Network, Zap, Layers, Bot, Activity, Search, BarChart3, ShieldCheck, BookOpen, Download, Linkedin } from "lucide-react";
import Link from "next/link";
import { BackgroundAnimation } from "@/components/ui/background-animation";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();

  // Helper to parse markdown-like bold syntax
  const renderWithBold = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const exploringIcons = [Search, Bot, BarChart3, ShieldCheck];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large Blur Blobs - Rendered first (bottom layer) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Network Animation - Rendered on top of blobs for better visibility */}
        <BackgroundAnimation />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              {t.hero.headline.part1} <span className="text-gradient">{t.hero.headline.highlight}</span> {t.hero.headline.part2}
            </h1>

            <p
              className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed pl-4 border-l-2 border-purple-500/50"
            >
              {renderWithBold(t.hero.subheadline)}
            </p>

            <p className="text-lg text-foreground/90 mb-8 max-w-xl leading-relaxed">
              {renderWithBold(t.hero.bio)}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10 w-full max-w-lg">
              {t.hero.stats?.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
            >
              <Link href="#case-studies" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto group text-base h-12 px-8">
                  {t.hero.cta.caseStudies}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80 gap-2">
                  {t.hero.cta.contact} <ArrowRight className="w-4 h-4 -rotate-45" />
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base h-12 px-8 gap-2">
                  {t.hero.cta.resume} <Download className="w-4 h-4" />
                </Button>
              </a>
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
                <Image 
                  src="https://github.com/abdoulayebinta.png" 
                  alt="Abdoulaye Bah - AI Product Manager" 
                  fill
                  className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-110 saturate-0 group-hover:saturate-100 transition-all"
                  priority
                />

                {/* Floating Badge on Image - Enhanced Glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="glass p-4 rounded-xl flex items-center gap-3 border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm tracking-wide">Abdoulaye Bah</p>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider">AI Product Manager</p>
                    </div>
                  </div>
                </div>
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
            <h3 className="font-bold text-lg mb-3 group-hover:text-purple-400 transition-colors">{t.hero.cards.strategy.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              {t.hero.cards.strategy.desc}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group border border-white/5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 bg-secondary/20 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/30">
              <Database size={28} />
            </div>
            <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors">{t.hero.cards.data.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              {t.hero.cards.data.desc}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 group border border-white/5 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 bg-secondary/20 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/0 group-hover:shadow-orange-500/30">
              <Globe size={28} />
            </div>
            <h3 className="font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors">{t.hero.cards.scale.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              {t.hero.cards.scale.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

