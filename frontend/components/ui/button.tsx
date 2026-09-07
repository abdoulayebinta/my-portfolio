"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        // Primary: Coral background, white text
        default: "bg-primary text-primary-foreground hover:bg-primary/85 active:bg-primary/95",

        // Secondary: Transparent/white background, dark text, neutral border
        secondary:
          "bg-background text-foreground border border-border hover:bg-soft-peach dark:hover:bg-soft-accent transition-colors duration-150",

        // Tertiary: Text-only link with arrow, coral hover
        tertiary: "bg-transparent text-foreground hover:text-primary dark:hover:text-primary underline-offset-4 transition-colors duration-150",

        // Deprecated variants - kept for backwards compatibility
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-secondary/30 hover:text-foreground",
        ghost: "hover:bg-secondary/30 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-primary text-white hover:bg-primary/90 transition-all duration-150",
        magenta: "bg-primary text-white hover:bg-primary/90 transition-all duration-150",
      },
      size: {
        // Standard sizes: 44-48px height
        default: "h-12 px-6 py-2 rounded-lg text-base",
        sm: "h-10 px-4 py-2 rounded-lg text-base",
        lg: "h-12 px-8 py-2 rounded-lg text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

