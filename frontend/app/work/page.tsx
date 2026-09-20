import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProfessionalCaseStudies } from "@/components/sections/professional-case-studies";
import { ExperimentsBuilds } from "@/components/sections/experiments-builds";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Work | Abdoulaye Bah",
  description: "Case studies of key projects, challenges overcome, and impact delivered across healthcare, EdTech, and platform modernization initiatives.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-eyebrow">Work</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Product Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Case studies and product builds across healthcare, EdTech, data platforms, integrations, and product modernization.
          </p>
        </div>
      </section>

      <ProfessionalCaseStudies />
      <ExperimentsBuilds />
      <Contact />

      <Footer />
    </main>
  );
}
