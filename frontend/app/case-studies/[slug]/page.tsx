"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Target, Lightbulb, CheckCircle, TrendingUp, Brain, Network, AlertTriangle, Users, Compass } from "lucide-react";
import Link from "next/link";
import { CaseStudyHeader } from "@/components/case-study/header";
import { CaseStudySection } from "@/components/case-study/section";
import { MetricCard } from "@/components/case-study/metric-card";
import { SystemArchitectureDiagram } from "@/components/case-study/diagram";
import { IdellIaCaseStudy } from "@/components/case-study/idellia-case-study";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return notFound();
  }

  if (slug === "idellia-ai-pedagogical-copilot") {
    return (
      <>
        <Navbar />
        <IdellIaCaseStudy />
        <Footer />
      </>
    );
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
                { id: "vision", label: "Opportunity & Market" },
                { id: "strategy", label: "Vision & Strategy" },
                { id: "ai", label: "Data Strategy & Automated Intelligence" },
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

            <CaseStudySection id="vision" title="Opportunity & Market" icon={<Lightbulb size={24} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-secondary/10 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">The Opportunity</h3>
                  <p>The project presented a transformative opportunity to replace fragmented, manual workflows with a unified, case-based digital ecosystem. By architecting an "offline-first" strategy, we bridged the critical communication gap between rural health facilities and national analysis teams. This enabled near-real-time data synchronization, providing a robust technical framework to detect and contain disease outbreaks within the mission-critical first 48-hour window.</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">The Market</h3>
                  <p>The solution was engineered to scale across a nationwide infrastructure of 745 health facilities, 90 districts, and 15 counties. It targeted a high-stakes user base of District Surveillance Officers and laboratory technicians, aiming for an 85% digital reporting rate. Delivery required aligning a complex ecosystem of global partners, including the WHO, CDC, and USAID, to build a sustainable, national-scale health engine for the entire population.</p>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="strategy" title="Vision & Strategy" icon={<Compass size={24} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="bg-secondary/10 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Vision</h3>
                  <p>To safeguard national health security, we envisioned a seamless, case-based digital ecosystem that transformed Liberia's reactive reporting into a proactive early-warning engine. Our goal was to bridge the information gap from rural communities to national leadership, providing instantaneous, actionable intelligence to contain infectious threats within the mission-critical 24–48 hour window. By replacing error-prone manual aggregates with granular, real-time data flows, we sought to build a resilient infrastructure that empowered every tier of the health system to protect the nation's future</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Strategy</h3>
                  <p>We executed an "offline-first" strategy, architecting a standalone Windows application that ensured 100% system availability for field workers in zero-connectivity environments. Our approach prioritized bidirectional synchronization between local clients and a central DHIS2 server to bridge the rural-to-national data gap. We further integrated mHero SMS gateways and Epi Info analytics to create a resilient, multi-layered reporting pipeline capable of nationwide scale.</p>
                </div>
              </div>
              <img
                src="/case-studies/eidsr-transformation.png"
                alt="From Paper to Real-Time: Liberia's eIDSR Transformation"
                className="w-full h-auto rounded-xl border border-border mt-8 shadow-lg"
              />
            </CaseStudySection>

            <CaseStudySection id="ai" title="Data Strategy & Automated Intelligence" icon={<Brain size={24} />}>
              <p className="mb-6">We engineered "automated intelligence" by architecting high-integrity data pipelines and logic engines that transformed Liberia's reactive reporting into a proactive early-warning system. I implemented automated SMS workflows via mHero and RapidPro that instantly triggered notifications to surveillance teams and specimen riders the moment a case was saved. To eliminate human error, I developed a dynamic UI form engine that utilized conditional rendering to activate disease-specific clinical modules and auto-calculated critical fields like patient age and "Epi-Week". Furthermore, I architected a SQL-based interoperability bridge that automatically populated local MS Access databases, allowing epidemiologists to perform real-time mapping and dashboarding in Epi Info without manual data cleaning or exports. This shift from insecure Excel files to a validated, SSL-encrypted database provided the robust data foundation required for national-scale epidemic intelligence</p>
              <img
                src="/case-studies/eidsr-data-strategy.png"
                alt="Data Strategy & Automated Intelligence Architecture Diagram"
                className="w-full h-auto rounded-xl border border-border mt-6 shadow-lg"
              />
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

