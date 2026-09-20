"use client";

import React from "react";
import { caseStudies } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export function ProfessionalCaseStudies() {
  const { t } = useLanguage();

  // Filter and prioritize professional case studies
  const professionalSlugs = [
    "eidsr-digitizing-outbreak-response-west-africa",
    "unmc-digital-health-screening",
    "healthcare-diagnostic-assistant", // Boukili
  ];

  const professionalStudies = caseStudies.filter((study) =>
    professionalSlugs.includes(study.slug)
  );

  // Reorder according to priority
  const orderedStudies = professionalSlugs
    .map((slug) => professionalStudies.find((study) => study.slug === slug))
    .filter(Boolean);

  return (
    <section id="professional-case-studies" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="section-header mb-16">
          <div className="section-eyebrow">Professional Case Studies</div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-4">
            Products I've helped shape and deliver.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-world work across healthcare, EdTech, data, integrations, and platform modernization.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {orderedStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group relative grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 md:gap-10 items-start border rounded-[16px] p-7 md:p-8 dark:bg-card dark:border-border transition-colors overflow-hidden"
              style={{
                backgroundColor: "#FFF8F4",
                borderColor: "#EAE6E2",
              }}
            >
              <div className="order-2 md:order-1 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-soft-peach dark:bg-soft-peach/20 border border-border/40 text-foreground dark:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#171717] dark:text-foreground transition-colors">
                  {study.title}
                </h3>

                {/* Role & Status */}
                <div className="flex items-center gap-3 mb-5">
                  {study.metadata?.role && (
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {study.metadata.role}
                    </div>
                  )}
                  {study.metadata?.status && (
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {study.metadata.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-5 text-base leading-relaxed line-clamp-4">
                  {study.description}
                </p>

                {/* Key Outcome */}
                {study.metadata?.keyOutcome && (
                  <div className="mb-5 text-base font-semibold text-primary dark:text-primary">
                    {study.metadata.keyOutcome}
                  </div>
                )}

                {/* CTA */}
                <div className="text-sm font-medium text-primary dark:text-primary group-hover:text-primary/80 dark:group-hover:text-primary/80 transition-all inline-flex items-center gap-1">
                  View Case Study
                  <span className="inline-block transform group-hover:translate-x-0.5 transition-transform">
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
                  className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
                    study.slug === "eidsr-digitizing-outbreak-response-west-africa"
                      ? "object-center-right"
                      : "object-right"
                  }`}
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
