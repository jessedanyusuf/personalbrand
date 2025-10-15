"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function MissionSection() {
  const missionAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={missionAnimation.ref} className="py-16 sm:py-20 md:py-28 bg-black">
      <div className="container px-4 max-w-7xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight mb-8 sm:mb-12 md:mb-16 animate-on-scroll ${missionAnimation.isVisible ? 'visible animate-slide-up' : ''}`}>
          I help people find their purpose and fulfil their potential.
        </h2>
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-center max-w-5xl mx-auto animate-on-scroll ${missionAnimation.isVisible ? 'visible animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          I do this by creating content that inspires, teaching what I've learned, and building communities and platforms that empower others to discover who they are and what they're called to do.
        </p>
      </div>
    </section>
  );
}

