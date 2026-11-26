import { OffersHeader } from "./components/offers-header";
import { OffersGrid } from "./components/offers-grid";

export default function OffersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <OffersHeader />
      <OffersGrid />
    </div>
  );
}