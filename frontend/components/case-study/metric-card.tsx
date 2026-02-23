"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  description?: string;
  trend?: "up" | "down" | "neutral";
}

export function MetricCard({ value, label, description, trend }: MetricCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-secondary/20 border border-border hover:border-purple-500/30 transition-all duration-300">
      <div className="flex items-end gap-2 mb-2">
        <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          {value}
        </span>
        {trend === "up" && <span className="text-green-500 text-sm font-medium mb-1">↑</span>}
      </div>
      <h3 className="font-semibold text-foreground mb-1">{label}</h3>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}

