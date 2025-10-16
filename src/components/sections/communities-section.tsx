"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CommunitiesSection() {
  const communitiesAnimation = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={communitiesAnimation.ref} className="py-16 sm:py-20 md:py-24 container px-4">
      <h3 className={`text-xl sm:text-2xl font-bold mb-8 sm:mb-12 md:mb-16 text-center uppercase tracking-wider animate-on-scroll ${communitiesAnimation.isVisible ? 'visible animate-slide-up' : ''}`}>Join the Movement</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {/* The Cave */}
        <div className={`group bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 animate-on-scroll ${communitiesAnimation.isVisible ? 'visible animate-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          <div className="h-48 sm:h-56 md:h-64 relative bg-gray-900 overflow-hidden">
            <Image 
              src="/images/jesse-portrait.jpg" 
              alt="The Cave - Jesse Dan-Yusuf" 
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl font-bold text-center px-4 w-full">The Cave</h3>
          </div>
          <div className="p-6 sm:p-8 flex flex-col min-h-[280px] sm:min-h-[320px]">
            <p className="text-base sm:text-lg text-gray-400 mb-auto leading-relaxed">
              A community for people who want to find their purpose and fulfil their potential through deep insights and meaningful connections.
            </p>
            <div className="mt-6">
              <Link
                href="/newsletters/the-cave"
                className="inline-flex items-center text-base sm:text-lg text-white font-medium mb-4"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/podcasts/the-cave"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Listen
                </Link>
                <Link
                  href="/newsletters/the-cave"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Campfyre */}
        <div className={`group bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 animate-on-scroll ${communitiesAnimation.isVisible ? 'visible animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="h-48 sm:h-56 md:h-64 relative bg-gray-900 overflow-hidden">
            <Image 
              src="/images/campyfre.png" 
              alt="Campfyre Community" 
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl font-bold text-center px-4 w-full">Campfyre</h3>
          </div>
          <div className="p-6 sm:p-8 flex flex-col min-h-[280px] sm:min-h-[320px]">
            <p className="text-base sm:text-lg text-gray-400 mb-auto leading-relaxed">
              A thriving community for creative entrepreneurs who want to build purpose-driven brands and movements.
            </p>
            <div className="mt-6">
              <Link
                href="/campfyre"
                className="inline-flex items-center text-base sm:text-lg text-white font-medium mb-4"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/podcasts/campfyre"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Listen
                </Link>
                <Link
                  href="/newsletters/campfyre"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* One City */}
        <div className={`group bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 animate-on-scroll ${communitiesAnimation.isVisible ? 'visible animate-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="h-48 sm:h-56 md:h-64 relative bg-gray-900 overflow-hidden">
            <Image 
              src="/images/One City.jpeg" 
              alt="One City Church" 
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl font-bold text-center px-4 w-full">One City</h3>
          </div>
          <div className="p-6 sm:p-8 flex flex-col min-h-[280px] sm:min-h-[320px]">
            <p className="text-base sm:text-lg text-gray-400 mb-auto leading-relaxed">
              Discover a gospel-centered community focused on spiritual growth and cultural renewal.
            </p>
            <div className="mt-6">
              <Link
                href="/one-city-church"
                className="inline-flex items-center text-base sm:text-lg text-white font-medium mb-4"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/podcasts/one-city"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Listen
                </Link>
                <Link
                  href="/newsletters/good-news"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

