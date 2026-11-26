"use client";

import { Leaf, Milk, Carrot, Apple, Beef } from "lucide-react";

const categories = [
  { 
    icon: <Leaf className="w-6 h-6 text-emerald-500" />,
    name: "Mixed Groceries",
    description: "Everyday essentials"
  },
  {
    icon: <Milk className="w-6 h-6 text-blue-500" />,
    name: "Milk & Dairy",
    description: "Creamy nutrition"
  },
  {
    icon: <Carrot className="w-6 h-6 text-orange-500" />,
    name: "Vegetables",
    description: "Fresh, healthy picks"
  },
  {
    icon: <Apple className="w-6 h-6 text-red-500" />,
    name: "Fruits",
    description: "Fresh & seasonal"
  },
  {
    icon: <Beef className="w-6 h-6 text-rose-500" />,
    name: "Meat",
    description: "Quality cuts & poultry"
  }
];

export function CategoryMenu() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center min-w-[120px] p-4 text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
              {category.icon}
            </div>
            <h3 className="font-medium text-sm mb-1">{category.name}</h3>
            <p className="text-xs text-muted-foreground">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}