import { useState } from "react";
import productsData from "../assets/product-list.json";
import ProductCard from "./ProductCard";

function Products() {
  const [product, setProduct] = useState(productsData);
//   const handleDelete = (indexDelete) => {
//     const clone = JSON.parse(JSON.stringify(product));
//     clone.splice(indexDelete, 1);

//     setProduct(clone);
//   };

  return (
    <div>
      {product.map((eachProduct) => {
        return <ProductCard productsData={props.description}/>;
      })}
    </div>
  );
}

export default Products;
