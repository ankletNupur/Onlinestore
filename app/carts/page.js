"use client";
import { useCart } from "../context/cartcontext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  // ✅ TOTAL AMOUNT CALCULATION
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ EMPTY CART CHECK
  if (cartItems.length === 0) {
    return <p className="p-4">Cart is empty 😶</p>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* CART ITEMS */}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-500">
              Qty: {item.qty}
            </p>
            <p className="font-bold">₹{item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      {/* TOTAL + PLACE ORDER */}
      <div className="mt-6 border-t pt-4 flex justify-between items-center">
        <p className="text-lg font-bold">
          Total: ₹{totalAmount}
        </p>

        <button
          onClick={() => alert("Order placed successfully 🎉")}
          className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-90"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
