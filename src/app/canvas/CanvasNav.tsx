'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, X, Instagram, Twitter, Youtube, Linkedin, Sun, Moon } from 'lucide-react';
import { menuItems } from '@/data/menu-items';
import { useCanvasTheme } from './CanvasWrapper';

export default function CanvasNav() {
    const { theme, toggle } = useCanvasTheme();
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const dark = theme === 'dark';

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHoveredMenu(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setHoveredMenu(null), 150);
    };

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenSections({});
    };

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
    }, [mobileOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { setHoveredMenu(null); closeMobile(); }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    useEffect(() => {
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, []);

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-40 w-full px-4 sm:px-6 py-5 flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className={`font-semibold transition-colors ${dark ? 'text-white hover:text-white/70' : 'text-gray-900 hover:text-gray-600'}`}>
                    Jesse Dan-Yusuf
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.items && handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className={`text-sm transition-colors py-2 ${dark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button className={`text-sm transition-colors py-2 ${dark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                                    {item.label}
                                </button>
                            )}
                            {item.items && hoveredMenu === item.label && (
                                <div
                                    className="absolute left-0 top-full pt-2 z-50"
                                    onMouseEnter={() => handleMouseEnter(item.label)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`rounded-xl shadow-lg overflow-hidden min-w-[200px] border ${dark ? 'bg-[#222] border-white/10' : 'bg-white border-gray-200'}`}>
                                        <ul className="py-2">
                                            {item.items.map((sub) => (
                                                <li key={sub.label}>
                                                    <Link
                                                        href={sub.href}
                                                        className={`block px-4 py-2 text-sm transition-colors ${dark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Dark mode toggle */}
                    <button
                        onClick={toggle}
                        className={`p-2 rounded-full transition-colors ${dark ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
                        aria-label="Toggle dark mode"
                    >
                        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggle}
                        className={`p-2 rounded-full transition-colors ${dark ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                        aria-label="Toggle dark mode"
                    >
                        {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="p-2"
                        aria-label="Open menu"
                    >
                        <Menu className={`h-6 w-6 ${dark ? 'text-white' : 'text-gray-900'}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-black text-white">
                    <div className="flex flex-col h-full">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <Link href="/" className="text-xl font-semibold" onClick={closeMobile}>
                                Jesse Dan-Yusuf
                            </Link>
                            <button onClick={closeMobile} className="p-2" aria-label="Close menu">
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex flex-col p-6 space-y-6 text-base overflow-y-auto">
                            {menuItems.map((item) => {
                                if (item.href) {
                                    return (
                                        <Link key={item.label} href={item.href} className="font-medium hover:text-gray-300" onClick={closeMobile}>
                                            {item.label}
                                        </Link>
                                    );
                                }
                                const key = item.label.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <div key={item.label}>
                                        <button
                                            className="flex justify-between items-center w-full text-left"
                                            onClick={() => toggleSection(key)}
                                            aria-expanded={openSections[key]}
                                        >
                                            <span className="font-medium">{item.label}</span>
                                            <ChevronDown className={`h-4 w-4 transition-transform ${openSections[key] ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openSections[key] && item.items && (
                                            <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                                                {item.items.map((sub) => (
                                                    <Link key={sub.label} href={sub.href} className="block py-1 hover:text-gray-300" onClick={closeMobile}>
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-auto p-6 border-t border-white/10 flex space-x-6">
                            <a href="https://www.instagram.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                            <a href="https://youtube.com/@jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
                            <a href="https://twitter.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                            <a href="https://linkedin.com/in/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
