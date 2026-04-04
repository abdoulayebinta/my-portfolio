"use client";

import React, { useState } from "react";
import { Download, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type State = "idle" | "loading" | "done";

interface ResumeDownloadButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  label?: string;
}

export function ResumeDownloadButton({
  variant = "outline",
  size = "sm",
  className,
  label = "Resume",
}: ResumeDownloadButtonProps) {
  const [state, setState] = useState<State>("idle");

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (state !== "idle") return;

    setState("loading");
    try {
      const response = await fetch("/Abdoulaye_Resume.pdf");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Abdoulaye_Resume.pdf";
      link.click();
      URL.revokeObjectURL(blobUrl);

      setState("done");
      toast.success("Resume downloaded!", {
        description: "Abdoulaye_Resume.pdf is in your downloads folder.",
        duration: 4000,
      });
      setTimeout(() => setState("idle"), 3000);
    } catch {
      setState("idle");
      toast.error("Download failed", {
        description: "Please try again or reach out directly.",
      });
    }
  };

  const icon =
    state === "loading" ? (
      <Loader2 className="h-3.5 w-3.5 animate-spin" />
    ) : state === "done" ? (
      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
    ) : (
      <Download className="h-3.5 w-3.5" />
    );

  const buttonLabel =
    state === "loading" ? "Downloading…" : state === "done" ? "Downloaded!" : label;

  return (
    <Button
      variant={state === "done" ? "outline" : variant}
      size={size}
      onClick={handleDownload}
      disabled={state === "loading"}
      className={cn(
        "gap-1.5 cursor-pointer transition-all duration-300",
        state === "done" && "border-green-500/50 text-green-500 hover:text-green-500",
        className
      )}
    >
      {icon}
      {buttonLabel}
    </Button>
  );
}
