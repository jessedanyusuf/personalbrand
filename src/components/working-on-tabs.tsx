"use client";

import { useState } from 'react';
import Link from 'next/link';
import { BookCarousel } from '@/components/book-carousel';
import { BookItem } from '@/types';
import { movements } from '@/data/movements';
import { brands } from '@/data/brands';
import { resources } from '@/data/resources';

interface WorkingOnTabsProps {
  bookItems: BookItem[];
}

// Component to render items in a grid (for 4 or fewer items)
function ItemGrid({ items }: { items: BookItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {items.map((item, index) => (
        <div key={index} className="flex flex-row gap-4 sm:gap-5 md:gap-6 border border-white/10 rounded-lg p-4 sm:p-5 md:p-6 hover:border-white/20 transition-all group">
          <div className="w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 bg-white/10 backdrop-blur-md rounded-md flex items-center justify-center border border-white/20 overflow-hidden flex-shrink-0 relative group-hover:bg-white/15 transition-all">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
            <div className="text-center p-2 sm:p-3 relative z-10">
              <h4 className="font-bold text-sm sm:text-base md:text-lg leading-tight">{item.title}</h4>
              <p className="text-xs mt-1 text-gray-400">{item.releaseDate}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col min-w-0">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 leading-tight">{item.subtitle}</h4>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
              {item.description}
            </p>
            <div className="mt-auto">
              <Link 
                href={item.link} 
                className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 border border-white/20 rounded-md text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                {item.linkText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WorkingOnTabs({ bookItems }: WorkingOnTabsProps) {
  const [activeTab, setActiveTab] = useState('movements');

  const tabs = [
    { id: 'movements', label: 'Movements I\'m Leading' },
    { id: 'brands', label: 'Brands I\'m Building' },
    { id: 'books', label: 'Books I\'m Writing' },
    { id: 'resources', label: 'Resources I\'m Creating' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'movements':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Gathering people around gospel, growth, and creativity.
            </p>
            {/* 3 items - show in grid, no carousel needed */}
            <ItemGrid items={movements} />
          </div>
        );

      case 'brands':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Businesses and tools that serve visionaries and fund the work.
            </p>
            {/* 3 items - show in grid, no carousel needed */}
            <ItemGrid items={brands} />
          </div>
        );

      case 'books':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Books that inspire purpose-driven living and creative entrepreneurship.
            </p>
            {/* 9 items - use carousel */}
            <BookCarousel books={bookItems} title="" />
          </div>
        );

      case 'resources':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Tools, courses, and content to help you discover your purpose and build meaningful work.
            </p>
            {/* 4 items - show in grid, no carousel needed */}
            <ItemGrid items={resources} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-16 border-b border-white/10 pb-4 sm:pb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
} 