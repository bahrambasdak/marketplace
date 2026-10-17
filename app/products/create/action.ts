"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(
  _previousState: { title: string; description: string; price: number },
  formData: FormData,
) {
  // Implementation for creating a new product
  const data = Object.fromEntries(formData);
  console.log(data);

  
  const response = await fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({...data,id:Math.floor(Math.random() * 1000)}),
    });

    if (response.ok) {
      revalidatePath("/products");
      redirect("/products");
    }

    return response.json();
}