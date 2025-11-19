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

    // TODO: Integrate with your newsletter service (e.g., ConvertKit, Mailchimp, etc.)
    // For now, just simulate success
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section ref={newsletterAnimation.ref} className="py-16 sm:py-20 md:py-28 bg-black">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className={`animate-on-scroll ${newsletterAnimation.isVisible ? 'visible animate-slide-up' : ''}`}>
          {/* Glassmorphism container */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Stay Connected
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Get weekly insights on purpose, creativity, and building meaningful work delivered straight to your inbox.
            </p>

            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-green-400 font-medium">
                  ✓ Thanks for subscribing! Check your email to confirm.
                </p>
              </div>
            ) : (
              <div className="flex justify-center">
                <iframe
                  src="https://readmasterpiece.substack.com/embed"
                  width="480"
                  height="320"
                  style={{ border: '1px solid #EEE', background: 'white' }}
                  frameBorder="0"
                  scrolling="no"
                  className="max-w-full rounded-lg"
                />
              </div>
            )}

            <p className="text-sm text-gray-500 mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

