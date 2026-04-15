export type LengthVariant = 'Maxi' | 'Mini';

export type Product = {
  id: string;
  slug: string;
  name: string;
  tag: string;
  description: string;
  category: string;
  prices: Partial<Record<LengthVariant, number>>;
  colors: string[];
  sizes: string[];
  images: { src: string; alt: string }[];
  details: string[];
  materials: string;
  sizingNote: string;
  relatedProductId: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  length?: LengthVariant;
  color?: string;
};
