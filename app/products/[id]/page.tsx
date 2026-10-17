"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default   function ProductPage() {
  const params =  useParams();
  const [product, setProduct] = useState(null);

    // const product = {title: "Product 1", description: "This is product 1", price: 10.99, id: id};
      //  const product = await fetch(`http://localhost:3000/api/product/${params.id}`, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // } );
// console.log(product);
    const fetchProduct = async () => {
          const response = await fetch(`http://localhost:3000/api/product/${params.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          });
          const productData = await response.json();
          setProduct(productData);
    }


useEffect(() => {
    // Fetch product data from the API using the product ID
// fetchProduct();
  }, [params.id]);

  return (
    <section className="product-page" aria-labelledby="product-title">
      <div className="page-heading">
        <div className="page-eyebrow">
          <span className="eyebrow-rule" /> PRODUCT PAGE
        </div>
        <h1 id="product-title">Product ID: {params.id}</h1>
        <p>Details about the product will be displayed here.{product?.title}</p>
      </div>
      <button onClick={fetchProduct}>Log Product </button>
    </section>
    );
}
