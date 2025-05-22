"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSlide } from "@/lib/data";

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[50vh] md:h-[65vh] lg:h-[80vh]">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-nike-futura font-bold mb-2 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6">{slide.subtitle}</p>
                <Link href={slide.buttonLink}>
                  <button className="nike-button bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
