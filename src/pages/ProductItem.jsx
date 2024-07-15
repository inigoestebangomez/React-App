import { useParams, Link } from "react-router-dom"

function ProductItem(props) {

  const { productDataId } = useParams();
  const productProfile = props.allProducts.find((eachProduct) => eachProduct.id.toString() === productDataId);
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
         <Link to={`/product-id-edit/${productDataId}`}><button>Ir a Editar</button> </Link>
    </div>
  )
}

export default ProductItem

