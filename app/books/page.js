"use client";

import Image from "next/image";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../context/cartcontext";
import BookData from "../components/data/BookData.json";
import { useState } from "react";

export default function BooksPage() {
  const { addToCart, decreaseQty, cartItems } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const filteredBooks = BookData.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "all" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Books</h1>

  
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full md:w-2/3 px-4 py-2 border rounded-lg"
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          <option value="self-help">Self Help</option>
          <option value="fiction">Fiction</option>
          <option value="bestsellers">Bestsellers</option>
          <option value="under-149">Under 149</option>
          <option value="hindi">Hindi</option>
          <option value="combo">Combo Sets</option>
        </select>
      </div>

      {/* BOOK GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => {
    
          const itemInCart = cartItems.find((item) => item.id === book.id);

          return (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-52">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-1">
                <h3 className="font-semibold line-clamp-1">{book.title}</h3>

                <p className="text-sm text-gray-500">{book.author}</p>

                {/* STAR RATING */}
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(book.rating)
                          ? "opacity-100"
                          : "opacity-30"
                      }
                    />
                  ))}
                </div>

                <p className="font-bold text-lg mt-2">₹{book.price}</p>

                {/* ADD to cart(INCREASE / DECREASE )*/}
                <div className="flex items-center justify-between mt-3">
                  {!itemInCart ? (
                    <button
                      onClick={() => addToCart(book.id)}
                      className="flex items-center gap-2 text-sm px-3 py-1.5 border rounded-lg hover:bg-black hover:text-white transition"
                    >
                      <FaShoppingCart size={14} />
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-1.5">
                      <button
                        onClick={() => decreaseQty(book.id)}
                        className="text-lg font-bold px-2 hover:text-red-600"
                      >
                        −
                      </button>

                      <span className="font-semibold">{itemInCart.qty}</span>

                      <button
                        onClick={() => addToCart(book.id)}
                        className="text-lg font-bold px-2 hover:text-green-600"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
