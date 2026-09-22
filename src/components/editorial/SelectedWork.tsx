"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import { AnimatePresence, m, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/site";
import { Reveal } from "./Reveal";

interface Work {
  name: string;
  kind: string;
  note: string;
  href?: string;
  image?: string;
}

// TODO: confirm the descriptions and add links for The Creative's MBA and Create For God's Sake
const works: Work[] = [
  { name: "Masterpiece", kind: "Newsletter", note: "On living as God's workmanship", href: links.masterpiece },
  { name: "Campfyre", kind: "Creative community", note: "For creatives building a sustainable life", href: links.campfyre, image: "/images/campyfre.jpg" },
  { name: "The Creative's MBA", kind: "Course", note: "The business of creative work" },
  { name: "Create For God's Sake", kind: "Series", note: "Faith and the making of things" },
  { name: "OneCon", kind: "Conference", note: "One City's annual gathering in Abuja", href: "https://www.onecon.live", image: "/images/One City.jpeg" },
  { name: "Canvas", kind: "Gathering", note: "A creative gathering for creative disciples", href: "/canvas", image: "/images/c5.png" },
  { name: "Fyreworks", kind: "Selected projects", note: "Brand identities for bold ideas", href: links.fyreworks },
];

/** An artist's archive rather than a portfolio grid: numbered rows, with a picture that follows the cursor. */
export function SelectedWork() {
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - box.left);
    y.set(e.clientY - box.top);
  };

  const preview = hovered !== null ? works[hovered].image : undefined;

  return (
    <section className="container-x py-24 md:py-40">
      <Reveal>
        <p className="label mb-6 md:mb-8">Selected work</p>
        <h2 className="display-xl max-w-[14ch]">
          Things I&apos;ve made <span className="accent">along the way.</span>
        </h2>
      </Reveal>

      <div className="relative mt-14 md:mt-24" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
        <ul className="border-b border-white/10">
          {works.map((w, i) => {
            const external = w.href?.startsWith("http");
            const row = (
              <div className="grid grid-cols-12 gap-x-4 items-baseline py-5 md:py-7">
                <span className="col-span-2 md:col-span-1 num-sm text-sm md:text-base text-[color:var(--paper-40)]">({String(i + 1).padStart(2, "0")})</span>
                <span className="col-span-10 md:col-span-5 text-[clamp(1.6rem,3.6vw,3.4rem)] leading-none tracking-[-0.05em] font-medium transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-x-4">
                  {w.name}
                </span>
                <span className="col-span-10 col-start-3 md:col-span-3 md:col-start-auto micro mt-2 md:mt-0">{w.kind}</span>
                <span className="hidden md:flex col-span-3 justify-between items-baseline micro">
                  {w.note}
                  {w.href && (
                    <ArrowUpRight
                      className="w-4 h-4 shrink-0 text-[color:var(--paper)] opacity-0 group-hover:opacity-100 transition-opacity"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  )}
                </span>
              </div>
            );
            return (
              <li
                key={w.name}
                className="group relative border-t border-white/10 transition-opacity duration-500 [ul:hover>&:not(:hover)]:opacity-40"
                onMouseEnter={() => setHovered(i)}
              >
                {w.href ? (
                  <a href={w.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="block">
                    {row}
                  </a>
                ) : (
                  row
                )}
              </li>
            );
          })}
        </ul>

        {/* Floating preview (pointer devices only) */}
        <m.div className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block" style={{ x: sx, y: sy }} aria-hidden>
          <div className="relative w-[260px] aspect-[4/5] -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence>
              {preview && (
                <m.div
                  key={preview}
                  className="photo !absolute inset-0"
                  initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={preview} alt="" fill sizes="260px" />
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </m.div>
      </div>
    </section>
  );
}
