"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";

/** The idea beneath everything: a giant word that slides across as you scroll, then Ephesians 2:10 set editorially. */
export function MasterpieceStatement() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section id="masterpiece" ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      <div className="container-x">
        <Reveal>
          <p className="label text-center mb-8 md:mb-12">The idea beneath everything</p>
        </Reveal>
      </div>

      <m.h2 className="display-giant text-center" style={reduce ? undefined : { x }}>
        MASTERPIECE
      </m.h2>

      <div className="container-x">
        <Reveal delay={0.1}>
          <p className="statement text-center max-w-[24ch] mx-auto mt-16 md:mt-28">
            Your life is God&apos;s workmanship. You were made <span className="accent">on purpose, for a purpose,</span> and invited to
            spend your life doing the good work God prepared for you.
          </p>
        </Reveal>

        {/* Ephesians 2:10 as a spread: reference and note in the margins, the verse in the middle */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 mt-24 md:mt-40 items-start">
          <Reveal className="col-span-12 md:col-span-3">
            <p className="micro">Ephesians 2:10</p>
            <p className="micro mt-1">English Standard Version</p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6" delay={0.1}>
            <blockquote className="display-md text-center md:text-left">
              &ldquo;For we are his <span className="accent">workmanship,</span> created in Christ Jesus for good works, which God prepared
              beforehand, that we should walk in them.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-3 md:text-right" delay={0.2}>
            <p className="micro max-w-[26ch] md:ml-auto">
              <span className="num-sm text-[13px] text-[color:var(--paper)]">poiēma</span> — Greek for &ldquo;a thing made.&rdquo; A work of art, not an accident.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
