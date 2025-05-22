"use client";

import Link from "next/link";
import Image from "next/image";

interface FeaturedSectionProps {
  sections: {
    id: string;
    athlete: string;
    title: string;
    image: string;
    buttonText: string;
    buttonLink: string;
  }[];
}

export function FeaturedSections({ sections }: FeaturedSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
      {sections.map((section) => (
        <div key={section.id} className="relative h-[500px] overflow-hidden">
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white">
            <span className="text-lg font-medium">{section.athlete}</span>
            <h2 className="text-3xl font-nike-futura font-bold mb-6">{section.title}</h2>
            <Link href={section.buttonLink}>
              <button className="nike-button bg-white text-black hover:bg-gray-200">
                {section.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
