"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const testimonials = [
  {
    quote: "Jesse's newsletter is like getting a weekly mentorship session. Every edition leaves me with something practical I can apply immediately.",
    author: "Sarah M.",
    role: "Creative Director"
  },
  {
    quote: "I've subscribed to dozens of newsletters. Masterpiece is one of the few I actually read every single week. No fluff, just wisdom.",
    author: "David K.",
    role: "Entrepreneur"
  },
  {
    quote: "The intersection of faith, creativity, and purpose—that's what Jesse brings. It's refreshed how I approach my work.",
    author: "Michelle T.",
    role: "Author & Speaker"
  }
];

const freedomPoints = [
  "Freedom to live with purpose and intention",
  "Freedom to build meaningful work that matters",
  "Freedom to grow spiritually while succeeding professionally",
  "Freedom to lead with authenticity",
  "Freedom to create your masterpiece"
];

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Redirect to Substack subscription
    window.open(`https://readmasterpiece.substack.com/subscribe?email=${encodeURIComponent(email)}`, "_blank");
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold hover:text-white/80 transition-colors">
            Jesse Dan-Yusuf
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-20 md:pb-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Newsletter Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-gray-300">Weekly Newsletter</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Subscribe to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Masterpiece
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A weekly newsletter on purpose, creativity, and building meaningful work that honors God and serves others.
          </p>

          {/* Social Proof */}
          <p className="text-gray-500 mb-12">
            Join thousands of readers who start their week with intention.
          </p>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-xl">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-10">
            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">You&apos;re almost there!</h3>
                <p className="text-gray-400">Check Substack to complete your subscription.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {status === "loading" ? (
                    "Subscribing..."
                  ) : (
                    <>
                      Subscribe for Free
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="text-center text-sm text-gray-500 mt-6">
              I will never spam or sell your info. Ever.
            </p>
          </div>
        </div>
      </section>

      {/* Freedom Points Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              I&apos;ll help you discover your masterpiece.
            </h2>
            <p className="text-gray-400 text-lg">
              You were created for good works. Let&apos;s find them together.
            </p>
          </div>

          <div className="space-y-4">
            {freedomPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-gray-200">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xl text-gray-300 mt-12">
            Subscribe to begin.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            What readers are saying
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8"
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to create your masterpiece?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the newsletter and get weekly insights delivered to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-5 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all disabled:opacity-50 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Jesse Dan-Yusuf. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/jessedanyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/jessedanyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Twitter
              </a>
              <a
                href="https://youtube.com/@jessedanyusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
