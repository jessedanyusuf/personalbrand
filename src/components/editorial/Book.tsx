"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { links } from "@/lib/site";
import { Countdown } from "./Countdown";
import { Float } from "./Float";
import { Reveal } from "./Reveal";

// Release day, midnight in Abuja (West Africa Time)
const RELEASE = "2027-01-31T00:00:00+01:00";
const RELEASE_LABEL = "31 January 2027";

/** The Masterpiece book: the cover floating on the black ground beside its title. */
export function Book() {
  return (
    <section id="book" className="container-x py-24 md:py-40 scroll-mt-24">
      <div className="grid grid-cols-12 gap-x-6 gap-y-14 items-center">
        <Reveal className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-2">
          {/* Parallax: the cover travels a long way against the scroll while the copy drifts the other way */}
          <Float amount={90}>
            {/* The cover has a transparent background, so it sits straight on the page; the glow lifts its dark lower half off the black */}
            <div className="relative mx-auto w-[68%] max-w-[340px] md:w-full md:max-w-[400px]">
              <div className="absolute -inset-8 rounded-full bg-white/[0.07] blur-3xl" aria-hidden />
              <Image
                src="/images/masterpiece-book.webp"
                alt="Masterpiece: The Art of Finding Your Story in God's Story, a book by Jesse Dan-Yusuf"
                width={602}
                height={960}
                sizes="(min-width: 768px) 400px, 68vw"
                className="relative w-full h-auto rounded-[3px] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-rotate-2 hover:scale-[1.02]"
              />
            </div>
          </Float>
        </Reveal>

        <Float amount={-28} className="col-span-12 md:col-span-6 md:col-start-7 text-center md:text-left">
          <Reveal>
            <h2 className="display-xl">Masterpiece</h2>
            <p className="display-md mt-4 md:mt-6 max-w-[20ch] mx-auto md:mx-0">
              The Art of Finding Your Story in God&apos;s Story.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-6 md:mt-8">A book by Jesse Dan-Yusuf. Coming {RELEASE_LABEL}.</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 md:mt-12">
            <Countdown to={RELEASE} label={`Masterpiece comes out on ${RELEASE_LABEL}`} />
          </Reveal>
          <Reveal delay={0.2} className="mt-10 md:mt-12">
            {/* The waitlist is the Masterpiece Substack for now */}
            <a href={`${links.masterpiece}/subscribe`} target="_blank" rel="noopener noreferrer" className="pill pill-solid !h-12 !px-6 group">
              Join the waitlist
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
            </a>
          </Reveal>
        </Float>
      </div>
    </section>
  );
}
