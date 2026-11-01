import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
// import bcrypt from "bcrypt";
import { prisma } from "./lib/prisma";

async function getUser(email: string) {
  try {
    //const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    const user = await prisma.user.findMany({
      where: {
        email: email,
      },
    });

    return user[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.", { cause: error });
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
        }

        return null;
      },
    }),
  ],
});
