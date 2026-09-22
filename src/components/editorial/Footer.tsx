"use client";

import Link from "next/link";
import { email, socials } from "@/lib/site";

const navigate = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ideas", href: "/#ideas" },
  { name: "Work With Me", href: "/#work-with-me" },
  { name: "Newsletter", href: "/#newsletter" },
];

const linkClass = "text-[14px] font-medium text-[color:var(--paper-60)] hover:text-[color:var(--paper)] transition-colors";

export function Footer() {
  return (
    <footer className="container-x pt-16 md:pt-28 pb-4 md:pb-6 overflow-hidden">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:grid-rows-[1fr_auto]">
        <div className="col-span-12 md:col-span-6 md:row-start-1">
          <h2 className="display-md max-w-[18ch]">
            Serving One City. Building Fyreworks. <span className="accent">Writing Masterpiece.</span>
          </h2>
          <a href="/#work-with-me" className="pill mt-8">
            Work with me
          </a>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-7 lg:col-span-3 md:row-span-2">
          <p className="micro mb-4">Navigate</p>
          <ul className="space-y-2">
            {navigate.map((l) => (
              <li key={l.href}>
                {l.href.includes("#") ? (
                  <a href={l.href} className={linkClass}>
                    {l.name}
                  </a>
                ) : (
                  <Link href={l.href} className={linkClass}>
                    {l.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-4 lg:col-span-3 md:row-span-2">
          <p className="micro mb-4">Connect</p>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${email}`} className="text-[14px] font-medium text-[color:var(--paper)] hover:opacity-60 transition-opacity">
                {email}
              </a>
            </li>
            {socials
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <p className="micro col-span-12 md:col-span-6 md:col-start-1 md:row-start-2 self-end">
          © {new Date().getFullYear()} The Jesse Dan-Yusuf Co. Built by{" "}
          <a href="https://www.fyreworks.co" target="_blank" rel="noopener noreferrer" className="text-[color:var(--paper)] hover:opacity-60 transition-opacity">
            Fyreworks
          </a>
        </p>
      </div>

      {/* Name written across the full width, in grey, as the last thing on the page */}
      <Link href="/" className="footer-mark block text-white/20 hover:text-white/30 transition-colors duration-500 mt-12 md:mt-24" aria-label="Jesse Dan-Yusuf, home">
        Jesse <span className="accent">Dan-Yusuf</span>
      </Link>
    </footer>
  );
}
