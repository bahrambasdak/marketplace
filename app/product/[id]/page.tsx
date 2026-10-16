import React from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <section className="product-page" aria-labelledby="product-title">
      <div className="page-heading">
        <div className="page-eyebrow">
          <span className="eyebrow-rule" /> PRODUCT PAGE
        </div>
        <h1 id="product-title">Product ID: {params.id}</h1>
        <p>Details about the product will be displayed here.</p>
      </div>
    </section>
    );
}
