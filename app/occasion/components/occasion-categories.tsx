import { Card } from "@/components/ui/card";
import { Gift, Cake, Heart, Users } from "lucide-react";

const categories = [
  {
    icon: <Gift className="w-8 h-8 text-blue-500" />,
    title: "Festivals",
    description: "Traditional delicacies for festive seasons"
  },
  {
    icon: <Cake className="w-8 h-8 text-pink-500" />,
    title: "Celebrations",
    description: "Perfect for birthdays and anniversaries"
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Special Days",
    description: "Make your special days memorable"
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Gatherings",
    description: "Ideal for family and friend gatherings"
  }
];

export function OccasionCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card key={category.title} className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            {category.icon}
            <h3 className="font-semibold text-lg">{category.title}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}