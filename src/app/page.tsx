"use client";

import Footer from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { LogoSection } from "@/components/sections/logo-section";
import { FeaturedBookSection } from "@/components/sections/featured-book-section";
import { CommunitiesSection } from "@/components/sections/communities-section";
import { WorkingOnSection } from "@/components/sections/working-on-section";
import { MyStorySection } from "@/components/sections/my-story-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { MasterClassSection } from "@/components/sections/masterclass-section";
import { ShopSection } from "@/components/sections/shop-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <MissionSection />
      <LogoSection />
      <FeaturedBookSection />
      <CommunitiesSection />
      {/* <WorkingOnSection /> */}
      <MyStorySection />
      <NewsletterSection />
      <MasterClassSection />
      <ShopSection />
      <Footer />
    </div>
  );
}
