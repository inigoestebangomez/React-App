import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"

function ProductIdEdit(props) {

    const { productDataId } = useParams()
    const productProfile = props.allProducts.find((eachProduct) => eachProduct.id.toString() === productDataId);
    
    const [ id, setId ] = useState ("")
    const [ title, setTitle ] = useState (productProfile.title)
    const [ description, setDescription ] = useState (productProfile.description)
    const [ price, setPrice ] = useState (productProfile.price)
    const [ discountPercentage, setDiscountPercentage ] = useState (productProfile.discountPercentage)
    const [ rating, setRating ] = useState (productProfile.rating)
    const [ stock, setStock ] = useState (productProfile.stock)
    const [ brand, setBrand ] = useState (productProfile.brand)
    const [ category, setCategory ] = useState (productProfile.category)
    const [ thumbnail, setThumbnail ] = useState ("")
    const [ images, setImages ] = useState ("")

    const handleImputTitle = (event) => setTitle(event.target.value)
    const handleImputDescription = (event) => setDescription(event.target.value)
    const handleImputPrice = (event) => setPrice(event.target.value)
    const handleImputDiscountPercentage = (event) => setDiscountPercentage(event.target.value)
    const handleImputRating = (event) => setRating(event.target.value)
    const handleImputStock = (event) => setStock(event.target.value)
    const handleImputBrand = (event) => setBrand(event.target.value)
    const handleImputCategory = (event) => setCategory(event.target.value)
    const handleImputThumbnail = (event) => setThumbnail(event.target.value)
    const handleImputImages = (event) => setImages(event.target.value)

    const handleEditProduct = (event) => {
        event.preventDefault()
        
        const editedProduct = {
            ...productProfile,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images
        };

        props.setAllProducts((currentProducts) => 
            currentProducts.map((product) =>
                product.id.toString() === productDataId ? editedProduct : product
            )
        );
    }

 
    return (
    <div>
     <h1>Pagina para Editar</h1> 

     <form onSubmit={handleEditProduct}>
        <div className="form-container">
          {/* <div >
          <label htmlFor="id">iD: </label>
          <input type="number" name="id" onChange={ handleImputId } value={ id }/>
        </div> */}
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              onChange={handleImputTitle}
              value={title}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              onChange={handleImputDescription}
              value={description}
            />
          </div>
          <div>
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              name="price"
              onChange={handleImputPrice}
              value={price}
            />
          </div>
          <div>
            <label htmlFor="discountPercentage">Discount: </label>
            <input
              type="number"
              name="discountPercentage"
              onChange={handleImputDiscountPercentage}
              value={discountPercentage}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating: </label>
            <input
              type="number"
              name="rating"
              onChange={handleImputRating}
              value={rating}
            />
          </div>
          <div>
            <label htmlFor="stock">Stock: </label>
            <input
              type="number"
              name="stock"
              onChange={handleImputStock}
              value={stock}
            />
          </div>
          <div>
            <label htmlFor="brand">Brand: </label>
            <input
              type="text"
              name="brand"
              onChange={handleImputBrand}
              value={brand}
            />
          </div>
          <div>
            <label htmlFor="category">Category: </label>
            <input
              type="text"
              name="category"
              onChange={handleImputCategory}
              value={category}
            />
          </div>
          <div>
            <label htmlFor="thumbnail">Thumbnail: </label>
            <input
              type="text"
              name="thumbnail"
              onChange={handleImputThumbnail}
              value={thumbnail}
            />
          </div>
          <div>
            <label htmlFor="images">Images: </label>
            <input
              type="text"
              name="images"
              onChange={handleImputImages}
              value={images}
            />
          </div>
        </div>
        <button className="form-button">Save</button>
      </form>

     <form>

     </form>
    </div>
  )
}

export default ProductIdEdit