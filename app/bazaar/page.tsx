"use client";

import React, { useState } from 'react';
import { ProductCard } from "@/components/product-card";
import { Filters, FilterState } from "./components/filters";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";

// Extended product data with more fields
const products = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1527792492728-08d07d011113",
    title: "Grass-Fed Cow",
    price: 90000,
    status: "Pre-booking",
    rating: 4.5,
    reviews: 128,
    category: "Meat",
    origin: "Local Farm",
    seller: {
      name: "Green Valley Farm",
      rating: 4.8
    }
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499",
    title: "Organic Vegetables Pack",
    price: 850,
    status: "In Stock",
    rating: 4.2,
    reviews: 95,
    category: "Vegetables",
    origin: "Organic Certified",
    seller: {
      name: "Fresh Fields",
      rating: 4.6
    }
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919",
    title: "Fresh Milk",
    price: 120,
    status: "In Stock",
    rating: 4.8,
    reviews: 256,
    category: "Dairy",
    origin: "Local Farm",
    seller: {
      name: "Dairy Delight",
      rating: 4.9
    }
  }
];

export default function BazaarPage() {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000],
    categories: [],
    ratings: [],
    availability: [],
    origins: [],
    sortBy: "popular"
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Price Range
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Categories
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }

    // Ratings
    if (filters.ratings.length > 0 && !filters.ratings.some(rating => product.rating >= rating)) {
      return false;
    }

    // Availability
    if (filters.availability.length > 0 && !filters.availability.includes(product.status)) {
      return false;
    }

    // Origins
    if (filters.origins.length > 0 && !filters.origins.includes(product.origin)) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return -1; // Assuming newest first
      default:
        return 0; // Default to original order
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Bazaar</h1>
        <div className="flex items-center gap-4">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <Filters onFilterChange={setFilters} />
        </div>
        <div className="md:col-span-3">
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products match your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}