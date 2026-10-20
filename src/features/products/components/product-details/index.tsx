import { notFound } from "next/navigation";
import { getProduct } from "../../api/product.api";

export async function ProductDetails({ id }: { id: string }) {
  const product = await getProduct(id);
  if (!product) return notFound();
  return (
    <div>
      <h1>title: {product.title}</h1>
      <p>description: {product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
