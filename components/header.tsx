"use client";

import { ShoppingCart, Heart, ArrowLeftRight, Search } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "./search/search-bar";
import { SearchOffcanvas } from "./search/search-offcanvas";
import { CartOffcanvas } from "./cart/cart-offcanvas";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { Badge } from "./ui/badge";

export function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, favorites, compareItems } = useStore();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">e-commerce</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-medium hover:text-primary">Home</Link>
            <Link href="/bazaar" className="font-medium hover:text-primary">All</Link>
            <Link href="/seasonal" className="font-medium hover:text-primary">Season</Link>
            <Link href="/occasion" className="font-medium hover:text-primary">Occasion</Link>
            <Link href="/offers" className="font-medium hover:text-primary">Offers</Link>
            <Link href="/nearby" className="font-medium hover:text-primary">Nearby</Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowMobileSearch(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Link href="/favorites">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    variant="destructive"
                  >
                    {favorites.length}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setShowCart(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  variant="destructive"
                >
                  {cartItems.length}
                </Badge>
              )}
            </Button>

            <Link href="/compare">
              <Button variant="ghost" size="icon" className="relative">
                <ArrowLeftRight className="h-5 w-5" />
                {compareItems.length > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    variant="destructive"
                  >
                    {compareItems.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/login" className="text-primary hover:underline">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>

      <SearchOffcanvas 
        open={showMobileSearch} 
        onOpenChange={setShowMobileSearch}
      />

      <CartOffcanvas
        open={showCart}
        onOpenChange={setShowCart}
      />
    </header>
  );
}