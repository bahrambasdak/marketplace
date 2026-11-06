"use server"

import { auth } from "@/src/auth";
import { prisma } from "@/src/lib/prisma";
import { createUserSchema } from "./schemas";
import { createUser } from "./service";

export async function getUsers() {
  const session = await auth();
  const email = session?.user?.email;

  if (!email) {
    throw new Error("Authentication is required to read user data.");
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user ? [user] : [];
}

export async function addUser(formData: FormData) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Authentication is required to add a user.");
  }

  const parsedInput = createUserSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedInput.success) {
    throw new Error("Enter valid account details.");
  }

  await createUser(parsedInput.data);
}
