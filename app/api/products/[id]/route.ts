import { ProductsData } from "@/app/productsData";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // const product = await prisma.product.findUnique({
  //     where: {
  //         id: id,
  //     },
  // });

  const { id } = await params;


  const reponse = NextResponse.json(ProductsData.find((p) => p.id === parseInt(id)), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return reponse;
}


