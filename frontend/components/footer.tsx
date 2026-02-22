"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4">
              Building the future of AI products. Focused on strategy, systems thinking, and human-centric design.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link href="/#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"><Linkedin size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"><Github size={20} /></a>
              <a href="mailto:hello@abdoulaye.pm" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abdoulaye Bah. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

