"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function LogoSection() {
  const logoAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={logoAnimation.ref} className="py-6 sm:py-8 md:py-10 bg-black">
      <div className="container px-4">
        <div className="flex justify-center">
          <div className={`w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 animate-on-scroll ${logoAnimation.isVisible ? 'visible animate-scale-in' : ''}`}>
            <Image 
              src="/images/jessedanyusuf.svg" 
              alt="Jesse Dan-Yusuf Logo" 
              width={256}
              height={256}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

