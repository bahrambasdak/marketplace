'use server';

import { Prisma } from "@prisma/client";
import { signIn } from '@/src/auth';
import { AuthError } from 'next-auth';
import { signUpSchema, type SignInInput } from './schemas';
import { createUser } from "../users/service";

export async function signInAction(
  _prevState: SignInInput,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signUpAction(formData: FormData) {
  const parsedInput = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedInput.success) {
    return {
      error:
        parsedInput.error.issues[0]?.message ??
        "Enter valid account details and try again.",
    };
  }

  try {
    await createUser(parsedInput.data);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        error:
          "We could not create an account with those details. If you already have an account, sign in.",
      };
    }
    throw error;
  }

  try {
    await signIn("credentials", {
      email: parsedInput.data.email,
      password: parsedInput.data.password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error:
          "Your account was created, but we could not sign you in automatically. Please sign in.",
      };
    }
    throw error;
  }
}