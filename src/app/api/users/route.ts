

import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST( request :NextRequest) {
  const { email, password, name } = await request.json();
  console.log(email,'llllllllllll');
  

//   if (email !== "admin" || password !== "admin") {
//     return NextResponse.json(
//       { message: "Invalid credentials" },
//       { status: 401 },
//     );
//   }

  prisma.user.create({
    data: {
      email: email,
      password: password,
      name: name,
    },
  });

  const response = NextResponse.json(
    { message: "Login successful", user: { id: "user123", name: name } },
    { status: 200 },
  );

  return response;
}