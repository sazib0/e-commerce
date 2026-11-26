"use client";

import { useStore } from "@/lib/store";
import { FavoritesHeader } from "./components/favorites-header";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import Image from "next/image";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useStore();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <FavoritesHeader />
        <EmptyState 
          title="No favorites yet" 
          description="Items you favorite will appear here" 
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FavoritesHeader />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {favorites.map((item) => (
          <div key={item.id} className="group relative bg-white rounded-lg shadow-sm p-4 transition-shadow hover:shadow-md">
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
              onClick={(e) => {
                e.preventDefault();
                removeFromFavorites(item.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Link href={`/product/${item.id}`}>
              <div className="relative h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-lg font-bold text-green-600">৳{item.price.toLocaleString()}</p>
              {item.status && (
                <p className="text-sm text-muted-foreground mt-2">{item.status}</p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}