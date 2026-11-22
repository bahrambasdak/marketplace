"use server";

import "server-only";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@/src/auth";
import { prisma } from "@/src/lib/prisma";
import { createCategorySchema } from "./schemas";

export async function getCategories() {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: {
        select: { products: true },
      },
    },
  });
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: { slug },
    include: {
      products: {
        orderBy: { title: "asc" },
        include: {
          images: {
            take: 1,
            orderBy: { createAt: "asc" },
          },
        },
      },
    },
  });
}

export async function createCategory(formData: FormData) {
  const session = await auth();
  if (!session?.user) {
    return { ok: false as const, error: "Authentication is required." };
  }

  const parsedInput = createCategorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
  });

  if (!parsedInput.success) {
    return {
      ok: false as const,
      error:
        parsedInput.error.issues[0]?.message ??
        "Enter valid category details.",
    };
  }

  try {
    const category = await prisma.category.create({
      data: parsedInput.data,
      select: { slug: true },
    });

    revalidatePath("/categories");
    revalidatePath("/dashboard/categories");
    revalidatePath(`/dashboard/categories/${category.slug}`);

    return { ok: true as const, slug: category.slug };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        ok: false as const,
        error: "A category with this slug already exists.",
      };
    }

    console.error("Failed to create category", error);
    return {
      ok: false as const,
      error: "The category could not be created. Please try again.",
    };
  }
}
