"use server";

import { SignInput, signInSchema } from "./schemas";
const GENERIC_AUTH_ERROR =
  "We could not complete that request. Check your details and try again."
export type AuthActionResult =
  | { ok: true; redirectTo: string }
  | {
      ok: false
      message: string
      code?: "SERVICE_UNAVAILABLE"
      fieldErrors?: Record<string, string[] | undefined>
    }

export async function signInAction(input:SignInput):Promise<AuthActionResult> {
    const parsed = signInSchema.safeParse(input)
      if (!parsed.success) {
    return {
      ok: false,
      message: GENERIC_AUTH_ERROR,
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }


  if (!parsed.data.email || !parsed.data.password) {
    throw new Error("Email, password, and name are required.");
  }

  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email:parsed.data.email,
      password:parsed.data.password,
    }),
  });
  return res.json()
  
}
