"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Carousel } from "./carousel";
import { CarouselItem } from "@/types";

interface FixedCarouselProps {
  items: CarouselItem[];
  title: string;
  autoplayInterval?: number;
}

export function FixedCarousel({ items, title, autoplayInterval = 6000 }: FixedCarouselProps) {
  const renderCarouselItem = (item: CarouselItem) => (
    <div className="bg-black border border-white/10 p-8 rounded-xl min-h-[400px] h-full transition-all duration-500 hover:border-white/20">
      <div className="flex flex-col h-full">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">{item.type}</p>
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <p className="text-gray-400 mb-6">{item.description}</p>
        </div>
        <div className="mt-auto">
          <Link
            href={item.link}
            className="inline-flex items-center text-white font-medium group"
          >
            {item.linkText} <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
      </div>
      <Carousel
        items={items}
        autoplayInterval={autoplayInterval}
        renderItem={renderCarouselItem}
      />
    </div>
  );
}
