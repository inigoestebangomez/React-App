import { useState } from "react"

export default function AddForm() {
    const [ id, setId ] = useState ("")
    const [ title, setTitle ] = useState ("")
    const [ description, setDescription ] = useState ("")
    const [ price, setPrice ] = useState (0)
    const [ discountPercentage, setDiscountPercentage ] = useState (0)
    const [ rating, setRating ] = useState (0)
    const [ stock, setStock ] = useState (0)
    const [ brand, setBrand ] = useState ("")
    const [ category, setCategory ] = useState ("")
    const [ thumbnail, setThumbnail ] = useState ("")
    const [ images, setImages ] = useState ("")

    const handleImputId = (event) => setId(event.target.value)
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

    const handleAddProduct = (event) => {
        event.preventDefault()
        const newProduct = {
            id: id,
            title: title,
            description: description,
            price: price,
            discountPercentage: discountPercentage,
            rating: rating,
            stock: stock,
            brand: brand,
            category: category,
            thumbnail: thumbnail,
            images: images
        }
    }

  return (

    <div className="add-form container">
      
      <h3>Añadir productos a venta</h3>

      <form onSubmit={ handleAddProduct }>

        <div>
          <label htmlFor="id">iD: </label>
          <input type="number" name="id" onChange={ handleImputId } value={ id }/>
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={ handleImputTitle } value= { title }/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" onChange={ handleImputDescription } value= { description }/>
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={ handleImputPrice } value= { price }/>
        </div>
        <div>
          <label htmlFor="discountPercentage">Discount: </label>
          <input type="number" name="discountPercentage" onChange={ handleImputDiscountPercentage } value= { discountPercentage }/>
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input type="number" name="rating" onChange={ handleImputRating } value= { rating }/>
        </div>
        <div>
          <label htmlFor="stock">Stock: </label>
          <input type="number" name="stock" onChange={ handleImputStock } value= { stock }/>
        </div>
        <div>
          <label htmlFor="brand">Brand: </label>
          <input type="text" name="brand" onChange={ handleImputBrand } value= { brand }/>
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <input type="text" name="category" onChange={ handleImputCategory } value= { category }/>
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail: </label>
          <input type="text" name="thumbnail" onChange={ handleImputThumbnail } value= { thumbnail }/>
        </div>
        <div>
          <label htmlFor="images">Images: </label>
          <input type="text" name="images" onChange={ handleImputImages } value= { images }/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}
