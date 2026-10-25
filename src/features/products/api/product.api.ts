import { Product } from "@/src/app/types";
import { apiClient } from "@/src/lib/axios/client";

export async function getProducts(): Promise<Product[]> {
  const response = await apiClient.get("/products");
  return response.data;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
}



