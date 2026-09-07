"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Send } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "@/components/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Product Thinking", href: "/product-thinking" },
    { name: t.nav.about, href: "/about" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-border/30 dark:border-border/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand Lockup */}
          <Link
            href="/"
            className="group transition-opacity hover:opacity-80"
          >
            <Logo variant="full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-base font-medium transition-all relative rounded-md group",
                  isActive(item.href)
                    ? "text-primary dark:text-primary"
                    : "text-muted-foreground hover:text-primary dark:hover:text-primary"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-1.5 left-3 right-3 h-0.5 rounded-full transition-colors",
                  isActive(item.href)
                    ? "bg-primary dark:bg-primary"
                    : "bg-primary/0 group-hover:bg-primary/50 dark:group-hover:bg-primary/50"
                )} />
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Get In Touch CTA */}
            <Link href="/contact" className="hidden sm:inline-block">
              <Button size="sm" className="gap-1.5">
                <Send size={15} className="send-icon" />
                Get In Touch
              </Button>
            </Link>

            {/* Language Selector */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 hover:bg-secondary/50 dark:hover:bg-secondary/30"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-md text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/30 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden absolute top-[72px] left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/40 dark:border-border/30 animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                  isActive(item.href)
                    ? "bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary dark:hover:text-primary hover:bg-secondary/30"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 pt-2 border-t border-border/40"
            >
              <Button
                size="sm"
                className="w-full gap-1.5"
              >
                <Send size={15} className="send-icon" />
                Get In Touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

