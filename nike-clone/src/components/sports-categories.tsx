"use client";

import Link from "next/link";
import Image from "next/image";

interface SportsCategoriesProps {
  categories: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
  }[];
}

export function SportsCategories({ categories }: SportsCategoriesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-8">
      {categories.map((category) => (
        <Link key={category.id} href={category.link} className="block group">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <p className="mt-1 underline">{category.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
