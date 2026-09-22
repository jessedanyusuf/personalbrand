"use client";

import { useRef, type ReactNode } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface FloatProps {
  children: ReactNode;
  className?: string;
  /** Total vertical drift in px while the element crosses the viewport. */
  amount?: number;
}

/** Gentle scroll-linked drift so photographs float over the dark ground. */
export function Float({ children, className, amount = 48 }: FloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <m.div ref={ref} className={className} style={{ y: reduce ? 0 : y }}>
      {children}
    </m.div>
  );
}
