import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CaseStudies } from "@/components/sections/case-studies";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Work | Abdoulaye Bah",
  description: "Case studies of key projects, challenges overcome, and impact delivered across healthcare, EdTech, and platform modernization initiatives.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Work</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Detailed case studies of key projects, challenges overcome, and impact delivered across healthcare, EdTech, and platform modernization initiatives.
            </p>
          </div>
        </div>
      </section>

      <CaseStudies />
      <Contact />

      <Footer />
    </main>
  );
}
