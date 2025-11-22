"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function MasterClassSection() {
    const animation = useScrollAnimation({ threshold: 0.2 });
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // TODO: Integrate with your newsletter service or backend
        // For now, just simulate success
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1000);
    };

    return (
        <section ref={animation.ref} className="py-16 sm:py-20 md:py-28 bg-black relative overflow-hidden">
            <div className="container px-4 max-w-4xl mx-auto">
                <div className={`animate-on-scroll ${animation.isVisible ? 'visible animate-slide-up' : ''}`}>
                    {/* Glassmorphism container */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 sm:p-12 md:p-16 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            MasterClass
                        </h2>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                            A formation school for Christian creatives.
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                            You're God's masterpiece, created for good works he prepared beforehand. But knowing that and living it are two different things.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                            MasterClass is where theology meets practice—a place to grow in gospel understanding, spiritual depth, creative sustainability, and leadership.
                        </p>

                        <div className="mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white">
                                Coming soon
                            </span>
                        </div>

                        <p className="text-base text-gray-400 mb-4">
                            Be the first to know:
                        </p>

                        {status === "success" ? (
                            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 max-w-md mx-auto">
                                <p className="text-green-400 font-medium">
                                    ✓ You're on the list! We'll keep you posted.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                                <div className="relative flex items-center">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="absolute right-2 top-2 bottom-2 px-6 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? "..." : "Join"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
