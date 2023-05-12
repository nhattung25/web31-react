import React, { useEffect, useState } from "react";

const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json;
  console.log(data);
  return data["product"];
};

const promise = getProduct();

export default function ProductList() {
  const [product, setProduct] = useState();
  useEffect(() => {
    promise.then(setProduct);
  });

  const cards = product.map((product) => {
    <Link key={product.id} />;
    <article className="product-card">
      <div className="main">
        <img src={product.thumbnail} alt={product.title} />
        <div className="name">{product.description}</div>
        <div className="price">{product.price}</div>
      </div>
    </article>;
  });

  return <div>ProductList</div>;
}
