"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

// The three offers from the Work With Me page; each row opens that offer's section there
const paths: { title: ReactNode; label: string; text: string; cta: string; href: string }[] = [
  {
    title: (
      <>
        Join my <span className="accent">Mastermind.</span>
      </>
    ),
    label: "Mastermind",
    text: "Build alongside people who are serious about growth.",
    cta: "Join the Mastermind",
    href: "/work-with-me#mastermind",
  },
  {
    title: (
      <>
        Join a <span className="accent">Masterclass.</span>
      </>
    ),
    label: "Masterclass",
    text: "Go deeper on one idea that could change how you work and live.",
    cta: "Explore Masterclasses",
    href: "/work-with-me#masterclass",
  },
  {
    title: (
      <>
        Work with me <span className="accent">1:1.</span>
      </>
    ),
    label: "1:1 Coaching",
    text: "Sometimes you need a room where the whole conversation is about you.",
    cta: "Apply for 1:1 Coaching",
    href: "/work-with-me#coaching",
  },
];

export function WorkWithMe() {
  return (
    <section id="work-with-me" className="container-x py-24 md:py-40">
      <Reveal className="text-center">
        <p className="label mb-6 md:mb-8">Work with me</p>
        <h2 className="display-lg max-w-[18ch] mx-auto">
          Let&apos;s make something <span className="accent">meaningful.</span>
        </h2>
      </Reveal>

      <ol className="mt-16 md:mt-28">
        {paths.map((p, i) => (
          <li key={p.label} className="border-t border-white/10 last:border-b">
            <Reveal delay={0.06 * i}>
              <Link
                href={p.href}
                className="group grid grid-cols-12 gap-x-4 gap-y-4 items-baseline py-8 md:py-12"
                aria-label={`${p.label}: ${p.cta}`}
              >
                <h3 className="col-span-12 lg:col-span-8 display-xl !leading-[0.95] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:translate-x-4">
                  {p.title}
                </h3>
                <div className="col-span-12 lg:col-span-4 lg:pl-6">
                  <p className="body max-w-sm">{p.text}</p>
                  <span className="arrow-link mt-5">
                    {p.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-12 md:mt-16 text-center">
        <Link href="/work-with-me#start" className="pill">
          Not sure where to start?
        </Link>
      </Reveal>
    </section>
  );
}
