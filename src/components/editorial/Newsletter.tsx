"use client";

import { ArrowRight } from "lucide-react";
import { links } from "@/lib/site";
import { Reveal } from "./Reveal";

/** The page's main call to action: a signup for Masterpiece, posted straight to Substack. */
export function Newsletter() {
  return (
    <section id="newsletter" className="relative py-24 md:py-40 overflow-hidden">
      <div className="container-x">
        <div className="relative rounded-md bg-[color:var(--ink-2)] border border-white/[0.06] px-6 py-16 sm:px-10 md:px-16 md:py-28 overflow-hidden">
          <div className="relative max-w-3xl">
            <Reveal>
              <p className="label mb-6 md:mb-8">The Masterpiece newsletter</p>
              <h2 className="display-xl max-w-[12ch]">
                Find your story in <span className="accent">God&apos;s story.</span>
              </h2>
              <p className="lede max-w-xl mt-8 md:mt-10">
                Masterpiece is my ongoing letter about faith, creativity, calling and becoming who God made you to be.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form action={links.masterpieceSubscribe} method="post" target="_blank" className="mt-12 md:mt-16 max-w-xl">
                <label htmlFor="newsletter-email" className="micro">
                  Your email
                </label>
                <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-6">
                  <input id="newsletter-email" type="email" name="email" required autoComplete="email" placeholder="you@example.com" className="field" />
                  <button type="submit" className="pill pill-solid !h-12 !px-6 shrink-0 group">
                    Join the newsletter
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                  </button>
                </div>
                <p className="micro mt-5">Free, every so often. Unsubscribe any time.</p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
