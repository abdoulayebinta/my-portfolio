"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4">
              {t.footer.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.caseStudies}</Link></li>
              <li><Link href="/#insights" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.insights}</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.connect}</h3>
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
            © {new Date().getFullYear()} Abdoulaye Bah. {t.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}

