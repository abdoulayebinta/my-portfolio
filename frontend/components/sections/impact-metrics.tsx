"use client";

import React from "react";

const metrics = [
  {
    value: "2.2M+",
    label: "Boukili Reads",
    context: "Since Jan 2026"
  },
  {
    value: "145K+",
    label: "Users Served",
    context: "Across digital products"
  },
  {
    value: "20+",
    label: "Countries Reached",
    context: "Digital health platforms"
  },
  {
    value: "15+",
    label: "APIs & Integrations",
    context: "Across complex products"
  }
];

export function ImpactMetrics() {
  return (
    <section className="pt-0 pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Editorial impact strip */}
        <div className="flex flex-col md:flex-row md:divide-x divide-border/40 dark:divide-border/30">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="flex-1 py-8 md:py-12 px-0 md:px-8 first:pl-0 last:pr-0 flex flex-col items-start md:items-center md:justify-center"
            >
              {/* Metric Value */}
              <div className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground leading-tight">
                {metric.value}
              </div>

              {/* Label */}
              <p className="text-sm md:text-base text-muted-foreground dark:text-muted-foreground mt-2 md:mt-3 font-medium">
                {metric.label}
              </p>

              {/* Context */}
              {metric.context && (
                <p className="text-xs md:text-sm text-muted-foreground/70 dark:text-muted-foreground/70 mt-1">
                  {metric.context}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
