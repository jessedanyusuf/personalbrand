"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@/lib/utils";
import { email, socials } from "@/lib/site";

// Plain paths so the same links work from every page; Lenis glides to the #section when already on the homepage
const navItems = [
  { name: "About", accent: "Me", href: "/about" },
  { name: "Masterpiece", accent: "", href: "/#masterpiece" },
  { name: "Ideas", accent: "", href: "/#ideas" },
  { name: "Work", accent: "With Me", href: "/#work-with-me" },
  { name: "Newsletter", accent: "", href: "/#newsletter" },
];

function MenuLabel({ item }: { item: (typeof navItems)[number] }) {
  return (
    <>
      {item.name}
      {item.accent && (
        <>
          {" "}
          <span className="accent">{item.accent}</span>
        </>
      )}
    </>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hold the page still behind the full-screen menu
  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[70] transition-colors duration-500",
          scrolled && !open ? "bg-[#111111]/80 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-lg md:text-xl font-medium tracking-[-0.045em] leading-none">
            Jesse <span className="accent whitespace-nowrap">Dan-Yusuf</span>
          </Link>

          <div className="flex items-center gap-6 md:gap-9">
            <nav className="hidden lg:flex items-center gap-7" aria-label="Sections">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[color:var(--paper-60)] hover:text-[color:var(--paper)] transition-colors"
                >
                  {item.name}
                  {item.accent ? ` ${item.accent}` : ""}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "group h-11 pl-5 pr-4 rounded-full border flex items-center gap-3 transition-colors duration-300",
                open
                  ? "bg-[color:var(--paper)] text-[color:var(--ink)] border-[color:var(--paper)]"
                  : "bg-[#111111]/40 backdrop-blur-md border-white/20 hover:bg-[color:var(--paper)] hover:text-[color:var(--ink)] hover:border-[color:var(--paper)]"
              )}
            >
              <span className="relative block h-[15px] w-[42px] overflow-hidden text-[13px] font-medium leading-[15px]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <m.span
                    key={open ? "close" : "menu"}
                    className="absolute inset-0"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {open ? "Close" : "Menu"}
                  </m.span>
                </AnimatePresence>
              </span>
              {/* Two lines that fold into a cross */}
              <span className="relative w-5 h-5 flex items-center justify-center" aria-hidden>
                <m.span
                  className="absolute h-[1.5px] w-4 rounded-full bg-current"
                  animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                />
                <m.span
                  className={cn("absolute h-[1.5px] rounded-full bg-current transition-[width] duration-300", open ? "w-4" : "w-4 group-hover:w-2.5")}
                  animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            data-lenis-prevent
            className="fixed inset-0 z-[60] bg-[color:var(--ink)] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="container-x min-h-full flex flex-col pt-28 md:pt-36 pb-10">
              <nav className="flex-1" aria-label="Menu">
                <ul className="space-y-2 md:space-y-3">
                  {navItems.map((item, i) => (
                    <m.li
                      key={item.href}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-4 md:gap-6 display-xl text-[color:var(--paper-60)] hover:text-[color:var(--paper)] transition-colors"
                      >
                        <span className="num-sm text-base md:text-xl opacity-60">(0{i + 1})</span>
                        <span className="slot">
                          <span className="slot-inner">
                            <span className="slot-face">
                              <MenuLabel item={item} />
                            </span>
                            <span className="slot-face slot-face--back" aria-hidden>
                              <MenuLabel item={item} />
                            </span>
                          </span>
                        </span>
                      </a>
                    </m.li>
                  ))}
                </ul>
              </nav>

              <m.div
                className="hairline pt-6 mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <p className="micro mb-2">Say hello</p>
                  <a href={`mailto:${email}`} className="text-base md:text-lg font-medium tracking-[-0.02em] hover:opacity-60 transition-opacity">
                    {email}
                  </a>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {socials
                    .filter((s) => s.label !== "Email")
                    .map((s) => (
                      <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[color:var(--paper-60)] hover:text-[color:var(--paper)] transition-colors">
                          {s.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
