"use client";
import { createContext, useContext, useState } from "react";
import BookData from "../components/data/BookData.json";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({}); // { id: qty }

  const addToCart = (bookId) => {
    setCart((prev) => ({
      ...prev,
      [bookId]: (prev[bookId] || 0) + 1,
    }));
  };

  const decreaseQty = (bookId) => {
    setCart((prev) => {
      if (!prev[bookId]) return prev;

      const updated = { ...prev };

      if (updated[bookId] === 1) {
        delete updated[bookId]; // remove item
      } else {
        updated[bookId] -= 1;
      }

      return updated;
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[bookId];
      return updated;
    });
  };

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const book = BookData.find(
      (b) => b.id === Number(id)
    );

    return {
      ...book,
      qty,
    };
  });

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
