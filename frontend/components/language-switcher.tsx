"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="flex items-center gap-2 px-3 font-medium"
    >
      <Globe size={16} />
      <span>{language === "en" ? "EN" : "FR"}</span>
    </Button>
  );
}

