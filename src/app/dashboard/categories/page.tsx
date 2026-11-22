import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { getCategories } from "@/src/features/categories/actions";
import { auth } from "@/src/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Categories | Marketplace",
  description: "Browse marketplace products by category.",
};

export default async function CategoriesPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  let categories;

  try {
    categories = await getCategories();
  } catch (error) {
    console.error("Failed to load categories", error);
    return (
      <section className="catalog-page" aria-labelledby="categories-title">
        <header className="catalog-heading">
          <p className="catalog-eyebrow">Marketplace collection</p>
          <h1 id="categories-title">Categories</h1>
        </header>
        <div className="catalog-state catalog-state-error" role="alert">
          <h2>Categories could not be loaded</h2>
          <p>Please try again in a moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="catalog-page" aria-labelledby="categories-title">
      <header className="catalog-heading flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="catalog-eyebrow">Marketplace collection</p>
          <h1 id="categories-title">Browse categories</h1>
          <p>
            Find products grouped by the collection they belong to.
          </p>
        </div>
        <Link
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90"
          href="/dashboard/categories/new"
        >
          <Plus className="size-4" aria-hidden="true" />
          Add category
        </Link>
      </header>

      {categories.length === 0 ? (
        <div className="catalog-state">
          <h2>No categories yet</h2>
          <p>Categories will appear here when they are added.</p>
        </div>
      ) : (
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              className="category-card"
              href={`/dashboard/categories/${category.slug}`}
              key={category.id}
            >
              <span className="category-card-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{category.name}</h2>
                {category.description ? (
                  <p>{category.description}</p>
                ) : (
                  <p>Explore products in this category.</p>
                )}
              </div>
              <span className="category-card-meta">
                {category._count.products}{" "}
                {category._count.products === 1 ? "product" : "products"}
                <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
