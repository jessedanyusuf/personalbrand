"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function MyStorySection() {
  const myStoryAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={myStoryAnimation.ref} className="py-16 sm:py-20 md:py-28 bg-black">
      <div className="container px-4">
        <h3 className={`text-xl sm:text-2xl font-bold mb-8 sm:mb-12 md:mb-16 text-center uppercase tracking-wider animate-on-scroll ${myStoryAnimation.isVisible ? 'visible animate-slide-up' : ''}`}>My Story</h3>
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
          <div className={`w-full md:w-2/5 h-[400px] sm:h-[450px] md:h-[500px] relative rounded-xl overflow-hidden border border-white/10 shadow-lg animate-on-scroll ${myStoryAnimation.isVisible ? 'visible animate-slide-left' : ''}`} style={{ animationDelay: '0.2s' }}>
            <Image 
              src="/images/x-2614.jpg" 
              alt="Jesse Dan-Yusuf" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>
          <div className={`w-full md:w-3/5 animate-on-scroll ${myStoryAnimation.isVisible ? 'visible animate-slide-right' : ''}`} style={{ animationDelay: '0.4s' }}>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
              I'm Jesse Dan-Yusuf, a creator, entrepreneur, and pastor committed to helping people discover their purpose and fulfill their potential. Born and raised in Nigeria, my journey has taken me through creative entrepreneurship, ministry leadership, and personal development coaching.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
              My mission is to inspire and equip a generation of purpose-driven creators who build brands and movements that matter. Through my communities, books, and resources, I'm dedicated to helping you find deeper meaning in your creative work and make a lasting impact.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-base sm:text-lg text-white font-medium"
            >
              Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

