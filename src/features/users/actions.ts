import { prisma } from "@/src/lib/prisma";

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function addUser(name: string, email: string, password: string) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      
    },
  });
  return user;
}