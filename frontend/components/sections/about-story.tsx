"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Globe2, HeartPulse, Lightbulb, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function AboutStory() {
  const { t } = useLanguage();

  const icons = [Code2, Lightbulb, Globe2, BrainCircuit];
  const colors = [
    { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { text: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { text: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
    { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" }
  ];

  // Helper to parse markdown-like bold syntax
  const renderWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{t.about.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t.about.title.part1} <br />
            <span className="text-gradient">{t.about.title.highlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {renderWithBold(t.about.description)}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {t.about.timeline.map((item, index) => {
              const Icon = icons[index % icons.length];
              const style = colors[index % colors.length];
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 w-full md:w-1/2 md:px-12">
                    <div className={`group p-6 rounded-2xl border ${style.border} bg-background/50 backdrop-blur-sm hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-sm font-bold tracking-wider uppercase ${style.text}`}>{item.year}</span>
                        <div className={`p-2 rounded-lg ${style.bg} ${style.text}`}>
                          <Icon size={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground mb-4">{item.role}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background bg-foreground z-10 hidden md:block shadow-[0_0_0_4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.1)]" />

                  {/* Empty Side for Balance */}
                  <div className="flex-1 w-full md:w-1/2 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy / Closing */}
        <div className="mt-24 max-w-4xl mx-auto bg-secondary/20 border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
          <HeartPulse className="w-12 h-12 text-red-500 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">{t.about.philosophy.title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {renderWithBold(t.about.philosophy.text)}
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="rounded-full">
              {t.about.philosophy.resumeBtn}
            </Button>
            <Button variant="default" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              {t.about.philosophy.chatBtn} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}

