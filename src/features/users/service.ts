import "server-only";

import { prisma } from "@/src/lib/prisma";
import { hashPassword } from "@/src/lib/password";
import type { CreateUserInput } from "./schemas";

export async function createUser(input: CreateUserInput) {
  const password = await hashPassword(input.password);

  return prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      password,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}
