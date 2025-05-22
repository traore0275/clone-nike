"use client";

import { useState } from "react";
import { useFilters } from "@/context/filter-context";
import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-high-low", label: "Price: High-Low" },
  { value: "price-low-high", label: "Price: Low-High" },
];

export function SortOptions() {
  const { filters, setSort } = useFilters();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSort(value);
    setIsOpen(false);
  };

  const currentOption = SORT_OPTIONS.find(option => option.value === filters.sort);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-sm font-medium border rounded-full px-4 py-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Sort By: {currentOption?.label || "Featured"}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                filters.sort === option.value ? "font-medium" : ""
              }`}
            >
              {option.value === filters.sort && <span className="mr-2">✓</span>}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
