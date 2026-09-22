"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CountUp } from "./CountUp";
import { RoleReel } from "./RoleReel";

const ease = [0.22, 1, 0.36, 1] as const;

/** Abuja, counting up from 0°, 0° */
function Coordinates({ className }: { className?: string }) {
  return (
    <span className={`micro !text-[color:var(--paper-40)] whitespace-nowrap ${className ?? ""}`}>
      <span className="sr-only">Abuja: 9.0765° N, 7.3986° E</span>
      <span aria-hidden>
        <CountUp to={9.0765} delay={0.9} />° N&nbsp;&nbsp;·&nbsp;&nbsp;
        <CountUp to={7.3986} delay={0.9} />° E
      </span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // As the hero leaves: the photo pushes in and dims, the name lifts away a little faster
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.14]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.6]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] overflow-hidden">
      {/* Photograph, full bleed and graded dark like a film still */}
      <m.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        style={reduce ? undefined : { scale }}
      >
        <Image
          src="/images/hero-portrait.jpg"
          alt="Jesse Dan-Yusuf"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] grayscale brightness-[0.62] contrast-[1.08]"
        />
      </m.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/50" aria-hidden />
      <m.div className="absolute inset-0 bg-black" style={{ opacity: reduce ? 0 : dim }} aria-hidden />
      <div className="grain absolute inset-0 overflow-hidden" aria-hidden />

      <m.div className="relative h-full container-x flex flex-col pt-24 md:pt-28 pb-5 md:pb-7" style={reduce ? undefined : { y: lift }}>
        <div className="flex-1 flex flex-col justify-end pb-10 md:pb-14">
          <m.p
            className="lead-in mb-2 md:mb-4 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            My name is
          </m.p>
          <m.h1 className="hero-name text-center" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease, delay: 0.15 }}>
            Jesse <span className="accent">Dan-Yusuf</span>
          </m.h1>

          {/* "I'm a Pastor": one role at a time on a slot-machine reel, just under the name */}
          <m.div
            className="mt-5 md:mt-8 flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
          >
            <RoleReel />
          </m.div>
        </div>

        {/* Abuja's coordinates at the bottom left (centred on phones) */}
        <m.div className="text-center md:text-left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <Coordinates />
        </m.div>
      </m.div>
    </section>
  );
}
