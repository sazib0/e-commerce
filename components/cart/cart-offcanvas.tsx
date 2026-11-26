"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import { CartItem } from "./cart-item";
import { CartSummary } from "./cart-summary";
import { EmptyState } from "@/components/empty-state";
import Link from "next/link";

interface CartOffcanvasProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartOffcanvas({ open, onOpenChange }: CartOffcanvasProps) {
  const { cartItems } = useStore();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          {cartItems.length === 0 ? (
            <EmptyState 
              title="Your cart is empty" 
              description="Add items to your cart to see them here"
            />
          ) : (
            <div className="flex flex-col h-[calc(100vh-8rem)]">
              <div className="flex-1 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
              
              <div className="pt-4 border-t">
                <CartSummary />
                <Link href="/checkout">
                  <Button className="w-full mt-4" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}