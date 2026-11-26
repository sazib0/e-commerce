"use client";

import React, { createContext, useContext } from "react";

interface TabsContextType {
  value: string;
  setValue: (value: string) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context;
}