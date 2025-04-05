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
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-6">{title}</h2>
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

      <div className="grid md:grid-cols-2 gap-12">
        {visibleBooks.map((book, index) => (
          <div key={`${currentSlide}-${index}`} className="flex flex-col md:flex-row gap-8 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all h-full">
            <div className="w-full md:w-1/3 aspect-[2/3] bg-gray-800 rounded-lg flex items-center justify-center border border-white/10 overflow-hidden">
              <div className="text-center p-4">
                <h4 className="font-bold text-xl">{book.title}</h4>
                <p className="text-xs mt-1 text-gray-400">{book.releaseDate}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="text-2xl font-bold mb-3">{book.subtitle}</h4>
              <p className="text-gray-400 mb-auto">
                {book.description}
              </p>
              <div className="mt-6">
                <Link 
                  href={book.link} 
                  className="inline-block px-6 py-3 border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  {book.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mt-8 space-x-2">
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