import { Link } from "react-router-dom";

function ProductCard(props) {
 
  return (
    <div className="product-screen">
      <div className="images-product">
        {/* <img src={eachProduct.images} alt="" />  */}

        <div className="data-product">
          <Link to={`/product-items/${props.productData.id}`}>
            <h3>{props.productData.title}</h3>
          </Link>
          <p>{props.productData.description}</p>
          <p>{props.productData.price} €</p>
          <p>
            {" "}
            <b>Summer Sales: </b>
            {props.productData.discountPercentage}% off
          </p>
          {props.productData.discountPercentage > 15 ? (
            <span>🤑💲</span>
          ) : (
            <span>📈</span>
          )}
          <p>{props.productData.category}</p>

          <button onClick={() => props.handleDelete(props.index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
