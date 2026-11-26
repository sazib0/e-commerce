"use client";

import { useStore } from "@/lib/store";
import { CompareTable } from "./components/compare-table";
import { EmptyState } from "@/components/empty-state";

export default function ComparePage() {
  const { compareItems } = useStore();

  if (compareItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Compare Products</h1>
        <EmptyState 
          title="No items to compare" 
          description="Add items to compare to see them here" 
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Compare Products</h1>
      <CompareTable items={compareItems} />
    </div>
  );
}