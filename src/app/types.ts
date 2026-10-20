export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  createAt: Date;
  updateAt: Date;
  products: Product[];
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  productId: string;
  product: Product;
}

export interface ProductVariant {
  id: string;
  title: string;
  sku: string;
  productId: string;
  listings: Listing[];
}
export interface Listing {
  id: string;
  price: number;
  productVariantId: string;
  quantity: number;
  stock: number;
  isActive: boolean;
  storeId: string;
  variantId: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  images: ProductImage[];
  variants: ProductVariant[];
}
