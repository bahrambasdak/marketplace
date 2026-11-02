import { prisma } from "@/src/lib/prisma";

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}