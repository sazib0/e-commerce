import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    title: "Organic Vegetables Pack",
    price: 850,
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499",
    status: "In Stock",
    description: "Fresh, organic vegetables sourced directly from local farmers. Perfect for a healthy lifestyle.",
    category: "Vegetables",
    rating: 4.5,
    reviews: 128,
    seller: {
      name: "Green Valley Farm",
      rating: 4.8
    },
    specifications: {
      "Weight": "5 kg",
      "Packaging": "Eco-friendly",
      "Storage": "Keep refrigerated",
      "Shelf Life": "5-7 days"
    },
    relatedProducts: ["2", "3"]
  }
];

export function getProduct(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
}