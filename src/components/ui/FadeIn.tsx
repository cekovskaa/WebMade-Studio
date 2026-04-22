import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Temporary no-op wrapper while debugging cross-browser visibility issues.
 * Keeps existing API (delay/y) so section components do not need edits.
 */
export function FadeIn({
  children,
  className,
}: FadeInProps) {
  return <div className={className}>{children}</div>;
}
