"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Scroll-in fade with a manual IntersectionObserver.
 * Some desktop/browser combinations can miss Framer's `whileInView` updates and
 * leave content at opacity: 0, so we control visibility state ourselves.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    let sawObserverEvent = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        sawObserverEvent = true;
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    observer.observe(node);

    // Fallback so content never stays hidden if the observer fails to fire.
    const fallbackTimer = window.setTimeout(() => {
      if (!sawObserverEvent) setIsInView(true);
    }, 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
