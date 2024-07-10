
function ProductCard(props) {
  const handleDelete = (indexDelete) => {
    const clone = JSON.parse(JSON.stringify(product));
    clone.splice(indexDelete, 1);

    setProduct(clone);
  };

  return (
    <div className="images-product">
      {/* <img src={eachProduct.images} alt="" />  */}

      <div className="data-product">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price} €</p>
        <p>
          {" "}
          <b>Summer Sales: </b>
          {props.discountPercentage}% off
        </p>
        {props.discountPercentage > 15 ? <span>🤑💲</span> : <span>📈</span>}
        <p>{props.category}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
