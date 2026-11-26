"use client";

import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  return (
    <Card className="p-4 space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider defaultValue={[0, 1000]} max={1000} step={10} />
      </div>

      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {["Vegetables", "Fruits", "Dairy", "Meat"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label htmlFor={category}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Availability</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="inStock" />
            <Label htmlFor="inStock">In Stock</Label>
          </div>
        </div>
      </div>
    </Card>
  );
}