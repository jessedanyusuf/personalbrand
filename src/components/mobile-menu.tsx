"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <Link href="/" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>
                Jesse Dan-Yusuf
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col p-6 space-y-6 text-base overflow-y-auto">
              {/* My Story Section */}
              <div>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('story')}
                >
                  <span className="font-medium">My Story</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${openSections.story ? 'rotate-180' : ''}`} />
                </button>
                {openSections.story && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                    <Link href="/about" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/vision" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>Vision</Link>
                    <Link href="/journey" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>Journey</Link>
                  </div>
                )}
              </div>

              {/* Business Section */}
              <div>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('business')}
                >
                  <span className="font-medium">Business</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${openSections.business ? 'rotate-180' : ''}`} />
                </button>
                {openSections.business && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                    <Link href="/campfyre" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>Campfyre</Link>
                    <Link href="/fireworks" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>Fireworks</Link>
                    <Link href="/lantern" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>Lantern</Link>
                  </div>
                )}
              </div>

              {/* Ministry Section */}
              <div>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('ministry')}
                >
                  <span className="font-medium">Ministry</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${openSections.ministry ? 'rotate-180' : ''}`} />
                </button>
                {openSections.ministry && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                    <Link href="/one-city-church" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>One City Church</Link>
                    <Link href="/one-city-institute" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>One City Institute</Link>
                  </div>
                )}
              </div>

              {/* Books */}
              <Link href="/books" className="font-medium hover:text-gray-300" onClick={() => setIsOpen(false)}>Books</Link>

              {/* Podcasts Section */}
              <div>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('podcasts')}
                >
                  <span className="font-medium">Podcasts</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${openSections.podcasts ? 'rotate-180' : ''}`} />
                </button>
                {openSections.podcasts && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                    <Link href="/podcasts/the-cave" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>The Cave</Link>
                    <Link href="/podcasts/build" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>Build with Jesse Dan-Yusuf</Link>
                    <Link href="/podcasts/one-city" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>The One City Abuja Podcast</Link>
                  </div>
                )}
              </div>

              {/* Newsletters Section */}
              <div>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleSection('newsletters')}
                >
                  <span className="font-medium">Newsletters</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform ${openSections.newsletters ? 'rotate-180' : ''}`} />
                </button>
                {openSections.newsletters && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                    <Link href="/newsletters/the-cave" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>The Cave</Link>
                    <Link href="/newsletters/campfyre" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>Campfyre</Link>
                    <Link href="/newsletters/good-news" className="block py-1 hover:text-gray-300" onClick={() => setIsOpen(false)}>The Good News Letter</Link>
                  </div>
                )}
              </div>

              {/* Shop */}
              <Link href="/shop" className="font-medium hover:text-gray-300" onClick={() => setIsOpen(false)}>Shop</Link>
            </div>

            <div className="mt-auto p-6 border-t border-white/10 flex space-x-6">
              <Link
                href="https://www.instagram.com/jessedanyusuf"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/@jessedanyusuf"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/jessedanyusuf"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/jessedanyusuf"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
