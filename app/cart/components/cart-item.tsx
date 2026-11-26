"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";
import type { Product } from "@/types/product";

interface CartItemProps extends Product {
  quantity: number;
}

export function CartItem({ id, title, price, image, quantity }: CartItemProps) {
  const { updateCartQuantity, removeFromCart } = useStore();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="relative w-24 h-24">
        <Image src={image} alt={title} fill className="object-cover rounded-md" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-lg font-semibold text-green-600">৳{price}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => updateCartQuantity(id, quantity - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => updateCartQuantity(id, quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-destructive"
        onClick={() => removeFromCart(id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}