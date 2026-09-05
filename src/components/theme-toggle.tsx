"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sun } from "@/components/icons/sun";
import { Moon } from "@/components/icons/moon";
import { useIconHover } from "@/lib/use-icon-hover";
import { useTheme } from "@/lib/theme-context";

// The outgoing icon spins away and the incoming one spins in, so the change
// reads as one turn rather than a cut. A new `swapKey` is what starts it.
function IconSwap({ swapKey, children }: { swapKey: string; children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={swapKey}
        className="flex"
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
        transition={
          prefersReducedMotion
            ? { duration: 0.01 }
            : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
        }
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const icon = useIconHover();
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      {...icon.hoverProps}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="overflow-hidden"
    >
      <IconSwap swapKey={theme}>
        <Icon ref={icon.ref} trigger="none" size={16} weight="light" />
      </IconSwap>
    </Button>
  );
}
