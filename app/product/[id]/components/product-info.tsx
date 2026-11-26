"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import { useStore } from "@/lib/store";
import type { Product } from "@/types/product";

export function ProductInfo({ 
  id,
  title, 
  price, 
  status, 
  description, 
  rating, 
  reviews,
  seller,
  specifications,
  ...rest
}: Product) {
  const { addToCart, addToFavorites } = useStore();
  const product = { id, title, price, status, description, rating, reviews, seller, specifications, ...rest };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart", {
      description: `${title} has been added to your cart`,
      action: {
        label: "View Cart",
        onClick: () => window.location.href = "/cart"
      },
    });
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
    toast.success("Added to favorites", {
      description: `${title} has been added to your favorites`
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1">{rating}</span>
            <span className="text-muted-foreground ml-1">({reviews} reviews)</span>
          </div>
          <Badge variant="secondary">{status}</Badge>
        </div>
      </div>

      <div>
        <span className="text-2xl font-bold text-green-600">৳{price}</span>
      </div>

      <p className="text-muted-foreground">{description}</p>

      <div>
        <h3 className="font-semibold mb-2">Seller Information</h3>
        <div className="flex items-center space-x-2">
          <span>{seller.name}</span>
          <span className="text-muted-foreground">•</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1">{seller.rating}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Specifications</h3>
        <dl className="grid grid-cols-2 gap-4">
          {Object.entries(specifications).map(([key, value]) => (
            <div key={key}>
              <dt className="text-muted-foreground">{key}</dt>
              <dd className="font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex space-x-4">
        <Button className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon" onClick={handleAddToFavorites}>
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}