"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MissionSection } from "@/components/sections/mission-section";
import { LogoSection } from "@/components/sections/logo-section";

// Lazy load below-the-fold sections
const FeaturedBookSection = dynamic(() => import("@/components/sections/featured-book-section").then(mod => ({ default: mod.FeaturedBookSection })), { ssr: false });
const CommunitiesSection = dynamic(() => import("@/components/sections/communities-section").then(mod => ({ default: mod.CommunitiesSection })), { ssr: false });
const MyStorySection = dynamic(() => import("@/components/sections/my-story-section").then(mod => ({ default: mod.MyStorySection })), { ssr: false });
const NewsletterSection = dynamic(() => import("@/components/sections/newsletter-section").then(mod => ({ default: mod.NewsletterSection })), { ssr: false });
const MasterClassSection = dynamic(() => import("@/components/sections/masterclass-section").then(mod => ({ default: mod.MasterClassSection })), { ssr: false });
const ShopSection = dynamic(() => import("@/components/sections/shop-section").then(mod => ({ default: mod.ShopSection })), { ssr: false });

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
