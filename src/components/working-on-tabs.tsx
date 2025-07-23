"use client";

import { useState } from 'react';
import Link from 'next/link';
import { BookCarousel } from '@/components/book-carousel';

interface BookItem {
  title: string;
  subtitle: string;
  description: string;
  releaseDate: string;
  link: string;
  linkText: string;
}

interface WorkingOnTabsProps {
  bookItems: BookItem[];
}

export default function WorkingOnTabs({ bookItems }: WorkingOnTabsProps) {
  const [activeTab, setActiveTab] = useState('movements');

  const tabs = [
    { id: 'movements', label: 'Movements I\'m Leading' },
    { id: 'brands', label: 'Brands I\'m Building' },
    { id: 'books', label: 'Books I\'m Writing' },
    { id: 'resources', label: 'Resources I\'m Creating' }
  ];

  // Data for each category in carousel format
  const movementsData = [
    {
      title: "ONE CITY CHURCH",
      subtitle: "One City Church",
      description: "Discover a gospel-centered community focused on spiritual growth and cultural renewal.",
      releaseDate: "Active",
      link: "/one-city-church",
      linkText: "Learn more"
    },
    {
      title: "THE CAVE",
      subtitle: "The Cave",
      description: "A community for people who want to find their purpose and fulfil their potential through deep insights and meaningful connections.",
      releaseDate: "Active",
      link: "/newsletters/the-cave",
      linkText: "Join now"
    },
    {
      title: "CAMPFYRE",
      subtitle: "Campfyre",
      description: "A thriving community for creative entrepreneurs who want to build purpose-driven brands and movements.",
      releaseDate: "Active",
      link: "/campfyre",
      linkText: "Explore"
    }
  ];

  const brandsData = [
    {
      title: "FYREWORKS",
      subtitle: "Fyreworks",
      description: "Creative agency and brand development for purpose-driven businesses and visionary leaders.",
      releaseDate: "Active",
      link: "/fyreworks",
      linkText: "Learn more"
    },
    {
      title: "LANTERN",
      subtitle: "Lantern",
      description: "Tools and resources for content creators and educators to build meaningful educational experiences.",
      releaseDate: "Coming Soon",
      link: "/lantern",
      linkText: "Join waitlist"
    },
    {
      title: "ROCKET",
      subtitle: "Rocket",
      description: "Platform for launching and scaling digital products that serve and empower creative entrepreneurs.",
      releaseDate: "Coming Soon",
      link: "/rocket",
      linkText: "Join waitlist"
    }
  ];

  const resourcesData = [
    {
      title: "CREATOR'S TOOLKIT",
      subtitle: "Creator's Toolkit",
      description: "Templates, frameworks, and guides for building a purpose-driven brand that makes a lasting impact.",
      releaseDate: "Available",
      link: "/resources/creator-toolkit",
      linkText: "Get toolkit"
    },
    {
      title: "ONLINE COURSES",
      subtitle: "Online Courses",
      description: "Deep-dive training on entrepreneurship, creativity, and faith-based leadership for purpose-driven creators.",
      releaseDate: "Available",
      link: "/courses",
      linkText: "Browse courses"
    },
    {
      title: "WEEKLY NEWSLETTER",
      subtitle: "Weekly Newsletter",
      description: "Insights on purpose, creativity, and building meaningful work delivered to your inbox every week.",
      releaseDate: "Active",
      link: "/newsletter",
      linkText: "Subscribe"
    },
    {
      title: "SPEAKING & EVENTS",
      subtitle: "Speaking & Events",
      description: "Workshops, conferences, and speaking engagements on entrepreneurship, creativity, and purpose-driven leadership.",
      releaseDate: "Ongoing",
      link: "/events",
      linkText: "Book speaking"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'movements':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Gathering people around gospel, growth, and creativity.
            </p>
            <BookCarousel books={movementsData} title="" />
          </div>
        );

      case 'brands':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Businesses and tools that serve visionaries and fund the work.
            </p>
            <BookCarousel books={brandsData} title="" />
          </div>
        );

      case 'books':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Books that inspire purpose-driven living and creative entrepreneurship.
            </p>
            <BookCarousel books={bookItems} title="" />
          </div>
        );

      case 'resources':
        return (
          <div className="w-full">
            <p className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-4xl">
              Tools, courses, and content to help you discover your purpose and build meaningful work.
            </p>
            <BookCarousel books={resourcesData} title="" />
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