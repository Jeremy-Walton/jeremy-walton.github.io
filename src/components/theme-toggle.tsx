"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sun } from "@/components/icons/sun";
import { Moon } from "@/components/icons/moon";
import type { AnimatedIconHandle } from "@/components/icons/animated-icon";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const iconRef = useRef<AnimatedIconHandle>(null);
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
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
          <Icon ref={iconRef} trigger="none" size={16} weight="light" />
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
