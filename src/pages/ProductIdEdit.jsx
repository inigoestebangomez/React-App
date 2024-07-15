import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"

function ProductIdEdit(props) {
 
    const productProfile = props.productsJSON.find((eachProduct) => eachProduct.id.toString() === productDataId);
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
        const editProduct = {
            id: props.allProducts.length + 1,
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

        props.setAllProducts([...props.allProducts, newProduct]);
        setId("")
        setTitle("")
        setDescription("")
        setPrice(0)
        setDiscountPercentage(0)
        setRating(0)
        setStock(0)
        setBrand("")
        setCategory("")
        setThumbnail("")
        setImages("")


    }
 
    return (
    <div>
     <h1>Pagina para Editar</h1>   
     <form>

     </form>
    </div>
  )
}

export default ProductIdEdit