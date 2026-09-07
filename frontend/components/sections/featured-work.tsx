"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Boukili — Digital Reading Platform Redesign",
    description: "Modernizing a children's French reading platform with improved UX, accessibility, platform capabilities, and new learning experiences.",
    metric: "Platform modernization",
    tags: ["EdTech", "Modernization", "Accessibility", "Product Leadership"],
    slug: "healthcare-diagnostic-assistant",
    image: "/visuals/boukili-featured.png",
    visual: null
  },
  {
    title: "eIDSR",
    description: "Digitizing national disease surveillance with an offline-first health data platform.",
    metric: "78+ facilities",
    tags: ["HealthTech", "Offline-first"],
    slug: "eidsr-digitizing-outbreak-response-west-africa",
    image: "/visuals/eidsr-featured.png",
    visual: null
  },
  {
    title: "SMART / UNMC",
    description: "Building an integrated digital health platform for sickle-cell and malaria screening.",
    metric: "97.2% diagnostic accuracy",
    tags: ["HealthTech", "Integrations"],
    slug: "unmc-digital-health-screening",
    image: "/visuals/unmc-featured.png",
    visual: null
  }
];

export function FeaturedWork() {
  return (
    <section className="pt-0 pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Featured Work</div>
          <h2 className="section-title">
            Selected Projects
          </h2>
          <p className="section-description">
            Selected products and platforms I've helped shape and deliver across healthcare, data, integrations, and complex digital ecosystems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="mb-6 bg-secondary dark:bg-secondary rounded-[10px] overflow-hidden flex-shrink-0">
                {project.image ? (
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex items-center justify-center text-foreground dark:text-foreground p-6">
                    <project.visual />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-foreground mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground dark:text-muted-foreground leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Metric - Accent */}
                <div className="mb-4 text-base font-semibold text-primary dark:text-primary">
                  {project.metric}
                </div>

                {/* Tags - Subtle */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA - Tertiary Text Link */}
                <div className="text-sm font-medium text-primary dark:text-primary group-hover:gap-1 transition-all">
                  View Case Study →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
