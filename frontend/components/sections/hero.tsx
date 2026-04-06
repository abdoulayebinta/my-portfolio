"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Sparkles, GraduationCap, HeartPulse, BarChart3, Landmark, CalendarCheck, MapPin, BadgeCheck } from "lucide-react";
import { ResumeDownloadButton } from "@/components/resume-download-button";
import Link from "next/link";
import Image from "next/image";
import { BackgroundAnimation } from "@/components/ui/background-animation";
import { useLanguage } from "@/context/language-context";

export function Hero() {
  const { t } = useLanguage();

  const renderWithBold = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, lineIdx, lines) => {
      const parts = line.split(/(\*\*.*?\*\*)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return (
        <React.Fragment key={lineIdx}>
          {parts}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <BackgroundAnimation />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">

            {/* Open to work badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-6 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to AI PM / TPM roles · Canada & Remote
            </div>

            {/* Credential tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {[
                { label: "Toronto, ON",       icon: MapPin,      favicon: null },
                { label: "Bilingual FR/EN",   icon: null,        favicon: null },
                { label: "AI PM Certified · Google (Maven)", icon: BadgeCheck, favicon: null },
              ].map(({ label, icon: Icon, favicon }) => (
                <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-muted-foreground text-sm font-medium bg-secondary/30">
                  {favicon
                    ? <Image src={`https://www.google.com/s2/favicons?domain=${favicon}&sz=32`} alt={label} width={13} height={13} className="rounded-sm shrink-0" unoptimized />
                    : Icon
                      ? <Icon size={13} />
                      : <span className="text-sm leading-none">🇨🇦</span>
                  }
                  {label}
                </span>
              ))}
            </div>

            {/* Domain tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { label: "EdTech", icon: GraduationCap, color: "text-blue-500 border-blue-500/30 bg-blue-500/5" },
                { label: "HealthTech", icon: HeartPulse, color: "text-rose-500 border-rose-500/30 bg-rose-500/5" },
                { label: "GovTech", icon: Landmark, color: "text-amber-500 border-amber-500/30 bg-amber-500/5" },
                { label: "Data Platforms", icon: BarChart3, color: "text-purple-500 border-purple-500/30 bg-purple-500/5" },
              ].map(({ label, icon: Icon, color }) => (
                <span key={label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide ${color}`}>
                  <Icon size={12} />
                  {label}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-[2.55rem] md:text-[3.1875rem] lg:text-[3.825rem] font-bold tracking-tight mb-7 leading-[1.1]">
              <span className="block">{t.hero.headline.line1}</span>
              {t.hero.headline.line2 && <span className="block">{t.hero.headline.line2}</span>}
              {t.hero.headline.line3 && <span className="block italic text-gradient">{t.hero.headline.line3}</span>}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-9 max-w-xl leading-relaxed">
              {renderWithBold(t.hero.subheadline)}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-9 w-full max-w-xl">
              {t.hero.stats?.map((stat: { value: string; label: string; context: string }, index: number) => (
                <div key={index} className="flex flex-col gap-0.5 px-3 py-3 rounded-xl bg-secondary/40 border border-border backdrop-blur-sm">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{stat.value}</span>
                  <span className="text-[0.65rem] font-semibold text-foreground/80 leading-tight">{stat.label}</span>
                  <span className="text-[0.6rem] text-muted-foreground leading-tight">{stat.context}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              {/* Primary — one dominant action */}
              <Link href="#case-studies" className="w-full sm:w-auto">
                <Button size="lg" variant="gradient" className="w-full sm:w-auto group text-base h-12 px-8 cursor-pointer">
                  {t.hero.cta.caseStudies}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* Secondary — resume for convinced visitors */}
              <ResumeDownloadButton variant="outline" size="lg" label="Download Resume" className="w-full sm:w-auto text-base h-12 px-8" />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col gap-3 items-center lg:items-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">

            {/* Photo Card */}
            <div className="relative w-[24.5rem] rounded-2xl overflow-hidden border border-white/10 bg-black/80 aspect-[3/4] group shadow-2xl shadow-black/50">
              {/* Animated glow blobs */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-bl from-indigo-600 via-purple-600 to-pink-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-1000" />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20 z-10 mix-blend-overlay" />
              {/* Photo */}
              <Image
                src="https://github.com/abdoulayebinta.png"
                alt="Abdoulaye Bah"
                fill
                className="object-cover object-center filter brightness-105 contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                priority
              />
              {/* Glassmorphism name badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">{t.hero.profileCard.name}</p>
                    <p className="text-white/60 text-[0.65rem] uppercase tracking-wider mt-0.5">Technical Product Manager (AI / Data)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Grid — 4 separate cards */}
            <div className="grid grid-cols-2 gap-2 w-[24.5rem]">
              {([
                { ...t.hero.profileCard.currentlyAt, logo: "tfo.org" },
                { ...t.hero.profileCard.previously,  logo: "who.int" },
                t.hero.profileCard.products,
                t.hero.profileCard.stack,
              ] as { label: string; value: string; logo?: string }[]).map((item, i) => (
                <div key={i} className="rounded-xl bg-secondary/30 border border-border backdrop-blur-sm px-3 py-2.5 flex flex-col gap-0.5 hover:border-purple-500/30 transition-colors">
                  <p className="text-[0.58rem] font-semibold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                  <div className="flex items-center gap-1.5">
                    {item.logo && (
                      <Image
                        src={`https://www.google.com/s2/favicons?domain=${item.logo}&sz=32`}
                        alt={item.value}
                        width={14}
                        height={14}
                        className="rounded-sm shrink-0"
                        unoptimized
                      />
                    )}
                    <p className="text-xs font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              {/* Certification — full width */}
              <div className="col-span-2 rounded-xl bg-secondary/30 border border-border backdrop-blur-sm px-3 py-2.5 flex flex-col gap-0.5 hover:border-purple-500/30 transition-colors">
                <p className="text-[0.58rem] font-semibold text-muted-foreground uppercase tracking-widest">Certification</p>
                <div className="flex items-center gap-1.5">
                  <BadgeCheck size={14} className="text-purple-500 shrink-0" />
                  <p className="text-xs font-semibold text-foreground">AI PM Certified — Google · Maven (Dr. Marily Nika)</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2 w-[24.5rem]">
              <a href="https://www.linkedin.com/in/abdoulayebintabah/" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-1.5 cursor-pointer text-xs">
                  <Image src="https://www.google.com/s2/favicons?domain=linkedin.com&sz=32" alt="LinkedIn" width={14} height={14} className="rounded-sm shrink-0" unoptimized />
                  {t.hero.profileCard.cta.linkedin} <ArrowRight className="w-3 h-3 -rotate-45" />
                </Button>
              </a>
              <a href="https://github.com/abdoulayebinta" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-1.5 cursor-pointer text-xs">
                  <Image src="https://www.google.com/s2/favicons?domain=github.com&sz=32" alt="GitHub" width={14} height={14} className="rounded-sm shrink-0" unoptimized />
                  {t.hero.profileCard.cta.github} <ArrowRight className="w-3 h-3 -rotate-45" />
                </Button>
              </a>
              <a href="#contact" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-1.5 cursor-pointer text-xs">
                  <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
                  {t.hero.profileCard.cta.bookCall}
                </Button>
              </a>
            </div>

          </div>

        </div>

        {/* Down arrow */}
        <div className="flex justify-center mt-12">
          <a href="#trusted-by" aria-label="Scroll down" className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-purple-500 bg-white dark:bg-background text-purple-600 dark:text-purple-400 shadow-lg shadow-purple-500/30 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all duration-300 cursor-pointer animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
