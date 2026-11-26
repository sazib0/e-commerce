"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useStore } from "@/lib/store";

export function CartSummary() {
  const { cartItems, getCartTotal } = useStore();
  const subtotal = getCartTotal();
  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>৳{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>৳{shipping}</span>
        </div>
        <div className="flex justify-between font-semibold pt-2 border-t">
          <span>Total</span>
          <span>৳{total}</span>
        </div>
      </div>
      <Link href="/checkout">
        <Button className="w-full" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </Button>
      </Link>
    </Card>
  );
}