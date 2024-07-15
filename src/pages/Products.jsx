
import ProductCard from "../components/ProductCard";
import AddForm from "./AddForm";

function Products(props) {

  function handleDelete(indexDelete) {
    const clone = JSON.parse(JSON.stringify(props.allProducts));
    clone.splice(indexDelete, 1);

    setAllProducts(clone);
  }

  return (
    <div>
      <AddForm allProducts={props.allProducts} setAllProducts={props.setAllProducts} />
      <div className="product-screen">
      {props.allProducts.map((eachProduct, eachIndex) => {
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
    </div>
  );
}

export default Products;
