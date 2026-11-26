"use client";

import React from 'react';
import { ProductCard } from "@/components/product-card";
import { seasonalProducts } from "../data/products";

export function SeasonalProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {seasonalProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}