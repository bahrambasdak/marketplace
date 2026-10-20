import { Product } from "@prisma/client";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`http://localhost:3000/api/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}



