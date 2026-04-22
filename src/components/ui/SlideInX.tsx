"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

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
  const animatedRef = useRef(false);
  const rafA = useRef<number | null>(null);
  const rafB = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const sign = from === "left" ? -1 : 1;
    const startX = sign * distance;

    const runAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      node.style.transition = "none";
      node.style.transform = `translateX(${startX}px)`;
      void node.offsetHeight;

      rafA.current = window.requestAnimationFrame(() => {
        rafB.current = window.requestAnimationFrame(() => {
          node.style.transition = `transform 620ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;
          node.style.transform = "translateX(0)";
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runAnimation();
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
      if (rafA.current !== null) window.cancelAnimationFrame(rafA.current);
      if (rafB.current !== null) window.cancelAnimationFrame(rafB.current);
    };
  }, [delay, distance, from]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
