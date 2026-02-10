"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // temporary cart count (replace with context later)
  const cartCount = 0;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/Contact", label: "Contact" },
    { href: "/carts", label: "Cart" },
  ];

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <p className=" bg-green-500 font-semibold text-sm flex items-center justify-center p-4">
        *WEEKEND OFFER* - GET FLAT 15% OFF ON PREPAID ORDERS ABOVE Rs.699.
      </p>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          📚 BookStore
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}


        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
          <IoMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && <MobileMenu close={() => setOpen(false)} />}
    </header>
  );
}
