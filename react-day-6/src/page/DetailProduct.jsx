import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const { productId } = useParams();
  const { product, setProduct } = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
      res.json().then(setProduct)
    );
  }, [productId]);
  return (
    <div>
      <div className="main">
        <img src={product.thumbnail} alt={product.title} />
        <div className="name">{product.description}</div>
        <div className="price">{product.price}</div>
      </div>
    </div>
  );
}
