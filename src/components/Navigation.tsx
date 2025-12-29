"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = ({ className = "h-36 w-full" }) => (
  <img
    src="/images/logo/stricklandPressure.svg"
    alt="Strickland Pressure Washing Services"
    className={className}
  />
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="cursor-pointer w-80">
            <Logo className="h-36 w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === page.path
                    ? "text-red-600 font-semibold"
                    : "text-gray-600 hover:text-red-600"
                }`}
              >
                {page.name}
              </Link>
            ))}
            <div className="text-center">
              <p className="text-xs text-gray-600">
                CALL NOW FOR YOUR FREE QUOTE
              </p>
              <a
                href="tel:503-555-7673"
                className="text-red-600 font-bold text-lg hover:text-red-700"
              >
                (503) 555-7673
              </a>
            </div>
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Request A Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  pathname === page.path
                    ? "bg-red-50 text-red-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {page.name}
              </Link>
            ))}
            <a
              href="tel:503-555-7673"
              className="block w-full text-left px-3 py-2 text-red-600 font-bold"
            >
              Call (503) 555-7673
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-red-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-700 mt-2 text-center"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
