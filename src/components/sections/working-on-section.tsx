"use client";

import WorkingOnTabs from "@/components/working-on-tabs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { books } from "@/data/books";

export function WorkingOnSection() {
  const workingOnAnimation = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={workingOnAnimation.ref} className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container px-4">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 md:mb-20 text-left animate-on-scroll ${workingOnAnimation.isVisible ? 'visible animate-slide-left' : ''}`}>Things I'm Working On</h2>
        
        <div className={`animate-on-scroll ${workingOnAnimation.isVisible ? 'visible animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          <WorkingOnTabs bookItems={books} />
        </div>
      </div>
    </section>
  );
}

