import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { NavMenu } from "@/components/nav-menu";
import { MobileMenu } from "@/components/mobile-menu";
import { FixedCarousel } from "@/components/fixed-carousel";
import { carouselItems } from "@/components/carousel-items";
import { BookCarousel } from "@/components/book-carousel";

// Books data for carousel
const bookItems = [
  {
    title: "FIRED-UP",
    subtitle: "FIRED-UP: Build A Purpose-Driven Personal Brand",
    description: "Launch a movement and make a living doing what you love with this guide for purpose-driven creators.",
    releaseDate: "June 27, 2025",
    link: "/books/fired-up",
    linkText: "Pre-order now"
  },
  {
    title: "CREATOR'S JOURNEY",
    subtitle: "The Creator's Journey",
    description: "How to build a creative empire from scratch - a blueprint for creators pursuing excellence in their craft.",
    releaseDate: "June 27, 2025",
    link: "/books/creators-journey",
    linkText: "Pre-order now"
  },
  {
    title: "MASTERPIECE",
    subtitle: "Masterpiece: Find Your Story In God's Story",
    description: "Discover how your unique journey fits into God's grand narrative and unleash your divine potential.",
    releaseDate: "December 12, 2025",
    link: "/books/masterpiece",
    linkText: "Coming Soon"
  },
  {
    title: "CREATE FOR GOD'S SAKE",
    subtitle: "Create For God's Sake",
    description: "A spiritual guide for meaningful creative work, launching at OneCon 2026.",
    releaseDate: "September 2026",
    link: "/books/create-for-gods-sake",
    linkText: "Learn more"
  },
  {
    title: "NO ONE ELSE IS COMING",
    subtitle: "No One Else Is Coming",
    description: "A powerful exploration of personal responsibility and agency in a world waiting for heroes.",
    releaseDate: "March 2027",
    link: "/books/no-one-else-is-coming",
    linkText: "Learn more"
  },
  {
    title: "THE ART & WORK OF MARRIAGE",
    subtitle: "The Art & Work of Marriage",
    description: "Co-written with Eva Dan-Yusuf, a practical guide to building a thriving marriage that honors God and each other.",
    releaseDate: "Coming Soon",
    link: "/books/art-of-marriage",
    linkText: "Join waitlist"
  },
  {
    title: "THE ART OF PRAYER",
    subtitle: "The Art of Prayer",
    description: "A comprehensive guide to developing a meaningful prayer life that transforms your relationship with God.",
    releaseDate: "Coming Soon",
    link: "/books/art-of-prayer",
    linkText: "Join waitlist"
  },
  {
    title: "THE ART OF JOY",
    subtitle: "The Art of Joy",
    description: "A journey through Paul's letter to the Galatian Church, discovering the path to lasting joy.",
    releaseDate: "Coming Soon",
    link: "/books/art-of-joy",
    linkText: "Join waitlist"
  },
  {
    title: "THE ART OF WAR",
    subtitle: "The Art of War",
    description: "Fighting & winning spiritual warfare in the modern world through biblical principles.",
    releaseDate: "Coming Soon",
    link: "/books/art-of-war",
    linkText: "Join waitlist"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section with full-screen portrait */}
      <section className="relative h-screen flex flex-col">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[800px] bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="w-full h-full bg-black">
            <Image 
              src="/images/hero-portrait.jpg" 
              alt="Jesse Dan-Yusuf" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="relative z-20 px-4 mx-auto w-full max-w-7xl">
          <div className="py-6 flex justify-between items-center">
            <div className="site-branding">
              <Link href="/" className="text-xl font-semibold">
                Jesse Dan-Yusuf
              </Link>
            </div>
            <NavMenu />
            <div className="flex items-center">
              <MobileMenu />
            </div>
          </div>
        </div>

        {/* Bottom-aligned content */}
        <div className="container relative z-20 text-center px-4 mt-auto pb-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
              Hi, I'm Jesse Dan-Yusuf
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 max-w-2xl mx-auto">
              Creator • Educator • Entrepreneur • Pastor
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-28 bg-black">
        <div className="container px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight max-w-5xl mx-auto">
            Sharing stories on faith, creativity and entrepreneurship
          </h2>
        </div>
      </section>

      {/* Projects/Communities */}
      <section className="py-24 container px-4">
        <h3 className="text-2xl font-bold mb-16 text-center uppercase tracking-wider">Join the Movement</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {/* The Cave */}
          <div className="group bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10">
            <div className="h-64 flex items-center justify-center bg-gray-900">
              <h3 className="text-3xl font-bold group-hover:scale-105 transition-transform duration-300">The Cave</h3>
            </div>
            <div className="p-8 flex flex-col h-[320px]">
              <p className="text-lg text-gray-400 mb-auto">
                A community for people who want to find their purpose and fulfil their potential through deep insights and meaningful connections.
              </p>
              <div className="mt-6">
                <Link
                  href="/newsletters/the-cave"
                  className="inline-flex items-center text-lg text-white font-medium mb-4"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <div className="flex space-x-4">
                  <Link
                    href="/podcasts/the-cave"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors"
                  >
                    Listen
                  </Link>
                  <Link
                    href="/newsletters/the-cave"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Campfyre */}
          <div className="group bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10">
            <div className="h-64 flex items-center justify-center bg-gray-900">
              <h3 className="text-3xl font-bold group-hover:scale-105 transition-transform duration-300">Campfyre</h3>
            </div>
            <div className="p-8 flex flex-col h-[320px]">
              <p className="text-lg text-gray-400 mb-auto">
                A thriving community for creative entrepreneurs who want to build purpose-driven brands and movements.
              </p>
              <div className="mt-6">
                <Link
                  href="/campfyre"
                  className="inline-flex items-center text-lg text-white font-medium mb-4"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <div className="flex space-x-4">
                  <Link
                    href="/podcasts/campfyre"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors"
                  >
                    Listen
                  </Link>
                  <Link
                    href="/newsletters/campfyre"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* One City */}
          <div className="group bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10">
            <div className="h-64 flex items-center justify-center bg-gray-900">
              <h3 className="text-3xl font-bold group-hover:scale-105 transition-transform duration-300">One City</h3>
            </div>
            <div className="p-8 flex flex-col h-[320px]">
              <p className="text-lg text-gray-400 mb-auto">
                Discover a gospel-centered community focused on spiritual growth and cultural renewal.
              </p>
              <div className="mt-6">
                <Link
                  href="/one-city-church"
                  className="inline-flex items-center text-lg text-white font-medium mb-4"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <div className="flex space-x-4">
                  <Link
                    href="/podcasts/one-city"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors"
                  >
                    Listen
                  </Link>
                  <Link
                    href="/newsletters/good-news"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-black border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-28 bg-black">
        <div className="container px-4">
          <BookCarousel books={bookItems} title="Books" />
          
          <div className="mt-12 text-center">
            <Link 
              href="/books" 
              className="inline-flex items-center text-lg text-white font-medium"
            >
              View all books <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-28 bg-black">
        <div className="container px-4">
          <h3 className="text-2xl font-bold mb-16 text-center uppercase tracking-wider">My Story</h3>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-2/5 h-[500px] relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image 
                src="/images/x-2614.jpg" 
                alt="Jesse Dan-Yusuf" 
                fill 
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                I'm Jesse Dan-Yusuf, a creator, entrepreneur, and pastor committed to helping people discover their purpose and fulfill their potential. Born and raised in Nigeria, my journey has taken me through creative entrepreneurship, ministry leadership, and personal development coaching.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                My mission is to inspire and equip a generation of purpose-driven creators who build brands and movements that matter. Through my communities, books, and resources, I'm dedicated to helping you find deeper meaning in your creative work and make a lasting impact.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-lg text-white font-medium"
              >
                Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-28 bg-black">
        <div className="container px-4">
          <FixedCarousel items={carouselItems} title="Latest News & Stories" />
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-28 bg-black">
        <div className="container text-center px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Shop</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Explore resources, merchandise, and tools designed to help you unlock your potential and live with purpose.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-colors text-lg"
          >
            Explore Resources
          </Link>
        </div>
      </section>
    </div>
  );
}
