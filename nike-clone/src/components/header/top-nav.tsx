import Link from "next/link";
import Image from "next/image";

export function TopNav() {
  return (
    <div className="bg-nike-gray-100 py-2 text-xs">
      <div className="container-nike flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="https://www.nike.com/jordan" className="nike-text-link">
            <Image
              src="https://ext.same-assets.com/1781292662/3783633550.svg"
              alt="Jordan"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://www.nike.com/w/converse-akmjx" className="nike-text-link">
            <Image
              src="https://ext.same-assets.com/1781292662/2563901416.svg"
              alt="Converse"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-[11px] font-medium">
          <Link href="/stores" className="nike-text-link">
            Find a Store
          </Link>
          <div className="relative group">
            <Link href="/help" className="nike-text-link flex items-center">
              Help
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
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
            </Link>
            <div className="hidden group-hover:block absolute right-0 z-50 mt-2 w-48 bg-white shadow-lg rounded-sm p-2">
              <div className="py-1">
                <Link href="/orders" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Order Status
                </Link>
                <Link href="/help/shipping" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Shipping & Delivery
                </Link>
                <Link href="/help/returns" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Returns
                </Link>
                <Link href="/help/cancellation" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Order Cancellation
                </Link>
                <Link href="/help/sizing" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Size Charts
                </Link>
                <Link href="/help/contact" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Contact Us
                </Link>
                <Link href="/membership" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Membership
                </Link>
                <Link href="/promo" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Promotions & Discounts
                </Link>
                <Link href="/product-advice" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Product Advice
                </Link>
                <Link href="#site-feedback" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Send Us Feedback
                </Link>
              </div>
            </div>
          </div>
          <Link href="/membership" className="nike-text-link">
            Join Us
          </Link>
          <Link href="/login" className="nike-text-link">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
