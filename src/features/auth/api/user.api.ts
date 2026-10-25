import {  POST_API } from "@/src/lib/axios/client";

export async function createUser(email: string, password: string, name: string): Promise<void> {

  await POST_API("/users", { email, password, name });
}