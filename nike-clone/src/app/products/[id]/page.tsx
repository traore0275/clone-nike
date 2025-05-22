"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { ProductGrid } from "@/components/product-grid";
import { useWishlist } from "@/context/wishlist-context";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isFavorite = product ? isInWishlist(product.id) : false;

  const handleWishlistToggle = () => {
    if (!product) return;

    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (!product) {
    notFound();
  }

  // Get similar products (excluding current product)
  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Size options mock
  const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];

  return (
    <div className="container-nike py-8">
      <div className="mb-4">
        <Link href="/products" className="text-sm text-nike-gray-400 hover:text-black">
          &lt; Back to All Shoes
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="bg-nike-gray-100 rounded-md aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-white text-black text-xs px-2 py-1 rounded-sm">
              Just In
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-nike-futura mb-1">{product.name}</h1>
            <p className="text-lg">{product.category}</p>
            <p className="text-xl font-medium mt-4">${product.price.toFixed(2)}</p>
            {product.oldPrice && (
              <p className="text-nike-gray-400 line-through">${product.oldPrice.toFixed(2)}</p>
            )}
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Select Size</h3>
              <button className="text-sm underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size.toString())}
                  className={`border rounded-md py-3 hover:border-black transition-colors ${
                    selectedSize === size.toString() ? "border-black" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {/* Size selection error message */}
            <div className="h-6 mt-2">
              {selectedSize === null && (
                <p className="text-red-500 text-sm hidden" id="size-error">
                  Please select a size.
                </p>
              )}
            </div>
          </div>

          {/* Add to Bag Button */}
          <div className="mt-auto space-y-4">
            <button
              className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-gray-800 transition-colors"
              onClick={() => {
                if (selectedSize === null) {
                  const errorElement = document.getElementById("size-error");
                  if (errorElement) errorElement.classList.remove("hidden");
                } else {
                  // Add to cart functionality will be implemented later
                  alert(`Added ${product.name} size ${selectedSize} to your bag!`);
                }
              }}
            >
              Add to Bag
            </button>
            <button
              className={`w-full border rounded-full py-4 font-medium transition-colors ${
                isFavorite
                  ? "bg-black text-white hover:bg-gray-800 border-black"
                  : "border-black hover:bg-gray-100"
              }`}
              onClick={handleWishlistToggle}
            >
              {isFavorite ? "Added to Favorites" : "Favorite"}
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-nike-gray-400 leading-relaxed">
              The {product.name} features durable construction and Nike technology for performance and comfort.
              Designed for everyday wear, these shoes blend style and function with their iconic look.
            </p>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <ProductGrid
          products={similarProducts}
          title="You Might Also Like"
          showScrollButtons={true}
        />
      )}
    </div>
  );
}
