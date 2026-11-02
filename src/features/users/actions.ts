"use server"

import { prisma } from "@/src/lib/prisma";

export async function getUsers() {
  if(prisma.user === undefined) {
    throw new Error("Prisma client is not initialized");
  }
  const users = await prisma.user.findMany();
  return users;
}

export async function addUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}
