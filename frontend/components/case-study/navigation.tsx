"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";

interface CaseStudyNavigationProps {
  currentSlug: string;
}

export function CaseStudyNavigation({ currentSlug }: CaseStudyNavigationProps) {
  // Professional case study order
  const professionalSlugs = [
    "eidsr-digitizing-outbreak-response-west-africa",
    "unmc-digital-health-screening",
    "healthcare-diagnostic-assistant", // Boukili
  ];

  // Determine if current study is professional
  const isProfessional = professionalSlugs.includes(currentSlug);
  const caseStudyOrder = professionalSlugs;

  // Find current index
  const currentIndex = caseStudyOrder.indexOf(currentSlug);

  if (currentIndex === -1) {
    // Not a professional case study, don't show navigation
    return null;
  }

  // Calculate next index (with loop)
  const nextIndex = (currentIndex + 1) % caseStudyOrder.length;
  const nextSlug = caseStudyOrder[nextIndex];
  const nextStudy = caseStudies.find((s) => s.slug === nextSlug);

  return (
    <div className="mt-16 pt-8 border-t border-border flex justify-between items-center gap-4">
      <Link href="/work#professional-case-studies">
        <Button variant="ghost" className="[cursor:pointer]">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
        </Button>
      </Link>
      {nextStudy && (
        <Link href={`/case-studies/${nextSlug}`}>
          <Button variant="default" className="[cursor:pointer]">
            {nextStudy.title.split(" — ")[0]}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
