"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface FilterState {
  priceRange: [number, number];
  categories: string[];
  ratings: number[];
  availability: string[];
  origins: string[];
  sortBy: string;
}

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

const categories = [
  "Vegetables",
  "Fruits",
  "Dairy",
  "Meat",
  "Poultry",
  "Grains",
  "Organic",
  "Seasonal"
];

const availabilityOptions = [
  "In Stock",
  "Pre-order",
  "Coming Soon"
];

const origins = [
  "Local Farm",
  "Imported",
  "Organic Certified",
  "Fair Trade"
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" }
];

export function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000],
    categories: [],
    ratings: [],
    availability: [],
    origins: [],
    sortBy: "popular"
  });

  const [expanded, setExpanded] = useState({
    categories: true,
    ratings: true,
    availability: true,
    origins: true
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const toggleFilter = (type: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const clearFilters = () => {
    const defaultFilters: FilterState = {
      priceRange: [0, 10000],
      categories: [],
      ratings: [],
      availability: [],
      origins: [],
      sortBy: "popular"
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.categories.map(category => (
          <Badge key={category} variant="secondary" className="flex items-center gap-1">
            {category}
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => handleFilterChange({
                categories: filters.categories.filter(c => c !== category)
              })}
            />
          </Badge>
        ))}
        {filters.priceRange[0] > 0 || filters.priceRange[1] < 10000 && (
          <Badge variant="secondary">
            ৳{filters.priceRange[0]} - ৳{filters.priceRange[1]}
          </Badge>
        )}
      </div>

      <Card className="p-4">
        {/* Sort Options */}
        <div className="mb-6">
          <Label>Sort By</Label>
          <select
            className="w-full mt-2 p-2 border rounded-md"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <Label>Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ৳{filters.priceRange[0]} - ৳{filters.priceRange[1]}
            </span>
          </div>
          <Slider
            value={filters.priceRange}
            min={0}
            max={10000}
            step={100}
            onValueChange={(value) => handleFilterChange({ priceRange: value as [number, number] })}
            className="mt-2"
          />
          <div className="flex gap-4 mt-4">
            <div>
              <Label>Min</Label>
              <Input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => handleFilterChange({
                  priceRange: [Number(e.target.value), filters.priceRange[1]]
                })}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Max</Label>
              <Input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange({
                  priceRange: [filters.priceRange[0], Number(e.target.value)]
                })}
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={() => toggleFilter('categories')}
          >
            <Label>Categories</Label>
            <Button variant="ghost" size="sm">
              {expanded.categories ? "Hide" : "Show"}
            </Button>
          </div>
          {expanded.categories && (
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) => {
                      const newCategories = checked
                        ? [...filters.categories, category]
                        : filters.categories.filter(c => c !== category);
                      handleFilterChange({ categories: newCategories });
                    }}
                  />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Ratings */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={() => toggleFilter('ratings')}
          >
            <Label>Ratings</Label>
            <Button variant="ghost" size="sm">
              {expanded.ratings ? "Hide" : "Show"}
            </Button>
          </div>
          {expanded.ratings && (
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={filters.ratings.includes(rating)}
                    onCheckedChange={(checked) => {
                      const newRatings = checked
                        ? [...filters.ratings, rating]
                        : filters.ratings.filter(r => r !== rating);
                      handleFilterChange({ ratings: newRatings });
                    }}
                  />
                  <Label htmlFor={`rating-${rating}`} className="flex items-center">
                    {Array(rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-1">& Up</span>
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={() => toggleFilter('availability')}
          >
            <Label>Availability</Label>
            <Button variant="ghost" size="sm">
              {expanded.availability ? "Hide" : "Show"}
            </Button>
          </div>
          {expanded.availability && (
            <div className="space-y-2">
              {availabilityOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={filters.availability.includes(option)}
                    onCheckedChange={(checked) => {
                      const newAvailability = checked
                        ? [...filters.availability, option]
                        : filters.availability.filter(a => a !== option);
                      handleFilterChange({ availability: newAvailability });
                    }}
                  />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Origins */}
        <div className="mb-6">
          <div 
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={() => toggleFilter('origins')}
          >
            <Label>Origins</Label>
            <Button variant="ghost" size="sm">
              {expanded.origins ? "Hide" : "Show"}
            </Button>
          </div>
          {expanded.origins && (
            <div className="space-y-2">
              {origins.map((origin) => (
                <div key={origin} className="flex items-center space-x-2">
                  <Checkbox
                    id={origin}
                    checked={filters.origins.includes(origin)}
                    onCheckedChange={(checked) => {
                      const newOrigins = checked
                        ? [...filters.origins, origin]
                        : filters.origins.filter(o => o !== origin);
                      handleFilterChange({ origins: newOrigins });
                    }}
                  />
                  <Label htmlFor={origin}>{origin}</Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Clear Filters */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      </Card>
    </div>
  );
}