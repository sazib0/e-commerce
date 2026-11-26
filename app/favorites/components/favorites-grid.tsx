"use client";

import { ProductCard } from "@/components/product-card";
import { EmptyState } from "@/components/empty-state";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function FavoritesGrid() {
  const { favorites, removeFromFavorites } = useStore();

  if (favorites.length === 0) {
    return <EmptyState title="No favorites yet" description="Items you favorite will appear here" />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {favorites.map((item) => (
        <div key={item.id} className="relative group">
          <ProductCard {...item} />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => removeFromFavorites(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}