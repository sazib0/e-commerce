"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { FilterOptions } from "../types";

interface FiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    maxDistance: 10,
    onlyAvailable: false,
    minRating: 4
  });

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="space-y-6 p-4 bg-card rounded-lg mb-6">
      <div className="space-y-2">
        <Label>Maximum Distance ({filters.maxDistance} km)</Label>
        <Slider
          value={[filters.maxDistance]}
          onValueChange={([value]) => handleFilterChange({ maxDistance: value })}
          max={20}
          step={0.5}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="available"
          checked={filters.onlyAvailable}
          onCheckedChange={(checked) => handleFilterChange({ onlyAvailable: checked })}
        />
        <Label htmlFor="available">Show only available farms</Label>
      </div>

      <div className="space-y-2">
        <Label>Minimum Rating ({filters.minRating})</Label>
        <Slider
          value={[filters.minRating]}
          onValueChange={([value]) => handleFilterChange({ minRating: value })}
          min={1}
          max={5}
          step={0.1}
        />
      </div>
    </div>
  );
}