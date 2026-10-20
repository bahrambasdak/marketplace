import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  categoryId: z.string().min(1, { message: "Category ID is required" }),
});
