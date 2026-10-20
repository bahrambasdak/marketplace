import { Button } from "@/components/ui/button";
import { ProductDetails } from "@/src/features/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="product-page" aria-labelledby="product-title">
      <div className="page-heading">
        <div className="page-eyebrow">
          <span className="eyebrow-rule" /> PRODUCT PAGE
        </div>

        <ProductDetails id={id} />
      </div>
      <Button>Log</Button>
    </section>
  );
}
