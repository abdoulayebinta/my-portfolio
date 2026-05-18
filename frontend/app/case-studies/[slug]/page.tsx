"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Target, Lightbulb, CheckCircle, TrendingUp, Brain, Network, AlertTriangle, Users, Compass, X, Activity } from "lucide-react";
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


            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="insight" title="4. Key Insight" icon={<Lightbulb size={24} />}>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed">The core insight was that diagnostic technology alone could not meaningfully improve patient outcomes without an integrated digital workflow system. While the Gazelle Hb Variant point-of-care diagnostic device enabled rapid screening in the field, healthcare workers still lacked reliable tools for patient registration, continuous patient tracking, laboratory workflows, and follow-up care. By combining point-of-care diagnostics with centralized digital records and structured clinical workflows, the platform transformed screening from a one-time diagnostic event into a continuous patient management process that supported earlier intervention and improved care coordination.</p>

                  <img
                    src="/case-studies/unmc-key-insight.png"
                    alt="Key Insight: From fragmented one-time screening to integrated digital care workflow"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-key-insight.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">Integrating point-of-care diagnostics with connected digital workflows transformed fragmented screening processes into a continuous patient management ecosystem supporting earlier intervention, coordinated follow-up care, and improved clinical outcomes.</p>
                </div>
              </CaseStudySection>
            )}

            {slug !== "unmc-digital-health-screening" && (
              <CaseStudySection id="insight" title="Key Insight" icon={<Lightbulb size={24} />}>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">The turning point in this project was not identifying the problems—it was reframing how the system needed to operate in a fundamentally constrained environment.</p>

                  <p className="text-base leading-relaxed">In low-connectivity environments, a web-only system is inherently fragile. True resilience requires an offline-first approach that allows data capture and processing to happen at the edge.</p>

                  <p className="text-base leading-relaxed">The system also had to serve fundamentally different users: District Surveillance Officers needed the depth and flexibility of desktop tools for case investigation, while frontline health workers required fast, low-friction input methods like SMS.</p>

                  <p className="text-base leading-relaxed">The breakthrough was recognizing that automated logic—such as SMS-to-case provisioning—could eliminate manual handoffs entirely, removing the bottlenecks responsible for weeks of delay.</p>

                  <p className="text-base leading-relaxed">Together, these insights reframed the problem from simply digitizing reporting to redesigning the entire system around resilience, user context, and automation—laying the foundation for a solution that could operate reliably at national scale.</p>
                </div>
              </CaseStudySection>
            )}

            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="strategy" title="5. Vision & Strategy" icon={<Compass size={24} />}>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed">The vision for the UNMC Project was to establish a scalable digital health ecosystem capable of supporting early sickle cell diagnosis, continuous patient management, and centralized clinical oversight in low-resource settings. Rather than treating screening as a standalone diagnostic event, the platform was designed to connect point-of-care diagnostics, mobile clinical workflows, centralized patient records, and administrative oversight into a unified care coordination system.</p>

                    <p className="text-base leading-relaxed">The strategy focused on building a phased, operationally practical platform that could support both frontline healthcare workers and researchers simultaneously. Android applications enabled field teams to capture patient registration, clinical evaluations, biometrics, and laboratory workflows directly at the point of care, while the web application provided centralized administration, laboratory monitoring, biometric matching, role-based access management, and research oversight. This hub-and-spoke architecture created a scalable foundation for continuous patient tracking, earlier intervention, and data-driven healthcare decision-making across distributed clinical environments.</p>
                  </div>

                  <img
                    src="/case-studies/unmc-vision-strategy.png"
                    alt="Vision & Strategy: Integrated Digital Health Ecosystem for Sickle Cell Screening"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-vision-strategy.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">The platform strategy focused on connecting frontline clinical workflows with centralized oversight to create a scalable, data-driven care coordination ecosystem for low-resource healthcare environments.</p>
                </div>
              </CaseStudySection>
            )}

            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="user-workflow" title="6. User & Workflow Analysis" icon={<Activity size={24} />}>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed">A major focus of the UNMC Project was understanding how frontline healthcare workers operated within low-resource clinical environments and translating those realities into practical digital workflows. The platform needed to support a wide range of operational activities including patient registration, guardian management, biometric capture, clinical evaluations, laboratory testing, medication tracking, and follow-up care coordination.</p>

                  <p className="text-base leading-relaxed">Field workflows were intentionally designed to be structured, guided, and operationally efficient to minimize user error and improve data consistency during active screening activities. The Android application enabled healthcare workers to capture patient demographics, symptoms, medical history, laboratory requests, and diagnostic results directly at the point of care, while supporting offline-first workflows for environments with unreliable connectivity.</p>

                  <p className="text-base leading-relaxed">At the same time, the web application was designed for centralized administrative and research oversight. Researchers and administrators used the platform to monitor laboratory activities, manage user access, validate clinical data, review aggregated patient records, and perform biometric matching between guardians and patient profiles. This separation between field operations and centralized oversight created a scalable workflow model capable of supporting both clinical care delivery and long-term research coordination.</p>

                  <img
                    src="/case-studies/unmc-user-workflow.png"
                    alt="User & Workflow Analysis: End-to-end clinical processes for sickle cell screening"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-user-workflow.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">The platform streamlined end-to-end clinical workflows across patient registration, clinical evaluations, laboratory testing, medication management, and follow-up care—enabling healthcare workers to capture reliable patient data and coordinate continuous care in low-resource environments.</p>
                </div>
              </CaseStudySection>
            )}

            {slug !== "unmc-digital-health-screening" && (
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
            )}

            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="system" title="7. Solution & System Design" icon={<Brain size={24} />}>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed">The UNMC Project used a centralized hub-and-spoke architecture to connect point-of-care diagnostics, mobile clinical workflows, and centralized administrative oversight into a unified digital health ecosystem. Clinical and biometric data captured through the Android application, along with diagnostic results from the Gazelle/HemeChip reader, were synchronized into a central electronic database through API-driven integrations and platform connectivity workflows.</p>

                    <p className="text-base leading-relaxed">The Android application supported frontline healthcare operations including patient registration, guardian management, biometric finger capture, clinical evaluations, laboratory workflows, medication management, and follow-up care. The Gazelle/HemeChip point-of-care diagnostic device integrated with the platform through interoperability services that enabled wireless transmission of hemoglobin electrophoresis results directly into the centralized system.</p>

                    <p className="text-base leading-relaxed">The web application served as the administrative and research oversight layer, enabling user management, role-based access control, biometric matching, laboratory monitoring, standardized reporting, and review of aggregated patient records. The platform architecture emphasized interoperability, secure data exchange, and scalable integrations between diagnostic hardware, mobile applications, centralized databases, and administrative systems.</p>

                    <p className="text-base leading-relaxed">The solution was also designed with healthcare interoperability principles in mind, leveraging structured clinical data models, API-based integrations, and platform connectivity patterns aligned with modern healthcare exchange concepts such as HL7 and FHIR-oriented workflows. This architecture created a scalable foundation for continuous patient management, operational visibility, and coordinated clinical decision-making across distributed healthcare environments.</p>
                  </div>

                  <img
                    src="/case-studies/unmc-solution-system-design.png"
                    alt="Solution & System Design: Hub-and-spoke architecture for integrated digital health platform"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-solution-system-design.png")}
                  />

                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground italic">The platform used a centralized hub-and-spoke architecture that integrated point-of-care diagnostics, Android clinical workflows, biometric identity management, APIs, and web-based administrative oversight to enable secure interoperability, continuous patient management, and scalable healthcare operations.</p>
                  </div>
                </div>
              </CaseStudySection>
            )}

            {slug !== "unmc-digital-health-screening" && (
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
            )}

            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="tradeoffs" title="8. Product & Technical Tradeoffs" icon={<AlertTriangle size={24} />}>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed">One of the primary challenges during the UNMC Project was balancing ambitious clinical and operational requirements against the realities of deployment timelines, infrastructure limitations, and evolving hardware dependencies. The platform needed to support complex workflows across diagnostics, biometrics, laboratory management, patient follow-up, and centralized administration while remaining usable within low-resource healthcare environments.</p>

                  <p className="text-base leading-relaxed">A key product tradeoff involved prioritizing operational simplicity for frontline healthcare workers without compromising the depth of clinical data required by researchers and administrators. The Android application was intentionally designed with guided workflows, simplified navigation, and offline-first capabilities to reduce user friction during active field operations, while the web application handled more advanced administrative, reporting, and oversight responsibilities.</p>

                  <p className="text-base leading-relaxed">The team also had to balance rapid implementation with interoperability and long-term scalability. Integrating the Gazelle/HemeChip diagnostic device, biometric fingerprint capture, centralized databases, and role-based administrative systems required API-driven integrations and platform connectivity patterns that could support future expansion and evolving healthcare interoperability standards such as HL7 and FHIR-oriented workflows.</p>

                  <p className="text-base leading-relaxed">Another important tradeoff involved scope prioritization. Advanced automation capabilities, expanded reporting features, and additional workflow enhancements were phased strategically to ensure that core patient registration, laboratory workflows, diagnostic synchronization, and follow-up care processes remained stable and operationally reliable during deployment. This phased delivery approach reduced implementation risk while establishing a scalable technical foundation for future growth.</p>

                  <img
                    src="/case-studies/unmc-product-technical-tradeoffs.png"
                    alt="Product & Technical Tradeoffs: MVP prioritization and key tradeoff decisions"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-product-technical-tradeoffs.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">The platform followed a phased MVP strategy that prioritized stable clinical workflows, interoperability, and frontline usability first, while strategically deferring advanced analytics, automation, and enterprise-scale features to future releases.</p>
                </div>
              </CaseStudySection>
            )}

            {slug !== "unmc-digital-health-screening" && (
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
            )}

            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="execution" title="9. Execution & Cross-Functional Leadership" icon={<Users size={24} />}>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed">The UNMC Project required close coordination across multidisciplinary teams including clinicians, researchers, software engineers, laboratory personnel, and operational stakeholders working across distributed environments. As a Business Analyst, I supported cross-functional collaboration by translating clinical and operational requirements into structured workflows, functional specifications, and implementation-ready documentation for the engineering team.</p>

                  <p className="text-base leading-relaxed">Execution involved continuous alignment between frontline healthcare realities and technical implementation decisions. I worked closely with stakeholders to refine workflows for patient registration, laboratory operations, biometric capture, medication management, and follow-up care while ensuring the platform remained operationally practical for low-resource clinical environments.</p>

                  <p className="text-base leading-relaxed">The project also required coordination around interoperability and platform connectivity between the Android application, Gazelle/HemeChip diagnostic device, centralized database, and web application. Supporting these integrations required structured requirement management, workflow validation, and ongoing collaboration between technical and non-technical stakeholders to ensure reliable data exchange, operational usability, and system scalability.</p>

                  <p className="text-base leading-relaxed">Throughout delivery, the team balanced evolving clinical requirements, infrastructure constraints, and deployment timelines through iterative prioritization and phased implementation planning. This collaborative execution model helped establish a scalable digital health platform capable of supporting both frontline clinical workflows and centralized administrative oversight.</p>

                  <img
                    src="/case-studies/unmc-execution-leadership.png"
                    alt="Execution & Cross-Functional Leadership: Team collaboration and delivery model"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-execution-leadership.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">Cross-functional collaboration between clinicians, researchers, engineers, laboratory teams, and operational stakeholders enabled the successful delivery of an interoperable digital health platform aligned with real-world clinical workflows and deployment realities.</p>
                </div>
              </CaseStudySection>
            )}

            {slug !== "unmc-digital-health-screening" && (
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
            )}

            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="impact" title="10. Metrics & Impact" icon={<TrendingUp size={24} />}>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed">The UNMC Project established a scalable digital health platform that improved diagnostic workflows, centralized clinical data management, and strengthened coordination between frontline healthcare workers, laboratory teams, researchers, and administrators. By integrating point-of-care diagnostics with connected digital workflows, the platform supported earlier intervention, continuous patient management, and more reliable clinical oversight in low-resource settings.</p>

                  <p className="text-base leading-relaxed">The Gazelle/HemeChip diagnostic solution achieved 97.2% diagnostic accuracy compared to the clinical gold standard (HPLC), while also demonstrating 100% sensitivity for detecting severe sickle cell variants including HbSS and HbSC. The platform successfully supported data collection, clinical evaluations, and laboratory workflows for hundreds of pediatric patients participating in screening and follow-up programs across Nigeria.</p>

                  <p className="text-base leading-relaxed">Operationally, the solution improved workflow standardization by digitizing patient registration, biometric identity capture, laboratory evaluations, medication management, and follow-up coordination into a centralized ecosystem accessible through both Android and web applications. The architecture also strengthened interoperability, platform connectivity, and centralized visibility across distributed healthcare environments through API-driven integrations, role-based access controls, and structured clinical data management.</p>

                  <p className="text-base leading-relaxed">Beyond the technical implementation, the project established a scalable foundation for future healthcare interoperability, research collaboration, and longitudinal patient care coordination across low-resource clinical environments.</p>

                  <img
                    src="/case-studies/unmc-metrics-impact.png"
                    alt="Metrics & Impact: Diagnostic accuracy, clinical outcomes, and platform adoption"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-metrics-impact.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">The platform delivered measurable clinical and operational impact by improving diagnostic accuracy, enabling earlier intervention, standardizing healthcare workflows, and strengthening continuous patient management across low-resource clinical environments.</p>
                </div>
              </CaseStudySection>
            )}

            {slug !== "unmc-digital-health-screening" && (
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
            )}

            {slug === "unmc-digital-health-screening" && (
              <CaseStudySection id="lessons" title="11. Challenges & Lessons Learned" icon={<CheckCircle size={24} />}>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-2">Designing for Low-Resource Clinical Environments</h3>
                    <p className="text-base leading-relaxed">One of the primary challenges was designing a platform capable of supporting complex clinical workflows while remaining simple, reliable, and usable for frontline healthcare workers operating in low-resource environments. Limited connectivity, evolving operational requirements, and varying levels of digital literacy required workflows that were guided, resilient, and operationally practical.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-2">Balancing Technical Complexity with Usability</h3>
                    <p className="text-base leading-relaxed">The platform integrated multiple advanced capabilities including biometric identity management, diagnostic device integrations, centralized reporting, role-based access control, and interoperability workflows. While these features increased architectural complexity, the user experience still needed to remain intuitive for healthcare workers performing patient registration, laboratory workflows, and follow-up care during active field operations.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-2">The Importance of Phased Delivery</h3>
                    <p className="text-base leading-relaxed">The project reinforced the importance of phased implementation and scope prioritization. The team focused first on stabilizing core workflows such as patient registration, clinical evaluations, diagnostic synchronization, medication tracking, and follow-up care. This approach reduced operational risk and established a reliable foundation before expanding into advanced analytics, automation, and enterprise-scale capabilities.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-2">Interoperability as a Long-Term Strategy</h3>
                    <p className="text-base leading-relaxed">Another key lesson was the long-term importance of interoperability and platform connectivity within healthcare systems. Designing around API-driven integrations, structured clinical data models, and healthcare interoperability concepts aligned with HL7 and FHIR-oriented workflows positioned the platform for future scalability, research collaboration, and ecosystem integration.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-2">Technology Alone Is Not Enough</h3>
                    <p className="text-base leading-relaxed">Perhaps the most important lesson was that successful digital health platforms require more than strong technology. Sustainable healthcare transformation depends on aligning clinical realities, operational workflows, user adoption, system scalability, and cross-functional collaboration into a cohesive, user-centered ecosystem capable of supporting continuous patient care.</p>
                  </div>

                  <img
                    src="/case-studies/unmc-challenges-lessons.png"
                    alt="Challenges & Lessons Learned: Key challenges and lessons that shaped platform success"
                    className="w-full h-auto rounded-xl border border-border shadow-lg cursor-pointer hover:shadow-xl hover:border-purple-500/50 transition-all"
                    onClick={() => setSelectedImage("/case-studies/unmc-challenges-lessons.png")}
                  />
                  <p className="text-sm text-muted-foreground italic">The project highlighted the importance of adaptability, phased delivery, cross-functional collaboration, and user-centered design when building scalable digital health platforms for complex real-world clinical environments.</p>
                </div>
              </CaseStudySection>
            )}

            {slug !== "unmc-digital-health-screening" && (
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
            )}

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

