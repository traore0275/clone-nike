import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingBag } from "lucide-react";

export function MainNav() {
  return (
    <div className="bg-white py-4 border-b border-gray-200">
      <div className="container-nike flex justify-between items-center">
        {/* Nike Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="https://ext.same-assets.com/1781292662/260646423.svg"
              alt="Nike"
              width={60}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Main Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 mx-4 flex-grow justify-center">
          <NavLink href="/new" label="New" hasDropdown />
          <NavLink href="/men" label="Men" hasDropdown />
          <NavLink href="/women" label="Women" hasDropdown />
          <NavLink href="/kids" label="Kids" hasDropdown />
          <NavLink href="/jordan" label="Jordan" hasDropdown />
          <NavLink href="/sport" label="Sport" hasDropdown />
        </div>

        {/* Search, Favorites, Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <div className="relative rounded-full bg-nike-gray-100 flex items-center pl-3 pr-10 py-2 w-40 lg:w-56">
              <Search size={20} className="text-gray-500 absolute left-3" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none pl-7 w-full text-sm"
              />
            </div>
          </div>
          <button className="p-2 hover:opacity-70">
            <Heart size={24} />
          </button>
          <button className="p-2 hover:opacity-70">
            <ShoppingBag size={24} />
          </button>
          <button className="lg:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

function NavLink({ href, label, hasDropdown = false }: NavLinkProps) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="font-medium text-base hover:opacity-70 transition-opacity py-1 flex items-center"
      >
        {label}
        {hasDropdown && (
          <span className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        )}
      </Link>
    </div>
  );
}
