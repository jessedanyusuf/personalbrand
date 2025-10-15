"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CarouselProps<T> {
  items: T[];
  title?: string;
  autoplayInterval?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function Carousel<T>({ 
  items, 
  title, 
  autoplayInterval = 8000,
  renderItem,
  className = ""
}: CarouselProps<T>) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const itemsPerPage = isDesktop ? 2 : 1;

  // Autoplay functionality
  useEffect(() => {
    if (items.length === 0) return;
    
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index * itemsPerPage);
  };

  // Safely calculate visible items
  const visibleItems = items.slice(currentSlide, currentSlide + itemsPerPage);

  // Handle empty state
  if (items.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.floor(currentSlide / itemsPerPage);

  return (
    <div className={className}>
      {/* Header with title and navigation */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
        {title && <h2 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-wider">{title}</h2>}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
            disabled={items.length <= itemsPerPage}
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Next slide"
            disabled={items.length <= itemsPerPage}
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Carousel items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {visibleItems.map((item, index) => (
          <div key={`${currentSlide}-${index}`}>
            {renderItem(item, currentSlide + index)}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const isActive = index === currentPage;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-white w-4' : 'bg-white/30'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? 'true' : 'false'}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

