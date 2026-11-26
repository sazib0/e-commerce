"use client";

import { useStore } from "@/lib/store";

export function CartSummary() {
  const { getCartTotal } = useStore();
  const subtotal = getCartTotal();
  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span>৳{subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span>৳{shipping}</span>
        </div>
        <div className="flex justify-between font-semibold pt-2 border-t">
          <span>Total</span>
          <span>৳{total}</span>
        </div>
      </div>
    </div>
  );
}