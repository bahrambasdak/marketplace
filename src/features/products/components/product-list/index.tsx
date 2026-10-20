import { notFound } from "next/navigation";
import { getProducts } from "../../api/product.api";
import ProductCard from "../product-card";

export async function ProductList() {
  const products = await getProducts();
  if (!products) return notFound();
  return (
    <div className= "flex flex-wrap gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
