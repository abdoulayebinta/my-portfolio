"use client";

import React, { useState } from "react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface ProductLifecycleProps {
  posts: ProductThinkingPost[];
  onStageSelect: (stage: string | null) => void;
  activeStage?: string | null;
}

const LIFECYCLE_STAGES = [
  { id: "product-vision", number: "01", label: "Product Vision", color: "#EC4899" },
  { id: "ideation", number: "02", label: "Ideation", color: "#F59E0B" },
  { id: "discovery", number: "03", label: "Discovery", color: "#6366F1" },
  { id: "prioritization", number: "04", label: "Prioritization", color: "#4F46E5" },
  { id: "roadmapping", number: "05", label: "Roadmapping", color: "#10B981" },
  { id: "execution", number: "06", label: "Execution", color: "#4338CA" },
  { id: "measurement-learning", number: "07", label: "Measurement & Learning", color: "#8B5CF6" },
];

export function ProductLifecycle({ posts, onStageSelect, activeStage: externalActiveStage }: ProductLifecycleProps) {
  const [internalActiveStage, setInternalActiveStage] = useState<string | null>(null);
  const activeStage = externalActiveStage ?? internalActiveStage;

  // Map lifecycle stage names to stage IDs
  const stageNameMap: Record<string, string> = {
    "Product Vision": "product-vision",
    "Ideation": "ideation",
    "Discovery": "discovery",
    "Prioritization": "prioritization",
    "Roadmapping": "roadmapping",
    "Execution": "execution",
    "Measurement & Learning": "measurement-learning",
  };

  // Count pieces per stage
  const stageCounts: Record<string, number> = {};
  LIFECYCLE_STAGES.forEach(stage => {
    stageCounts[stage.id] = 0;
  });

  posts.forEach(post => {
    if (post.lifecycle) {
      const stageId = stageNameMap[post.lifecycle];
      if (stageId) {
        stageCounts[stageId]++;
      }
    }
  });

  const handleStageClick = (stageId: string) => {
    const count = stageCounts[stageId];
    if (count === 0) return;

    if (activeStage === stageId) {
      setInternalActiveStage(null);
      onStageSelect(null);
    } else {
      setInternalActiveStage(stageId);
      onStageSelect(LIFECYCLE_STAGES.find(s => s.id === stageId)?.label || null);
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The Lifecycle · Pick a Stage
          </p>
          <p className="hidden md:block text-xs text-muted-foreground">
            Select a stage to explore.
          </p>
        </div>

        {/* Horizontal Scrollable Lifecycle Rail */}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-4 md:gap-6 pb-2 snap-x snap-mandatory">
            {LIFECYCLE_STAGES.map(stage => {
              const count = stageCounts[stage.id];
              const isActive = activeStage === stage.id;
              const hasContent = count > 0;

              return (
                <button
                  key={stage.id}
                  onClick={() => handleStageClick(stage.id)}
                  disabled={!hasContent}
                  aria-disabled={!hasContent}
                  className={`flex-shrink-0 snap-start group transition-all duration-200 ${
                    hasContent ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div
                    className={`p-4 md:p-6 rounded-lg border-t-4 border border-border transition-all ${
                      isActive
                        ? "border-t-4 bg-muted/80 border-border"
                        : hasContent
                        ? "border-t-[3px] hover:bg-muted/30"
                        : "border-t-[2px] opacity-50"
                    }`}
                    style={{
                      borderTopColor: isActive ? stage.color : hasContent ? stage.color : "var(--border)",
                    }}
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className="text-xs font-bold tracking-wider"
                        style={{ color: hasContent ? stage.color : "var(--muted-foreground)" }}
                      >
                        {stage.number}
                      </span>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          hasContent ? "" : "text-muted-foreground"
                        }`}
                      >
                        {stage.label}
                      </span>
                    </div>

                    <div className={`text-sm font-medium ${hasContent ? "text-foreground" : "text-muted-foreground"}`}>
                      {hasContent ? `${count} piece${count !== 1 ? "s" : ""}` : "Coming soon"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
