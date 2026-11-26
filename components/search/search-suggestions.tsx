"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Search, TrendingUp } from "lucide-react";

const recentSearches = ["organic vegetables", "fresh milk", "seasonal fruits"];
const trendingSearches = ["grass-fed beef", "farm eggs", "organic honey"];

export function SearchSuggestions() {
  return (
    <Card className="absolute top-full left-0 right-0 mt-2 p-4 z-50 shadow-lg">
      <div className="space-y-6">
        {/* Recent Searches */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Recent Searches
          </h3>
          <div className="space-y-2">
            {recentSearches.map((search) => (
              <Button
                key={search}
                variant="ghost"
                className="w-full justify-start text-left"
              >
                <Search className="w-4 h-4 mr-2" />
                {search}
              </Button>
            ))}
          </div>
        </div>

        {/* Trending Searches */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending Searches
          </h3>
          <div className="space-y-2">
            {trendingSearches.map((search) => (
              <Button
                key={search}
                variant="ghost"
                className="w-full justify-start text-left"
              >
                <Search className="w-4 h-4 mr-2" />
                {search}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}