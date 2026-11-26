"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { searchProducts } from "@/lib/products";

interface SearchOffcanvasProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchOffcanvas({ open, onOpenChange }: SearchOffcanvasProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Search Products</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>

          <div className="mt-8 space-y-6">
            {results.length > 0 ? (
              <div className="grid gap-4">
                {results.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                {query ? "No results found" : "Start searching for products"}
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}