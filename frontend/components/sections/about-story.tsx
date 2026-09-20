"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Zap, RefreshCw, Heart } from "lucide-react";
import { testimonials } from "@/lib/data";

export function AboutStory() {
  return (
    <>
      {/* Section 1: About Me Introduction */}
      <section className="pt-8 md:pt-10 pb-6 md:pb-8">
        <div className="about-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[48%_48%] gap-8 md:gap-12 items-start md:gap-16">

            {/* Text Column */}
            <div className="space-y-6 order-2 md:order-1">
              {/* Eyebrow */}
              <div className="text-[11px] md:text-[12px] font-semibold text-primary uppercase tracking-[0.14em]">
                About
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-[56px] font-bold leading-tight">
                About Me
              </h1>

              {/* Subheading in Coral */}
              <p className="text-xl md:text-2xl font-semibold text-primary leading-tight max-w-[640px]">
                Building meaningful products at the intersection of people, technology, and complex systems.
              </p>

              {/* Body Copy */}
              <div className="space-y-4 text-base md:text-[17px] text-muted-foreground leading-[1.6] max-w-[640px]">
                <p>
                  I'm Abdoulaye Bah, a Product Manager and builder with a background in software engineering and experience across healthcare and EdTech.
                </p>
                <p>
                  I started my career close to the technology—building software for health systems and learning how infrastructure, connectivity, data quality, and real-world workflows determine whether a product actually works.
                </p>
                <p>
                  Over time, I moved closer to the product decisions behind those systems: understanding users, translating complexity, aligning teams, and helping turn difficult problems into useful products.
                </p>
                <p>
                  Today, I bring that engineering foundation into Product Management, combining technical depth with product judgment and execution.
                </p>
              </div>
            </div>

            {/* Portrait Column */}
            <div className="relative order-1 md:order-2 flex flex-col items-center md:items-start">
              {/* Soft Peach Background */}
              <div className="relative w-full max-w-[480px]">
                <div className="absolute -inset-8 bg-soft-peach rounded-2xl opacity-60 -z-10" />

                {/* Portrait Container */}
                <div className="relative space-y-6">
                  <div className="relative rounded-[14px] overflow-hidden bg-soft-peach border border-soft-peach/30">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src="/visuals/abdoulaye-bah-pm.png"
                        alt="Abdoulaye Bah"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-center md:text-left">
                    <p className="text-[16px] md:text-[18px] text-foreground/80 italic signature-name leading-relaxed">
                      Building at the intersection of product, systems, and impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 2: My Career Journey */}
      <section className="py-6 md:py-8">
        <div className="about-container mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 mb-6">
            <h2 className="text-3xl md:text-[36px] font-bold">My Career Journey</h2>
            <p className="text-[11px] md:text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.14em] whitespace-nowrap">
              A Path From Engineering to Product, Driven by Impact
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-primary/30 z-0" />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3 relative z-10">

              {/* Card 1: eHealth Africa */}
              <div className="relative">
                {/* Milestone Circle */}
                <div className="absolute -top-7 left-3 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  01
                </div>

                {/* Card */}
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-3 h-full flex flex-col">
                  <div className="space-y-1">
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-foreground">eHealth Africa</h3>
                    <p className="text-[15px] text-muted-foreground font-medium">Software Developer</p>
                    <p className="text-xs text-muted-foreground">eIDSR</p>
                  </div>

                  <p className="text-[14px] text-muted-foreground leading-[1.5]">
                    Contributed to an offline-first national disease-surveillance platform in Liberia, designed to improve disease reporting and outbreak response in low-connectivity environments.
                  </p>

                  <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                    <p className="text-[14px] font-semibold text-primary">78 health facilities</p>
                    <p className="text-xs text-muted-foreground">Pilot deployment</p>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link href="/case-studies/eidsr-digitizing-outbreak-response-west-africa" className="text-xs text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 [cursor:pointer]">
                      View case study →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: SMART / UNMC */}
              <div className="relative">
                {/* Milestone Circle */}
                <div className="absolute -top-7 left-3 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  02
                </div>

                {/* Card */}
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-3 h-full flex flex-col">
                  <div className="space-y-1">
                    <h3 className="text-[18px] md:text-[18px] font-semibold text-foreground">SMART / UNMC</h3>
                    <p className="text-[15px] text-muted-foreground font-medium">Business Analyst</p>
                  </div>

                  <p className="text-[14px] text-muted-foreground leading-[1.5]">
                    Translated clinical and research workflows into requirements for an integrated Android and web platform supporting sickle-cell and malaria screening in Nigeria.
                  </p>

                  <p className="text-xs italic text-muted-foreground">
                    Translating technical systems into product decisions.
                  </p>

                  <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                    <p className="text-[14px] font-semibold text-primary">97.2% screening accuracy</p>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link href="/case-studies/unmc-digital-health-screening" className="text-xs text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 [cursor:pointer]">
                      View case study →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3: WHO */}
              <div className="relative">
                {/* Milestone Circle */}
                <div className="absolute -top-7 left-3 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  03
                </div>

                {/* Card */}
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-3 h-full flex flex-col">
                  <div className="space-y-1">
                    <h3 className="text-[18px] md:text-[18px] font-semibold text-foreground">World Health Organization</h3>
                    <p className="text-[15px] text-muted-foreground font-medium">Product Manager</p>
                    <p className="text-xs text-muted-foreground">Health Data Platforms</p>
                  </div>

                  <p className="text-[14px] text-muted-foreground leading-[1.5]">
                    Worked across global health data platforms, APIs, integrations, dashboards, and real-time information exchange supporting complex public-health environments.
                  </p>

                  <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                    <p className="text-[14px] font-semibold text-primary">20+ countries</p>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link href="/work" className="text-xs text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 [cursor:pointer]">
                      View related work →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 4: TFO / Boukili */}
              <div className="relative">
                {/* Milestone Circle */}
                <div className="absolute -top-7 left-3 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                  04
                </div>

                {/* Card */}
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-3 h-full flex flex-col">
                  <div className="space-y-1">
                    <h3 className="text-[18px] md:text-[18px] font-semibold text-foreground">TFO / Boukili</h3>
                    <p className="text-[15px] text-muted-foreground font-medium">Product Manager</p>
                  </div>

                  <p className="text-[14px] text-muted-foreground leading-[1.5]">
                    Leading product modernization work on a French-language digital reading platform, including UX, accessibility, platform capabilities, business rules, QA/UAT, and new learning experiences.
                  </p>

                  <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                    <p className="text-[14px] font-semibold text-primary">2.2M+ book reads</p>
                    <p className="text-xs text-muted-foreground">Since Jan 2026</p>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link href="/case-studies/healthcare-diagnostic-assistant" className="text-xs text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 [cursor:pointer]">
                      View case study →
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 3: How I Work + What I Focus On */}
      <section className="py-6 md:py-8">
        <div className="about-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[62%_1px_36%] gap-0 md:gap-8 items-start">

            {/* LEFT COLUMN: How I Work */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h2 className="text-3xl md:text-[32px] font-bold">How I Work</h2>
                <p className="text-[11px] md:text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.14em] whitespace-nowrap pt-2 md:pt-0">
                  Principles That Guide My Work Every Day
                </p>
              </div>

              {/* Principle Cards - Three in a Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Principle 1 */}
                <div className="rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 p-4 md:p-5 space-y-3 h-full flex flex-col min-h-[200px]">
                  <div className="w-10 h-10 rounded-full bg-soft-peach dark:bg-soft-peach/10 flex items-center justify-center shrink-0">
                    <Globe2 size={18} className="text-primary" />
                  </div>
                  <h3 className="text-base md:text-[16px] font-bold text-foreground leading-tight">Design for real-world constraints</h3>
                  <p className="text-sm text-muted-foreground leading-[1.5] flex-1">
                    Working on systems such as eIDSR taught me that connectivity, infrastructure, workflows, and operational realities need to shape product and technical decisions from the beginning.
                  </p>
                </div>

                {/* Principle 2 */}
                <div className="rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 p-4 md:p-5 space-y-3 h-full flex flex-col min-h-[200px]">
                  <div className="w-10 h-10 rounded-full bg-soft-peach dark:bg-soft-peach/10 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-primary" />
                  </div>
                  <h3 className="text-base md:text-[16px] font-bold text-foreground leading-tight">Bridge product and engineering</h3>
                  <p className="text-sm text-muted-foreground leading-[1.5] flex-1">
                    My engineering background helps me translate between user needs, business goals, system design, data flows, integrations, and implementation trade-offs.
                  </p>
                </div>

                {/* Principle 3 */}
                <div className="rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 p-4 md:p-5 space-y-3 h-full flex flex-col min-h-[200px]">
                  <div className="w-10 h-10 rounded-full bg-soft-peach dark:bg-soft-peach/10 flex items-center justify-center shrink-0">
                    <RefreshCw size={18} className="text-primary" />
                  </div>
                  <h3 className="text-base md:text-[16px] font-bold text-foreground leading-tight">Modernize with care</h3>
                  <p className="text-sm text-muted-foreground leading-[1.5] flex-1">
                    Improving an existing product means respecting current users, workflows, business rules, accessibility requirements, and platform constraints while creating space for what's next.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block bg-border/30 h-full min-h-[300px]" />

            {/* RIGHT COLUMN: What I Focus On */}
            <div className="space-y-5 md:pl-4">
              {/* Header */}
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-[32px] font-bold mb-1">What I Focus On</h2>
                <p className="text-[11px] md:text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.14em]">
                  Areas I'm Most Passionate About
                </p>
              </div>

              {/* Focus Pills - 3x2 Grid */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                {[
                  { icon: <Heart size={16} className="text-primary" />, label: "Healthcare" },
                  { icon: <Heart size={16} className="text-primary" />, label: "EdTech" },
                  { icon: <Heart size={16} className="text-primary" />, label: "Platforms" },
                  { icon: <Heart size={16} className="text-primary" />, label: "Data" },
                  { icon: <Heart size={16} className="text-primary" />, label: "Integrations" },
                  { icon: <Heart size={16} className="text-primary" />, label: "AI" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="px-3 py-2 md:py-3 rounded-full bg-soft-peach dark:bg-soft-peach/10 border border-[#EAE6E2] dark:border-border/40 flex items-center justify-center gap-2 text-sm md:text-[15px] font-medium text-foreground whitespace-nowrap"
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 4 & 5: Beyond the Role + Recommendations */}
      <section className="py-6 md:py-8">
        <div className="about-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[49%_1px_50%] gap-0 md:gap-8 items-start">

            {/* LEFT — BEYOND THE ROLE */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h2 className="text-3xl md:text-[30px] font-bold">Beyond the Role</h2>
                <p className="text-[11px] md:text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.14em] whitespace-nowrap pt-2 md:pt-0">
                  More Than a Job
                </p>
              </div>

              {/* Copy with Left Accent Line */}
              <div className="border-l-2 border-primary pl-4 md:pl-6 space-y-4">
                <p className="text-base md:text-[15px] text-muted-foreground leading-[1.6]">
                  I'm a builder by nature. I enjoy experimenting with new technologies, understanding how products work underneath the interface, and turning ideas into something tangible.
                </p>
                <p className="text-base md:text-[15px] text-muted-foreground leading-[1.6]">
                  Outside my day-to-day work, I use side projects to explore AI products, system design, APIs, data workflows, and new product ideas. Building keeps me close to the technology and improves the questions I ask as a Product Manager.
                </p>
              </div>

              {/* Pull Quote */}
              <div className="pt-4">
                <p className="text-xl md:text-2xl text-foreground signature-name leading-tight">
                  Same curiosity.<br/>A bigger impact.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="https://github.com/abdoulayebinta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 [cursor:pointer] text-sm"
                >
                  GitHub →
                </a>
                <Link
                  href="/product-thinking"
                  className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 [cursor:pointer] text-sm"
                >
                  Product Thinking →
                </Link>
                <a
                  href="https://www.linkedin.com/in/abdoulayebintabah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 [cursor:pointer] text-sm"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block bg-border/30 h-full min-h-[300px]" />

            {/* RIGHT — RECOMMENDATIONS */}
            <div className="space-y-6 md:pl-4">
              {/* Header with Controls */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl md:text-[30px] font-bold mb-1">Recommendations</h2>
                  <p className="text-[11px] md:text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.14em]">
                    Kind Words From People I've Worked With
                  </p>
                </div>
                {/* Previous/Next Controls */}
                <div className="flex gap-2 md:gap-1">
                  <button className="w-8 h-8 md:w-7 md:h-7 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/40 transition-colors [cursor:pointer]">
                    <span className="text-xs text-muted-foreground">←</span>
                  </button>
                  <button className="w-8 h-8 md:w-7 md:h-7 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/40 transition-colors [cursor:pointer]">
                    <span className="text-xs text-muted-foreground">→</span>
                  </button>
                </div>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Filter for specific testimonials */}
                {[testimonials[0], testimonials[1], testimonials[4]].map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="p-5 md:p-6 rounded-[12px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-4 flex flex-col h-full min-h-[200px]"
                  >
                    {/* Quote */}
                    <p className="text-sm text-muted-foreground leading-[1.5] flex-1 line-clamp-4">
                      {testimonial.content}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-[#EAE6E2] dark:border-border/30" />

                    {/* Person Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-muted">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Name and Role */}
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-foreground truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 6: Compact Closing CTA Band */}
      <section className="py-8 md:py-10">
        <div className="about-container mx-auto">
          <div className="rounded-[14px] bg-[#FFF0E5] dark:bg-soft-peach/10 px-6 md:px-8 py-6 md:py-8 min-h-[100px] md:min-h-[110px] flex flex-col md:grid md:grid-cols-[auto_1px_1fr_auto] md:gap-6 md:items-center">

            {/* LEFT: Heading */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Let's build<br/>what's next.
              </h2>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block bg-primary/30 h-12" />

            {/* CENTER: Copy */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-4 md:pt-0">
              I'm always open to meaningful conversations about product, impact, and opportunities to collaborate.
            </p>

            {/* RIGHT: Button */}
            <Link href="/contact" className="pt-4 md:pt-0">
              <Button
                className="w-full md:w-auto [cursor:pointer] whitespace-nowrap"
                style={{
                  backgroundColor: "#F26A3D",
                  color: "white"
                }}
              >
                Get In Touch →
              </Button>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
