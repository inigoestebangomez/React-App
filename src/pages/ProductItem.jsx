import { useParams, Link } from "react-router-dom"

function ProductItem(props) {

  const { productDataId } = useParams();
  const productProfile = props.allProducts.find((eachProduct) => eachProduct.id.toString() === productDataId);
  console.log(productProfile);
  return (
    <div className="product-item-container">
          <img src={productProfile.thumbnail} alt="producto" className="product-image"/>
          <div className="product-details"></div>
          <h2 className="product-title">{productProfile.title}</h2>
        <h4 className="product-brand">{productProfile.brand}</h4>
        <p className="product-description">{productProfile.description}</p>
        <h4 className="product-price">{productProfile.price}€</h4>
        <h4 className="product-discount">{productProfile.discountPercentage}% off</h4>
        <h5 className="product-stock">{productProfile.stock} units available</h5>
         <Link to={`/product-id-edit/${productDataId}`}><button className="form-button">Editar Producto</button> </Link>
    </div>
  )
}

export default ProductItem

