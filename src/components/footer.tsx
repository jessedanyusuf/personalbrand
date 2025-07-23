import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black py-16 sm:py-20 md:py-24 relative">
      {/* Navigation Links - Top Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  BOOKS
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  PODCASTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/newsletters" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  NEWSLETTERS
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  SHOP
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  SPEAKING
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="https://instagram.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  YOUTUBE
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  TWITTER
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="https://linkedin.com/in/jessedanyusuf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="mailto:hello@jessedanyusuf.com" className="text-white hover:text-white/70 transition-colors text-sm uppercase tracking-widest">
                  EMAIL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Full Width */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline w-full gap-6 md:gap-0 pt-8 md:pt-16">
          {/* Copyright Section - Left */}
          <div className="flex items-center gap-3">
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none">
              ©2025
            </div>
            <div className="text-white text-xs uppercase tracking-widest leading-tight">
              ALL RIGHTS<br />RESERVED.
            </div>
          </div>

          {/* Company Name - Right */}
          <div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none whitespace-nowrap">
              THE JESSE DAN-YUSUF CO.
            </h2>
          </div>
        </div>
      </div>


    </footer>
  )
}