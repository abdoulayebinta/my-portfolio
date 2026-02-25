"use client";

import React from "react";
import { Database, Server, Globe, ArrowRight, Cpu, Lock } from "lucide-react";

export function SystemArchitectureDiagram() {
  return (
    <div className="w-full p-8 rounded-3xl bg-secondary/10 border border-border my-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1)_0,transparent_100%)]" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Data Source */}
        <div className="flex flex-col items-center gap-4 p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm w-full md:w-48">
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
            <Database size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Data Ingestion</h4>
            <p className="text-xs text-muted-foreground">Kafka / IoT Sensors</p>
          </div>
        </div>

        <ArrowRight className="hidden md:block text-muted-foreground/50" />
        <div className="md:hidden h-8 w-px bg-border" />

        {/* Processing */}
        <div className="flex flex-col items-center gap-4 p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm w-full md:w-48">
          <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
            <Cpu size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-sm">AI Processing</h4>
            <p className="text-xs text-muted-foreground">TensorFlow / Spark</p>
          </div>
        </div>

        <ArrowRight className="hidden md:block text-muted-foreground/50" />
        <div className="md:hidden h-8 w-px bg-border" />

        {/* Serving */}
        <div className="flex flex-col items-center gap-4 p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm w-full md:w-48">
          <div className="p-3 rounded-full bg-orange-500/10 text-orange-500">
            <Server size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-sm">API Layer</h4>
            <p className="text-xs text-muted-foreground">FastAPI / GraphQL</p>
          </div>
        </div>

        <ArrowRight className="hidden md:block text-muted-foreground/50" />
        <div className="md:hidden h-8 w-px bg-border" />

        {/* Client */}
        <div className="flex flex-col items-center gap-4 p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm w-full md:w-48">
          <div className="p-3 rounded-full bg-green-500/10 text-green-500">
            <Globe size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Client App</h4>
            <p className="text-xs text-muted-foreground">React / Mobile</p>
          </div>
        </div>

      </div>
      
      <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Lock size={12} />
        <span>End-to-End Encrypted & HIPAA Compliant</span>
      </div>
    </div>
  );
}

