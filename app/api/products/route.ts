import { ProductsData } from "@/app/productsData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // const product = await prisma.product.findUnique({
  //     where: {
  //         id: id,
  //     },
  // });

  const reponse = NextResponse.json(ProductsData, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return reponse;
}

export async function POST(request: NextRequest) {
  const productData = await request.json();
  //   const product = prisma.product.create({
  //     data: data,
  //   });
  // console.log(productData,'qqqqqqqqqqqqqqqqq');
  
  ProductsData.push(productData);
  return NextResponse.json(ProductsData, {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
