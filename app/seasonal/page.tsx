"use client";

import React from 'react';
import { SeasonalHeader } from "./components/seasonal-header";
import { SeasonalProducts } from "./components/seasonal-products";

export default function SeasonalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SeasonalHeader />
      <SeasonalProducts />
    </div>
  );
}