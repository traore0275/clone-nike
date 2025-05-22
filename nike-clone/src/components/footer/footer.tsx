"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-nike-black text-white">
      <div className="container-nike pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-medium text-base">Featured</h3>
            <ul className="space-y-3">
              {footerLinks.featured.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-nike-gray-300 text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="font-medium text-base">Shoes</h3>
            <ul className="space-y-3">
              {footerLinks.shoes.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-nike-gray-300 text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="font-medium text-base">Clothing</h3>
            <ul className="space-y-3">
              {footerLinks.clothing.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-nike-gray-300 text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="font-medium text-base">Kids</h3>
            <ul className="space-y-3">
              {footerLinks.kids.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-nike-gray-300 text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            {/* Empty column for desktop alignment */}
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-nike-gray-400/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FooterCollapsibleSection title="Resources" links={footerLinks.resources} />
            <FooterCollapsibleSection title="Help" links={footerLinks.help} />
            <FooterCollapsibleSection title="Company" links={footerLinks.company} />
            <FooterCollapsibleSection title="Promotions & Discounts" links={footerLinks.promotions} />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-nike-gray-400/30 pb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs text-nike-gray-300">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <span>© 2025 Nike, Inc. All Rights Reserved</span>
              <Link href="/guides" className="hover:text-white">Guides</Link>
              <Link href="/terms-of-sale" className="hover:text-white">Terms of Sale</Link>
              <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
              <Link href="/privacy-policy" className="hover:text-white">Nike Privacy Policy</Link>
            </div>
            <div className="flex items-center">
              <span className="mr-2">United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterCollapsibleSectionProps = {
  title: string;
  links: { name: string; href: string }[];
};

function FooterCollapsibleSection({ title, links }: FooterCollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <button
        className="flex justify-between items-center w-full font-medium text-base md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          size={20}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <h3 className="font-medium text-base hidden md:block">{title}</h3>
      <ul className={`space-y-3 ${isOpen ? "block" : "hidden md:block"}`}>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-nike-gray-300 text-sm hover:text-white">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
