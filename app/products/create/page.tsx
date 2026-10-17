
"use client";
 import { useActionState } from "react";
import { createProduct } from "./action";

export default function CreateProductPage() {
  const initialState = {
    title: "",
    description: "",
    price: 0,
  };
const [state, formAction, pending] = useActionState(createProduct, initialState);
 
  return (
    <form
      className="create-product-page"
      aria-labelledby="create-product-title"
      action={formAction}

    >
      <div className="page-heading">
        <div className="page-eyebrow">
          <span className="eyebrow-rule" /> CREATE PRODUCT
        </div>
        <h1 id="create-product-title">Create New Product</h1>
        <p>Fill in the details to create a new product.</p>
      </div>
      <input
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Product Title"
        name="title"
      />
      <input
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Product Description"
        name="description"
      />
      <input
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="Product Price"
        name="price"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={pending}
      >
        {pending ? "Creating..." : "Create Product"}
        {state.title}
      </button>
    </form>
  );
}
