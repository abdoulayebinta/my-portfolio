"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Calendar } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Contact() {
  // Use mounted state to prevent hydration mismatches if extensions inject elements
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:hello@abdoulaye.pm" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-border">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{t.contact.email.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.contact.email.value}</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-border">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{t.contact.linkedin.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.contact.linkedin.value}</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-border">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{t.contact.calendar.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.contact.calendar.value}</p>
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
                    <label htmlFor="name" className="text-sm font-medium">{t.contact.form.name}</label>
                    <Input id="name" placeholder={t.contact.form.namePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">{t.contact.form.email}</label>
                    <Input id="email" type="email" placeholder={t.contact.form.emailPlaceholder} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">{t.contact.form.subject}</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>{t.contact.form.subjects.recruiting}</option>
                    <option>{t.contact.form.subjects.collaboration}</option>
                    <option>{t.contact.form.subjects.networking}</option>
                    <option>{t.contact.form.subjects.other}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">{t.contact.form.message}</label>
                  <Textarea id="message" placeholder={t.contact.form.messagePlaceholder} className="min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full" variant="gradient">
                  {t.contact.form.submit}
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

