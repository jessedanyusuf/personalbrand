import { BookItem } from '@/types';

export const featuredBook: BookItem = {
  title: "MASTERPIECE",
  subtitle: "Masterpiece: Find Your Story In God's Story",
  description: "Discover how your unique journey fits into God's grand narrative and unleash your divine potential. This transformative book will help you see yourself as the masterpiece God created you to be.",
  releaseDate: "January 31, 2026",
  link: "/books/masterpiece",
  linkText: "Pre-order now"
};

// Extended content for the featured section
export const featuredBookExtended = {
  ...featuredBook,
  tagline: "New Book Coming January 2026",
  fullDescription: "Discover how your unique journey fits into God's grand narrative and unleash your divine potential. This transformative book will help you see yourself as the masterpiece God created you to be. Through powerful stories, biblical insights, and practical guidance, you'll learn to embrace your calling and live out the purpose God has designed for you.",
  highlights: [
    "Understand your place in God's story",
    "Embrace your unique calling and gifts",
    "Transform your perspective on purpose",
    "Live as the masterpiece you were created to be"
  ]
};

