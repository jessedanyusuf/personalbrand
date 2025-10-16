"use client";

import React from "react";
import Link from "next/link";
import { Carousel } from "./carousel";
import { BookItem } from "@/types";

interface BookCarouselProps {
  books: BookItem[];
  title?: string;
  autoplayInterval?: number;
}

export function BookCarousel({ books, title = "", autoplayInterval = 8000 }: BookCarouselProps) {
  const renderBookItem = (book: BookItem) => (
    <div className="flex flex-row gap-4 sm:gap-5 md:gap-6 border border-white/10 rounded-lg p-4 sm:p-5 md:p-6 hover:border-white/20 transition-all group">
      <div className="w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 bg-white/10 backdrop-blur-md rounded-md flex items-center justify-center border border-white/20 overflow-hidden flex-shrink-0 relative group-hover:bg-white/15 transition-all">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        <div className="text-center p-2 sm:p-3 relative z-10">
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
  );

  return (
    <Carousel
      items={books}
      title={title}
      autoplayInterval={autoplayInterval}
      renderItem={renderBookItem}
    />
  );
} 