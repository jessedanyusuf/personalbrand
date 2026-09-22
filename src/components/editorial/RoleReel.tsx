"use client";

import { useEffect, useRef, useState } from "react";
import { animate, m, useInView, useMotionValue, useReducedMotion, useTransform, useVelocity } from "framer-motion";

// Each role carries its own article so the line reads "I'm a Pastor" and "I'm an Author"
const ROLES = [
  ["a", "Pastor"],
  ["a", "Creator"],
  ["an", "Entrepreneur"],
  ["a", "Storyteller"],
  ["a", "Teacher"],
  ["an", "Author"],
] as const;
// The reel is the role list repeated, so a spin can run a full turn past the current role before it lands
const STRIP = [...ROLES, ...ROLES, ...ROLES];
// One full turn, then on to the next role
const SPIN = ROLES.length + 1;
const SPIN_SECONDS = 0.9;
const CYCLE_MS = 3000;

/** "I'm a Pastor": one role at a time on a slot-machine reel. Pauses while hovered or scrolled out of view. */
export function RoleReel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [turn, setTurn] = useState(0);

  const pos = useMotionValue(0);
  const y = useTransform(pos, (v) => `${(-v / STRIP.length) * 100}%`);
  // A little blur while the reel is moving fast, like a spinning drum
  const velocity = useVelocity(pos);
  const filter = useTransform(velocity, (v) => {
    const blur = Math.min(Math.abs(v) * 0.12, 2.5);
    return blur < 0.1 ? "none" : `blur(${blur.toFixed(2)}px)`;
  });

  // The window hugs the role on show, so "I'm a" stays close to it and the line is truly centred on phones
  const width = useMotionValue<number | "auto">("auto");
  const items = useRef<(HTMLSpanElement | null)[]>([]);
  const widths = useRef<number[]>([]);
  const current = useRef(0);

  useEffect(() => {
    const measure = () => {
      widths.current = items.current.slice(0, ROLES.length).map((el) => el?.getBoundingClientRect().width ?? 0);
      const w = widths.current[current.current];
      if (w) width.set(w);
    };
    measure();
    // Re-measure when the web font arrives or the viewport resizes the type
    const observer = new ResizeObserver(measure);
    for (const el of items.current.slice(0, ROLES.length)) if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  useEffect(() => {
    if (!inView || paused) return;
    const id = window.setInterval(() => setTurn((t) => t + 1), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [inView, paused]);

  useEffect(() => {
    if (turn === 0) return;
    // Wrap back to the first copy of the list (it looks identical) so the strip never runs out
    const from = Math.round(pos.get()) % ROLES.length;
    pos.set(from);
    const to = from + SPIN;
    const next = to % ROLES.length;
    current.current = next;
    const target = widths.current[next];
    if (reduce) {
      pos.set(next);
      if (target) width.set(target);
      return;
    }
    const spin = animate(pos, to, {
      duration: SPIN_SECONDS,
      ease: [0.15, 0.85, 0.25, 1], // fast off the mark, long braking finish
      onComplete: () => pos.set(next),
    });
    const resize = target && typeof width.get() === "number" ? animate(width, target, { duration: SPIN_SECONDS, ease: [0.3, 0, 0.2, 1] }) : undefined;
    return () => {
      spin.stop();
      resize?.stop();
    };
  }, [turn, reduce, pos, width]);

  return (
    <div ref={ref} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="sr-only">I&apos;m a pastor, creator, entrepreneur, storyteller, teacher and author.</p>
      <div className="role-line flex" aria-hidden>
        {/* Same line box as the reel, so the small lead-in sits on the role's baseline */}
        <span className="block h-[1.2em] leading-[1.2] pr-[0.28em]">
          <span className="lead-in">I&apos;m</span>
        </span>
        <m.span className="block h-[1.2em] overflow-hidden" style={{ width }}>
          <m.span className="block will-change-transform" style={{ y, filter }}>
            {STRIP.map(([article, role], i) => (
              <span key={i} className="block h-[1.2em] leading-[1.2]">
                <span
                  ref={(el) => {
                    if (i < ROLES.length) items.current[i] = el;
                  }}
                  className="inline-block"
                >
                  <span className="lead-in">{article}</span> {role}
                </span>
              </span>
            ))}
          </m.span>
        </m.span>
      </div>
    </div>
  );
}
