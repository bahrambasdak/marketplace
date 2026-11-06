import z from "zod";

import { createUserSchema } from "@/src/features/users/schemas";

export const credentialsSchema = createUserSchema.pick({
  email: true,
  password: true,
});

export const signInSchema = credentialsSchema.extend({
  rememberMe: z.boolean().default(true),
  callbackUrl: z.string().optional(),
});

export const signUpSchema = createUserSchema;

export type SignInInput = z.input<typeof signInSchema>;
export type SignUpInput = z.input<typeof signUpSchema>;
