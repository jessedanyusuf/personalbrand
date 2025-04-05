import type { Metadata } from "next";
import "./globals.css";
import { Instagram, Youtube, Twitter, Mail, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jesse Dan-Yusuf - Official Website",
  description: "Jesse Dan-Yusuf is a creator, entrepreneur, and pastor committed to helping people find their purpose and fulfil their potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen bg-black text-white flex flex-col">
        <main className="flex-grow">{children}</main>
        <footer className="bg-black py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <div className="flex space-x-4 flex-wrap">
                  <a href="https://instagram.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com/@jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://tiktok.com/@jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/books" className="text-white/80 hover:text-white transition-colors">
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link href="/podcasts" className="text-white/80 hover:text-white transition-colors">
                      Podcasts
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/newsletters" className="text-white/80 hover:text-white transition-colors">
                      Newsletters
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="text-white/80 hover:text-white transition-colors">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <a href="mailto:hello@jessedanyusuf.com" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  hello@jessedanyusuf.com
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
              <p>&copy; {new Date().getFullYear()} Jesse Dan-Yusuf. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
