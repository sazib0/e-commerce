"use client";

import { useStore } from "@/lib/store";
import { CartItem } from "./components/cart-item";
import { CartSummary } from "./components/cart-summary";
import { EmptyState } from "@/components/empty-state";

export default function CartPage() {
  const { cartItems } = useStore();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <EmptyState 
          title="Your cart is empty" 
          description="Add items to your cart to see them here"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}