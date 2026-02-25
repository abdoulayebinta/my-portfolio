"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Target, Lightbulb, CheckCircle, TrendingUp, Brain, Network, AlertTriangle, Users } from "lucide-react";
import Link from "next/link";
import { CaseStudyHeader } from "@/components/case-study/header";
import { CaseStudySection } from "@/components/case-study/section";
import { MetricCard } from "@/components/case-study/metric-card";
import { SystemArchitectureDiagram } from "@/components/case-study/diagram";

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
      
      <CaseStudyHeader 
        title={study.title}
        description={study.description}
        tags={study.tags}
        role={study.metadata.role}
        timeline={study.metadata.timeline}
        team={study.metadata.team}
        image={study.image}
      />

      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-1 border-l border-border pl-6">
              <p className="font-semibold mb-4 text-xs uppercase tracking-widest text-muted-foreground">Table of Contents</p>
              {[
                { id: "context", label: "Context & Problem" },
                { id: "vision", label: "Opportunity & Vision" },
                { id: "strategy", label: "Strategy & Product" },
                { id: "ai", label: "Data & AI" },
                { id: "system", label: "System Architecture" },
                { id: "tradeoffs", label: "Tradeoffs" },
                { id: "execution", label: "Execution" },
                { id: "impact", label: "Metrics & Impact" },
                { id: "lessons", label: "Lessons Learned" },
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="block py-2 text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            
            <CaseStudySection id="context" title="Context & Problem" icon={<Target size={24} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-secondary/10 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">The Context</h3>
                  <p>{study.content.context}</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">The Problem</h3>
                  <p>{study.content.problem}</p>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="vision" title="Opportunity & Vision" icon={<Lightbulb size={24} />}>
              <p className="text-xl font-medium text-foreground mb-6 italic border-l-4 border-purple-500 pl-6 py-2">
                &quot;{study.content.vision}&quot;
              </p>
            </CaseStudySection>

            <CaseStudySection id="ai" title="Data & AI Opportunities" icon={<Brain size={24} />}>
              <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-8 rounded-2xl border border-purple-500/10">
                <p className="mb-4">{study.content.aiOpportunity}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.metadata.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="system" title="System Architecture" icon={<Network size={24} />}>
              <p className="mb-6">{study.content.systemDesign}</p>
              <SystemArchitectureDiagram />
            </CaseStudySection>

            <CaseStudySection id="tradeoffs" title="Tradeoffs & Prioritization" icon={<AlertTriangle size={24} />}>
              <p>{study.content.decisions}</p>
            </CaseStudySection>

            <CaseStudySection id="execution" title="Execution & Collaboration" icon={<Users size={24} />}>
              <p>{study.content.execution}</p>
            </CaseStudySection>

            <CaseStudySection id="impact" title="Metrics & Impact" icon={<TrendingUp size={24} />}>
              <p className="mb-8">{study.content.metrics}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Mocking metrics parsing for visual demo */}
                <MetricCard value="40%" label="Reduction" description="In unplanned downtime" trend="up" />
                <MetricCard value="$5M" label="ARR" description="Generated in 18 months" trend="up" />
                <MetricCard value="95%" label="Accuracy" description="On critical failure modes" trend="up" />
              </div>
            </CaseStudySection>

            <CaseStudySection id="lessons" title="Lessons Learned" icon={<CheckCircle size={24} />}>
              <div className="bg-secondary/30 p-8 rounded-2xl border-l-4 border-green-500">
                <p className="italic text-foreground">&quot;{study.content.lessons}&quot;</p>
              </div>
            </CaseStudySection>

            <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
              <Link href="/#case-studies">
                <Button variant="ghost">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
                </Button>
              </Link>
              <Button variant="default">
                Next Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

