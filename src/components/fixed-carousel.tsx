"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

type CarouselItem = {
  type: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
};

interface CarouselProps {
  items: CarouselItem[];
  title: string;
  autoplayInterval?: number;
}

export function FixedCarousel({ items, title, autoplayInterval = 6000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Handle resizing for responsive design
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage
      );
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [items.length, itemsPerPage, autoplayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? Math.max(0, items.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  // Safely calculate visible items
  const visibleItems = items.slice(currentSlide, currentSlide + itemsPerPage);

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {visibleItems.map((item, index) => (
          <div 
            key={`${currentSlide}-${index}`} 
            className="bg-black border border-white/10 p-8 rounded-xl min-h-[400px] h-full transition-all duration-500 hover:border-white/20"
          >
            <div className="flex flex-col h-full">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">{item.type}</p>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
              </div>
              <div className="mt-auto">
                <Link
                  href={item.link}
                  className="inline-flex items-center text-white font-medium group"
                >
                  {item.linkText} <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => {
          const isActive = index === Math.floor(currentSlide / itemsPerPage);
          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * itemsPerPage)}
              className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-white w-4' : 'bg-white/30'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
