import { useState } from "react";
import productsJSON from "../assets/product-list.json";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";

function Products() {
  const [allProducts, setAllProducts] = useState(productsJSON);
  function handleDelete(indexDelete) {
    const clone = JSON.parse(JSON.stringify(allProducts));
    clone.splice(indexDelete, 1);

    setAllProducts(clone);
  }

  return (
    <div>
      <AddForm setAllProducts={setAllProducts} />
      {allProducts.map((eachProduct, eachIndex) => {
        return (
          <ProductCard
            key={eachIndex}
            productData={eachProduct}
            handleDelete={handleDelete}
            index={eachIndex}
          />
        );
      })}
    </div>
  );
}

export default Products;
