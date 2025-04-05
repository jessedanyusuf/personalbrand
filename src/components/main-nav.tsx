"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export function MainNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navRef} className="hidden md:flex items-center space-x-8">
      <div 
        className="relative"
        onMouseEnter={() => handleMouseEnter('story')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="text-white hover:text-gray-300 transition-colors">
          My Story
        </button>
        {activeDropdown === 'story' && (
          <div className="absolute top-full left-0 w-56 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg py-2 mt-2">
            <Link href="/about" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="/vision" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Vision
            </Link>
            <Link href="/journey" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Journey
            </Link>
          </div>
        )}
      </div>

      <div 
        className="relative"
        onMouseEnter={() => handleMouseEnter('business')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="text-white hover:text-gray-300 transition-colors">
          Business
        </button>
        {activeDropdown === 'business' && (
          <div className="absolute top-full left-0 w-56 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg py-2 mt-2">
            <Link href="/campfyre" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Campfyre
            </Link>
            <Link href="/fireworks" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Fireworks
            </Link>
            <Link href="/lantern" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Lantern
            </Link>
          </div>
        )}
      </div>

      <div 
        className="relative"
        onMouseEnter={() => handleMouseEnter('ministry')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="text-white hover:text-gray-300 transition-colors">
          Ministry
        </button>
        {activeDropdown === 'ministry' && (
          <div className="absolute top-full left-0 w-56 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg py-2 mt-2">
            <Link href="/one-city-church" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              One City Church
            </Link>
            <Link href="/one-city-institute" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              One City Institute
            </Link>
          </div>
        )}
      </div>

      <Link href="/books" className="text-white hover:text-gray-300 transition-colors">
        Books
      </Link>

      <div 
        className="relative"
        onMouseEnter={() => handleMouseEnter('podcasts')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="text-white hover:text-gray-300 transition-colors">
          Podcasts
        </button>
        {activeDropdown === 'podcasts' && (
          <div className="absolute top-full left-0 w-56 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg py-2 mt-2">
            <Link href="/podcasts/the-cave" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              The Cave
            </Link>
            <Link href="/podcasts/build" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Build with Jesse Dan-Yusuf
            </Link>
            <Link href="/podcasts/one-city" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              The One City Abuja Podcast
            </Link>
          </div>
        )}
      </div>

      <div 
        className="relative"
        onMouseEnter={() => handleMouseEnter('newsletters')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="text-white hover:text-gray-300 transition-colors">
          Newsletters
        </button>
        {activeDropdown === 'newsletters' && (
          <div className="absolute top-full left-0 w-56 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg py-2 mt-2">
            <Link href="/newsletters/the-cave" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              The Cave
            </Link>
            <Link href="/newsletters/campfyre" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              Campfyre
            </Link>
            <Link href="/newsletters/good-news" className="block px-4 py-2 text-white hover:bg-white/10 transition-colors">
              The Good News Letter
            </Link>
          </div>
        )}
      </div>

      <Link href="/shop" className="text-white hover:text-gray-300 transition-colors">
        Shop
      </Link>
    </div>
  );
}

// Add this to your globals.css file
const styles = `
@keyframes dropdownEnter {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
