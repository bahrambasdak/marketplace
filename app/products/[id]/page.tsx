import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id, "idddddd");

  const getProduct = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return notFound();
    }
    const productData = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return productData;
  }

const productData = await getProduct(id);
console.log(productData , id);

  

  if (!productData) return notFound();

  return (
    <section className="product-page" aria-labelledby="product-title">
      <div className="page-heading">
        <div className="page-eyebrow">
          <span className="eyebrow-rule" /> PRODUCT PAGE
        </div>
        <h1 id="product-title">Product ID: {id}</h1>
        <p>
          Details about the product will be displayed here.{productData?.title}
        </p>

          <h2>title : {productData?.title}</h2>
          <p>description : {productData?.description}</p>
          <p>Price: ${productData?.price}</p>
      </div>
      <Button>Log</Button>
    </section>
  );
}
