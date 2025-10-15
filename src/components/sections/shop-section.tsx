"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ShopSection() {
  const shopAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={shopAnimation.ref} className="py-16 sm:py-20 md:py-28 bg-black">
      <div className="container text-center px-4 max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 animate-on-scroll ${shopAnimation.isVisible ? 'visible animate-slide-up' : ''}`}>Shop</h2>
        <p className={`text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 animate-on-scroll ${shopAnimation.isVisible ? 'visible animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          Explore resources, merchandise, and tools designed to help you unlock your potential and live with purpose.
        </p>
        <div className={`animate-on-scroll ${shopAnimation.isVisible ? 'visible animate-scale-in' : ''}`} style={{ animationDelay: '0.4s' }}>
          <Link
            href="/shop"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors text-base sm:text-lg"
          >
            Explore Resources
          </Link>
        </div>
      </div>
    </section>
  );
}

