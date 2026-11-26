"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, X } from "lucide-react";
import Image from "next/image";
import { useStore } from "@/lib/store";
import { toast } from "sonner";
import type { Product } from "@/types/product";

interface ProductDetailsOffcanvasProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailsOffcanvas({ product, open, onOpenChange }: ProductDetailsOffcanvasProps) {
  const { addToCart, addToFavorites } = useStore();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart", {
      description: `${product.title} has been added to your cart`,
      action: {
        label: "View Cart",
        onClick: () => window.location.href = "/cart"
      },
    });
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
    toast.success("Added to favorites", {
      description: `${product.title} has been added to your favorites`
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-screen w-screen p-0 bg-background">
        <div className="h-full overflow-y-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative h-[500px] md:h-screen">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
              {product.status && (
                <Badge 
                  className="absolute top-4 left-4"
                  variant="secondary"
                >
                  {product.status}
                </Badge>
              )}
            </div>

            <div className="p-6 md:p-10 space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                {product.rating && product.reviews && (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1">{product.rating}</span>
                      <span className="text-muted-foreground ml-1">({product.reviews} reviews)</span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <span className="text-3xl font-bold text-green-600">৳{product.price}</span>
              </div>

              {product.description && (
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              )}

              {product.seller && (
                <div>
                  <h3 className="font-semibold mb-2">Seller Information</h3>
                  <div className="flex items-center space-x-2">
                    <span>{product.seller.name}</span>
                    {product.seller.rating && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1">{product.seller.rating}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Specifications</h3>
                  <dl className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-muted-foreground">{key}</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="flex space-x-4 pt-4">
                <Button className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" onClick={handleAddToFavorites}>
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}