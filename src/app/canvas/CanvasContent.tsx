'use client';

import Image from 'next/image';
import Link from 'next/link';
import CanvasForm from './CanvasForm';
import CanvasNav from './CanvasNav';
import CanvasWrapper, { useCanvasTheme } from './CanvasWrapper';

function DownloadCard({ src, downloadSrc, alt, index }: { src: string; downloadSrc: string; alt: string; index: number }) {
    const { theme } = useCanvasTheme();
    const dark = theme === 'dark';

    return (
        <div className="group relative overflow-hidden rounded-lg canvas-reveal" style={{ animationDelay: `${index * 120}ms` }}>
            <Image
                src={src}
                alt={alt}
                width={600}
                height={600}
                className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${dark ? 'bg-black/0 group-hover:bg-black/60' : 'bg-white/0 group-hover:bg-white/50'} backdrop-blur-0 group-hover:backdrop-blur-[2px]`}>
                <a
                    href={downloadSrc}
                    download={`canvas-${index}.png`}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${dark ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
                >
                    Click to share or download
                </a>
            </div>
        </div>
    );
}

function CanvasInner() {
    const { theme } = useCanvasTheme();
    const dark = theme === 'dark';

    return (
        <>
            {/* Navigation */}
            <div className="canvas-fade" style={{ animationDelay: '100ms' }}>
                <CanvasNav />
            </div>

            {/* Hero Image */}
            <div className="w-full canvas-fade" style={{ animationDelay: '150ms' }}>
                <Image
                    src="/images/Header.jpg"
                    alt="CANVAS"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                />
            </div>

            {/* Watch Live */}
            <div className="canvas-fade" style={{ animationDelay: '250ms' }}>
                <Link
                    href="https://www.youtube.com/@jessedanyusuf/live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center gap-3 py-4 transition-colors duration-300 ${dark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${dark ? 'bg-white/20' : 'bg-gray-900'}`}>
                        <svg className={`w-3.5 h-3.5 ml-0.5 ${dark ? 'text-white' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <span className={`text-sm font-medium uppercase tracking-widest ${dark ? 'text-white/60 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'} transition-colors duration-300`}>
                        Watch Live
                    </span>
                </Link>
            </div>

            {/* Content */}
            <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
                <div className={`space-y-8 text-lg leading-relaxed transition-colors duration-500 ${dark ? 'text-white/70' : 'text-gray-700'}`}>
                    <p className="canvas-reveal" style={{ animationDelay: '300ms' }}>
                        What do you do when the thing you were made to do feels completely disconnected from the God who made you to do it?
                    </p>

                    <p className="canvas-reveal" style={{ animationDelay: '450ms' }}>
                        I kept those two worlds separate for years. Longer than I care to admit. And I see the same thing in so many incredibly gifted people — writers, designers, musicians, builders, makers of all kinds — who have quietly stopped believing their creativity has anything to do with their faith. So they carry both, but together they carry neither well.
                    </p>

                    <p className="canvas-reveal" style={{ animationDelay: '600ms' }}>
                        I started <strong className={`font-semibold transition-colors duration-500 ${dark ? 'text-white' : 'text-gray-900'}`}>CANVAS</strong> because I needed a room where that separation could finally end. A room where we talk honestly about the theology of creativity, the real economics of creative work, and what it actually looks like to be formed spiritually as someone who makes things for a living.
                    </p>

                    <div className={`canvas-reveal pl-6 space-y-2 transition-colors duration-500 border-l-2 ${dark ? 'border-white/20 text-white' : 'border-gray-400 text-gray-900'}`} style={{ animationDelay: '750ms' }}>
                        <p className="font-semibold text-xl">March 29 &middot; Big H Studio, Utako, Abuja</p>
                        <p className={`transition-colors duration-500 ${dark ? 'text-white/40' : 'text-gray-500'}`}>Doors open at 5:30PM</p>
                    </div>

                    <p className="canvas-reveal" style={{ animationDelay: '800ms' }}>
                        If you are a creative who is also trying to follow Jesus, this room is for you. Come and bring someone who needs it as much as you do.
                    </p>

                    <div id="register" className="pt-4 canvas-reveal" style={{ animationDelay: '1050ms' }}>
                        <CanvasForm />
                    </div>
                </div>

                {/* Share / Download Images — Carousel */}
                <div className="mt-20 sm:mt-24 space-y-4">
                    <p className={`text-sm uppercase tracking-widest canvas-reveal transition-colors duration-500 ${dark ? 'text-white/30' : 'text-gray-400'}`} style={{ animationDelay: '1200ms' }}>Share the word</p>
                </div>
            </div>
            <div className="canvas-reveal overflow-hidden" style={{ animationDelay: '1300ms' }}>
                <div className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
                    <div className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"><DownloadCard src="/images/c1.jpg" downloadSrc="/images/c1.png" alt="CANVAS share image 1" index={1} /></div>
                    <div className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"><DownloadCard src="/images/c2.jpg" downloadSrc="/images/c2.png" alt="CANVAS share image 2" index={2} /></div>
                    <div className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"><DownloadCard src="/images/C4.jpg" downloadSrc="/images/C4.png" alt="CANVAS share image 3" index={3} /></div>
                    <div className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"><DownloadCard src="/images/big-h.png" downloadSrc="/images/big-h.png" alt="Guest Speaker — Henry Nwaeze" index={4} /></div>
                    <div className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"><DownloadCard src="/images/c5.png" downloadSrc="/images/c5.png" alt="CANVAS speakers" index={5} /></div>
                </div>
            </div>

            {/* ── Dark Footer Section ── */}
            <div className="bg-black text-white">
                <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
                    <div className="flex justify-center">
                        <iframe
                            src="https://readmasterpiece.substack.com/embed"
                            width="480"
                            height="320"
                            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'white' }}
                            frameBorder="0"
                            scrolling="no"
                            className="max-w-full rounded-lg"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 flex justify-center gap-5">
                        <a href="https://www.facebook.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="https://www.tiktok.com/@jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="TikTok">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                        </a>
                        <a href="https://twitter.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="X">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://youtube.com/@jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="YouTube">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                        <a href="https://linkedin.com/in/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>

                    {/* Minimal Footer */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/30">
                        <p>&copy; 2026 The Jesse Dan-Yusuf Co.</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function CanvasContent() {
    return (
        <CanvasWrapper>
            <CanvasInner />
        </CanvasWrapper>
    );
}
