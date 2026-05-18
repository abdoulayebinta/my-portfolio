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
              {(slug === "unmc-digital-health-screening" ? [
                { id: "executive-summary", label: "1. Executive Summary" },
                { id: "role", label: "2. My Role & Ownership" },
                { id: "context", label: "3. Context & Problem" },
                { id: "insight", label: "4. Key Insight" },
                { id: "strategy", label: "5. Vision & Strategy" },
                { id: "user-workflow", label: "6. User & Workflow Analysis" },
                { id: "system", label: "7. Solution & System Design" },
                { id: "tradeoffs", label: "8. Product & Technical Tradeoffs" },
                { id: "execution", label: "9. Execution & Cross-Functional Leadership" },
                { id: "impact", label: "10. Metrics & Impact" },
                { id: "lessons", label: "11. Challenges & Lessons Learned" },
              ] : [
                { id: "context", label: "1. Context & Problem" },
                { id: "insight", label: "2. Key Insight" },
                { id: "strategy", label: "3. Vision & Strategy" },
                { id: "system", label: "4. Solution & System Design" },
                { id: "tradeoffs", label: "5. Tradeoffs" },
                { id: "execution", label: "6. Execution & Leadership" },
                { id: "impact", label: "7. Metrics & Impact" },
                { id: "lessons", label: "8. Lessons Learned" },
              ]).map((item) => (
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

            {slug === "unmc-digital-health-screening" && (
              <>
                <CaseStudySection id="executive-summary" title="1. Executive Summary" icon={<Target size={24} />}>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed">The SMART (Sickle and Malaria Accurate Remote Testing) initiative, developed with the University of Nebraska Medical Center, delivered a digital health platform for sickle cell and malaria screening in low-resource settings across Nigeria. As a Business Analyst, I led clinical workflow analysis, requirements strategy, and cross-functional coordination for an Android/Web ecosystem integrated with portable diagnostic hardware. The platform achieved 97.2% diagnostic accuracy and enabled significantly earlier intervention for infants at risk of sickle cell disease.</p>

                    <img
                      src="/case-studies/unmc-executive-summary.png"
                      alt="Digital health platform for sickle cell & malaria screening in low-resource settings"
                      className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                      onClick={() => setSelectedImage("/case-studies/unmc-executive-summary.png")}
                    />
                    <p className="text-sm text-muted-foreground italic">Healthcare worker using the app to support early sickle cell screening in low-resource clinical environments.</p>
                  </div>
                </CaseStudySection>

                <CaseStudySection id="role" title="2. My Role & Ownership" icon={<Users size={24} />}>
                  <p className="text-base leading-relaxed">As a Business Analyst, I supported clinical workflow analysis, requirements gathering, backlog documentation, and cross-functional coordination between clinical stakeholders and engineering teams. I helped translate complex medical and operational workflows into structured software requirements for the Android/Web platform, while contributing to workflow design, validation logic, and implementation planning throughout the project lifecycle.</p>
                </CaseStudySection>

                <CaseStudySection id="context" title="3. Context & Problem" icon={<AlertTriangle size={24} />}>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed">Sickle cell disease remains one of the leading causes of preventable child mortality in sub-Saharan Africa, with nearly 250,000 babies born annually with the condition. In many low-resource regions, infants are not diagnosed early enough to receive timely treatment, contributing to mortality rates as high as 50–90% before age five<sup><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3708126/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">1</a></sup>. Existing diagnostic workflows were fragmented, paper-driven, and difficult to scale across remote environments with limited electricity and inconsistent connectivity. Healthcare workers also lacked centralized systems to longitudinally track patients, laboratory results, and follow-up care throughout the diagnostic journey.</p>

                    <img
                      src="/case-studies/unmc-context-problem.png"
                      alt="Context & Problem: Sickle cell disease screening challenges and clinical workflow gaps"
                      className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                      onClick={() => setSelectedImage("/case-studies/unmc-context-problem.png")}
                    />
                  </div>
                </CaseStudySection>
              </>
            )}


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
              <div className="space-y-4">
                <p className="text-base leading-relaxed">The system delivered measurable improvements in speed, data quality, and operational scale—transforming how outbreak surveillance and response were managed across the country.</p>

                <ul className="space-y-3 text-base leading-relaxed list-disc list-inside pt-2">
                  <li><span className="font-semibold text-foreground">National Scale:</span> Piloted across 78 health facilities, with architecture designed to scale to 745 facilities and 90 districts nationwide</li>
                  <li><span className="font-semibold text-foreground">Latency Reduction:</span> Reduced reporting delays from multiple weeks to near real-time synchronization when connectivity was available</li>
                  <li><span className="font-semibold text-foreground">System Adoption:</span> Trained 92+ healthcare professionals, achieving ~80% system utilization for case reporting in pilot regions</li>
                  <li><span className="font-semibold text-foreground">Data Integrity:</span> Eliminated manual data errors through enforced validation, significantly improving completeness and consistency of clinical data</li>
                  <li><span className="font-semibold text-foreground">Disease Coverage:</span> Digitized investigation workflows for 14 high-priority infectious diseases, aligning field reporting with WHO IDSR standards</li>
                  <li><span className="font-semibold text-foreground">Operational Performance:</span> Enabled system targets of 85% facility reporting and 85% investigation rates for suspected outbreaks</li>
                  <li><span className="font-semibold text-foreground">Workflow Automation:</span> Automated specimen pickup alerts and case notifications, ensuring faster coordination between surveillance teams and laboratories</li>
                </ul>

                <div className="space-y-4 pt-6">
                  <img
                    src="/case-studies/eidsr-metrics-impacts.png"
                    alt="Digital Impact: Outbreak Detection Ready - eIDSR Metrics and Impacts"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/eidsr-metrics-impacts.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">By combining high adoption with faster reporting and improved data quality, the system transformed surveillance from delayed reporting to timely, actionable outbreak response.</p>

                  <p className="text-base leading-relaxed pt-4">The system reduced outbreak reporting timelines from weeks to as little as 24–48 hours, fundamentally changing the speed of national response.</p>

                  <p className="text-base leading-relaxed">Together, these improvements enabled faster detection, better coordination, and more effective containment of infectious disease outbreaks.</p>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="lessons" title="Lessons Learned" icon={<CheckCircle size={24} />}>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">Building and deploying the system at national scale surfaced critical lessons about designing for constrained environments, managing data dependencies, and aligning with real-world operational needs.</p>

                <div className="space-y-4 pt-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Connectivity Constraints Were More Complex Than Expected</h4>
                    <p className="text-base leading-relaxed">Variability across GSM networks meant that SMS delivery could be inconsistent, reinforcing that offline-first design is not a feature—but a foundational requirement for reliability.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Data Quality Depends on Strong Master Data Governance</h4>
                    <p className="text-base leading-relaxed">The system's effectiveness depended heavily on the quality of external data sources. Incomplete or outdated registries disrupted automated workflows, highlighting the need for strong master data governance alongside flexible system design.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Design for Cognitive Load in High-Pressure Environments</h4>
                    <p className="text-base leading-relaxed">Designing for high-pressure environments required minimizing cognitive load while enforcing data quality. Conditional workflows simplified data entry, while strict validation ensured that only complete, actionable data reached decision-makers.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Bridge Global Standards with Local Reality</h4>
                    <p className="text-base leading-relaxed">Aligning global reporting standards with local operational realities was critical. Success required bridging the gap between international requirements and the practical constraints faced by frontline health workers.</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed pt-4 border-t border-border/50 mt-4">These lessons continue to shape how I approach building resilient, user-centered systems in complex and resource-constrained environments.</p>
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

