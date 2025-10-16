"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function NewsletterSection() {
  const newsletterAnimation = useScrollAnimation({ threshold: 0.2 });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // TODO: Implement newsletter signup
    // For now, just simulate success
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section ref={newsletterAnimation.ref} className="py-16 sm:py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 max-w-4xl mx-auto relative z-10">
        <div className={`text-center animate-on-scroll ${newsletterAnimation.isVisible ? 'visible animate-slide-up' : ''}`}>
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Stay Connected
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join The Newsletter
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            Get weekly insights on purpose, creativity, and building meaningful work delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
            
            {status === "success" && (
              <p className="mt-4 text-green-400 text-sm">
                ✓ You're subscribed! Check your email for confirmation.
              </p>
            )}
            
            {status === "error" && (
              <p className="mt-4 text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-400">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Weekly insights</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

