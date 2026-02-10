"use client";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import BookData from "./../data/BookData.json";
import { useCart } from "../../context/cartcontext";

export default function NewArrivals() {
  const { addToCart } = useCart();

  return (
    <section className="py-14 px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-10">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Let’s Discover
        </p>
        <h2 className="text-3xl font-bold mt-2">
          New Arrivals
        </h2>
      </div>

      {/* BOOK GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {BookData.slice(0, 6).map((book) => {
          const discount = Math.round(
            ((book.originalPrice - book.price) /
              book.originalPrice) *
              100
          );

          return (
            <div

              key={book.id}
              className="group text-center"
            >
              {/* IMAGE */}
              <div className="relative h-56 bg-gray-100 rounded-lg overflow-hidden">
                {discount > 0 && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    -{discount}%
                  </span>
                )}

                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* CONTENT */}
              <h3 className="mt-3 text-sm font-medium line-clamp-2">
                {book.title}
              </h3>

              <p className="text-xs text-gray-500">
                {book.author}
              </p>

            </div>
          );
        })}
      </div>

      {/* VIEW ALL */}
      <div className="text-center mt-10">
        <Link href="/books">
        <button className="bg-blue-700 text-white px-8 py-2 rounded-full hover:bg-blue-800">
          View All
        </button>
        </Link>
      </div>
    </section>
  );
}
