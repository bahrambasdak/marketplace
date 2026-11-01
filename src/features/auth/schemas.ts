import z from "zod";

export const signInSchema = z.object({
  email: z.email("Enter a valid email addres").trim().toLowerCase(),
  password: z.string().min(1, "Enter your password").max(128),
  rememberMe: z.boolean().default(true),
  callbackUrl: z.string().optional(),
});

export type SignInInput = z.input<typeof signInSchema>;
