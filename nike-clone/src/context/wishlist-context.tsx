"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/lib/data";

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("nike-wishlist");
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage", error);
      }
    }
    setInitialized(true);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (initialized) {
      localStorage.setItem("nike-wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, initialized]);

  // Add a product to wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  // Remove a product from wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((product) => product.id !== productId));
  };

  // Check if a product is in the wishlist
  const isInWishlist = (productId: string) => {
    return wishlist.some((product) => product.id === productId);
  };

  // Clear the entire wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook to use the wishlist context
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
