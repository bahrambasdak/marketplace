import Link from "next/link";

export default async function ProductsPage() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  console.log(products);

  return (
    <div className="flex flex-col gap-4">
      <h1>Products Page</h1>
      <ul className="flex flex-col gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>

      <Link
        href="/products/create"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Product
      </Link>
    </div>
  );
}
