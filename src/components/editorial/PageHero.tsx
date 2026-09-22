"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { Float } from "./Float";

interface PageHeroProps {
  /** Photograph that floats at the top right of the hero. */
  image?: string;
  position?: string;
  alt?: string;
  eyebrow?: string;
  title: ReactNode;
  /** Content under the title (ledes, captions). */
  children?: ReactNode;
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Title-led hero for inner pages: a giant heading with a portrait floating beside it. */
export function PageHero({ image, position = "50% 20%", alt = "", eyebrow, title, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative", className)}>
      <div className="container-x relative pt-28 md:pt-44 pb-10 md:pb-20 flex flex-col lg:block">
        {image && (
          <m.div
            className="order-2 w-[64%] sm:w-[52%] ml-auto mt-10 lg:order-none lg:absolute lg:right-12 lg:top-28 lg:w-[30vw] lg:max-w-[460px] lg:ml-0 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
          >
            <Float amount={40}>
              <div className="photo aspect-[3/4]">
                <Image src={image} alt={alt} fill priority sizes="(min-width: 1024px) 30vw, 64vw" className="grayscale brightness-[0.8]" style={{ objectPosition: position }} />
              </div>
            </Float>
          </m.div>
        )}

        <div className="order-1">
          {eyebrow && (
            <m.p className="label mb-6 relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {eyebrow}
            </m.p>
          )}
          <m.h1
            className="display-hero relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            {title}
          </m.h1>
        </div>

        {children && (
          <m.div
            className={cn("order-3 relative z-10 mt-10 md:mt-20", image && "lg:max-w-[56%] lg:min-h-[22vw]")}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
          >
            {children}
          </m.div>
        )}
      </div>
    </section>
  );
}
