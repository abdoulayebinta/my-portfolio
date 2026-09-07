"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">

          {/* Brand section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Logo />
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              Technical Product Manager & Builder working across healthcare, EdTech, platforms, data, integrations, and AI.
            </p>
          </div>

          {/* Navigation section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/product-thinking" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Product Thinking
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Connect</h3>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/abdoulayebintabah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background rounded p-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/abdoulayebinta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background rounded p-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.youtube.com/@abdoulayebintabah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background rounded p-1"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:bahabdoulayebinta@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background rounded p-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-xs text-muted-foreground">
              © 2026 Abdoulaye Bah. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & built by Abdoulaye Bah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

