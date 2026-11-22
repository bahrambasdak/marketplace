import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { auth } from "@/src/auth";
import { AddCategoryForm } from "@/src/features/categories/components/add-category-form";

export const metadata: Metadata = {
  title: "Add category | Marketplace",
};

export default async function NewCategoryPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  return <AddCategoryForm />;
}
