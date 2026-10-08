import type { Metadata, Viewport } from "next";
import { HOME_DESCRIPTION, HOME_TITLE, OG_IMAGE, SAME_AS, SITE_NAME, SITE_URL, TAGLINE, TWITTER_HANDLE } from "@/lib/seo";
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

const siteUrl = SITE_URL;

// Site-wide defaults. Pages set their own title, description, canonical URL and share card through pageMeta();
// older pages without their own metadata fall back to these (the canonical URL is left per page on purpose).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Jesse Dan-Yusuf",
    "Masterpiece",
    "One City Church Abuja",
    "Fyreworks",
    "Campfyre",
    "pastor",
    "creator",
    "entrepreneur",
    "faith and creativity",
    "calling",
    "Christian leadership",
    "Abuja",
    "Nigeria",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: "The Jesse Dan-Yusuf Co.",
  category: "faith",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
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
        {/* Structured data for search engines: Jesse, the places he works, and the company behind the site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#jesse`,
                  name: "Jesse Dan-Yusuf",
                  url: siteUrl,
                  image: `${siteUrl}${OG_IMAGE.url}`,
                  description: TAGLINE,
                  jobTitle: ["Lead Pastor", "Creator", "Entrepreneur"],
                  worksFor: [
                    { "@type": "Church", name: "One City Church Abuja", url: "https://www.onecityabuja.com" },
                    { "@type": "Organization", name: "Fyreworks", url: "https://www.fyreworks.co" },
                  ],
                  address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
                  knowsAbout: ["Faith", "Creativity", "Calling", "Leadership", "Storytelling", "Personal brand", "Meaningful work"],
                  sameAs: SAME_AS,
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: SITE_NAME,
                  description: TAGLINE,
                  publisher: { "@id": `${siteUrl}/#company` },
                  inLanguage: "en",
                },
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#company`,
                  name: "The Jesse Dan-Yusuf Co.",
                  url: siteUrl,
                  logo: `${siteUrl}/icon.png`,
                  founder: { "@id": `${siteUrl}/#jesse` },
                  sameAs: SAME_AS,
                },
              ],
            }),
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
