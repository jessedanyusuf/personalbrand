"use client";

import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "framer-motion";

interface CountUpProps {
  to: number;
  decimals?: number;
  duration?: number;
  delay?: number;
}

/** A number that counts up from zero once, writing straight to the DOM so it never re-renders React. */
export function CountUp({ to, decimals = 4, duration = 2.4, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = to.toFixed(decimals);
      return;
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [to, decimals, duration, delay, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {(0).toFixed(decimals)}
    </span>
  );
}
