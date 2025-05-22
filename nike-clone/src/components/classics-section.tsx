"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Category } from "@/lib/data";

interface ClassicsSectionProps {
  categories: Category[];
}

export function ClassicsSection({ categories }: ClassicsSectionProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-nike-futura font-bold">Shop The Classics</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4 pb-4 gap-4 snap-x"
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products/${category.slug}`}
            className="min-w-[140px] sm:min-w-[170px] flex-shrink-0 snap-start flex flex-col items-center group"
          >
            <div className="relative bg-nike-gray-100 w-full aspect-square rounded-sm overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="mt-2 text-center text-sm">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
