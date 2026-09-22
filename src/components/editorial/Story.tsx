"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Float } from "./Float";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section id="story" className="container-x py-24 md:py-40">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-start">
        <Reveal className="col-span-12 md:col-span-6 lg:col-span-5">
          <Float amount={40}>
            <div className="photo aspect-[4/5]">
              <Image
                src="/images/x-2614.jpg"
                alt="Jesse Dan-Yusuf"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                className="grayscale brightness-[0.78] contrast-[1.05]"
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
          </Float>
        </Reveal>

        <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7 md:pt-16 lg:pt-28">
          <Reveal>
            <p className="label mb-6 md:mb-8">My story</p>
            <h2 className="display-lg">
              I&apos;m still becoming the person <span className="accent">God created me to be.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="body space-y-5 max-w-lg mt-10 md:mt-14">
              <p>
                For as long as I can remember I&apos;ve been fascinated by God, by creativity and by ideas, and by the possibility that a life
                could be made into something meaningful.
              </p>
              <p>
                For a long time those felt like separate paths. Over the years they turned out to be one calling, and they became ministry,
                entrepreneurship, writing and creative work.
              </p>
              <p>
                I&apos;m not writing from the finish line. I&apos;m still being made, and everything here is an invitation to walk that road
                with me.
              </p>
            </div>
            <Link href="/about" className="arrow-link mt-10 group">
              Read my story
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
