import { ProductsData } from "@/src/app/productsData";
import { Product } from "@/src/app/types";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const reponse = NextResponse.json(ProductsData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return reponse;
}

export async function POST(request: NextRequest) {
  const productData = (await request.json()) as Product;

  // await prisma.user.create({
  //   data: {
  //     name: productData.title,
  //     email: productData.slug,
  //     password: productData.categoryId,
  //   },
  // });

  ProductsData.push(productData);
  return NextResponse.json(ProductsData, {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
