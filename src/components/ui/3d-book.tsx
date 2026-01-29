"use client";

import React, { useRef, useState, useEffect } from "react";

interface Book3DProps {
    src?: string;
    title?: string;
    author?: string;
    width?: number;
    height?: number;
    spineColor?: string;
    backColor?: string;
}

export function Book3D({
    src, // Kept for backward compatibility but unused in this design
    title = "Masterpiece",
    author = "Jesse Dan-Yusuf",
    width = 300,
    height = 450,
    spineColor = "#111111", // Default to Black
    backColor = "#111111", // Default to Black
}: Book3DProps) {
    const [rotation, setRotation] = useState({ x: 0, y: -25 });
    const [isDragging, setIsDragging] = useState(false);

    // Physics & State Refs
    const dragRef = useRef({
        startX: 0,
        startY: 0,
        startRotationX: 0,
        startRotationY: -25,
        isDown: false,
        lastX: 0,
        lastY: 0,
        lastTime: 0,
        velocityX: 0,
        velocityY: 0,
        rafId: 0
    });

    const containerRef = useRef<HTMLDivElement>(null);

    // --- Interaction Handlers ---

    const stopAnimation = () => {
        if (dragRef.current.rafId) {
            cancelAnimationFrame(dragRef.current.rafId);
            dragRef.current.rafId = 0;
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        stopAnimation();
        setIsDragging(true);
        dragRef.current.isDown = true;

        dragRef.current.startX = e.clientX;
        dragRef.current.startY = e.clientY;

        dragRef.current.lastX = e.clientX;
        dragRef.current.lastY = e.clientY;

        dragRef.current.lastTime = performance.now();

        dragRef.current.startRotationX = rotation.x;
        dragRef.current.startRotationY = rotation.y;

        dragRef.current.velocityX = 0;
        dragRef.current.velocityY = 0;
    };

    // Auto-drift loop when not interacting
    const runInertia = () => {
        const friction = 0.97; // Slightly more resistance for control
        const minVelocity = 0.05; // Drift speed

        let vx = dragRef.current.velocityX;
        let vy = dragRef.current.velocityY;

        // Apply friction
        vx *= friction;
        vy *= friction;

        // If velocity is very low, maintain a gentle drift instead of stopping completely
        if (Math.abs(vx) < minVelocity && Math.abs(vy) < minVelocity) {
            // If it was spinning, keep it spinning slowly in that direction
            // If completely stopped (e.g. init), give it a tiny drift
            if (Math.abs(vx) < 0.001) vx = 0.02;
        }

        // Apply
        setRotation(prev => ({
            x: prev.x + vy,
            y: prev.y + vx
        }));

        dragRef.current.velocityX = vx;
        dragRef.current.velocityY = vy;

        dragRef.current.rafId = requestAnimationFrame(runInertia);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        dragRef.current.isDown = false;
        runInertia();
    };

    useEffect(() => {
        // Start drifting immediately
        runInertia();

        const handleGlobalMouseUp = () => {
            if (dragRef.current.isDown) {
                handleMouseUp();
            }
        };
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            stopAnimation();
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        if (dragRef.current.isDown) {
            // DRAGGING: Rotate based on delta
            const currentX = e.clientX;
            const currentY = e.clientY;
            const now = performance.now();

            const deltaX = currentX - dragRef.current.startX;
            const deltaY = currentY - dragRef.current.startY;

            const dt = now - dragRef.current.lastTime;
            const dx = currentX - dragRef.current.lastX;
            const dy = currentY - dragRef.current.lastY;

            if (dt > 0) {
                const sensitivity = 0.25; // Much heavier feel
                // Instant velocity tracking
                dragRef.current.velocityX = dx * sensitivity;
                dragRef.current.velocityY = -dy * sensitivity;
            }

            dragRef.current.lastX = currentX;
            dragRef.current.lastY = currentY;
            dragRef.current.lastTime = now;

            const newRotateY = dragRef.current.startRotationY + (deltaX * 0.5);
            const newRotateX = dragRef.current.startRotationX - (deltaY * 0.5);

            setRotation({ x: newRotateX, y: newRotateY });
        }
    };

    const handleMouseLeave = () => { };

    // --- Dynamic Glitter Style ---
    // The background position shifts based on rotation, creating a "shimmer" effect
    const glitterStyle = {
        color: 'transparent',
        background: 'linear-gradient(110deg, #d4af37 20%, #fcf6ba 40%, #aa771c 60%, #d4af37 80%)',
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        // Shift gradient based on rotation to simulate light catching
        backgroundPosition: `${50 + (rotation.y * 3)}% center`,
        fontFamily: 'Times New Roman, serif',
        textShadow: '0px 1px 2px rgba(0,0,0,0.5)' // Gentle shadow to lift from black
    };

    return (
        <div
            ref={containerRef}
            className={`group relative perspective-2000 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Float Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes shadow-breath {
                    0% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.2; transform: scale(0.8); }
                    100% { opacity: 0.4; transform: scale(1); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-shadow {
                    animation: shadow-breath 6s ease-in-out infinite;
                }
            `}} />

            {/* Floating Container */}
            <div className="w-full h-full relative preserve-3d animate-float">

                {/* The Rotating Book */}
                <div
                    className="w-full h-full relative preserve-3d"
                    style={{
                        transformOrigin: "center center",
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                        transition: isDragging ? 'none' : 'transform 0.1s linear'
                    }}
                >
                    {/* --- HARDCOVER CASE --- */}

                    {/* Front Cover (Outside) */}
                    <div
                        className="absolute inset-0 backface-hidden rounded-r-[4px] shadow-2xl z-30 flex flex-col justify-between p-8"
                        style={{
                            backgroundColor: '#111111', // Matte Black
                            transform: 'translateZ(25px)'
                        }}
                    >
                        {/* --- COVER DESIGN --- */}

                        {/* Title Top - GLITTERING GOLD */}
                        <div className="mt-8 text-center">
                            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-none" style={glitterStyle}>
                                {title}
                            </h1>
                        </div>

                        {/* Author Bottom - GLITTERING GOLD */}
                        <div className="mb-8 text-center">
                            <p className="font-serif text-xl sm:text-2xl italic" style={glitterStyle}>
                                {author}
                            </p>
                            {/* Decorative Line - Gold */}
                            <div className="w-12 h-[1px] mx-auto mt-4" style={{ background: '#aa771c' }} />
                        </div>


                        {/* Overlays / Texture */}

                        {/* Matte Texture Overlay (Noise) - Stronger on black */}
                        <div className="absolute inset-0 bg-white/5 pointer-events-none mix-blend-overlay"
                            style={{ filter: 'contrast(150%) noise(0.5)' }} />

                        {/* Hinge/Crease Shadow (Left side) */}
                        <div className="absolute left-0 top-0 bottom-0 w-[24px] pointer-events-none"
                            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 20%, transparent 100%)' }} />

                        {/* Spine Groove Level */}
                        <div className="absolute left-[12px] top-0 bottom-0 w-[1px] bg-black/50 pointer-events-none" />

                        {/* Slight lighting gradient for matte feel */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/5 to-white/10 pointer-events-none mix-blend-overlay" />
                    </div>

                    {/* Front Cover (Inside) */}
                    <div
                        className="absolute inset-0 backface-hidden rounded-r-[4px] bg-[#1a1a1a] z-20"
                        style={{
                            transform: 'translateZ(24px) rotateY(180deg)',
                        }}
                    >
                        <div className="absolute inset-0 bg-[#000000]" />
                    </div>

                    {/* Back Cover (Outside) */}
                    <div
                        className="absolute inset-0 backface-hidden rounded-l-[4px] z-10"
                        style={{
                            backgroundColor: backColor,
                            transform: 'rotateY(180deg) translateZ(26px)',
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
                        }}
                    >
                        {/* Hinge Shadow Back */}
                        <div className="absolute right-0 top-0 bottom-0 w-[24px] bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
                    </div>

                    {/* Back Cover (Inside) */}
                    <div
                        className="absolute inset-0 backface-hidden rounded-l-[4px] bg-[#1a1a1a] z-10"
                        style={{
                            transform: 'translateZ(-25px)',
                        }}
                    >
                        <div className="absolute inset-0 bg-[#000000]" />
                    </div>

                    {/* Spine (Outside) */}
                    <div
                        className="absolute left-0 top-0 bottom-0 origin-center backface-hidden rounded-[2px]"
                        style={{
                            width: '50px', // Solid 50px width
                            transform: 'rotateY(-90deg) translateZ(26px)', // Pushed out to cap
                            backgroundColor: spineColor,
                        }}
                    >
                        {/* Stronger Rounding Gradient */}
                        <div className="absolute inset-0 pointer-events-none"
                            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.5) 80%, rgba(255,255,255,0.1) 100%)' }} />
                    </div>

                    {/* Spine (Inside) */}
                    <div
                        className="absolute left-0 top-0 bottom-0 origin-center backface-hidden rounded-[2px]"
                        style={{
                            width: '48px',
                            transform: 'rotateY(90deg) translateZ(-25px)',
                            backgroundColor: spineColor, // Dark internal spine
                        }}
                    />

                    {/* --- PAGE BLOCK --- */}
                    <div className="absolute preserve-3d" style={{
                        top: '12px',
                        bottom: '12px',
                        left: '6px',
                        width: `${width - 20}px`,
                        transform: 'translateZ(0px)'
                    }}>

                        {/* Pages (Right/Face) */}
                        <div
                            className="absolute right-0 top-[2px] bottom-[2px] backface-hidden"
                            style={{
                                width: '40px',
                                backgroundColor: '#222', // Dark Grey/Black Pages
                                transformOrigin: 'center',
                                transform: 'translateX(20px) rotateY(90deg)',

                                // Realistic texture
                                background: `
                                    linear-gradient(to right, #111 0%, #222 20%, #222 80%, #000 100%),
                                    repeating-linear-gradient(90deg, #181818, #181818 1px, transparent 1px, transparent 3px)
                                `,
                                backgroundSize: '100% 100%, 4px 100%'
                            }}
                        />

                        {/* Pages (Top) */}
                        <div
                            className="absolute top-0 right-0 h-[40px] backface-hidden"
                            style={{
                                left: '0px',
                                backgroundColor: '#222',
                                transformOrigin: 'center',
                                transform: 'translateY(-20px) rotateX(90deg)',
                                background: 'linear-gradient(to bottom, #333 0%, #111 100%)', // Shadowed top
                            }}
                        />

                        {/* Pages (Bottom) */}
                        <div
                            className="absolute bottom-0 right-0 h-[40px] backface-hidden"
                            style={{
                                left: '0px',
                                backgroundColor: '#222',
                                transformOrigin: 'center',
                                transform: 'translateY(20px) rotateX(-90deg)',
                                background: 'linear-gradient(to top, #333 0%, #111 100%)',
                            }}
                        />

                    </div>
                </div>
            </div>

            {/* Distant Shadow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-12 bg-black blur-2xl rounded-full animate-shadow pointer-events-none opacity-40" />

        </div>
    );
}
