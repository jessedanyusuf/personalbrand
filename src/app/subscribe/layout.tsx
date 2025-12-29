import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe to Masterpiece Newsletter",
  description:
    "Join thousands of readers who receive weekly insights on purpose, creativity, and building meaningful work. Subscribe to Masterpiece by Jesse Dan-Yusuf.",
  openGraph: {
    title: "Subscribe to Masterpiece Newsletter | Jesse Dan-Yusuf",
    description:
      "A weekly newsletter on purpose, creativity, and building meaningful work that honors God and serves others.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscribe to Masterpiece Newsletter",
    description:
      "Join thousands of readers for weekly insights on purpose, creativity, and meaningful work.",
  },
};

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
