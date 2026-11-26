"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cartItems: CartItem[];
  favorites: Product[];
  compareItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  getCartTotal: () => number;
  clearCart: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      favorites: [],
      compareItems: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find(item => item.id === product.id);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            };
          }
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }]
          };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId)
        })),
      updateCartQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map(item =>
            item.id === productId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ).filter(item => item.quantity > 0)
        })),
      addToFavorites: (product) =>
        set((state) => ({
          favorites: [...state.favorites, product]
        })),
      removeFromFavorites: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== productId)
        })),
      addToCompare: (product) =>
        set((state) => ({
          compareItems: [...state.compareItems, product]
        })),
      removeFromCompare: (productId) =>
        set((state) => ({
          compareItems: state.compareItems.filter((item) => item.id !== productId)
        })),
      getCartTotal: () => {
        const { cartItems } = get();
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      clearCart: () => set({ cartItems: [] })
    }),
    {
      name: 'shop-storage',
    }
  )
);