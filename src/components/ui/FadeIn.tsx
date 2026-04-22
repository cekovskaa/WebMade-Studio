import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

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
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const inInitialView = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.1;
    };

    setIsVisible(inInitialView());
    setIsReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = isReady
    ? {
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : y}px)`,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        willChange: "opacity, transform",
      }
    : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
