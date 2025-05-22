"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Types for our filters
export type ProductFilters = {
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  categories: string[];
  sort: string;
};

// Default price range for Nike products
const DEFAULT_PRICE_RANGE: [number, number] = [0, 300];

// Context type definition
type FilterContextType = {
  filters: ProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<ProductFilters>>;
  toggleSize: (size: string) => void;
  toggleColor: (color: string) => void;
  toggleCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSort: (sort: string) => void;
  resetFilters: () => void;
  isFilterActive: boolean;
};

// Create the context
const FilterContext = createContext<FilterContextType | null>(null);

// Initial filters state
const defaultFilters: ProductFilters = {
  sizes: [],
  colors: [],
  priceRange: DEFAULT_PRICE_RANGE,
  categories: [],
  sort: "featured",
};

// Provider component
export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<ProductFilters>(defaultFilters);

  // Helper function to toggle a filter value (add if not present, remove if present)
  const toggleFilterValue = (
    filterKey: keyof Pick<ProductFilters, "sizes" | "colors" | "categories">,
    value: string
  ) => {
    setFilters((prev) => {
      const currentValues = prev[filterKey];
      return {
        ...prev,
        [filterKey]: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  // Toggle functions for each filter type
  const toggleSize = (size: string) => toggleFilterValue("sizes", size);
  const toggleColor = (color: string) => toggleFilterValue("colors", color);
  const toggleCategory = (category: string) => toggleFilterValue("categories", category);

  // Set price range
  const setPriceRange = (range: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: range }));
  };

  // Set sort option
  const setSort = (sort: string) => {
    setFilters((prev) => ({ ...prev, sort }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  // Check if any filter is active
  const isFilterActive =
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.categories.length > 0 ||
    filters.priceRange[0] > DEFAULT_PRICE_RANGE[0] ||
    filters.priceRange[1] < DEFAULT_PRICE_RANGE[1] ||
    filters.sort !== "featured";

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        toggleSize,
        toggleColor,
        toggleCategory,
        setPriceRange,
        setSort,
        resetFilters,
        isFilterActive,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

// Custom hook to use the filter context
export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
}
