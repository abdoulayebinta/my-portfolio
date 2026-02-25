"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FeaturedVideo() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-secondary/10 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-medium text-purple-500 uppercase tracking-widest">{t.featuredVideo.label}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {t.featuredVideo.title}
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.featuredVideo.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full gap-2 bg-foreground text-background hover:bg-foreground/90">
                  <PlayCircle size={20} />
                  {t.featuredVideo.watchBtn}
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>{t.featuredVideo.duration}</span>
                </div>
              </div>
            </div>

            {/* Video Placeholder/Thumbnail */}
            <div className="order-1 lg:order-2 relative aspect-video rounded-2xl overflow-hidden bg-black group cursor-pointer border border-white/10 shadow-xl">
              {/* Abstract Tech Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-80" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <PlayCircle size={32} className="text-purple-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Video UI Elements */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium text-white border border-white/10">
                  AI Product Strategy
                </div>
                <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-mono text-white border border-white/10">
                  12:04
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

