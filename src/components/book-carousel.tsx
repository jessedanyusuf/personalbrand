"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type BookItem = {
  title: string;
  subtitle: string;
  description: string;
  releaseDate: string;
  link: string;
  linkText: string;
};

interface BookCarouselProps {
  books: BookItem[];
  title: string;
  autoplayInterval?: number;
}

export function BookCarousel({ books, title, autoplayInterval = 8000 }: BookCarouselProps) {
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
        prev + itemsPerPage >= books.length ? 0 : prev + itemsPerPage
      );
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [books.length, itemsPerPage, autoplayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + itemsPerPage >= books.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? Math.max(0, books.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  // Safely calculate visible items
  const visibleBooks = books.slice(currentSlide, currentSlide + itemsPerPage);

  return (
    <div>
      <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
        {title && <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider">{title}</h2>}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {visibleBooks.map((book, index) => (
          <div key={`${currentSlide}-${index}`} className="flex flex-row gap-4 sm:gap-5 md:gap-6 border border-white/10 rounded-lg p-4 sm:p-5 md:p-6 hover:border-white/20 transition-all">
            <div className="w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 bg-gray-800 rounded-md flex items-center justify-center border border-white/10 overflow-hidden flex-shrink-0">
              <div className="text-center p-2 sm:p-3">
                <h4 className="font-bold text-sm sm:text-base md:text-lg leading-tight">{book.title}</h4>
                <p className="text-xs mt-1 text-gray-400">{book.releaseDate}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col min-w-0">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 leading-tight">{book.subtitle}</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4">
                {book.description}
              </p>
              <div className="mt-auto">
                <Link 
                  href={book.link} 
                  className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  {book.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
        {Array.from({ length: Math.ceil(books.length / itemsPerPage) }).map((_, index) => {
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