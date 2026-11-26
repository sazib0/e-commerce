"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { useTabsContext } from "./context";

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { value: selectedValue } = useTabsContext();
  if (selectedValue !== value) return null;

  return <div className={cn("mt-2", className)}>{children}</div>;
}