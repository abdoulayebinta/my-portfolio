"use client";

import React from "react";

export function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Floating Nodes */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20 blur-[1px] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Connecting Lines (Simulated with SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.1]">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-purple-500" />
          </pattern>
        </defs>
        {/* Abstract connections */}
        <path
          d="M100,100 Q400,50 600,300 T1000,200"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="1"
          className="animate-[dash_20s_linear_infinite]"
          strokeDasharray="10 10"
        />
        <path
          d="M-100,400 Q300,600 800,400 T1200,600"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="1"
          className="animate-[dash_25s_linear_infinite]"
          strokeDasharray="15 15"
        />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

