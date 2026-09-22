"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { CountUp } from "./CountUp";

const ease = [0.22, 1, 0.36, 1] as const;

const roles = ["Pastor", "Creator", "Entrepreneur"];

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
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/10 to-[#111111]/50" aria-hidden />
      <m.div className="absolute inset-0 bg-[#111111]" style={{ opacity: reduce ? 0 : dim }} aria-hidden />
      <div className="grain absolute inset-0 overflow-hidden" aria-hidden />

      <m.div className="relative h-full container-x flex flex-col pt-24 md:pt-28 pb-5 md:pb-7" style={reduce ? undefined : { y: lift }}>
        <div className="flex-1 flex flex-col justify-end pb-10 md:pb-14">
          <m.h1
            className="hero-name"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
          >
            Jesse <span className="accent">Dan-Yusuf</span>
          </m.h1>

          {/* Numbered roles, set just under the name like the reference's (01) Filmmaker */}
          <m.ul
            className="mt-5 md:mt-8 ml-[8%] md:ml-[34%] space-y-0.5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
          >
            {roles.map((r, i) => (
              <li key={r} className="role-line">
                <span className="num">(0{i + 1})</span>
                {r}
              </li>
            ))}
          </m.ul>
        </div>

        <m.div
          className="grid grid-cols-12 gap-x-4 gap-y-6 items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="col-span-12 md:col-span-6 lg:col-span-5 display-md max-w-[20ch]">
            I help people find their story in <span className="accent">God&apos;s story.</span>
          </p>

          <div className="col-span-12 md:col-span-6 lg:col-span-7 flex items-end justify-between gap-4 micro">
            {/* Abuja, counting up from 0°, 0° */}
            <span className="text-[color:var(--paper)] whitespace-nowrap">
              <span className="sr-only">Abuja: 9.0765° N, 7.3986° E</span>
              <span aria-hidden>
                <CountUp to={9.0765} delay={0.9} />° N&nbsp;&nbsp;·&nbsp;&nbsp;<CountUp to={7.3986} delay={0.9} />° E
              </span>
            </span>
            <a href="#masterpiece" className="inline-flex items-center gap-1.5 text-[color:var(--paper)] hover:opacity-60 transition-opacity">
              Explore <ArrowDown className="w-3.5 h-3.5 bob" strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
