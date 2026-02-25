"use client";

import React from "react";

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
    <div className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 pt-32 pb-12">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Role</h3>
              <p className="font-semibold">{role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Timeline</h3>
              <p className="font-semibold">{timeline}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Team</h3>
              <p className="font-semibold">{team}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

