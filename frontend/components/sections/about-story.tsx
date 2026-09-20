"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, Zap, RefreshCw } from "lucide-react";
import { testimonials } from "@/lib/data";

export function AboutStory() {
  return (
    <>
      {/* Section 1: About Me Introduction */}
      <section className="pt-12 md:pt-14 pb-8 md:pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[58%_42%] gap-8 md:gap-12 items-start">

            {/* Text Column */}
            <div className="space-y-8 order-2 md:order-1">
              {/* Eyebrow */}
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                About
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About Me
              </h1>

              {/* Subheading in Coral */}
              <p className="text-lg md:text-xl font-semibold text-primary leading-relaxed">
                Building meaningful products at the intersection of people, technology, and complex systems.
              </p>

              {/* Body Copy */}
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
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
            <div className="relative order-1 md:order-2">
              {/* Portrait Container */}
              <div className="relative space-y-6">
                <div className="relative rounded-2xl overflow-hidden bg-soft-peach">
                  <div className="aspect-[3/4] relative">
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
                <div className="text-center pt-2">
                  <p className="text-[13px] md:text-sm text-muted-foreground italic signature-name leading-relaxed">
                    Building at the intersection of product, systems, and impact.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 2: My Career Journey */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-8">
            {/* Section Header */}
            <div className="mb-10">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                My Career Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">From engineering to product.</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                A path shaped by building, learning, and moving closer to the problems behind the technology.
              </p>
            </div>

            {/* Milestone Cards */}
            <div className="relative">
              {/* Desktop Connector Line */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0" />

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">

                {/* Card 1: eHealth Africa */}
                <div className="relative">
                  {/* Milestone Circle */}
                  <div className="absolute -top-6 left-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    01
                  </div>

                  {/* Card */}
                  <div className="pt-8 p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-4 h-full flex flex-col">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1">eHealth Africa</h3>
                      <p className="text-sm text-muted-foreground">Software Developer · eIDSR</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Contributed to an offline-first national disease-surveillance platform in Liberia, designed to improve disease reporting and outbreak response in low-connectivity environments.
                    </p>

                    <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                      <p className="text-sm font-semibold text-foreground">78 health facilities<br/><span className="text-xs font-normal text-muted-foreground">Pilot deployment</span></p>
                    </div>

                    <div className="mt-auto pt-2">
                      <Link href="/case-studies/eidsr-digitizing-outbreak-response-west-africa" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">
                        View case study →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 2: SMART / UNMC */}
                <div className="relative">
                  {/* Milestone Circle */}
                  <div className="absolute -top-6 left-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    02
                  </div>

                  {/* Card */}
                  <div className="pt-8 p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-4 h-full flex flex-col">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1">SMART / UNMC</h3>
                      <p className="text-sm text-muted-foreground">Business Analyst</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Translated clinical and research workflows into requirements for an integrated Android and web platform supporting sickle-cell and malaria screening in Nigeria.
                    </p>

                    <p className="text-xs italic text-muted-foreground pt-1">
                      Translating technical systems into product decisions.
                    </p>

                    <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                      <p className="text-sm font-semibold text-foreground">97.2% screening accuracy</p>
                    </div>

                    <div className="mt-auto pt-2">
                      <Link href="/case-studies/unmc-digital-health-screening" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">
                        View case study →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 3: WHO */}
                <div className="relative">
                  {/* Milestone Circle */}
                  <div className="absolute -top-6 left-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    03
                  </div>

                  {/* Card */}
                  <div className="pt-8 p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-4 h-full flex flex-col">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1">World Health Organization</h3>
                      <p className="text-sm text-muted-foreground">Product Manager · Health Data Platforms</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Worked across global health data platforms, APIs, integrations, dashboards, and real-time information exchange supporting complex public-health environments.
                    </p>

                    <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                      <p className="text-sm font-semibold text-foreground">20+ countries</p>
                    </div>

                    <div className="mt-auto pt-2">
                      <Link href="/work" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">
                        View related work →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 4: TFO / Boukili */}
                <div className="relative">
                  {/* Milestone Circle */}
                  <div className="absolute -top-6 left-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    04
                  </div>

                  {/* Card */}
                  <div className="pt-8 p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 space-y-4 h-full flex flex-col">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1">TFO / Boukili</h3>
                      <p className="text-sm text-muted-foreground">Product Manager</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leading product modernization work on a French-language digital reading platform, including UX, accessibility, platform capabilities, business rules, QA/UAT, and new learning experiences.
                    </p>

                    <div className="pt-2 border-t border-[#EAE6E2] dark:border-border/30">
                      <p className="text-sm font-semibold text-foreground">2.2M+ book reads<br/><span className="text-xs font-normal text-muted-foreground">Since Jan 2026</span></p>
                    </div>

                    <div className="mt-auto pt-2">
                      <Link href="/case-studies/healthcare-diagnostic-assistant" className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">
                        View case study →
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="h-10 md:h-12" />

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 3: How I Work + What I Focus On */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* LEFT COLUMN: How I Work */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  How I Work
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">How I Work</h2>
                <p className="text-sm text-muted-foreground pt-2">
                  Principles shaped by real product work.
                </p>
              </div>

              {/* Principle Blocks */}
              <div className="space-y-6">
                {/* Principle 1 */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Globe2 size={18} className="text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">Design for real-world constraints</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Working on systems such as eIDSR taught me that connectivity, infrastructure, workflows, and operational realities need to shape product and technical decisions from the beginning.
                  </p>
                </div>

                {/* Principle 2 */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap size={18} className="text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">Bridge product and engineering</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    My engineering background helps me translate between user needs, business goals, system design, data flows, integrations, and implementation trade-offs.
                  </p>
                </div>

                {/* Principle 3 */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <RefreshCw size={18} className="text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">Modernize with care</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Improving an existing product means respecting current users, workflows, business rules, accessibility requirements, and platform constraints while creating space for what's next.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: What I Focus On */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  What I Focus On
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Areas I work across</h2>
              </div>

              {/* Expertise Pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Healthcare",
                  "EdTech",
                  "Platforms",
                  "System Design",
                  "Data",
                  "APIs & Integrations",
                  "AI Product Development",
                  "Platform Modernization",
                  "Accessibility & Quality"
                ].map((expertise) => (
                  <span
                    key={expertise}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-soft-peach dark:bg-soft-peach/10 text-foreground dark:text-foreground border border-border/40"
                  >
                    {expertise}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 4: Beyond the Role */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">

          {/* Section Header */}
          <div className="space-y-3 mb-10">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Beyond the Role
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Beyond the Role</h2>
            <p className="text-sm text-muted-foreground pt-1">
              More than a job.
            </p>
          </div>

          {/* Main Copy */}
          <div className="space-y-5 mb-10">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a builder by nature. I enjoy experimenting with new technologies, understanding how products work underneath the interface, and turning ideas into something tangible.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Outside my day-to-day work, I use side projects to explore AI products, system design, APIs, data workflows, and new product ideas. Building keeps me close to the technology and improves the questions I ask as a Product Manager.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm also documenting what I learn through my portfolio, GitHub, LinkedIn, and video content as I continue developing toward deeper Technical Product Management leadership.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="py-8 mb-10 border-y border-border/40">
            <p className="text-2xl md:text-3xl text-foreground italic signature-name text-center">
              Same curiosity. Bigger impact.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <a
              href="https://github.com/abdoulayebinta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 [cursor:pointer]"
            >
              GitHub →
            </a>
            <Link
              href="/product-thinking"
              className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 [cursor:pointer]"
            >
              Product Thinking →
            </Link>
            <a
              href="https://www.linkedin.com/in/abdoulayebintabah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 [cursor:pointer]"
            >
              LinkedIn →
            </a>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 5: Recommendations */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            {/* Section Header */}
            <div className="space-y-3 mb-12">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Recommendations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">What colleagues say</h2>
              <p className="text-sm text-muted-foreground pt-1">
                Perspectives from people I've had the opportunity to work with.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Filter for specific testimonials */}
              {[testimonials[0], testimonials[1], testimonials[4]].map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-6 rounded-[14px] bg-soft-peach dark:bg-soft-peach/5 border border-[#EAE6E2] dark:border-border/40 space-y-4 flex flex-col"
                >
                  {/* Quote */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    "{testimonial.content}"
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
                      <h4 className="text-sm font-bold text-foreground truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See All Link */}
            <div>
              <Link
                href="#testimonials"
                className="text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 [cursor:pointer] text-sm font-medium"
              >
                See all recommendations →
              </Link>
            </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Section 6: Compact Closing CTA Band */}
      <section className="py-6 md:py-8 bg-soft-peach dark:bg-soft-peach/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">

              {/* LEFT: Copy */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Let's build what's next.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  I'm always open to meaningful conversations about product, technology, healthcare, EdTech, platforms, data, and AI.
                </p>
              </div>

              {/* RIGHT: CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 items-start md:items-center">
                <Link href="/contact">
                  <Button variant="default" className="[cursor:pointer] whitespace-nowrap">
                    Get In Touch →
                  </Button>
                </Link>
                <Link
                  href="/work"
                  className="text-primary hover:text-primary/80 transition-colors duration-200 [cursor:pointer] text-sm font-medium pt-1 md:pt-0"
                >
                  View My Work →
                </Link>
              </div>

            </div>
        </div>
      </section>
    </>
  );
}
