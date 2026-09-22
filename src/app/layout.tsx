import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Instagram, Youtube, Twitter, Mail, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const siteUrl = "https://jessedanyusuf.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jesse Dan-Yusuf - Creator, Pastor & Entrepreneur",
    template: "%s | Jesse Dan-Yusuf"
  },
  description: "Jesse Dan-Yusuf is a creator, entrepreneur, and pastor committed to helping people find their purpose and fulfil their potential through communities, books, and resources.",
  keywords: [
    "Jesse Dan-Yusuf",
    "Purpose-driven creator",
    "Christian entrepreneur",
    "Personal development",
    "Creative entrepreneurship",
    "Faith-based leadership",
    "One City Church",
    "Campfyre",
    "The Cave"
  ],
  authors: [{ name: "Jesse Dan-Yusuf" }],
  creator: "Jesse Dan-Yusuf",
  publisher: "The Jesse Dan-Yusuf Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Jesse Dan-Yusuf",
    title: "Jesse Dan-Yusuf - Creator, Pastor & Entrepreneur",
    description: "Helping people find their purpose and fulfil their potential through content, communities, and resources.",
    images: [
      {
        url: "/images/hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Jesse Dan-Yusuf"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@jessedanyusuf",
    creator: "@jessedanyusuf",
    title: "Jesse Dan-Yusuf - Creator, Pastor & Entrepreneur",
    description: "Helping people find their purpose and fulfil their potential.",
    images: ["/images/hero-portrait.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    // Add your verification tokens here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl
  }
};

import { BackToTop } from "@/components/ui/back-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* JSON-LD Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jesse Dan-Yusuf",
              url: siteUrl,
              image: `${siteUrl}/images/hero-portrait.jpg`,
              sameAs: [
                "https://www.instagram.com/jessedanyusuf",
                "https://www.tiktok.com/@jessedanyusuf",
                "https://youtube.com/@jessedanyusuf",
                "https://twitter.com/jessedanyusuf",
                "https://linkedin.com/in/jessedanyusuf"
              ],
              jobTitle: "Creator, Pastor & Entrepreneur",
              description: "Creator, entrepreneur, and pastor committed to helping people find their purpose and fulfil their potential.",
              knowsAbout: [
                "Purpose-driven branding",
                "Creative entrepreneurship",
                "Faith-based leadership",
                "Personal development",
                "Community building"
              ]
            })
          }}
        />
        {/* JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Jesse Dan-Yusuf Co.",
              url: siteUrl,
              logo: `${siteUrl}/images/jessedanyusuf.svg`,
              founder: {
                "@type": "Person",
                name: "Jesse Dan-Yusuf"
              },
              sameAs: [
                "https://www.instagram.com/jessedanyusuf",
                "https://www.tiktok.com/@jessedanyusuf",
                "https://youtube.com/@jessedanyusuf",
                "https://twitter.com/jessedanyusuf",
                "https://linkedin.com/in/jessedanyusuf"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-black text-white flex flex-col">
        <main className="flex-grow">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
