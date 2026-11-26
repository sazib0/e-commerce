"use client";

import { ProductCard } from "@/components/product-card";
import { featuredProducts } from "../data/products";

export function FeaturedOccasions() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}