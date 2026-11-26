"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { toast } from "sonner";
import { useStore } from "@/lib/store";
import { ProductDetailsOffcanvas } from "./product/product-details-offcanvas";
import type { Product } from "@/types/product";

interface ProductCardProps extends Partial<Product> {
  id: string;
  image: string;
  title: string;
  price: number;
  status?: string;
}

export function ProductCard({ id, image, title, price, status, ...rest }: ProductCardProps) {
  const { addToCart } = useStore();
  const [showDetails, setShowDetails] = useState(false);
  const product = { id, image, title, price, status, ...rest } as Product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening details when clicking the button
    addToCart(product);
    toast.success("Added to cart", {
      description: `${title} has been added to your cart`,
      action: {
        label: "View Cart",
        onClick: () => window.location.href = "/cart"
      },
    });
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-sm p-4 transition-shadow hover:shadow-md cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative h-48 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
          {status && (
            <Badge className="absolute top-2 left-2" variant="secondary">
              {status}
            </Badge>
          )}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-lg font-bold text-green-600">৳{price.toLocaleString()}</p>
        <Button 
          className="w-full mt-4" 
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>

      <ProductDetailsOffcanvas
        product={product}
        open={showDetails}
        onOpenChange={setShowDetails}
      />
    </>
  );
}