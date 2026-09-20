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
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-secondary/20 dark:bg-secondary/10 rounded-3xl p-6 md:p-8 border border-border hover:border-primary/30 dark:hover:border-primary/30 transition-colors"
            >
              <div className="order-2 md:order-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-background dark:bg-background border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
                  {study.description}
                </p>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  Read Case Study
                </Button>
              </div>

              <div className="order-1 md:order-2 relative aspect-video rounded-2xl overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
