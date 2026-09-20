"use client";

import React from "react";
import Image from "next/image";

interface CaseStudyHeaderProps {
  title: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
  team: string;
  image: string;
}

export function CaseStudyHeader({ title, description, tags, role, timeline, team, image }: CaseStudyHeaderProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Grid: 45% text / 55% image */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 md:gap-12 lg:gap-16 items-start">

          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-soft-peach dark:bg-soft-peach/20 text-foreground dark:text-foreground border border-border/40">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground dark:text-foreground">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 gap-8 border-t border-border pt-8">
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Role</h3>
                <p className="text-base font-semibold text-foreground dark:text-foreground">{role}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Timeline</h3>
                <p className="text-base font-semibold text-foreground dark:text-foreground">{timeline}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Team</h3>
                <p className="text-base font-semibold text-foreground dark:text-foreground">{team}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-full">
            <div className="relative aspect-video w-full max-h-[440px] rounded-xl overflow-hidden bg-muted border border-border/40">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

