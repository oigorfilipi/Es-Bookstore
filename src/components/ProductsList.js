import React from "react";
import Product from "./Product";

export default function ProductsList({ products }) {
  return (
    <div className="Product-List">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
