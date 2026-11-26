import { NearbyHeader } from "./components/nearby-header";
import { FarmersGrid } from "./components/farmers-grid";

export default function NearbyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <NearbyHeader />
      <FarmersGrid />
    </div>
  );
}