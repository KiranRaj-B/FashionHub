export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'men' | 'women' | 'kids' | 'summer-essentials' | 'workwear-edit' | 'party-collection' | 'sustainable-fashion' | 'featured';
  sizes: string[];
  colors: string[];
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}