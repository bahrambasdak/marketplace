import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .pipe(z.email("Enter a valid email address"))
  .transform((email) => email.toLowerCase());

const passwordSchema = z
  .string()
  .min(8, "Use at least 8 characters.")
  .refine(
    (password) => new TextEncoder().encode(password).byteLength <= 72,
    "Use a password of 72 UTF-8 bytes or fewer.",
  );

export const createUserSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(80),
  email: emailSchema,
  password: passwordSchema,
});

export type CreateUserInput = z.output<typeof createUserSchema>;
