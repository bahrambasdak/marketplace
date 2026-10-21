import { Product } from "@/src/app/types";
import { apiClient } from "@/src/lib/axios/client";

export async function getProducts(): Promise<Product[]> {
  const response = await apiClient.get("/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.data;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await apiClient.get(`/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.data;
}



