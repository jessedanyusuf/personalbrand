import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CanvasForm from './CanvasForm';
import CanvasNav from './CanvasNav';

export const metadata: Metadata = {
    title: {
        absolute: "CANVAS — Creative Discipleship for Creative Disciples",
    },
    description: "A room where the separation between creativity and faith finally ends. March 29, 2025. Big H Studio, Utako, Abuja.",
    openGraph: {
        title: "CANVAS — Creative Discipleship for Creative Disciples",
        description: "A room where the separation between creativity and faith finally ends. March 29, 2025. Big H Studio, Utako, Abuja.",
        images: [
            {
                url: "/images/Header.jpg",
                width: 1200,
                height: 630,
                alt: "CANVAS"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "CANVAS — Creative Discipleship for Creative Disciples",
        description: "A room where the separation between creativity and faith finally ends. March 29, 2025. Big H Studio, Utako, Abuja.",
        images: ["/images/Header.jpg"]
    }
};

function DownloadCard({ src, downloadSrc, alt, index }: { src: string; downloadSrc: string; alt: string; index: number }) {
    return (
        <div className="group relative overflow-hidden rounded-lg canvas-reveal" style={{ animationDelay: `${index * 120}ms` }}>
            <Image
                src={src}
                alt={alt}
                width={600}
                height={600}
                className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/50 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center">
                <a
                    href={downloadSrc}
                    download={`canvas-${index}.png`}
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-700"
                >
                    Click to share or download
                </a>
            </div>
        </div>
    );
}

export default function CanvasPage() {
    return (
        <div className="min-h-screen" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            {/* ── Light Section ── */}
            <div className="bg-[#fafafa]">
                {/* Navigation */}
                <div className="canvas-fade" style={{ animationDelay: '100ms' }}>
                    <CanvasNav />
                </div>

                {/* Header Image */}
                <div className="w-full canvas-fade" style={{ animationDelay: '200ms' }}>
                    <Image
                        src="/images/Header.jpg"
                        alt="CANVAS"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
                    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                        <p className="canvas-reveal" style={{ animationDelay: '300ms' }}>
                            What do you do when the thing you were made to do feels completely disconnected from the God who made you to do it?
                        </p>

                        <p className="canvas-reveal" style={{ animationDelay: '450ms' }}>
                            I kept those two worlds separate for years. Longer than I care to admit. And I see the same thing in so many incredibly gifted people — writers, designers, musicians, builders, makers of all kinds — who have quietly stopped believing their creativity has anything to do with their faith. So they carry both, but together they carry neither well.
                        </p>

                        <p className="canvas-reveal" style={{ animationDelay: '600ms' }}>
                            I started <strong className="text-gray-900 font-semibold">CANVAS</strong> because I needed a room where that separation could finally end. A room where we talk honestly about the theology of creativity, the real economics of creative work, and what it actually looks like to be formed spiritually as someone who makes things for a living.
                        </p>

                        <div className="canvas-reveal canvas-divider pl-6 space-y-2 text-gray-900" style={{ animationDelay: '750ms' }}>
                            <p className="font-semibold text-xl">March 29 &middot; Big H Studio, Utako, Abuja</p>
                            <p className="text-gray-500">Doors open at 5:30PM</p>
                        </div>

                        <p className="canvas-reveal" style={{ animationDelay: '900ms' }}>
                            If you are a creative who is also trying to follow Jesus, this room is for you. Come and bring someone who needs it as much as you do.
                        </p>

                        <div id="register" className="pt-4 canvas-reveal" style={{ animationDelay: '1050ms' }}>
                            <CanvasForm />
                        </div>
                    </div>

                    {/* Share / Download Images */}
                    <div className="mt-20 sm:mt-24 space-y-4">
                        <p className="text-gray-400 text-sm uppercase tracking-widest canvas-reveal" style={{ animationDelay: '1200ms' }}>Share the word</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <DownloadCard src="/images/c1.jpg" downloadSrc="/images/c1.png" alt="CANVAS share image 1" index={1} />
                            <DownloadCard src="/images/c2.jpg" downloadSrc="/images/c2.png" alt="CANVAS share image 2" index={2} />
                            <DownloadCard src="/images/C4.jpg" downloadSrc="/images/C4.png" alt="CANVAS share image 3" index={3} />
                        </div>
                    </div>

                    {/* Watch Live */}
                    <div className="mt-20 sm:mt-24 canvas-reveal" style={{ animationDelay: '1350ms' }}>
                        <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Watch live</p>
                        <Link
                            href="https://www.youtube.com/@jessedanyusuf/live"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative overflow-hidden rounded-lg"
                        >
                            <Image
                                src="/images/Header.jpg"
                                alt="Watch CANVAS Live"
                                width={1920}
                                height={1080}
                                className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                                {/* Play button */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
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

                    {/* Minimal Footer */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/30">
                        <p>&copy; 2026 The Jesse Dan-Yusuf Co.</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
