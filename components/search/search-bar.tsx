"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchOffcanvas } from "./search-offcanvas";

export function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon"         onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5" />
      </Button>

      <SearchOffcanvas 
        open={showSearch} 
        onOpenChange={setShowSearch}
      />
    </>
  );
}