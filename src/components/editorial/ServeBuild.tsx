"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { links } from "@/lib/site";
import { Float } from "./Float";
import { Reveal } from "./Reveal";

interface CardProps {
  title: ReactNode;
  quote: string;
  href: string;
  visual: ReactNode;
  className?: string;
  delay?: number;
}

function Card({ title, quote, href, visual, className, delay = 0 }: CardProps) {
  return (
    <Reveal delay={delay} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
        <Float amount={30}>
          <div className="photo aspect-[4/5] md:aspect-[5/6]">{visual}</div>
        </Float>
        <div className="mt-6 md:mt-8">
          <h3 className="display-md">{title}</h3>
          <p className="lede mt-3 max-w-md">{quote}</p>
        </div>
      </a>
    </Reveal>
  );
}

const zoom = "transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]";

export function ServeBuild() {
  return (
    <section className="container-x py-24 md:py-40">
      <Reveal>
        <p className="label mb-6 md:mb-8">Ministry &amp; work</p>
        <h2 className="display-xl max-w-[12ch]">
          Where I&apos;m serving <span className="accent">&amp; building.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-20 mt-14 md:mt-24 items-start">
        <Card
          title={
            <span>
              Serving at <span className="accent">One City</span>
            </span>
          }
          quote="A gospel movement helping everyone, everywhere, become one with God."
          href={links.oneCity}
          visual={
            <Image
              src="/images/One City.jpeg"
              alt="Jesse Dan-Yusuf preaching at One City"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={cn("object-[40%_50%]", zoom)}
            />
          }
        />
        <Card
          className="md:mt-40"
          delay={0.1}
          title={
            <span>
              Building <span className="accent">Fyreworks</span>
            </span>
          }
          quote="A creative studio helping visionaries turn bold ideas into meaningful impact."
          href={links.fyreworks}
          visual={
            // Typographic plate until there is a current Fyreworks photograph to use here
            <div className={cn("absolute inset-0 flex flex-col justify-between p-6 md:p-8 bg-[radial-gradient(120%_80%_at_70%_110%,#3a1f14_0%,#1a1412_45%,#141414_100%)]", zoom)}>
              <div className="flex justify-between micro">
                <span>Brand strategy</span>
                <span>Creative direction</span>
                <span className="hidden sm:inline">Design</span>
              </div>
              <p className="text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.85] tracking-[-0.065em] font-medium">
                Fyre<span className="accent">works</span>
              </p>
              <div className="flex justify-between micro">
                <span>Studio</span>
                <span>Abuja — Worldwide</span>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
