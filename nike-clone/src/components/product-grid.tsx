"use client";

import { ProductCard } from "./product-card";
import { Product } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  title?: string;
  showScrollButtons?: boolean;
}

export function ProductGrid({ products, title, showScrollButtons = false }: ProductGridProps) {
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
      {title && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-nike-futura font-bold">{title}</h2>
          {showScrollButtons && (
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
          )}
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className={`grid gap-4 ${
          showScrollButtons
            ? "flex overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4 pb-4 snap-x"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={showScrollButtons ? "min-w-[280px] sm:min-w-[340px] flex-shrink-0 snap-start" : ""}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
