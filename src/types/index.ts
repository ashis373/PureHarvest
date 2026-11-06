export type CategoryId = 'ghee-oil' | 'spices' | 'vegetables';

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  category: CategoryId;
  categoryName: string;
  unit: string;
  price: number;
  originalPrice?: number;
  description: string;
  inStock: boolean;
  image: string;
  badge?: string;
  purityHighlight: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  category: CategoryId | 'all';
  comment: string;
  date: string;
  verifiedBuyer: boolean;
}
