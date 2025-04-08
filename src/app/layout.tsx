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
        
      </body>
    </html>
  );
}
