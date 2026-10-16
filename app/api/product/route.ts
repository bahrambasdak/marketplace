import { prisma } from "@/lib/prisma";

export async function GET({ id }: { id: string }) {

    const product = await prisma.product.findUnique({
        where: {
            id: id,
        },
    });
  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}


export async function POST ({ request }: { request: Request }) {
    const data = await request.json();
    const product = prisma.product.create({
        data: data
    });
    return new Response(JSON.stringify(product), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

