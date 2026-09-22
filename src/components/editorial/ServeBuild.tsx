"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { links } from "@/lib/site";
import { Float } from "./Float";
import { Reveal } from "./Reveal";

interface CardProps {
  /** In-page anchor the nav links to (#serving, #building). */
  id: string;
  title: ReactNode;
  /** Plain-text name for the link's accessible label. */
  name: string;
  /** Opens on hover (always shown on touch screens and keyboard focus). */
  description: string;
  href: string;
  visual: ReactNode;
  /** Which edge of the picture the copy sits on. */
  align: "top" | "bottom";
  /** How far the whole card drifts against the scroll, in px: cards with different values move at different speeds. */
  drift: number;
  /** Let the picture glide inside its frame (photographs only; the typographic plate stays put). */
  innerParallax?: boolean;
  className?: string;
  delay?: number;
}

const zoom = "transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]";

/** Picture card with its heading on the image; the description and a Learn more button open on hover. */
function Card({ id, title, name, description, href, visual, align, drift, innerParallax = false, className, delay = 0 }: CardProps) {
  const top = align === "top";
  const frame = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] });
  // The picture layer is 20% taller than its frame, so moving it ±8% of its own height never shows an edge
  const glide = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <Reveal delay={delay} className={className}>
      {/* Anchor sits a little above the card so the fixed nav does not cover it */}
      <span id={id} className="block -translate-y-28" aria-hidden />
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`${name}: ${description}`}>
        <Float amount={drift}>
          <div ref={frame} className="photo aspect-[4/5]">
            {innerParallax ? (
              <m.div className="absolute inset-x-0 -inset-y-[10%]" style={reduce ? undefined : { y: glide }}>
                {visual}
              </m.div>
            ) : (
              visual
            )}
            {/* Scrim so the copy reads on the picture */}
            <div className={cn("absolute inset-0 from-black/80 via-black/15 to-transparent", top ? "bg-gradient-to-b" : "bg-gradient-to-t")} />
            <div className={cn("absolute inset-x-0 p-5 md:p-7", top ? "top-0" : "bottom-0")}>
              <h3 className="display-md">{title}</h3>
              {/* Collapsed to no height until hover or focus; always open on touch screens */}
              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
                <div className="overflow-hidden">
                  <p className="pt-3 max-w-xs text-[15px] md:text-base leading-[1.5] text-white/80">{description}</p>
                  <span className="pill pill-solid mt-5 mb-0.5">Learn more</span>
                </div>
              </div>
            </div>
          </div>
        </Float>
      </a>
    </Reveal>
  );
}

export function ServeBuild() {
  return (
    <section className="container-x py-24 md:py-40">
      <Reveal>
        <Float amount={20}>
          <h2 className="display-xl max-w-[12ch]">
            Ministry <span className="accent">&amp; work.</span>
          </h2>
        </Float>
      </Reveal>

      {/* Two cards set on a diagonal: One City high on the left, Fyreworks lower on the right and drifting faster.
          On desktop they sit together as a centred pair. */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-16 mt-14 md:mt-24 items-start lg:flex lg:justify-center lg:gap-x-16">
        <Card
          id="serving"
          className="col-span-12 sm:col-span-9 md:col-span-6 lg:w-[31%]"
          align="top"
          drift={30}
          innerParallax
          name="Serving at One City"
          title={
            <>
              Serving at <span className="accent">One City</span>
            </>
          }
          description="A gospel movement helping everyone, everywhere, become one with God."
          href={links.oneCity}
          visual={
            <Image
              src="/images/One City.jpeg"
              alt="Jesse Dan-Yusuf preaching at One City"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={cn("object-[45%_50%]", zoom)}
            />
          }
        />
        <Card
          id="building"
          className="col-span-12 sm:col-span-9 sm:col-start-4 md:col-span-6 md:col-start-7 lg:w-[31%] md:mt-40"
          delay={0.1}
          align="bottom"
          drift={90}
          name="Building Fyreworks"
          title={
            <>
              Building <span className="accent">Fyreworks</span>
            </>
          }
          description="A creative studio helping visionaries turn bold ideas into meaningful impact."
          href={links.fyreworks}
          visual={
            // Typographic plate until there is a current Fyreworks photograph to use here
            <div
              className={cn(
                "absolute inset-0 flex flex-col p-5 md:p-7 bg-[radial-gradient(120%_80%_at_70%_110%,#3a1f14_0%,#170f0c_45%,#0c0c0c_100%)]",
                zoom
              )}
            >
              <div className="flex justify-between micro">
                <span>Brand strategy</span>
                <span>Creative direction</span>
                <span className="hidden sm:inline">Design</span>
              </div>
              {/* Sits in the upper part so the heading and description at the bottom never run into it */}
              <p className="absolute inset-x-0 top-[30%] text-center text-[clamp(2.5rem,4.5vw,4.25rem)] leading-[0.85] tracking-[-0.065em] font-medium transition-opacity duration-500 group-hover:opacity-40">
                Fyre<span className="accent">works</span>
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
