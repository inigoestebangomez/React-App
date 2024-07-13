import { useParams } from "react-router-dom"
import productsJSON from "../assets/product-list.json";

function ProductItem() {

  const { productDataId } = useParams();
  console.log(productDataId);
  const productProfile = productsJSON.find((eachProduct) => eachProduct.id.toString() === productDataId);
  console.log(productProfile);
  return (
    <div>
        
          <h2>{productProfile.title}</h2>
          <p>{productProfile.description}</p>
          <h4>{productProfile.price}€</h4>
          <h4>{productProfile.discountPercentage}%</h4>
          <h4>{productProfile.stock}</h4>
          <h4>{productProfile.brand}</h4>
          <img src={productProfile.thumbnail} alt="producto" width= "300px"/>
          
    </div>
  )
}

export default ProductItem

