import type { Metadata } from "next";

/** Search and social sharing details shared by every page in the editorial site. */
export const SITE_URL = "https://jessedanyusuf.com";
export const SITE_NAME = "Jesse Dan-Yusuf";
export const TAGLINE = "I help people find their story in God's story.";
export const HOME_TITLE = "Jesse Dan-Yusuf | Pastor, Creator & Entrepreneur";
export const HOME_DESCRIPTION =
  "Jesse Dan-Yusuf helps people find their story in God's story. Lead Pastor of One City Church in Abuja, leading the creative studio Fyreworks, and writing Masterpiece: ideas for becoming who God made you to be.";

/** 1200×630 share card used by Facebook, LinkedIn, WhatsApp, X, iMessage and Slack previews. */
export const OG_IMAGE = {
  url: "/images/og-jesse-dan-yusuf.jpg",
  width: 1200,
  height: 630,
  alt: "Jesse Dan-Yusuf: I help people find their story in God's story.",
  type: "image/jpeg",
};

export const TWITTER_HANDLE = "@jessedanyusuf";

export const SAME_AS = [
  "https://www.instagram.com/jessedanyusuf",
  "https://www.tiktok.com/@jessedanyusuf",
  "https://www.youtube.com/@jessedanyusuf",
  "https://twitter.com/jessedanyusuf",
  "https://www.linkedin.com/in/jessedanyusuf",
];

/**
 * Full metadata for one page. Next replaces (rather than merges) a parent's openGraph and twitter objects,
 * so every page restates the share image and handles here instead of relying on the root layout.
 */
export function pageMeta({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : HOME_TITLE;
  return {
    ...(title ? { title } : { title: { absolute: HOME_TITLE } }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: fullTitle,
      description,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}
