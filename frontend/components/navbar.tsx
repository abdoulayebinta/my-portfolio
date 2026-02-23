"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "@/components/logo";

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { name: "About", href: "/#about" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Skills", href: "/#skills" },
  { 
    name: "Insights", 
    href: "/#insights",
    children: [
      { name: "Blogs", href: "/#insights" },
      { name: "Videos", href: "/#insights" } // Linking to same section for now as they are combined
    ]
  },
  { name: "Resume", href: "/resume.pdf" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group-hover:text-foreground"
                  >
                    {item.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-xl p-2 min-w-[160px] flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5 max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between text-base font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded-md hover:bg-secondary/30"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={cn("transition-transform duration-200", activeDropdown === item.name ? "rotate-180" : "")} 
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="flex flex-col pl-6 gap-2 pb-2 border-l-2 border-border ml-4 my-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded-md hover:bg-secondary/30"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

