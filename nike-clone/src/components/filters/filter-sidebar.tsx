"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/carousel";
import { useFilters } from "@/context/filter-context";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Available shoe sizes
const SIZES = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14"];

// Available colors with names and hex values
const COLORS = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Grey", value: "#808080" },
  { name: "Red", value: "#FF0000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Green", value: "#00FF00" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Orange", value: "#FFA500" },
  { name: "Purple", value: "#800080" },
  { name: "Pink", value: "#FFC0CB" },
];

// Product categories
const CATEGORIES = [
  "Lifestyle",
  "Running",
  "Basketball",
  "Football",
  "Training & Gym",
  "Skateboarding",
  "Jordan",
  "Golf",
  "Tennis",
  "Walking",
];

export function FilterSidebar() {
  const { filters, toggleSize, toggleColor, toggleCategory, setPriceRange, resetFilters, isFilterActive } = useFilters();

  return (
    <>
      {/* Mobile Filter Sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex items-center gap-1 text-sm font-medium border rounded-full px-4 py-1.5">
              <span>Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              {isFilterActive && (
                <span className="w-2 h-2 rounded-full bg-black ml-1"></span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b">
              <h2 className="text-lg font-bold">Filter</h2>
              {isFilterActive && (
                <button
                  onClick={resetFilters}
                  className="text-sm underline"
                >
                  Clear All
                </button>
              )}
            </div>
            <div className="py-4">
              <FilterAccordion title="Size">
                <div className="grid grid-cols-3 gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`border rounded-md p-2 text-sm ${
                        filters.sizes.includes(size)
                          ? "border-black bg-black text-white"
                          : "hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </FilterAccordion>

              <FilterAccordion title="Color">
                <div className="flex flex-wrap gap-2">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={`flex flex-col items-center justify-center gap-1 ${
                        filters.colors.includes(color.name) ? "scale-110" : ""
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${
                          filters.colors.includes(color.name) ? "ring-2 ring-black ring-offset-2" : ""
                        }`}
                        style={{
                          backgroundColor: color.value,
                          border: color.value === "#FFFFFF" ? "1px solid #e5e5e5" : "none"
                        }}
                      ></div>
                      <span className="text-xs">{color.name}</span>
                    </button>
                  ))}
                </div>
              </FilterAccordion>

              <FilterAccordion title="Price">
                <div className="px-1 py-4">
                  <PriceRangeSlider
                    min={0}
                    max={300}
                    value={filters.priceRange}
                    onChange={setPriceRange}
                  />
                </div>
              </FilterAccordion>

              <FilterAccordion title="Category">
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mobile-category-${category}`}
                        checked={filters.categories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 rounded-sm border-gray-300 text-black focus:ring-black"
                      />
                      <label
                        htmlFor={`mobile-category-${category}`}
                        className="ml-2 text-sm"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </FilterAccordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filter Sidebar */}
      <div className="hidden lg:block w-64 pr-8">
        <div className="sticky top-40">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Filter</h2>
            {isFilterActive && (
              <button
                onClick={resetFilters}
                className="text-sm underline"
              >
                Clear All
              </button>
            )}
          </div>

          <FilterAccordion title="Size">
            <div className="grid grid-cols-3 gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`border rounded-md p-2 text-sm ${
                    filters.sizes.includes(size)
                      ? "border-black bg-black text-white"
                      : "hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion title="Color">
            <div className="flex flex-wrap gap-2">
              {COLORS.map((color) => (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  className={`flex flex-col items-center justify-center gap-1 ${
                    filters.colors.includes(color.name) ? "scale-110" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${
                      filters.colors.includes(color.name) ? "ring-2 ring-black ring-offset-2" : ""
                    }`}
                    style={{
                      backgroundColor: color.value,
                      border: color.value === "#FFFFFF" ? "1px solid #e5e5e5" : "none"
                    }}
                  ></div>
                  <span className="text-xs">{color.name}</span>
                </button>
              ))}
            </div>
          </FilterAccordion>

          <FilterAccordion title="Price">
            <div className="px-1 py-4">
              <PriceRangeSlider
                min={0}
                max={300}
                value={filters.priceRange}
                onChange={setPriceRange}
              />
            </div>
          </FilterAccordion>

          <FilterAccordion title="Category">
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="w-4 h-4 rounded-sm border-gray-300 text-black focus:ring-black"
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </FilterAccordion>
        </div>
      </div>
    </>
  );
}

// Price Range Slider component
function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  const [localValue, setLocalValue] = useState<[number, number]>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const newValue = parseInt(e.target.value);
    const updatedValue: [number, number] = [...localValue] as [number, number];
    updatedValue[index] = newValue;

    // Ensure min is not greater than max
    if (index === 0 && newValue > localValue[1]) {
      updatedValue[0] = localValue[1];
    } else if (index === 1 && newValue < localValue[0]) {
      updatedValue[1] = localValue[0];
    }

    setLocalValue(updatedValue);
  };

  const handleBlur = () => {
    onChange(localValue);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="bg-gray-100 rounded px-3 py-1">
          <span className="text-xs">$</span>
          <input
            type="number"
            min={min}
            max={localValue[1]}
            value={localValue[0]}
            onChange={(e) => handleChange(e, 0)}
            onBlur={handleBlur}
            className="w-12 bg-transparent border-none text-sm outline-none"
          />
        </div>
        <div className="bg-gray-100 rounded px-3 py-1">
          <span className="text-xs">$</span>
          <input
            type="number"
            min={localValue[0]}
            max={max}
            value={localValue[1]}
            onChange={(e) => handleChange(e, 1)}
            onBlur={handleBlur}
            className="w-12 bg-transparent border-none text-sm outline-none"
          />
        </div>
      </div>

      <div className="relative h-1 bg-gray-200 rounded-full">
        <div
          className="absolute h-1 bg-black rounded-full"
          style={{
            left: `${(localValue[0] / max) * 100}%`,
            width: `${((localValue[1] - localValue[0]) / max) * 100}%`
          }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          value={localValue[0]}
          onChange={(e) => handleChange(e, 0)}
          onMouseUp={handleBlur}
          onTouchEnd={handleBlur}
          className="absolute w-full h-1 opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={localValue[1]}
          onChange={(e) => handleChange(e, 1)}
          onMouseUp={handleBlur}
          onTouchEnd={handleBlur}
          className="absolute w-full h-1 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

// Accordion component for filters
function FilterAccordion({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-3 border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium"
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}
