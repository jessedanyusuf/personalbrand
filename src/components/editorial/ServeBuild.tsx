"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { links } from "@/lib/site";
import { Float } from "./Float";
import { Reveal } from "./Reveal";

interface CardProps {
  /** In-page anchor the nav links to (#serving, #building, #writing). */
  id: string;
  /** What Jesse does there: Pastoring, Building, Writing & Teaching. */
  kicker: string;
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
  /** Let the picture glide inside its frame. */
  innerParallax?: boolean;
  className?: string;
  delay?: number;
}

const zoom = "transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]";

/** Picture card with its heading on the image; the description and a Learn more button open on hover. */
function Card({ id, kicker, title, name, description, href, visual, align, drift, innerParallax = false, className, delay = 0 }: CardProps) {
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
              <p className="label !text-white/75">{kicker}</p>
              <h3 className="display-md mt-1.5">{title}</h3>
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
          <p className="label mb-6 md:mb-8">The Work</p>
          <h2 className="display-xl max-w-[14ch]">
            One calling. <span className="accent">Many expressions.</span>
          </h2>
        </Float>
      </Reveal>

      {/* Three expressions of one calling: the middle card sits lower and drifts faster, so the row reads as a wave */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-16 mt-14 md:mt-24 items-start">
        <Card
          id="serving"
          align="bottom"
          drift={30}
          innerParallax
          kicker="Pastoring"
          name="Pastoring: One City Church"
          title={<span className="accent">One City Church</span>}
          description="Helping people become one with God and building a gospel movement from Abuja to the ends of the earth."
          href={links.oneCity}
          visual={
            <Image
              src="/images/one-city-pastoring.jpg"
              alt="Jesse Dan-Yusuf preaching at One City Church"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className={cn("object-[50%_30%]", zoom)}
            />
          }
        />
        <Card
          id="building"
          className="md:mt-32"
          delay={0.1}
          align="bottom"
          drift={90}
          innerParallax
          kicker="Building"
          name="Building: Fyreworks"
          title={<span className="accent">Fyreworks</span>}
          description="A creative studio helping visionaries turn bold ideas into meaningful impact."
          href={links.fyreworks}
          visual={
            <Image
              src="/images/fyreworks-studio.jpg"
              alt="Jesse Dan-Yusuf at work in the Fyreworks studio"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={cn("object-[50%_40%] grayscale", zoom)}
            />
          }
        />
        <Card
          id="writing"
          delay={0.2}
          align="top"
          drift={50}
          innerParallax
          kicker="Writing & Teaching"
          name="Writing and teaching: Masterpiece"
          title={<span className="accent">Masterpiece</span>}
          description="Exploring faith, creativity, calling and becoming who God made us to be."
          href={links.masterpiece}
          visual={
            <Image
              src="/images/masterpiece-teaching.jpg"
              alt="Jesse Dan-Yusuf teaching"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className={cn("object-[50%_35%]", zoom)}
            />
          }
        />
      </div>
    </section>
  );
}
