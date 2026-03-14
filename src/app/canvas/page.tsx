import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CanvasForm from './CanvasForm';

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
        <div className="group relative overflow-hidden rounded-lg animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            <Image
                src={src}
                alt={alt}
                width={600}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a
                    href={downloadSrc}
                    download={`canvas-${index}.png`}
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                >
                    Click to share or download
                </a>
            </div>
        </div>
    );
}

export default function CanvasPage() {
    return (
        <div className="min-h-screen bg-[#f5f0eb]">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.7s ease-out both;
                }
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out both;
                }
            `}</style>

            {/* Navigation */}
            <nav className="w-full px-6 py-5 flex justify-between items-center animate-fade-in">
                <Link href="/" className="text-gray-900 text-sm font-semibold hover:text-gray-600 transition-colors">
                    Jesse Dan-Yusuf
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/books" className="text-gray-600 text-sm hover:text-gray-900 transition-colors hidden sm:inline">
                        Books
                    </Link>
                    <Link href="/shop" className="text-gray-600 text-sm hover:text-gray-900 transition-colors hidden sm:inline">
                        Shop
                    </Link>
                    <Link
                        href="#register"
                        className="text-sm font-semibold bg-gray-900 text-[#f5f0eb] px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                        Register
                    </Link>
                </div>
            </nav>

            {/* Header Image */}
            <div className="w-full animate-fade-in">
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
                    <p className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        What do you do when the thing you were made to do feels completely disconnected from the God who made you to do it?
                    </p>

                    <p className="animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                        I kept those two worlds separate for years. Longer than I care to admit. And I see the same thing in so many incredibly gifted people — writers, designers, musicians, builders, makers of all kinds — who have quietly stopped believing their creativity has anything to do with their faith. So they carry both, but together they carry neither well.
                    </p>

                    <p className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        I started <strong className="text-gray-900">CANVAS</strong> because I needed a room where that separation could finally end. A room where we talk honestly about the theology of creativity, the real economics of creative work, and what it actually looks like to be formed spiritually as someone who makes things for a living.
                    </p>

                    <div className="animate-fade-in-up border-l-2 border-gray-400 pl-6 space-y-2 text-gray-900" style={{ animationDelay: '650ms' }}>
                        <p className="font-semibold text-xl">March 29 &middot; Big H Studio, Utako, Abuja</p>
                        <p className="text-gray-500">Doors open at 5:30PM</p>
                    </div>

                    <p className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                        If you are a creative who is also trying to follow Jesus, this room is for you. Come and bring someone who needs it as much as you do.
                    </p>

                    <div id="register" className="pt-4 animate-fade-in-up" style={{ animationDelay: '950ms' }}>
                        <CanvasForm />
                    </div>
                </div>

                {/* Share / Download Images */}
                <div className="mt-24 space-y-4">
                    <p className="text-gray-400 text-sm uppercase tracking-widest animate-fade-in-up" style={{ animationDelay: '1100ms' }}>Share the word</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <DownloadCard src="/images/c1.jpg" downloadSrc="/images/c1.png" alt="CANVAS share image 1" index={1} />
                        <DownloadCard src="/images/c2.jpg" downloadSrc="/images/c2.png" alt="CANVAS share image 2" index={2} />
                        <DownloadCard src="/images/C4.jpg" downloadSrc="/images/C4.png" alt="CANVAS share image 3" index={3} />
                    </div>
                </div>

                {/* Masterpiece Newsletter */}
                <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
                    <div className="border-t border-gray-300 pt-12 text-center">
                        <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">From the desk of Jesse Dan-Yusuf</p>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Masterpiece</h3>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Weekly insights on purpose, creativity, and building meaningful work.
                        </p>
                        <div className="flex justify-center">
                            <iframe
                                src="https://readmasterpiece.substack.com/embed"
                                width="480"
                                height="320"
                                style={{ border: '1px solid #d1c9be', background: 'white' }}
                                frameBorder="0"
                                scrolling="no"
                                className="max-w-full rounded-lg"
                            />
                        </div>
                        <p className="text-sm text-gray-400 mt-6">
                            No spam, ever. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
