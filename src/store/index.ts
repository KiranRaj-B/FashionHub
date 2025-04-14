import { create } from 'zustand';
import { CartItem, User, Product } from '../types';

interface StoreState {
  cart: CartItem[];
  user: User | null;
  isCartOpen: boolean;
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  setUser: (user: User | null) => void;
  toggleCart: () => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  user: null,
  isCartOpen: false,
  addToCart: (product, size, color, quantity) =>
    set((state) => {
      const itemId = `${product.id}-${size}-${color}`;
      const existingItem = state.cart.find(
        (item) => `${item.product.id}-${item.size}-${item.color}` === itemId
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            `${item.product.id}-${item.size}-${item.color}` === itemId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { product, size, color, quantity, id: itemId }],
      };
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => `${item.product.id}-${item.size}-${item.color}` !== itemId
      ),
    })),
  updateQuantity: (itemId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        `${item.product.id}-${item.size}-${item.color}` === itemId
          ? { ...item, quantity }
          : item
      ),
    })),
  setUser: (user) => set({ user }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  clearCart: () => set({ cart: [] }),
}));