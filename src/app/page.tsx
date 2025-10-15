"use client";

import { FixedCarousel } from "@/components/fixed-carousel";
import { carouselItems } from "@/components/carousel-items";
import Footer from "@/components/footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { LogoSection } from "@/components/sections/logo-section";
import { FeaturedBookSection } from "@/components/sections/featured-book-section";
import { CommunitiesSection } from "@/components/sections/communities-section";
import { WorkingOnSection } from "@/components/sections/working-on-section";
import { MyStorySection } from "@/components/sections/my-story-section";
import { ShopSection } from "@/components/sections/shop-section";

export default function Home() {
  const carouselAnimation = useScrollAnimation({ threshold: 0.15 });

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <MissionSection />
      <LogoSection />
      <FeaturedBookSection />
      <CommunitiesSection />
      <WorkingOnSection />
      <MyStorySection />
      
      {/* Carousel Section */}
      <section ref={carouselAnimation.ref} className="py-16 sm:py-20 md:py-28 bg-black">
        <div className="container px-4">
          <div className={`animate-on-scroll ${carouselAnimation.isVisible ? 'visible animate-slide-up' : ''}`}>
            <FixedCarousel items={carouselItems} title="Latest News & Stories" />
          </div>
        </div>
      </section>

      <ShopSection />
      <Footer />
    </div>
  );
}
