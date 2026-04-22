"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "../../styles/components/ui/RevealAnimations.module.scss";

type SlideInXProps = {
  children: ReactNode;
  from?: "left" | "right";
  distance?: number;
  delay?: number;
  className?: string;
};

/**
 * Transform-only reveal to avoid hidden-state regressions.
 * Element stays visible by default; we only animate translateX on enter.
 */
export function SlideInX({
  children,
  from = "right",
  distance = 64,
  delay = 0,
  className,
}: SlideInXProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const sign = from === "left" ? -1 : 1;
    const startX = sign * distance;
    node.style.setProperty("--reveal-x", `${startX}px`);
    node.style.setProperty("--reveal-delay", `${delay}s`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !playedRef.current) {
          playedRef.current = true;
          node.classList.add(styles.playX);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [delay, distance, from]);

  return (
    <div ref={ref} className={`${styles.revealX} ${className ?? ""}`}>
      {children}
    </div>
  );
}
