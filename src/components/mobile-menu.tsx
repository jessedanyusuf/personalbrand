"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { menuItems } from '@/data/menu-items';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSections({});
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Store original body overflow
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // Get scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Apply styles
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // Focus close button when menu opens
      closeButtonRef.current?.focus();

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen, openSections]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 z-50 bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <Link href="/" className="text-xl font-semibold" onClick={closeMenu}>
                Jesse Dan-Yusuf
              </Link>
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col p-6 space-y-6 text-base overflow-y-auto">
              {menuItems.map((item) => {
                if (item.href) {
                  // Direct link item
                  return (
                    <Link 
                      key={item.label}
                      href={item.href} 
                      className="font-medium hover:text-gray-300" 
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  );
                }

                // Expandable section
                const sectionKey = item.label.toLowerCase().replace(/\s+/g, '-');
                const isExpanded = openSections[sectionKey];

                return (
                  <div key={item.label}>
                    <button
                      className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1 -mx-2"
                      onClick={() => toggleSection(sectionKey)}
                      aria-expanded={isExpanded}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isExpanded && item.items && (
                      <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                        {item.items.map((subItem) => (
                          <Link 
                            key={subItem.label}
                            href={subItem.href} 
                            className="block py-1 hover:text-gray-300" 
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-auto p-6 border-t border-white/10 flex space-x-6">
              <Link
                href="https://www.instagram.com/jessedanyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/@jessedanyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/jessedanyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/jessedanyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
