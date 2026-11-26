"use client";

import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/products";
import { SearchFilters } from "./components/search-filters";
import { SearchResults } from "./components/search-results";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchProducts(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <SearchFilters onFilterChange={() => {}} />
        </div>
        <div className="md:col-span-3">
          <SearchResults results={results} query={query} />
        </div>
      </div>
    </div>
  );
}