"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";
import type { Product } from "@/types/product";

interface CompareTableProps {
  items: Product[];
}

export function CompareTable({ items }: CompareTableProps) {
  const { removeFromCompare, addToCart } = useStore();

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Product</th>
            {items.map((item) => (
              <th key={item.id} className="p-4 min-w-[300px]">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removeFromCompare(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium">Price</td>
            {items.map((item) => (
              <td key={item.id} className="p-4">
                <span className="text-lg font-semibold text-green-600">
                  ৳{item.price}
                </span>
              </td>
            ))}
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium">Rating</td>
            {items.map((item) => (
              <td key={item.id} className="p-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{item.rating}</span>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4"></td>
            {items.map((item) => (
              <td key={item.id} className="p-4">
                <Button className="w-full" onClick={() => addToCart(item)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}