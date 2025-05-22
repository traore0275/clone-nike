import { Product } from "./data";
import { ProductFilters } from "@/context/filter-context";

// Product color mapping (this would normally come from your product data)
const PRODUCT_COLORS: Record<string, string[]> = {
  "p1": ["Black", "White"],
  "p2": ["Blue", "Black", "Grey"],
  "p3": ["White", "Black"],
  "p4": ["White", "Black", "Red", "Blue"],
  "p5": ["Black", "Green", "Blue", "Red", "White"],
  "p6": ["Red", "Black", "White"],
  "p7": ["Purple", "Black"],
  "p8": ["Blue", "Black", "Grey", "Green", "White", "Red"],
  "p9": ["Pink", "Blue", "Grey", "Black"],
  "p10": ["Black", "Red", "Blue"],
  "p11": ["White", "Pink", "Purple"],
  "p12": ["Black"],
};

// Product size mapping (this would normally come from your product data)
const PRODUCT_SIZES: Record<string, string[]> = {
  "p1": ["6", "7", "8", "9", "10"],
  "p2": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "p3": ["7", "8", "9", "10", "11", "12"],
  "p4": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "p5": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "p6": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "p7": ["7", "8", "9", "10", "11", "12"],
  "p8": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "p9": ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7"],
  "p10": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "p11": ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
  "p12": ["7", "8", "9", "10", "11", "12"],
};

// Product category mapping
const PRODUCT_CATEGORIES: Record<string, string[]> = {
  "p1": ["Lifestyle", "Jordan"],
  "p2": ["Training & Gym"],
  "p3": ["Lifestyle"],
  "p4": ["Lifestyle"],
  "p5": ["Running", "Lifestyle"],
  "p6": ["Basketball", "Jordan"],
  "p7": ["Lifestyle"],
  "p8": ["Running"],
  "p9": ["Lifestyle"],
  "p10": ["Basketball"],
  "p11": ["Basketball"],
  "p12": ["Training & Gym"],
};

// Filter products based on the selected filters
export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  return products.filter((product) => {
    // Filter by price
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      const productSizes = PRODUCT_SIZES[product.id] || [];
      if (!filters.sizes.some(size => productSizes.includes(size))) {
        return false;
      }
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      const productColors = PRODUCT_COLORS[product.id] || [];
      if (!filters.colors.some(color => productColors.includes(color))) {
        return false;
      }
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      const productCategories = PRODUCT_CATEGORIES[product.id] || [];
      if (!filters.categories.some(category => productCategories.includes(category))) {
        return false;
      }
    }

    return true;
  });
}

// Sort products based on the selected sort option
export function sortProducts(products: Product[], sortOption: string): Product[] {
  const sortedProducts = [...products];

  switch (sortOption) {
    case "price-high-low":
      return sortedProducts.sort((a, b) => b.price - a.price);
    case "price-low-high":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "newest":
      return sortedProducts.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
    case "featured":
    default:
      return sortedProducts.sort((a, b) => (a.isFeatured === b.isFeatured) ? 0 : a.isFeatured ? -1 : 1);
  }
}
