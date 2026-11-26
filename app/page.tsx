"use client";

import React from 'react';
import { HeroSection } from "@/components/hero-section";
import { CategoryMenu } from "@/components/category-menu";
import { FeaturesSection } from "@/components/features-section";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1527792492728-08d07d011113",
    title: "Grass-Fed Cow",
    price: 90000,
    status: "Pre-booking"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499",
    title: "Organic Vegetables Pack",
    price: 850,
    status: "In Stock"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    title: "Fresh Farm Milk",
    price: 120,
    status: "In Stock"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    title: "Farm Fresh Eggs",
    price: 180,
    status: "Limited Stock"
  }
];

const flashDeals = [
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c",
    title: "Organic Honey",
    price: 450,
    originalPrice: 600,
    status: "Flash Sale"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1596591868231-05e093c3d4f1",
    title: "Free Range Chicken",
    price: 320,
    originalPrice: 400,
    status: "Flash Sale"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CategoryMenu />
      
      {/* Flash Deals Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">⚡ Flash Deals</h2>
            <p className="text-muted-foreground">Special offers for limited time</p>
          </div>
          <Button variant="ghost">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-4">
            
            <h2 className="text-2xl font-bold">🌱 Seasonal</h2>
            <Button variant="ghost">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

        
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
          
          
      </section>

      <FeaturesSection />

      {/* Farm Partners Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Farm Partners</h2>
          <p className="text-muted-foreground">Trusted farmers delivering quality products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
              name: "Green Valley Farm",
              location: "Dhaka",
              rating: 4.8
            },
            {
              image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
              name: "Fresh Fields",
              location: "Chittagong",
              rating: 4.7
            },
            {
              image: "https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4",
              name: "Riverside Ranch",
              location: "Sylhet",
              rating: 4.9
            }
          ].map((farm) => (
            <div key={farm.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src={farm.image}
                  alt={farm.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{farm.name}</h3>
                <p className="text-muted-foreground">{farm.location}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{farm.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}