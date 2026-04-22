"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "../../styles/components/ui/RevealAnimations.module.scss";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Progressive-enhancement scroll reveal.
 * Content is visible by default, then animates only after observer setup.
 * This prevents "stuck hidden" regressions across desktop browsers.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    node.style.setProperty("--reveal-y", `${y}px`);
    node.style.setProperty("--reveal-delay", `${delay}s`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !playedRef.current) {
          playedRef.current = true;
          node.classList.add(styles.playY);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={`${styles.revealY} ${className ?? ""}`}>
      {children}
    </div>
  );
}
