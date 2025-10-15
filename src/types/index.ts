// Shared type definitions for the application

export interface BookItem {
  title: string;
  subtitle: string;
  description: string;
  releaseDate: string;
  link: string;
  linkText: string;
}

export interface CarouselItem {
  type: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
}

export interface MenuItem {
  label: string;
  href?: string;
  items?: SubMenuItem[];
}

export interface SubMenuItem {
  label: string;
  href: string;
}

