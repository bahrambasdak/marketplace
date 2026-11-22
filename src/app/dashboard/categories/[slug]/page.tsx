import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PackageOpen } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/src/auth";
import { getCategoryBySlug } from "@/src/features/categories/actions";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const category = await getCategoryBySlug(slug);
    return {
      title: category
        ? `${category.name} | Marketplace`
        : "Category not found | Marketplace",
      description:
        category?.description ??
        (category ? `Browse products in ${category.name}.` : undefined),
    };
  } catch {
    return { title: "Category | Marketplace" };
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  const { slug } = await params;
  let category;

  try {
    category = await getCategoryBySlug(slug);
  } catch (error) {
    console.error("Failed to load category", { slug, error });
    return (
      <section className="catalog-page" aria-labelledby="category-title">
        <Link className="catalog-back-link" href="/dashboard/categories">
          <ArrowLeft aria-hidden="true" />
          All categories
        </Link>
        <header className="catalog-heading">
          <p className="catalog-eyebrow">Category</p>
          <h1 id="category-title">Category unavailable</h1>
        </header>
        <div className="catalog-state catalog-state-error" role="alert">
          <h2>Category could not be loaded</h2>
          <p>Please try again in a moment.</p>
        </div>
      </section>
    );
  }

  if (!category) {
    notFound();
  }

  return (
    <section className="catalog-page" aria-labelledby="category-title">
      <Link className="catalog-back-link" href="/dashboard/categories">
        <ArrowLeft aria-hidden="true" />
        All categories
      </Link>
      <header className="catalog-heading category-heading">
        <p className="catalog-eyebrow">Category</p>
        <h1 id="category-title">{category.name}</h1>
        {category.description ? <p>{category.description}</p> : null}
      </header>

      {category.products.length === 0 ? (
        <div className="catalog-state">
          <PackageOpen aria-hidden="true" />
          <h2>No products in this category</h2>
          <p>New products will appear here as they are added.</p>
        </div>
      ) : (
        <div className="product-grid">
          {category.products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-card-image" aria-hidden="true">
                {product.images[0] ? (
                  // Product images are remote URLs and remain rendered server-side.
                  <img
                    src={product.images[0].url}
                    alt=""
                  />
                ) : (
                  <PackageOpen />
                )}
              </div>
              <h2>{product.title}</h2>
              {product.description ? <p>{product.description}</p> : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
