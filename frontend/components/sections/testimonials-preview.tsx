"use client";

import React from "react";
import { testimonials } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function TestimonialsPreview() {
  // Curated testimonials for homepage
  const selectedTestimonials = [
    testimonials.find(t => t.name === "Joëlle Drouin"),
    testimonials.find(t => t.name === "Erika Aslanoglou"),
    testimonials.find(t => t.name === "Wisdom Nwokocha"),
  ].filter(Boolean);

  // Short excerpts focused on specific strengths
  const excerpts: { [key: string]: string } = {
    "Joëlle Drouin": "A natural product leader who thrives in discovery and delivery. Exceptional at bringing teams together and driving impact.",
    "Erika Aslanoglou": "Navigates complexity with remarkable clarity and execution. Incredibly dependable when it matters most.",
    "Wisdom Nwokocha": "Combines strong technical knowledge with proactive problem-solving. Built secure APIs, communicates effectively, and is a great team player.",
  };

  return (
    <section className="pt-0 pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="section-header mb-16">
          <div className="section-eyebrow">What Colleagues Say</div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground dark:text-foreground mb-4">
            Trusted across product, technology, and global teams.
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {selectedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 md:p-8 rounded-[10px] bg-[#FFF8F4] dark:bg-[#24201D] border border-[#EAE6E2] dark:border-[#37312D] hover:bg-[#FFF0E5] dark:hover:bg-[#2A251F] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              {/* Quote */}
              <p
                className="text-base font-medium mb-6 leading-relaxed flex-grow text-[#171717] dark:text-[#FAF8F6]"
              >
                {excerpts[testimonial.name] || testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#EAE6E2] dark:border-[#37312D]">
                {/* Avatar */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="min-w-0">
                  <h4
                    className="font-semibold text-sm text-[#171717] dark:text-[#FAF8F6]"
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-xs text-[#6B6B6B] dark:text-[#BDB7B2]"
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            href="/about#testimonials"
            className="inline-flex items-center gap-2 text-primary dark:text-primary font-medium hover:gap-3 transition-all"
          >
            See more recommendations →
          </Link>
        </div>
      </div>
    </section>
  );
}
