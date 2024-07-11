import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import productsJSON from "../assets/product-list.json";

function ProductItems() {

  const {productId} = useParams()
  const productProfile= productsJSON.find((eachProduct) => eachProduct._id === productId)
  return (
    <div>
      products.map((eachProduct))
        
   
    </div>
  )
}

export default ProductItems
