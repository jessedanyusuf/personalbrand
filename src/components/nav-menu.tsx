"use client";

import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  {
    label: 'My Story',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Vision', href: '/vision' },
      { label: 'Journey', href: '/journey' }
    ]
  },
  {
    label: 'Business',
    items: [
      { label: 'Campfyre', href: '/campfyre' },
      { label: 'Fireworks', href: '/fireworks' },
      { label: 'Lantern', href: '/lantern' }
    ]
  },
  {
    label: 'Ministry',
    items: [
      { label: 'One City Church', href: '/one-city-church' },
      { label: 'One City Institute', href: '/one-city-institute' }
    ]
  },
  {
    label: 'Books',
    href: '/books'
  },
  {
    label: 'Podcasts',
    items: [
      { label: 'The Cave', href: '/podcasts/the-cave' },
      { label: 'Build with Jesse Dan-Yusuf', href: '/podcasts/build' },
      { label: 'The One City Abuja Podcast', href: '/podcasts/one-city' }
    ]
  },
  {
    label: 'Newsletters',
    items: [
      { label: 'The Cave', href: '/newsletters/the-cave' },
      { label: 'Campfyre', href: '/newsletters/campfyre' },
      { label: 'The Good News Letter', href: '/newsletters/good-news' }
    ]
  },
  {
    label: 'Shop',
    href: '/shop'
  }
];

export function NavMenu() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <nav className="relative z-50 hidden md:block">
      <ul className="flex items-center space-x-8">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => setHoveredMenu(item.label)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center py-2 text-white/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button className="flex items-center py-2 text-white/90 hover:text-white transition-colors">
                {item.label}
              </button>
            )}
            
            {/* Dropdown Menu */}
            {item.items && hoveredMenu === item.label && (
              <div className="absolute left-0 top-full pt-2">
                <div className="dropdown-menu bg-black border border-white/20 rounded-xl overflow-hidden min-w-[200px] shadow-xl">
                  <ul className="py-2">
                    {item.items.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
} 