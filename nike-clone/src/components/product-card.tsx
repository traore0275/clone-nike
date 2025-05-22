"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Product } from "@/lib/data";
import { useWishlist } from "@/context/wishlist-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    e.stopPropagation();

    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="relative group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square bg-nike-gray-100 mb-3 overflow-hidden">
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 rounded-sm z-10">
              Just In
            </span>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <button
            onClick={handleWishlistClick}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={isFavorite ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
          >
            <Heart
              size={18}
              className={isFavorite ? "fill-black text-black" : "text-black"}
            />
          </button>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-base">{product.name}</h3>
            <p className="text-nike-gray-400 text-sm">{product.category}</p>
            {product.colors && (
              <p className="text-xs text-nike-gray-400 mt-1">{product.colors} Colors</p>
            )}
          </div>
          <div className="text-right">
            <p className="font-medium">
              ${product.price.toFixed(2)}
            </p>
            {product.oldPrice && (
              <p className="text-nike-gray-400 line-through text-sm">
                ${product.oldPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
