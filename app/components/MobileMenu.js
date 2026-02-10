"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu({ close }) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/cart", label: "Cart" },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="bg-white w-64 h-full p-6 space-y-6">
        <button onClick={close} className="text-xl">
          ✕
        </button>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={`text-lg ${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
