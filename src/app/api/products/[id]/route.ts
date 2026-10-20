import { ProductsData } from "@/src/app/productsData";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const product = ProductsData.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const reponse = NextResponse.json(product, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return reponse;
}
