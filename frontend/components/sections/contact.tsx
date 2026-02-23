"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Calendar } from "lucide-react";

export function Contact() {
  // Use mounted state to prevent hydration mismatches if extensions inject elements
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Extraordinary</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm currently open to new opportunities in AI Product Management. Whether you're a recruiter, founder, or fellow PM, I'd love to connect.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:hello@abdoulaye.pm" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-border">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email Me</h3>
                  <p className="text-sm text-muted-foreground">hello@abdoulaye.pm</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-border">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Connect professionally</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-border">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Book a Call</h3>
                  <p className="text-sm text-muted-foreground">Schedule 15 mins</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            {mounted ? (
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>Recruiting / Hiring</option>
                    <option>Collaboration</option>
                    <option>Networking</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Hi, I'd like to discuss..." className="min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full" variant="gradient">
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="h-[400px] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

