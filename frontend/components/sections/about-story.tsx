"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Users2, Leaf, Heart, BookOpen, Layers, BarChart3, Link2, Sparkles, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { testimonials } from "@/lib/data";

export function AboutStory() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Carousel logic: 3 cards per page on desktop, 2 on tablet, 1 on mobile
  const cardsPerPage = 3;
  const totalGroups = Math.ceil(testimonials.length / cardsPerPage);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % totalGroups);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const startIndex = carouselIndex * cardsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <>
      {/* Section 1: About Me Introduction */}
      <section className="pt-8 md:pt-10 pb-6 md:pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.85fr] gap-8 md:gap-12 items-start">

            {/* Text Column */}
            <div className="space-y-6 order-2 md:order-1">
              {/* Eyebrow */}
              <div className="text-[12px] md:text-[12px] font-semibold text-primary uppercase tracking-[0.16em] mb-4">
                About
              </div>

              {/* Main Heading - Editorial Serif */}
              <h1 className="editorial-serif text-[44px] md:text-[62px] font-bold leading-[1.05] tracking-[-0.02em] text-foreground mb-3 md:mb-4">
                About Me
              </h1>

              {/* Subheading in Coral - Editorial Serif */}
              <p className="editorial-serif text-[22px] md:text-[26px] font-semibold text-primary leading-[1.22] tracking-[-0.01em] max-w-[540px] mb-6 md:mb-7">
                From engineering roots to product—building for real-world complexity.
              </p>

              {/* Body Copy */}
              <div className="space-y-4 text-[16px] md:text-[17px] text-[#555555] leading-[1.6] max-w-[560px]">
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
            <div className="relative order-1 md:order-2 flex flex-col items-center md:justify-end md:items-end">
              <div className="relative w-full max-w-[420px] md:max-w-[400px] lg:max-w-[460px] mx-auto md:ml-auto md:mr-0">
                {/* Editorial Peach Frame */}
                <div className="absolute top-6 right-6 w-32 h-32 rounded-full bg-soft-peach opacity-40 blur-2xl -z-10" />
                <div className="absolute bottom-20 left-0 w-40 h-40 rounded-full bg-[#FFF8F4] opacity-30 blur-3xl -z-10" />

                {/* Portrait Container */}
                <div className="group relative rounded-[14px] overflow-hidden bg-soft-peach border border-[#EAE6E2]/20">
                  <div className="aspect-[4/5] relative max-h-[560px] object-cover transition-all duration-700 group-hover:scale-105">
                    <Image
                      src="/visuals/abdoulaye-bah-pm.png"
                      alt="Abdoulaye Bah"
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Handwritten Caption - Upper Right Inside Portrait */}
                    <div className="absolute top-8 md:top-10 right-6 md:right-8 flex flex-col items-end z-20">
                      <p
                        className="signature-name text-[20px] md:text-[22px] leading-[1.15] text-[#2F2F2F] text-right max-w-[140px] md:max-w-[160px]"
                        style={{
                          transform: 'rotate(-3deg)',
                          opacity: 0.95
                        }}
                      >
                        From code<br/>to product.<br/>Still building.
                      </p>
                      <div
                        className="bg-primary mt-2"
                        style={{
                          width: '55px',
                          height: '2px',
                          transform: 'rotate(-2deg)',
                          marginRight: '4px'
                        }}
                      />
                    </div>
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
        <div className="container mx-auto px-4 md:px-8">
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
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 h-full flex flex-col">
                  {/* Organization - Wordmark */}
                  <p className="text-[17px] font-semibold text-foreground mb-2">eHealth Africa</p>

                  {/* Role - Main Title */}
                  <h3 className="text-[20px] font-bold text-foreground mb-1">Software Developer</h3>

                  {/* Secondary Context */}
                  <p className="text-[14px] text-muted-foreground mb-3">eIDSR</p>

                  {/* Description - Concise */}
                  <p className="text-[14px] text-muted-foreground leading-[1.5] mb-auto">
                    Contributed to an offline-first national disease-surveillance platform in Liberia.
                  </p>

                  {/* Metric Outcome Band */}
                  <div className="mt-4 px-3 py-3 -mx-5 -mb-5 bg-[#FFF0E5] dark:bg-[#FFF8F4]/10 rounded-b-[12px] flex flex-col">
                    <p className="text-[30px] font-bold text-primary">78+</p>
                    <p className="text-[13px] text-muted-foreground">pilot health facilities</p>
                  </div>

                  {/* Case Study Link */}
                  <div className="mt-3 pt-3">
                    <Link href="/case-studies/eidsr-digitizing-outbreak-response-west-africa" className="text-[13px] text-primary hover:underline transition-colors [cursor:pointer]">
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
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 h-full flex flex-col">
                  {/* Organization - Wordmark */}
                  <p className="text-[17px] font-semibold text-foreground mb-2">SMART / UNMC</p>

                  {/* Role - Main Title */}
                  <h3 className="text-[20px] font-bold text-foreground mb-1">Business Analyst</h3>

                  {/* Bridge Line - Subtle */}
                  <p className="text-[13px] italic text-muted-foreground mb-3">
                    Translating technical systems into product decisions.
                  </p>

                  {/* Description - Concise */}
                  <p className="text-[14px] text-muted-foreground leading-[1.5] mb-auto">
                    Translated clinical workflows into requirements for a digital health screening platform.
                  </p>

                  {/* Metric Outcome Band */}
                  <div className="mt-4 px-3 py-3 -mx-5 -mb-5 bg-[#FFF0E5] dark:bg-[#FFF8F4]/10 rounded-b-[12px] flex flex-col">
                    <p className="text-[30px] font-bold text-primary">97.2%</p>
                    <p className="text-[13px] text-muted-foreground">screening accuracy</p>
                  </div>

                  {/* Case Study Link */}
                  <div className="mt-3 pt-3">
                    <Link href="/case-studies/unmc-digital-health-screening" className="text-[13px] text-primary hover:underline transition-colors [cursor:pointer]">
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
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 h-full flex flex-col">
                  {/* Organization - Wordmark */}
                  <p className="text-[17px] font-semibold text-foreground mb-2">World Health Organization</p>

                  {/* Role - Main Title */}
                  <h3 className="text-[20px] font-bold text-foreground mb-1">Product Manager</h3>

                  {/* Secondary Context */}
                  <p className="text-[14px] text-muted-foreground mb-3">Health Data Platforms</p>

                  {/* Description - Concise */}
                  <p className="text-[14px] text-muted-foreground leading-[1.5] mb-auto">
                    Worked across health data platforms, APIs, integrations, and real-time information exchange.
                  </p>

                  {/* Metric Outcome Band */}
                  <div className="mt-4 px-3 py-3 -mx-5 -mb-5 bg-[#FFF0E5] dark:bg-[#FFF8F4]/10 rounded-b-[12px] flex flex-col">
                    <p className="text-[30px] font-bold text-primary">20+</p>
                    <p className="text-[13px] text-muted-foreground">countries</p>
                  </div>

                  {/* Case Study Link */}
                  <div className="mt-3 pt-3">
                    <Link href="/work" className="text-[13px] text-primary hover:underline transition-colors [cursor:pointer]">
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
                <div className="pt-8 p-5 md:p-6 rounded-[14px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 h-full flex flex-col">
                  {/* Organization - Wordmark */}
                  <p className="text-[17px] font-semibold text-foreground mb-2">TFO / Boukili</p>

                  {/* Role - Main Title */}
                  <h3 className="text-[20px] font-bold text-foreground mb-4">Product Manager</h3>

                  {/* Description - Concise */}
                  <p className="text-[14px] text-muted-foreground leading-[1.5] mb-auto">
                    Leading the modernization of a French-language digital reading platform.
                  </p>

                  {/* Metric Outcome Band */}
                  <div className="mt-4 px-3 py-3 -mx-5 -mb-5 bg-[#FFF0E5] dark:bg-[#FFF8F4]/10 rounded-b-[12px] flex flex-col">
                    <p className="text-[30px] font-bold text-primary">2.2M+</p>
                    <p className="text-[13px] text-muted-foreground">book reads</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-0.5">Since Jan 2026</p>
                  </div>

                  {/* Case Study Link */}
                  <div className="mt-3 pt-3">
                    <Link href="/case-studies/healthcare-diagnostic-assistant" className="text-[13px] text-primary hover:underline transition-colors [cursor:pointer]">
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
        <div className="container mx-auto px-4 md:px-8">
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
                {/* Principle 1: Design for real-world constraints */}
                <div className="rounded-[12px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-[#EAE6E2]/40 p-5 md:p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-[#FDF1E8] dark:bg-[#FFF0E5]/15 flex items-center justify-center shrink-0 mb-4">
                    <Settings size={22} className="text-primary stroke-[1.5]" />
                  </div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-foreground leading-tight mb-3">Design for real-world constraints</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] flex-1">
                    Working on systems such as eIDSR taught me that connectivity, infrastructure, workflows, and operational realities need to shape product and technical decisions from the beginning.
                  </p>
                </div>

                {/* Principle 2: Bridge product and engineering */}
                <div className="rounded-[12px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-[#EAE6E2]/40 p-5 md:p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-[#FDF1E8] dark:bg-[#FFF0E5]/15 flex items-center justify-center shrink-0 mb-4">
                    <Users2 size={22} className="text-primary stroke-[1.5]" />
                  </div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-foreground leading-tight mb-3">Bridge product and engineering</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] flex-1">
                    My engineering background helps me translate between user needs, business goals, system design, data flows, integrations, and implementation trade-offs.
                  </p>
                </div>

                {/* Principle 3: Modernize with care */}
                <div className="rounded-[12px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-[#EAE6E2]/40 p-5 md:p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-[#FDF1E8] dark:bg-[#FFF0E5]/15 flex items-center justify-center shrink-0 mb-4">
                    <Leaf size={22} className="text-primary stroke-[1.5]" />
                  </div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-foreground leading-tight mb-3">Modernize with care</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] flex-1">
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
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-3">
                {[
                  { icon: <Heart size={20} className="text-primary stroke-[1.5]" />, label: "Healthcare" },
                  { icon: <BookOpen size={20} className="text-primary stroke-[1.5]" />, label: "EdTech" },
                  { icon: <Layers size={20} className="text-primary stroke-[1.5]" />, label: "Platforms" },
                  { icon: <BarChart3 size={20} className="text-primary stroke-[1.5]" />, label: "Data" },
                  { icon: <Link2 size={20} className="text-primary stroke-[1.5]" />, label: "Integrations" },
                  { icon: <Sparkles size={20} className="text-primary stroke-[1.5]" />, label: "AI" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="h-14 md:h-16 px-4 md:px-5 rounded-full bg-[#FDF1E8] dark:bg-[#FFF0E5]/10 border-0 flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-foreground"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
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
      <section className="py-7 md:py-7">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[48%_1px_51%] gap-0 md:gap-6 items-start">

            {/* LEFT — BEYOND THE ROLE */}
            <div className="space-y-3">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h2 className="text-3xl md:text-[30px] font-bold">Beyond the Role</h2>
                <p className="text-[11px] md:text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.14em] whitespace-nowrap pt-2 md:pt-0">
                  More Than a Job
                </p>
              </div>

              {/* Content Row: Paragraph Left, Quote Right */}
              <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-6 md:gap-4 items-start">
                {/* Copy with Left Accent Line */}
                <div className="border-l-2 border-primary pl-4 md:pl-5">
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.5] md:leading-[1.55]">
                    I'm bilingual (English / French), curious by nature, and always exploring new ideas. Outside of work, I enjoy side projects, reading, and continuous learning — whether it's through new technologies, different cultures, or conversations with inspiring people.
                  </p>
                </div>

                {/* Pull Quote with Underline */}
                <div className="pt-0 md:pt-1">
                  <p className="text-[22px] md:text-[26px] text-foreground signature-name leading-tight mb-2">
                    Same curiosity.<br/>A bigger impact.
                  </p>
                  <div className="w-14 h-0.5 bg-primary/60" />
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block bg-border/30 h-full min-h-[180px]" />

            {/* RIGHT — RECOMMENDATIONS */}
            <div className="space-y-3 md:pl-4">
              {/* Header with Controls */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-[30px] font-bold mb-1">Recommendations</h2>
                  <p className="text-[11px] md:text-[12px] font-semibold text-muted-foreground uppercase tracking-[0.14em]">
                    Kind Words From People I've Worked With
                  </p>
                </div>
                {/* Previous/Next Controls */}
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous recommendations"
                    className="w-6 h-6 md:w-5 md:h-5 rounded-full border border-border/30 flex items-center justify-center hover:bg-soft-peach/40 hover:border-primary/40 transition-colors [cursor:pointer] group"
                  >
                    <ChevronLeft size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next recommendations"
                    className="w-6 h-6 md:w-5 md:h-5 rounded-full border border-border/30 flex items-center justify-center hover:bg-soft-peach/40 hover:border-primary/40 transition-colors [cursor:pointer] group"
                  >
                    <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>

              {/* Testimonials Carousel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {visibleTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="p-3.5 md:p-4 rounded-[10px] bg-[#FFF8F4] dark:bg-[#FFF8F4]/5 border border-[#EAE6E2] dark:border-border/40 flex flex-col"
                  >
                    {/* Quote */}
                    <p className="text-[12px] md:text-[13px] text-muted-foreground leading-[1.45] mb-2.5 flex-1 line-clamp-5">
                      "{testimonial.content}"
                    </p>

                    {/* Divider */}
                    <div className="border-t border-[#EAE6E2] dark:border-border/30 mb-2.5" />

                    {/* Person Info with Avatar */}
                    <div className="flex items-center gap-2.5">
                      {/* Avatar */}
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-muted">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Name and Role */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-[12px] md:text-[13px] font-semibold text-foreground leading-tight truncate">
                            {testimonial.name}
                          </h4>
                          {testimonial.linkedinUrl && (
                            <a
                              href={testimonial.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                              className="shrink-0 flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] transition-colors duration-200 [cursor:pointer] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1"
                            >
                              <Linkedin size={14} className="stroke-[1.5]" />
                            </a>
                          )}
                        </div>
                        <p className="text-[11px] text-muted-foreground line-clamp-1">
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
      <section className="py-7 md:py-7">
        <div className="container mx-auto px-4 md:px-8">
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
