"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import { CountdownTimer } from "@/components/countdown-timer";
import { featuredBookExtended } from "@/data/featured-book";

export function FeaturedBookSection() {
  const featuredAnimation = useScrollAnimation({ threshold: 0.2 });
  const bookTilt = useTiltEffect({ maxTilt: 20, scale: 1.08, speed: 300 });

  return (
    <section ref={featuredAnimation.ref} className="py-16 sm:py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration - subtle floating elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container px-4 max-w-7xl mx-auto relative z-10">
        {/* Glassmorphism container */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 sm:p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Book Cover Mockup */}
            <div className={`animate-on-scroll ${featuredAnimation.isVisible ? 'visible animate-slide-left' : ''}`}>
              <div className="relative">
                {/* Subtle glow effect behind book */}
                <div className="absolute inset-0 bg-white/10 blur-3xl scale-110 opacity-50"></div>
                
                {/* Book cover mockup with tilt effect - Glassmorphism style */}
                <div 
                  ref={bookTilt.ref}
                  style={bookTilt.style}
                  {...bookTilt.handlers}
                  className="relative bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl aspect-[2/3] max-w-md mx-auto border border-white/20 overflow-hidden cursor-pointer"
                >
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                  
                  <div className="flex flex-col items-center justify-center h-full p-8 sm:p-12 text-center relative z-10">
                    <div className="space-y-6">
                      <div className="text-sm sm:text-base uppercase tracking-[0.3em] text-gray-300 font-light">
                        Jesse Dan-Yusuf
                      </div>
                      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        MASTERPIECE
                      </h3>
                      <div className="w-24 h-px bg-white/40 mx-auto"></div>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        Find Your Story<br />In God's Story
                      </p>
                    </div>
                    
                    {/* Release date badge - Glassmorphism */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <div className="px-6 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                        January 31, 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className={`animate-on-scroll ${featuredAnimation.isVisible ? 'visible animate-slide-right' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                {/* Tag - Glassmorphism */}
                <div className="inline-block">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-white font-semibold px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                    {featuredBookExtended.tagline}
                  </p>
                </div>

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {featuredBookExtended.title}
                </h2>

                {/* Subtitle */}
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
                  {featuredBookExtended.subtitle}
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  {featuredBookExtended.fullDescription}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {featuredBookExtended.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-200">
                      <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Countdown Timer */}
                <div className="pt-6">
                  <p className="text-sm text-gray-300 mb-4 text-center uppercase tracking-wider">
                    Releases In
                  </p>
                  <CountdownTimer targetDate="2026-01-31T00:00:00" />
                </div>

                {/* CTA Button */}
                <div className="flex justify-center pt-6">
                  <Link
                    href={featuredBookExtended.link}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-base sm:text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    {featuredBookExtended.linkText}
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

