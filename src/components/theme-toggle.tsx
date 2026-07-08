"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIcon } from "@/lib/icon-context";
import { useTheme } from "@/lib/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = useIcon(theme === "dark" ? "sun" : "moon");
  const prefersReducedMotion = useReducedMotion();

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
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
          <Icon size={16} strokeWidth={1.5} />
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
