"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Brain, Database, LineChart, Code2, Cloud, 
  GitBranch, Terminal, Cpu, Layers, Search, 
  BarChart3, Users, Zap, Lock, Globe, Server,
  ArrowRight, Workflow, Microscope, TrendingUp, Map, Network, LucideIcon
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Skills() {
  const [activeTab, setActiveTab] = useState<"ai" | "engineering" | "product">("ai");
  const { t } = useLanguage();

  const categories = [
    { id: "ai", label: t.skills.categories.ai, icon: Brain },
    { id: "engineering", label: t.skills.categories.engineering, icon: Code2 },
    { id: "product", label: t.skills.categories.product, icon: LineChart },
  ];

  // Map icons to the translated data structure
  const iconMap: Record<string, LucideIcon> = {
    "LLMs & Transformers": Brain,
    "RAG Architecture": Layers,
    "Computer Vision": Search,
    "MLOps": Workflow,
    "Prompt Engineering": Terminal,
    "AI Ethics": Lock,
    "Python & SQL": Code2,
    "Cloud Infrastructure": Cloud,
    "API Design": Server,
    "Data Pipelines": GitBranch,
    "Web Technologies": Globe,
    "DevTools": Terminal,
    "A/B Testing": Microscope,
    "Product Analytics": BarChart3,
    "User Research": Users,
    "Growth Strategy": TrendingUp,
    "Roadmapping": Map,
    "Agile/Scrum": Zap
  };

  const skillsData = {
    ai: t.skills.ai,
    engineering: t.skills.engineering,
    product: t.skills.product
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar: Navigation */}
          <div className="lg:col-span-3 space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as "ai" | "engineering" | "product")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-300 border",
                  activeTab === cat.id
                    ? "bg-secondary border-purple-500/30 shadow-sm"
                    : "bg-transparent border-transparent hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg transition-colors",
                  activeTab === cat.id ? "bg-purple-500 text-white" : "bg-secondary text-muted-foreground"
                )}>
                  <cat.icon size={20} />
                </div>
                <span className="font-medium">{cat.label}</span>
              </button>
            ))}

            {/* Mini Architecture Diagram Preview */}
            <div className="mt-8 p-6 rounded-2xl bg-secondary/10 border border-border hidden lg:block">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">System Thinking</h4>
              <div className="flex flex-col gap-2 items-center opacity-70">
                <div className="w-full h-2 bg-blue-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-blue-500 animate-[shimmer_2s_infinite]" />
                </div>
                <ArrowRight className="rotate-90 text-muted-foreground" size={16} />
                <div className="w-12 h-12 rounded-lg border-2 border-dashed border-purple-500/30 flex items-center justify-center">
                  <Brain size={20} className="text-purple-500" />
                </div>
                <ArrowRight className="rotate-90 text-muted-foreground" size={16} />
                <div className="w-full h-8 rounded bg-secondary border border-border" />
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9">
            <div className="bg-secondary/5 border border-border rounded-3xl p-8 min-h-[600px] relative overflow-hidden">
              {/* Content Header */}
              <div key={activeTab} className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-bold mb-2">{skillsData[activeTab].title}</h3>
                <p className="text-muted-foreground">{skillsData[activeTab].description}</p>
              </div>

              {/* Skills Grid */}
              <div key={`${activeTab}-grid`} className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                {skillsData[activeTab].items.map((skill) => {
                  // Fallback icon if name doesn't match exactly (though it should with current data)
                  const Icon = iconMap[skill.name] || Code2;
                  
                  return (
                    <div 
                      key={skill.name}
                      className="group p-4 rounded-xl bg-background border border-border hover:border-purple-500/30 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-secondary text-foreground group-hover:bg-purple-500/10 group-hover:text-purple-500 transition-colors">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm">{skill.name}</h4>
                            <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground border border-border">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Architecture Diagram (Only for Engineering/AI tabs) */}
              {(activeTab === 'ai' || activeTab === 'engineering') && (
                <div className="mt-12 pt-8 border-t border-border animate-in fade-in duration-1000 delay-300">
                  <h4 className="text-sm font-semibold mb-6 flex items-center gap-2">
                    <Network size={16} className="text-purple-500" />
                    {t.skills.diagram.title}
                  </h4>
                  
                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-background/50 border border-border overflow-x-auto">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center gap-2 min-w-[100px]">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <Database size={20} />
                      </div>
                      <span className="text-xs font-medium">{t.skills.diagram.ingestion}</span>
                    </div>

                    <div className="h-px w-12 bg-border md:block hidden relative">
                      <div className="absolute top-1/2 left-0 w-2 h-2 bg-foreground rounded-full -translate-y-1/2 animate-[moveRight_2s_linear_infinite]" />
                    </div>
                    <ArrowRight className="md:hidden text-muted-foreground" />

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center gap-2 min-w-[100px]">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                        <Cpu size={20} />
                      </div>
                      <span className="text-xs font-medium">{t.skills.diagram.processing}</span>
                    </div>

                    <div className="h-px w-12 bg-border md:block hidden relative">
                      <div className="absolute top-1/2 left-0 w-2 h-2 bg-foreground rounded-full -translate-y-1/2 animate-[moveRight_2s_linear_infinite] delay-500" />
                    </div>
                    <ArrowRight className="md:hidden text-muted-foreground" />

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center gap-2 min-w-[100px]">
                      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20 shadow-lg shadow-purple-500/10">
                        <Brain size={32} />
                      </div>
                      <span className="text-xs font-bold text-purple-500">{t.skills.diagram.model}</span>
                    </div>

                    <div className="h-px w-12 bg-border md:block hidden relative">
                      <div className="absolute top-1/2 left-0 w-2 h-2 bg-foreground rounded-full -translate-y-1/2 animate-[moveRight_2s_linear_infinite] delay-1000" />
                    </div>
                    <ArrowRight className="md:hidden text-muted-foreground" />

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center gap-2 min-w-[100px]">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                        <Globe size={20} />
                      </div>
                      <span className="text-xs font-medium">{t.skills.diagram.ui}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

