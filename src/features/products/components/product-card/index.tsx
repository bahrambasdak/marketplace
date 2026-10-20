import { Product } from "@/src/app/types";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card border rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="product-card-image">
        {product.images.length > 0 ? (
          <Image
            src={product.images[0].url}
            alt={product.images[0].altText}
            fill
          />
        ) : (
          <div className="product-card-placeholder">No Image</div>
        )}
      </div>
      <div className="product-card-details">
        <h2 className="product-card-title">{product.title}</h2>
        <p className="product-card-description">{product.description}</p>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
