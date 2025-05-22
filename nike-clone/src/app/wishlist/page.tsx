"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useWishlist } from "@/context/wishlist-context";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/data";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  // Get recommended products (products not in wishlist)
  const recommendedProducts = products
    .filter((product) => !wishlist.some((item) => item.id === product.id))
    .slice(0, 4);

  return (
    <div className="container-nike py-8">
      <h1 className="text-3xl font-nike-futura font-bold mb-6">Favorites</h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
          <p className="text-nike-gray-400 mb-6 max-w-md">
            Save your favorite Nike products by clicking the heart icon on product pages.
          </p>
          <Link href="/products">
            <button className="nike-button px-8 py-3">Shop Now</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-nike-gray-400">{wishlist.length} Items</p>
            <button
              onClick={clearWishlist}
              className="text-sm underline hover:text-nike-gray-400"
            >
              Remove All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {wishlist.map((product) => (
              <div key={product.id} className="relative group">
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-square bg-nike-gray-100 mb-3 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-base">{product.name}</h3>
                      <p className="text-nike-gray-400 text-sm">{product.category}</p>
                    </div>
                    <p className="font-medium">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Remove ${product.name} from wishlist`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {recommendedProducts.length > 0 && (
        <ProductGrid
          products={recommendedProducts}
          title="You Might Also Like"
          showScrollButtons={true}
        />
      )}
    </div>
  );
}
