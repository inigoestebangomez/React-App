import { useState } from "react";
import productsJSON from "../assets/product-list.json";
import ProductCard from "./ProductCard";

function Products() {
  const [allProducts, setAllProducts] = useState(productsJSON);
  function handleDelete (indexDelete) {
    const clone = JSON.parse(JSON.stringify(allProducts));
    clone.splice(indexDelete, 1);

    setAllProducts(clone);
  };

  return (
    <div>
      {allProducts.map((eachProduct, eachIndex) => {
        return <ProductCard productData={eachProduct} handleDelete={handleDelete} index={eachIndex}/>;
      })}
    </div>
  );
}

export default Products;
