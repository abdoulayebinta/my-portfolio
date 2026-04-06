"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

const orgs = [
  {
    name: "TFO",
    full: "Groupe Média TFO",
    domain: "tfo.org",
    role: "AI PM · Current",
    accent: "#0057B8",
  },
  {
    name: "WHO",
    full: "World Health Organization",
    domain: "who.int",
    role: "Crisis Tech · Geneva",
    accent: "#009FE3",
  },
  {
    name: "eHealth Africa",
    full: "eHealth Africa",
    domain: "ehealthafrica.org",
    role: "Health Systems",
    accent: "#16A34A",
  },
  {
    name: "Savics",
    full: "Savics",
    domain: "savics.org",
    role: "Health Tech · Belgium",
    accent: "#0EA5E9",
  },
];

export function TrustedBy() {
  const { t } = useLanguage();

  return (
    <section id="trusted-by" className="w-full py-16 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
            {t.trustedBy.title}
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Logo strip */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {orgs.map((org) => (
            <div
              key={org.name}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-secondary/10 hover:bg-secondary/30 hover:border-border/80 transition-all duration-300 cursor-default"
            >
              {/* Favicon / logo mark */}
              <div className="relative w-7 h-7 shrink-0 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-md opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: org.accent }}
                />
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${org.domain}&sz=64`}
                  alt={org.name}
                  width={20}
                  height={20}
                  className="rounded-sm relative z-10"
                  unoptimized
                />
              </div>

              {/* Text */}
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-foreground group-hover:text-foreground/90 transition-colors whitespace-nowrap">
                  {org.name}
                </span>
                <span className="text-[0.6rem] font-medium text-muted-foreground uppercase tracking-wide whitespace-nowrap">
                  {org.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
