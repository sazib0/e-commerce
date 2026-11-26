"use client";

import { ProductCard } from "@/components/product-card";
import { EmptyState } from "@/components/empty-state";
import type { Product } from "@/types/product";

interface SearchResultsProps {
  results: Product[];
  query: string;
}

export function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <EmptyState 
        title="No results found" 
        description={`We couldn't find any products matching "${query}"`} 
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {results.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}