export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  status: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  seller: {
    name: string;
    rating: number;
  };
  specifications: {
    [key: string]: string;
  };
  relatedProducts: string[];
}