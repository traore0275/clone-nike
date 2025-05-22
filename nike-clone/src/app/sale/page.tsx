"use client";

import { useState, useEffect } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { FilterProvider, useFilters } from "@/context/filter-context";
import { FilterSidebar } from "@/components/filters/filter-sidebar";
import { SortOptions } from "@/components/filters/sort-options";
import { filterProducts, sortProducts } from "@/lib/filter-utils";

// Get only sale products (those with oldPrice)
const saleProducts = products.filter(product => product.oldPrice !== undefined);

function SaleItemsContent() {
  const { filters } = useFilters();
  const [filteredProducts, setFilteredProducts] = useState(saleProducts);

  // Apply filters and sorting whenever filters change
  useEffect(() => {
    let result = filterProducts(saleProducts, filters);
    result = sortProducts(result, filters.sort);
    setFilteredProducts(result);
  }, [filters]);

  return (
    <div className="container-nike py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-nike-futura font-bold text-red-600">Sale</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium hidden md:inline">
            {filteredProducts.length} Products
          </span>
          <SortOptions />
        </div>
      </div>

      <div className="flex gap-8">
        <FilterSidebar />
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-nike-gray-400 text-center mb-6">
                Sorry, no products match your selected filters. Try changing your filter options.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SaleItemsPage() {
  return (
    <FilterProvider>
      <SaleItemsContent />
    </FilterProvider>
  );
}
