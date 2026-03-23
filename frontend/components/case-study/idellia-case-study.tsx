"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Target, Lightbulb, Brain, Network, AlertTriangle, Users, TrendingUp, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudySection } from "./section";
import { MetricCard } from "./metric-card";

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold text-foreground mt-8 mb-3">{children}</h3>;
}

function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-purple-500 pl-6 py-1 my-6 italic text-foreground text-lg font-medium">
      {children}
    </blockquote>
  );
}

function PainPoint({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl bg-secondary/20 border border-border hover:border-purple-500/30 transition-colors">
      <span className="text-2xl font-black text-purple-500/40 leading-none mt-0.5 shrink-0">{number}</span>
      <div>
        <p className="font-semibold text-foreground mb-1">{title}</p>
        <p className="text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function TradeoffCard({ title, chose, gaveUp, why }: { title: string; chose: string; gaveUp: string; why: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/10 overflow-hidden">
      <div className="px-6 py-4 bg-purple-500/5 border-b border-border">
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-green-500 mb-2">What we chose</p>
          <p className="leading-relaxed">{chose}</p>
        </div>
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-red-400 mb-2">What we gave up</p>
          <p className="leading-relaxed">{gaveUp}</p>
        </div>
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-widest text-blue-400 mb-2">Why</p>
          <p className="leading-relaxed">{why}</p>
        </div>
      </div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary/40 border-b border-border">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left font-semibold text-foreground text-xs uppercase tracking-wider whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/20 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 leading-relaxed">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Phase({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">{number}</div>
        <div className="w-px flex-1 bg-border mt-2" />
      </div>
      <div className="pb-10">
        <p className="font-bold text-foreground mb-2">{title}</p>
        <p className="text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function LessonCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-secondary/20 border border-border hover:border-purple-500/30 transition-colors">
      <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1">Lesson {number}</p>
      <h3 className="font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export function IdellIaCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Header */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            alt="IDÉLLIA case study"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-6 pt-32 pb-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {["RAG", "EdTech", "GenAI", "0-1", "Franco-Ontarian"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
              IDÉLLIA: Building the AI Pedagogical Co-Pilot for Franco-Ontarian Education
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              How I designed a RAG-based instructional assistant that transforms 15,000 certified educational assets into curriculum-aligned &ldquo;Learning Journeys&rdquo; — in under 2 minutes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
              {[
                { label: "Role", value: "Product Manager" },
                { label: "Organization", value: "TFO (Télévision française de l'Ontario)" },
                { label: "Platform", value: "Idéllo · idello.org" },
                { label: "Status", value: "PRD Complete · In Development" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                  <p className="font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-24 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Sidebar ToC */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-20 self-start">
            <div className="space-y-1 border-l border-border pl-6 py-2">
              <p className="font-semibold mb-4 text-xs uppercase tracking-widest text-muted-foreground">Table of Contents</p>
              {[
                { id: "context",     label: "1. Context & Problem" },
                { id: "opportunity", label: "2. Opportunity & Market" },
                { id: "strategy",    label: "3. Vision & Strategy" },
                { id: "ai",          label: "4. Data & AI" },
                { id: "system",      label: "5. System Architecture" },
                { id: "tradeoffs",   label: "6. Tradeoffs" },
                { id: "execution",   label: "7. Execution & Rollout" },
                { id: "impact",      label: "8. Metrics & Impact" },
                { id: "lessons",     label: "9. Lessons Learned" },
              ].map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block py-1.5 text-sm text-muted-foreground hover:text-purple-500 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-0">

            {/* ── 1. Context & Problem ── */}
            <CaseStudySection id="context" title="Context & Problem" icon={<Target size={24} />}>

              <SubHeading>The Paradox of Abundance</SubHeading>
              <p>
                The problem wasn&rsquo;t a lack of content. With nearly <strong className="text-foreground">15,000 certified educational resources</strong> — documentary series, digital books, podcasts, pedagogical tools, and interactive games — Idéllo already hosted one of the most comprehensive Francophone educational libraries in Canada. The platform was purpose-built for Franco-Ontarian schools: ad-free, privacy-compliant, curriculum-aligned, and culturally specific to the Franco-Ontarian identity.
              </p>
              <p className="mt-4">
                And yet, teachers weren&rsquo;t using most of it. The platform&rsquo;s &ldquo;Advanced Search&rdquo; put the entire cognitive burden on the user. To build a single lesson, a teacher had to search for a video, watch it to verify quality, search again for a supporting activity, and manually stitch those pieces into a coherent sequence — all while checking that each asset matched the specific Ontario curriculum strand for their grade level.
              </p>
              <p className="mt-4 italic text-foreground font-medium">
                The irony was sharp: the more content Idéllo added, the harder discovery became.
              </p>

              <SubHeading>Meet Gabrielle — The User Archetype</SubHeading>
              <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/10 rounded-2xl p-6 my-6">
                <p className="font-semibold text-foreground mb-3">Grade 5 teacher · Francophone school in Ontario · Tech-literate but time-poor</p>
                <p className="mb-4 text-sm">She operates under strict school board mandates: no ads, no student logins, no data collection. She trusts Idéllo because it&rsquo;s the &ldquo;only public Francophone media entirely dedicated to the Franco-Ontarian community.&rdquo; What she doesn&rsquo;t trust is spending 45 minutes on a Sunday evening building a lesson that should take five.</p>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Her core jobs-to-be-done</p>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Curriculum compliance", "She needs content aligned to the Ontario Life Systems strand for Grade 5 — in French, without Standard European French dominance."],
                    ["Cultural validation", "She seeks content reflecting a \"plural Francophonie\" — Acadian accents, Indigenous perspectives, Franco-Ontarian voices."],
                    ["Instant differentiation", "She needs to quickly adapt a lesson for a student reading below grade level without building a second lesson from scratch."],
                    ["Frictionless deployment", "She wants the right content on students' tablets right now, without requiring accounts or complex navigation."],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-2">
                      <span className="text-purple-500 mt-0.5 shrink-0">→</span>
                      <span><strong className="text-foreground">{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <SubHeading>The Five Pain Points</SubHeading>
              <div className="space-y-3 mt-4">
                <PainPoint number="1" title="The Haystack Problem">
                  Searching 15,000 resources through rigid metadata filters (Grade, Subject, Theme) creates decision fatigue. Teachers frequently abandoned the platform for Google or YouTube — faster tools that violated school board policies on safety and advertising.
                </PainPoint>
                <PainPoint number="2" title="The Stitching Tax">
                  The platform treated assets as isolated files. A teacher who wanted a Hook → Instruction → Practice structure had to manually find and sequence all three pieces — a manual orchestration tax that prevented accessing the full depth of TFO&rsquo;s multimedia ecosystem.
                </PainPoint>
                <PainPoint number="3" title="The Safety-Efficiency Paradox">
                  Teachers were caught between two unacceptable options: fast but unsafe (ChatGPT, YouTube), or safe but slow (Idéllo&rsquo;s manual search). No tool offered the speed of generative AI within a guaranteed, certified, ad-free environment.
                </PainPoint>
                <PainPoint number="4" title="The Cultural Blindspot">
                  Standard keyword algorithms rank by popularity, systematically burying minority accents and Indigenous perspectives in favour of Standard European French. Surfacing culturally specific content required query sophistication most teachers didn&rsquo;t have.
                </PainPoint>
                <PainPoint number="5" title="The Deployment Barrier">
                  TFO&rsquo;s strict privacy policy means student email addresses are never collected — making distributing curated content to students genuinely difficult. Without an anonymous access mechanism, teachers defaulted to projecting content passively rather than enabling individual student exploration.
                </PainPoint>
              </div>

              <BlockQuote>
                Gabrielle, a culturally-conscious Francophone educator, spends too much time manually filtering 15,000 disjointed resources to build a curriculum-aligned lesson sequence, and she frequently fails to deploy safe, culturally validating learning journeys to her students because the only efficient alternatives are unsafe, ad-supported, or Anglophone platforms.
              </BlockQuote>
            </CaseStudySection>

            {/* ── 2. Opportunity & Market Insight ── */}
            <CaseStudySection id="opportunity" title="Opportunity & Market Insight" icon={<Lightbulb size={24} />}>

              <SubHeading>A Blue Ocean in Francophone EdTech</SubHeading>
              <p>
                The Ontario educational technology landscape is bifurcated by language — and that divide creates a distinct market opportunity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-xl border border-border bg-secondary/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Anglophone Market</p>
                  <p className="font-semibold text-foreground mb-1">Robustly served</p>
                  <p className="text-sm">TVO offers a full instructional stack: TVO Learn (curated discovery), Mathify (live 1:1 tutoring), and mPower (gamified STEM) — serving millions of students.</p>
                </div>
                <div className="p-5 rounded-xl border border-purple-500/20 bg-purple-500/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Francophone Market</p>
                  <p className="font-semibold text-foreground mb-1">Structural absence</p>
                  <p className="text-sm">TFO&rsquo;s Idéllo is the content library — but there is no active instructional layer, no AI-driven sequencing tool, no anonymous deployment mechanism at scale. This isn&rsquo;t a feature gap. It&rsquo;s a structural absence.</p>
                </div>
              </div>

              <SubHeading>Competitor Analysis</SubHeading>
              <Table
                headers={["Platform", "Strengths", "Gaps"]}
                rows={[
                  ["TVO Mathify", "Anonymous, human-led 1:1 tutoring; strong privacy model", "Human-in-the-loop = not scalable; English only"],
                  ["TVO Learn", "Curated discovery, curriculum-tagged", "Static metadata search; no sequencing"],
                  ["ChatGPT / Open LLMs", "Fast, fluent, powerful", "Hallucination risk; ad exposure; no curriculum grounding; privacy violations"],
                  ["Idéllo (current)", "Certified content, ad-free, culturally specific", "Passive library; cognitive burden on teacher; no AI layer"],
                ]}
              />
              <p className="text-sm mt-2">
                Key insight: <strong className="text-foreground">the institutional competitors are deliberately avoiding generative AI.</strong> IDÉLLIA&rsquo;s opportunity was to be the first platform to solve the safety-efficiency paradox at the institutional level.
              </p>

              <SubHeading>Three Market Voids</SubHeading>
              <div className="space-y-3 mt-4">
                {[
                  ["Void 1 — Static vs. Dynamic", "Teachers have a massive passive library but no active instructional partner. IDÉLLIA converts static assets into dynamic, sequenced Learning Journeys on demand."],
                  ["Void 2 — Safety vs. Speed", "No existing tool offers both. IDÉLLIA occupies the \"Safe AI\" gap by restricting all LLM retrieval to TFO's certified ecosystem — zero hallucination of external, unsafe content."],
                  ["Void 3 — The Cultural Blindspot", "Generic AI defaults to global English or Standard European French. No competitor — institutional or commercial — addresses the Franco-Ontarian community's specific cultural mandate."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3 p-4 rounded-xl bg-secondary/20 border border-border">
                    <span className="text-purple-500 mt-0.5 shrink-0">◆</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">{title}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            {/* ── 3. Vision & Product Strategy ── */}
            <CaseStudySection id="strategy" title="Vision & Product Strategy" icon={<BookOpen size={24} />}>

              <BlockQuote>
                Transform Idéllo from a passive archive into an active pedagogical partner — where any teacher can generate a secure, curriculum-aligned, culturally inclusive Learning Journey in under 2 minutes, without exposing a single student data point.
              </BlockQuote>
              <p className="text-sm mt-2">This vision encodes three non-negotiable constraints that defined every product decision: <strong className="text-foreground">Speed</strong> (under 2 min, not 5), <strong className="text-foreground">Safety</strong> (zero student data exposure), and <strong className="text-foreground">Cultural specificity</strong> (Franco-Ontarian French, not just French).</p>

              <SubHeading>The Core Product: Parcours d&rsquo;apprentissage (Learning Journeys)</SubHeading>
              <p className="mb-4">The teacher&rsquo;s input is a natural language prompt: <em>&ldquo;Create a lesson on Water Systems for Grade 5 focused on Indigenous knowledge.&rdquo;</em> The output is a fully sequenced Parcours, deployable via an anonymous Class Code.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { step: "Hook", desc: "An engaging video to open the lesson and capture attention", color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/20" },
                  { step: "Instruction", desc: "A digital book or documentary to build knowledge", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/20" },
                  { step: "Application", desc: "A game, interactive tool, or pedagogical strategy card to reinforce learning", color: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-500/20" },
                  { step: "Extension", desc: "Optional differentiated activity for additional challenge or support", color: "from-green-500/20 to-green-500/5", border: "border-green-500/20" },
                ].map(({ step, desc, color, border }) => (
                  <div key={step} className={`p-4 rounded-xl bg-gradient-to-b ${color} border ${border}`}>
                    <p className="font-bold text-foreground text-sm mb-1">{step}</p>
                    <p className="text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <SubHeading>The Walled Garden Architecture</SubHeading>
              <p>IDÉLLIA&rsquo;s AI would be powerful but bounded — it could only retrieve content from TFO&rsquo;s certified ecosystem. This wasn&rsquo;t a limitation; it was the core value proposition. It simultaneously eliminated hallucination risk, satisfied school board privacy mandates by design, and made IDÉLLIA irreplaceable — no generic AI tool could replicate curriculum-aligned Franco-Ontarian content retrieval.</p>

              <SubHeading>Feature Prioritization (RICE Framework)</SubHeading>
              <Table
                headers={["Feature", "Reach", "Impact", "Confidence", "Effort", "RICE", "Priority"]}
                rows={[
                  ["Parcours Generator (NL prompt → sequence)", "90%", "10", "9", "7", "115", "P0"],
                  ["Anonymous Class Code Deployment", "90%", "9", "9", "5", "145", "P0"],
                  ["Cultural & Identity Re-ranking", "70%", "8", "7", "6", "65", "P1"],
                  ["Differentiation Mode", "60%", "8", "7", "7", "48", "P1"],
                  ["Home-School Bridge (\"Generate Home Link\")", "50%", "7", "6", "4", "52", "P2"],
                ]}
              />
            </CaseStudySection>

            {/* ── 4. Data & AI ── */}
            <CaseStudySection id="ai" title="Data & AI" icon={<Brain size={24} />}>

              <SubHeading>Why AI — and Why It&rsquo;s Essential, Not Optional</SubHeading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                {[
                  ["Scale & Semantic Complexity", "With 15,000 assets, rigid metadata filters create the Haystack Problem. A query like \"Grade 5 lesson on conservation of energy with an Indigenous perspective\" requires semantic understanding across multiple curriculum tags, cultural markers, and content formats simultaneously. Keyword search cannot do this."],
                  ["Multimodal Orchestration", "The ecosystem contains documentary series, audio podcasts, digital books, games, and pedagogical tool cards — all in separate silos. AI acts as connective tissue, linking these formats into a coherent instructional sequence."],
                  ["Privacy & Cultural Mandate Compliance", "Only AI can operationalize the Walled Garden constraint at scale — strictly restricting retrieval to TFO's certified catalog while simultaneously weighting culturally specific assets against global popularity signals."],
                ].map(([title, desc]) => (
                  <div key={title} className="p-5 rounded-xl bg-secondary/20 border border-border">
                    <p className="font-semibold text-foreground text-sm mb-2">{title}</p>
                    <p className="text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <SubHeading>The RAG Architecture</SubHeading>
              <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-6 rounded-2xl border border-purple-500/10 my-4">
                <p className="font-semibold text-foreground mb-4">Why RAG over fine-tuning — a deliberate, strategic choice:</p>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Source of truth stays in the catalog", "As Idéllo's content library updates — new videos, new curriculum standards — the retrieval layer updates automatically. A fine-tuned model would require periodic retraining."],
                    ["RAG is auditable", "Every asset in a generated Parcours can be traced back to a specific catalog item with metadata (curriculum strand, grade level, format, cultural tags). Essential for building trust with teachers and school boards."],
                    ["RAG prevents hallucination by design", "The model cannot generate content that doesn't exist in the catalog. It can only retrieve, rank, and sequence existing certified assets."],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-3">
                      <span className="text-purple-500 shrink-0 mt-0.5">✓</span>
                      <span><strong className="text-foreground">{title}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-purple-500/10">
                  {["RAG", "Vector Embeddings", "LLMs", "Cultural Weighting Layer", "Anonymous Class Code System"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted-foreground">{tech}</span>
                  ))}
                </div>
              </div>

              <SubHeading>Cultural Weighting Layer</SubHeading>
              <p>A standard RAG pipeline ranks results by semantic relevance. IDÉLLIA adds a re-ranking step that boosts assets meeting TFO&rsquo;s mandate criteria:</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {[
                  "Content tagged with Franco-Ontarian regional accents",
                  "Content featuring Indigenous voices, perspectives, or knowledge systems",
                  "Content representing a \"plural Francophonie\" rather than Standard European French",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-purple-500 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <SubHeading>Anonymous Session Architecture</SubHeading>
              <p className="mb-4">TFO&rsquo;s privacy policy is non-negotiable: no student email addresses are collected. Standard user-account-based distribution was off the table.</p>
              <div className="flex flex-col gap-2">
                {[
                  ["1", "Teacher generates a Parcours and clicks \"Deploy to Class\""],
                  ["2", "IDÉLLIA bundles selected assets into a temporary session container"],
                  ["3", "A unique, time-limited Class Code is generated"],
                  ["4", "Students enter the code at idello.org/code — no account, no email, no tracking"],
                  ["5", "The session expires after the defined class period"],
                ].map(([num, step]) => (
                  <div key={num} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-secondary/20 border border-border text-sm">
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center justify-center shrink-0">{num}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            {/* ── 5. System Architecture ── */}
            <CaseStudySection id="system" title="System Architecture" icon={<Network size={24} />}>
              <div className="bg-secondary/20 rounded-2xl border border-border p-6 font-mono text-xs text-muted-foreground leading-loose overflow-x-auto">
                <pre>{`[ Teacher ]
    │
    ▼
[ Natural Language Input ]
"Grade 5 Water Systems lesson, Indigenous perspective"
    │
    ▼
[ Query Parser ]
Extracts: Grade Level · Curriculum Strand · Format Preferences · Cultural Tags
    │
    ▼
[ RAG Retrieval Engine ]
Semantic search across 15,000-asset vector index
    │
    ▼
[ Cultural Weighting Layer ]
Re-ranks results to surface Indigenous / Franco-Ontarian content
    │
    ▼
[ Parcours Assembler ]
Sequences assets into Hook → Instruction → Application arc
    │
    ▼
[ Learning Journey Output ]
Structured lesson with 3–5 certified assets
    │
    ├──► [ Teacher Preview & Edit ]
    │
    └──► [ Class Code Generator ]
              │
              ▼
         [ Anonymous Student Session ]
         idello.org/code → time-limited access, no login`}</pre>
              </div>

              <SubHeading>Key Technical Constraints</SubHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  ["Vector Index", "Built on Idéllo's existing CMS metadata, enriched with semantic embeddings"],
                  ["Retrieval Scope", "Strictly bounded to TFO's asset catalog — no external web retrieval"],
                  ["LLM Role", "Orchestration and sequencing only — does not generate new content or suggest external resources"],
                  ["Session Data", "Ephemeral — Class Codes expire and generate zero persistent student data"],
                ].map(([title, desc]) => (
                  <div key={title} className="p-4 rounded-xl bg-secondary/20 border border-border text-sm">
                    <p className="font-semibold text-foreground mb-1">{title}</p>
                    <p className="leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            {/* ── 6. Tradeoffs ── */}
            <CaseStudySection id="tradeoffs" title="Tradeoffs & Prioritization" icon={<AlertTriangle size={24} />}>
              <p className="mb-6">These are the decisions that shaped IDÉLLIA — not because they were easy, but because they were deliberate.</p>
              <div className="space-y-4">
                <TradeoffCard
                  title="Tradeoff 1 — Anonymous Access vs. Personalized Accounts"
                  chose="Anonymous Class Code model with no student accounts."
                  gaveUp="Personalization, progress tracking, adaptive sequencing based on individual history."
                  why="TFO's privacy mandate made student accounts a non-starter institutionally. Anonymity is the feature that allows IDÉLLIA to be used in schools where other digital tools are banned."
                />
                <TradeoffCard
                  title="Tradeoff 2 — RAG over Fine-Tuning"
                  chose="RAG with a bounded retrieval corpus."
                  gaveUp="The ability to have the model 'learn' pedagogical preferences over time without re-retrieval."
                  why="Fine-tuning would encode the catalog into model weights at a point in time and drift as Idéllo's library grows. RAG keeps the ground truth live and auditable."
                />
                <TradeoffCard
                  title="Tradeoff 3 — Walled Garden vs. Hybrid Retrieval"
                  chose="100% retrieval restricted to TFO's certified catalog."
                  gaveUp="The breadth and flexibility of open-web retrieval (e.g., linking to Khan Academy, Wikipedia)."
                  why="This was a values decision as much as a technical one. One unsafe YouTube link erodes the entire trust model. The Walled Garden is not a constraint — it is the product."
                />
                <TradeoffCard
                  title="Tradeoff 4 — Teacher-Facing MVP vs. Student-Facing Features"
                  chose="Build for the teacher first. Student experience in V1 is simply access via Class Code."
                  gaveUp="Student-facing features like in-session progress indicators, peer activities, or gamified engagement layers."
                  why="The teacher is the decision-maker and adoption gateway. If Gabrielle doesn't use IDÉLLIA, her students never see it. A focused teacher experience in V1 was a distribution strategy."
                />
              </div>
            </CaseStudySection>

            {/* ── 7. Execution & Rollout ── */}
            <CaseStudySection id="execution" title="Execution & Rollout" icon={<Users size={24} />}>

              <SubHeading>Phased Rollout Strategy</SubHeading>
              <div className="mt-4">
                <Phase number="1" title="Closed Pilot (Pre-September)">
                  A small cohort of 20–30 teachers from French-language school boards in Ontario. The goal was signal quality, not adoption metrics — pedagogical soundness, Class Code reliability under real classroom conditions, and cultural weighting accuracy. Teachers were treated as partners, not users.
                </Phase>
                <Phase number="2" title="Board-Level Launch (September)">
                  Timed to align with the school year start — the highest-intent period for teacher planning. School boards were the procurement decision-makers. The launch centred on three deliverables: a demo with real curriculum standards, proof of the privacy compliance model, and a direct &ldquo;45 minutes vs. 2 minutes&rdquo; benchmark comparison.
                </Phase>
                <Phase number="3" title="Platform Integration & Home-School Bridge">
                  Extending IDÉLLIA&rsquo;s reach to the &ldquo;Home Facilitator&rdquo; persona — parents using &ldquo;Apprendre à la maison.&rdquo; This phase added the &ldquo;Generate Home Link&rdquo; feature, surfacing gamified activities and Boukili books that reinforced classroom learning at home.
                </Phase>
              </div>

              <SubHeading>Stakeholder Communication Strategy</SubHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  ["School Boards", "Lead with privacy compliance and curriculum alignment — before any classroom deployment discussion."],
                  ["TFO Leadership", "Position IDÉLLIA as a platform differentiator, not a feature addition."],
                  ["Teachers", "Lead with speed and cultural authenticity in the first demo — before any conversation about technical architecture."],
                  ["Parents & Community Orgs", "Lead with cultural identity and transparency on the anonymous access model."],
                ].map(([audience, strategy]) => (
                  <div key={audience} className="p-4 rounded-xl bg-secondary/20 border border-border text-sm">
                    <p className="font-semibold text-foreground mb-1">{audience}</p>
                    <p className="leading-relaxed">{strategy}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            {/* ── 8. Metrics & Impact ── */}
            <CaseStudySection id="impact" title="Metrics & Impact" icon={<TrendingUp size={24} />}>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-purple-500/20 mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">North Star Metric</p>
                <p className="text-xl font-bold text-foreground mb-1">Time-to-Lesson</p>
                <p className="text-sm mb-4">The time elapsed from a teacher&rsquo;s first prompt to a deployed Class Code in students&rsquo; hands.</p>
                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Baseline</p>
                    <p className="text-3xl font-black text-red-400">45+ min</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-xl">→</div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Target</p>
                    <p className="text-3xl font-black text-green-400">&lt;2 min</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <MetricCard value="145K+" label="Monthly Active Users" description="Existing Idéllo platform scale at launch" trend="up" />
                <MetricCard value=">95%" label="Curriculum Alignment" description="Target accuracy for retrieved assets" trend="up" />
                <MetricCard value="0%" label="Hallucination Rate" description="Binary quality gate — no external links" trend="neutral" />
              </div>

              <SubHeading>Core PM Metrics</SubHeading>
              <Table
                headers={["Metric", "Baseline", "Target", "Signal"]}
                rows={[
                  ["Time-to-Lesson", ">45 min", "<2 min", "Core value delivery"],
                  ["Parcours Completion Rate", "—", ">70%", "Teachers completing full deployment"],
                  ["Class Code Redemption Rate", "—", ">60%", "Students actually accessing content"],
                  ["Asset Utilization Depth", "Low (surface catalog only)", "Deep catalog access", "Long-tail discovery unlocked"],
                  ["Teacher Return Rate (Day 30)", "—", ">50%", "Habit formation, not novelty"],
                ]}
              />

              <SubHeading>AI-Specific Quality Metrics</SubHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  ["Curriculum Alignment Accuracy", ">95%", "% of retrieved assets correctly tagged to the specified Ontario curriculum strand. Below this, teachers can't trust the output without manual verification."],
                  ["Cultural Relevance Score", ">90%", "% of Parcours (with cultural specifiers) that surface at least one culturally-tagged asset."],
                  ["Hallucination Rate", "0%", "Binary quality gate. A single hallucinated external link is a critical incident given the trust model."],
                  ["Teacher Override Rate", "<20%", "How often a teacher manually swaps or removes an AI-recommended asset. A high rate signals retrieval quality issues."],
                ].map(([name, target, desc]) => (
                  <div key={name} className="p-4 rounded-xl bg-secondary/20 border border-border text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-foreground">{name}</p>
                      <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">{target}</span>
                    </div>
                    <p className="leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            {/* ── 9. Lessons Learned ── */}
            <CaseStudySection id="lessons" title="Lessons Learned" icon={<CheckCircle size={24} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LessonCard number="1" title="The constraint is the product.">
                  Every time the Walled Garden felt limiting — &ldquo;what if we allowed one external link?&rdquo; — the answer was the same: the constraint is what makes the product trustworthy enough to use in a school. In regulated or trust-sensitive domains, your constraints aren&rsquo;t obstacles to creativity — they are the brief.
                </LessonCard>
                <LessonCard number="2" title="Cultural specificity is a product moat.">
                  Generic AI platforms can be faster, bigger, and better-funded. They cannot be more culturally specific. TFO&rsquo;s mandate to represent a &ldquo;plural Francophonie&rdquo; is something no global AI company can replicate without years of localized data collection. Cultural nuance is a durable competitive advantage.
                </LessonCard>
                <LessonCard number="3" title="Anonymity is underrated as a product value.">
                  Personalization gets most of the attention in AI product design. IDÉLLIA taught me that in certain contexts, the absence of tracking is the feature that unlocks adoption. The Class Code model works precisely because it asks nothing of the student. Zero friction. Zero data. Zero barrier to access.
                </LessonCard>
                <LessonCard number="4" title="The teacher is the distribution channel.">
                  Early in the PRD process, I caught myself designing for the student experience. The pivot: in K-12 edtech, the teacher is both the user and the gatekeeper. Building a focused, excellent teacher experience before any student-facing features wasn&rsquo;t a scope decision — it was a distribution strategy.
                </LessonCard>
              </div>
            </CaseStudySection>

            {/* Footer nav */}
            <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
              <Link href="/#case-studies">
                <Button variant="ghost">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground italic">Case study by Abdoulaye Binta Bah · Product Manager</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
