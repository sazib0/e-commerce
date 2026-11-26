export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  status: string;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  total: number;
}