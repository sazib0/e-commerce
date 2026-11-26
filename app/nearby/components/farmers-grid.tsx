"use client";

import { useState } from "react";
import { FarmerCard } from "./farmer-card";
import { Filters } from "./filters";
import { farmers } from "../data/farmers";
import type { FilterOptions, Farmer } from "../types";

export function FarmersGrid() {
  const [filters, setFilters] = useState<FilterOptions>({
    maxDistance: 10,
    onlyAvailable: false,
    minRating: 4
  });

  const filteredFarmers = farmers.filter((farmer: Farmer) => {
    if (filters.onlyAvailable && !farmer.available) return false;
    if (farmer.distance > filters.maxDistance) return false;
    if (farmer.rating < filters.minRating) return false;
    return true;
  });

  return (
    <div>
      <Filters onFilterChange={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFarmers.map((farmer) => (
          <FarmerCard key={farmer.id} {...farmer} />
        ))}
      </div>
    </div>
  );
}