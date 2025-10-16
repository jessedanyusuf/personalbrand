"use client";

import Link from "next/link";
import Image from "next/image";
import { NavMenu } from "@/components/nav-menu";
import { MobileMenu } from "@/components/mobile-menu";
import Typewriter from "@/components/typewriter";

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[800px] bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="w-full h-full bg-black">
          <Image 
            src="/images/hero-portrait.jpg" 
            alt="Jesse Dan-Yusuf" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-20 px-4 mx-auto w-full max-w-7xl">
        <div className="py-6 flex justify-between items-center">
          <div className="site-branding">
            <Link href="/" className="text-xl font-semibold">
              Jesse Dan-Yusuf
            </Link>
          </div>
          <NavMenu />
          <div className="flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Bottom-aligned content */}
      <div className="container relative z-20 text-center px-4 mt-auto pb-20 sm:pb-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 px-2">
            Hi, I'm Jesse Dan-Yusuf
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 max-w-2xl mx-auto px-2">
            <div className="flex items-baseline justify-center gap-2">
              <span>I am</span>
              <Typewriter 
                words={[
                  "a Creator",
                  "a Pastor", 
                  "an Author",
                  "an Entrepreneur",
                  "an Educator",
                  "a Movement-Builder",
                  "a Teacher",
                  "a Speaker"
                ]}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

