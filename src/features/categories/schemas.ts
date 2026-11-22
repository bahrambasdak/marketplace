import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Enter a category name.")
    .max(80, "Use 80 characters or fewer."),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Enter a category slug.")
    .max(80, "Use 80 characters or fewer.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Use lowercase letters, numbers, and hyphens only.",
    ),
  description: z
    .string()
    .trim()
    .max(500, "Use 500 characters or fewer.")
    .transform((value) => value || undefined)
    .optional(),
});

export type CreateCategoryInput = z.input<typeof createCategorySchema>;
