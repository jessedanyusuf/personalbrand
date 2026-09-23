"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/site";
import { Reveal } from "./Reveal";

const paths: { title: ReactNode; label: string; text: string; cta: string; href: string }[] = [
  {
    title: (
      <>
        Speaking <span className="accent">&amp; teaching</span>
      </>
    ),
    label: "Speaking & Teaching",
    text: "Invite Jesse to speak, preach or teach at your church, conference or gathering.",
    cta: "Invite Jesse",
    href: links.speaking,
  },
  {
    title: (
      <>
        Build something <span className="accent">with Fyreworks</span>
      </>
    ),
    label: "Fyreworks",
    text: "Brand strategy, creative direction and design for bold ideas.",
    cta: "Start a project",
    href: links.fyreworks,
  },
  {
    title: (
      <>
        For creatives <span className="accent">at Campfyre</span>
      </>
    ),
    label: "Campfyre",
    text: "Helping creatives make a living and impact doing what they love.",
    cta: "Join Campfyre",
    href: links.campfyre,
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
              <a
                href={p.href}
                {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden />
                  </span>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-12 md:mt-16 text-center">
        <Link href="/work-with-me" className="pill">
          Mastermind, masterclasses &amp; 1:1 coaching
        </Link>
      </Reveal>
    </section>
  );
}
