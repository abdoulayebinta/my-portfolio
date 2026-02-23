"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Globe2, HeartPulse, Lightbulb, LineChart, ShieldCheck } from "lucide-react";

export function AboutStory() {
  const timeline = [
    {
      year: "The Foundation",
      title: "Software Engineering Roots",
      role: "Full Stack Developer",
      description: "Started my journey writing code. This technical depth allows me to speak the same language as engineers, understand architectural trade-offs, and build feasible AI roadmaps.",
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      year: "The Pivot",
      title: "EdTech & HealthTech Innovation",
      role: "Product Manager",
      description: "Transitioned to Product Management to solve the 'why' and 'what'. Built learning platforms and health tools that scaled to thousands of users, learning the art of user empathy.",
      icon: Lightbulb,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    },
    {
      year: "Global Impact",
      title: "World Health Organization",
      role: "Technical Officer / PM",
      description: "Led the development of real-time data platforms for global health emergencies. Designed dashboards used by ministries of health to make critical decisions during crises.",
      icon: Globe2,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    },
    {
      year: "The Future",
      title: "AI & Decision Intelligence",
      role: "AI Product Leader",
      description: "Now focused on Enterprise AI. Building systems that don't just display data, but predict outcomes and recommend actions using LLMs and advanced analytics.",
      icon: BrainCircuit,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    }
  ];

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
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">My Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            From writing code to <br />
            <span className="text-gradient">saving lives with data.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe that technology is only as powerful as the problems it solves. My career has been defined by a single mission: <strong>building systems that help people make better decisions in high-stakes environments.</strong>
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 md:px-12">
                  <div className={`group p-6 rounded-2xl border ${item.border} bg-background/50 backdrop-blur-sm hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-bold tracking-wider uppercase ${item.color}`}>{item.year}</span>
                      <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
                        <item.icon size={20} />
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
            ))}
          </div>
        </div>

        {/* Philosophy / Closing */}
        <div className="mt-24 max-w-4xl mx-auto bg-secondary/20 border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
          <HeartPulse className="w-12 h-12 text-red-500 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">Why I do what I do</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            "Whether it's a doctor in a remote clinic or an executive in a boardroom, the challenge is the same: <strong>too much noise, not enough signal.</strong> My passion is building the AI & data layer that turns complexity into clarity."
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="rounded-full">
              Read my Resume
            </Button>
            <Button variant="default" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Let's Chat <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}

// Helper component for the Brain icon since it wasn't imported in the original file context
function BrainCircuit(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.97-1.375" />
      <path d="M18 18a4 4 0 0 0 1.97-1.375" />
    </svg>
  )
}

