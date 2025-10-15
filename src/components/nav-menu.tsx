"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { menuItems } from '@/data/menu-items';

export function NavMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Combine hover and click/keyboard states
  const activeMenu = openMenu || hoveredMenu;

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredMenu(label);
  };

  const handleMouseLeave = () => {
    // Delay hiding to allow moving to dropdown
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent, label: string, hasDropdown: boolean) => {
    if (!hasDropdown) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpenMenu(openMenu === label ? null : label);
    } else if (event.key === 'Escape') {
      setOpenMenu(null);
    }
  };

  const handleDropdownKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpenMenu(null);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenu(null);
    };

    if (openMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openMenu]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="relative z-50 hidden md:block">
      <ul className="flex items-center space-x-8">
        {menuItems.map((item) => {
          const hasDropdown = !!item.items;
          const isActive = activeMenu === item.label;

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center py-2 text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button 
                  className="flex items-center py-2 text-white/90 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === item.label ? null : item.label);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, item.label, hasDropdown)}
                  aria-expanded={isActive}
                  aria-haspopup="true"
                >
                  {item.label}
                </button>
              )}
              
              {/* Dropdown Menu */}
              {item.items && isActive && (
                <div 
                  className="absolute left-0 top-full pt-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div 
                    className="dropdown-menu bg-black border border-white/20 rounded-xl overflow-hidden min-w-[200px] shadow-xl"
                    onKeyDown={handleDropdownKeyDown}
                  >
                    <ul className="py-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="flex items-center px-4 py-2 text-white/75 hover:text-white hover:bg-white/10 transition-colors"
                            onClick={() => setOpenMenu(null)}
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
          );
        })}
      </ul>
    </nav>
  );
} 