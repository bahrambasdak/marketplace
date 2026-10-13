import { prisma } from "@/lib/prisma";

export function GET({ id }: { id: string }) {

    const product = prisma.product.findUnique({
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
