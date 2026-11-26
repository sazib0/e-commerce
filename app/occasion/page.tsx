import { OccasionHeader } from "./components/occasion-header";
import { OccasionCategories } from "./components/occasion-categories";
import { FeaturedOccasions } from "./components/featured-occasions";

export default function OccasionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <OccasionHeader />
      <OccasionCategories />
      <FeaturedOccasions />
    </div>
  );
}