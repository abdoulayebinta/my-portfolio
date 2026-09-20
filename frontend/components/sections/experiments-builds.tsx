"use client";

import React from "react";
import { caseStudies } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function ExperimentsBuilds() {
  // Filter experimental projects
  const experimentalSlugs = [
    "idellia-ai-pedagogical-copilot",
    "generative-customer-support",
  ];

  const experimentalStudies = caseStudies.filter((study) =>
    experimentalSlugs.includes(study.slug)
  );

  // Reorder according to priority
  const orderedStudies = experimentalSlugs
    .map((slug) => experimentalStudies.find((study) => study.slug === slug))
    .filter(Boolean);

  return (
    <section id="experiments-builds" className="pt-0 pb-24 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="section-header mb-16">
          <div className="section-eyebrow">Experiments & Builds</div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-4">
            Exploring what's next.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hands-on experiments, prototypes, and product concepts exploring AI, data, and emerging product experiences.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-10 md:gap-12">
          {orderedStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group relative grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 md:gap-10 items-start border rounded-[16px] p-7 md:p-8 dark:bg-card dark:border-border overflow-hidden opacity-80 [cursor:pointer] transition-all duration-200 hover:opacity-100 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 dark:hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
              style={{
                backgroundColor: "#FFF8F4",
                borderColor: "#EAE6E2",
              }}
            >
              <div className="order-2 md:order-1 flex flex-col">
                {/* Project Type Badge */}
                {study.metadata?.projectType && (
                  <div className="mb-3 inline-flex">
                    <span className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider border border-border/60 rounded-md bg-muted/30">
                      {study.metadata.projectType}
                    </span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted dark:bg-muted/20 border border-border/40 text-foreground dark:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#171717] dark:text-foreground transition-colors">
                  {study.title}
                </h3>

                {/* Role & Timeline */}
                <div className="flex flex-col gap-1 mb-5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {study.metadata?.role && <div>{study.metadata.role}</div>}
                  {study.metadata?.timeline && <div>{study.metadata.timeline}</div>}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-5 text-base leading-relaxed line-clamp-4">
                  {study.description}
                </p>

                {/* CTA */}
                <div className="text-sm font-medium text-primary dark:text-primary inline-flex items-center gap-1 transition-colors duration-200">
                  Explore
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.75">
                    →
                  </span>
                </div>
              </div>

              <div className="order-1 md:order-2 relative aspect-video rounded-[12px] overflow-hidden bg-muted flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
