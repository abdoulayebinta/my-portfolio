"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Target, Lightbulb, CheckCircle, TrendingUp, Brain, Network, AlertTriangle, Users, Compass, X } from "lucide-react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full size view"
              className="w-full h-full object-contain rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

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
                { id: "insight", label: "Key Insight" },
                { id: "strategy", label: "Vision & Strategy" },
                { id: "system", label: "Solution & System Design" },
                { id: "tradeoffs", label: "Tradeoffs" },
                { id: "execution", label: "Execution & Leadership" },
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
              <div className="space-y-6">
                {/* Opening Context */}
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">Following the 2014–2015 West African Ebola epidemic, Liberia's Ministry of Health prioritized strengthening its disease surveillance system to prevent future outbreaks.</p>

                  <p className="text-base leading-relaxed">The goal was ambitious: enable detection and response within 24–48 hours across a nationwide network of 745 health facilities and 90 districts. The challenge wasn't intent; it was infrastructure.</p>
                </div>

                {/* Transition & Image */}
                <div className="space-y-4">
                  <p className="font-semibold text-foreground">In practice, the system operated like this:</p>

                  <img
                    src="/case-studies/eidsr-legacy-system.png"
                    alt="Legacy System: Fragmented, Delayed, and Error-Prone"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/eidsr-legacy-system.png")}
                  />

                  <p className="text-sm text-muted-foreground italic">Manual, disconnected reporting across community, facility, district, and national levels introduced multi-week delays, inconsistent data, and security risks—making timely outbreak detection nearly impossible.</p>
                </div>

                {/* Post-Image Summary */}
                <p className="text-base leading-relaxed pt-4">By the time national leadership received consolidated data, it was often weeks old, incomplete, and inconsistent—limiting their ability to respond effectively to emerging outbreaks.</p>

                {/* Problem Breakdown */}
                <div className="space-y-4 pt-2">
                  <h3 className="font-semibold text-foreground text-base">The Core Problems</h3>

                  <ul className="space-y-3 text-base leading-relaxed list-disc list-inside">
                    <li><span className="font-semibold text-foreground">Reporting Delays:</span> Manual handoffs introduced multi-week delays in data availability</li>
                    <li><span className="font-semibold text-foreground">Data Quality Issues:</span> Re-entry and manual processing led to errors and inconsistencies</li>
                    <li><span className="font-semibold text-foreground">Fragmented Systems:</span> No integration across levels created data silos and limited visibility</li>
                    <li><span className="font-semibold text-foreground">Security Risks:</span> Sensitive patient data was transmitted via unsecured channels</li>
                  </ul>

                  <p className="text-base leading-relaxed pt-4 border-t border-border/50 mt-4">As a result, outbreak detection was not just delayed—it was often too late to act effectively.</p>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="insight" title="Key Insight" icon={<Lightbulb size={24} />}>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">The turning point in this project was not identifying the problems—it was reframing how the system needed to operate in a fundamentally constrained environment.</p>

                <p className="text-base leading-relaxed">In low-connectivity environments, a web-only system is inherently fragile. True resilience requires an offline-first approach that allows data capture and processing to happen at the edge.</p>

                <p className="text-base leading-relaxed">The system also had to serve fundamentally different users: District Surveillance Officers needed the depth and flexibility of desktop tools for case investigation, while frontline health workers required fast, low-friction input methods like SMS.</p>

                <p className="text-base leading-relaxed">The breakthrough was recognizing that automated logic—such as SMS-to-case provisioning—could eliminate manual handoffs entirely, removing the bottlenecks responsible for weeks of delay.</p>

                <p className="text-base leading-relaxed">Together, these insights reframed the problem from simply digitizing reporting to redesigning the entire system around resilience, user context, and automation—laying the foundation for a solution that could operate reliably at national scale.</p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="strategy" title="Vision & Strategy" icon={<Compass size={24} />}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">Our vision was to transform Liberia's reactive, paper-based reporting system into a proactive early-warning engine capable of delivering timely, actionable intelligence to contain infectious threats.</p>

                  <p className="text-base leading-relaxed">To achieve this, the strategy centered on an offline-first ecosystem—ensuring that data capture, validation, and access could occur reliably without dependence on continuous internet connectivity.</p>

                  <p className="text-base leading-relaxed">We implemented a standalone Windows application to guarantee full functionality for district teams regardless of connectivity. This was complemented by bidirectional synchronization with a central DHIS2 server and SMS-based alerting via mHero, enabling real-time communication from the field.</p>
                </div>

                <div className="space-y-4">
                  <img
                    src="/case-studies/eidsr-legacy-vs-solution.png"
                    alt="Legacy vs eIDSR: System Transformation Comparison"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/eidsr-legacy-vs-solution.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">This shift redefined surveillance from delayed, reactive reporting to a resilient, real-time system capable of enabling action within 24–48 hours.</p>

                  <p className="text-base leading-relaxed pt-4">The shift from fragmented, manual reporting to a connected, digital system enabled faster data flow, improved reliability, and near real-time visibility across all levels of the health system.</p>

                  <p className="text-base leading-relaxed">This strategy provided a clear foundation for building a system that could operate reliably at scale while meeting the realities of the field.</p>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="system" title="Solution & System Design" icon={<Brain size={24} />}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">To address these challenges, we designed a multi-tier system architecture optimized for reliability in low-bandwidth and offline environments, ensuring continuous operation across all levels of the health system.</p>

                  <p className="text-base leading-relaxed">At the edge, we developed a standalone desktop application that enabled district teams to capture, validate, and manage case data entirely offline. Local data persistence ensured that all functionality remained available regardless of connectivity.</p>

                  <p className="text-base leading-relaxed">To support offline analysis, we implemented an interoperability layer that automatically populated a local database, allowing epidemiologists to perform reporting and mapping using familiar tools without relying on central servers.</p>

                  <p className="text-base leading-relaxed">The data pipeline was initiated through SMS alerts, which automatically triggered case creation and synchronized records across both local clients and the central system—eliminating manual data entry and reducing delays.</p>
                </div>

                <div className="space-y-4">
                  <img
                    src="/case-studies/eidsr-system-architecture.png"
                    alt="eIDSR System Architecture & Data Flow Diagram"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/eidsr-system-architecture.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">This architecture transforms fragmented reporting into a synchronized, resilient system—automating data flow from SMS alerts to local and central systems while ensuring reliable access even without connectivity.</p>

                  <p className="text-base leading-relaxed pt-4">The system enabled automated data flow from SMS alerts to both local and central systems, ensuring synchronized, reliable access to case data regardless of connectivity.</p>

                  <p className="text-base leading-relaxed">This architecture ensured that the system could operate reliably at every level while scaling to support nationwide surveillance and response.</p>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="tradeoffs" title="Tradeoffs" icon={<AlertTriangle size={24} />}>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">Key product decisions required balancing usability, reliability, and security within the constraints of a low-connectivity, high-stakes environment.</p>

                <div className="space-y-4 pt-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Desktop vs. Mobile</h4>
                    <p className="text-base leading-relaxed">While mobile is typically preferred for field deployments, we chose a desktop-based application because District Surveillance Officers were already equipped with laptops and required a more robust interface for complex clinical workflows. Connectivity was intentionally controlled via USB internet dongles, enabling offline work with automatic synchronization when available—reducing reliance on personal devices and ensuring consistent, secure data transfer.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Security vs. Friction</h4>
                    <p className="text-base leading-relaxed">We enforced authentication and encrypted data handling, requiring users to log in even in offline mode. While this introduced additional friction in time-sensitive situations, it was necessary to ensure patient data confidentiality and meet national security standards.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Simplicity vs. Resilience</h4>
                    <p className="text-base leading-relaxed">An offline-first architecture introduced additional complexity in synchronization and data consistency. However, this tradeoff was essential to ensure the system remained functional and reliable in environments with intermittent or no connectivity.</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed pt-4 border-t border-border/50 mt-4">These tradeoffs were deliberate choices to ensure the system could operate effectively within the realities of the field while meeting critical reliability and security requirements.</p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="execution" title="Execution & Leadership" icon={<Users size={24} />}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">As part of the founding technical team, I led the delivery of critical system components while working closely with field users to ensure the solution operated effectively in real-world conditions.</p>

                  <p className="text-base leading-relaxed">I owned the development of the data synchronization layer and the dynamic form engine, ensuring reliable data flow between offline and central systems while improving usability for frontline users.</p>

                  <p className="text-base leading-relaxed">I led system deployment and training for over 92 health professionals—including District Surveillance Officers and laboratory staff—across two pilot counties, ensuring successful adoption and operational readiness.</p>

                  <p className="text-base leading-relaxed">Execution required rapid iteration based on field feedback. For example, we adapted SMS formatting logic after discovering that local GSM networks occasionally corrupted characters or altered message encoding, ensuring reliable data transmission.</p>
                </div>

                <div className="space-y-4">
                  <img
                    src="/case-studies/eidsr-training-deployment.png"
                    alt="eIDSR Training and Field Deployment"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/eidsr-training-deployment.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">Hands-on training sessions with District Surveillance Officers and laboratory staff ensured rapid adoption, enabling the system to be effectively used in real-world, low-resource settings.</p>

                  <p className="text-base leading-relaxed pt-4">Hands-on training sessions enabled frontline health workers to adopt the system quickly, ensuring it could be effectively used in real-world conditions from day one.</p>

                  <p className="text-base leading-relaxed">This hands-on, iterative approach ensured the system was not only built for the field, but proven in it.</p>
                </div>
              </div>
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

