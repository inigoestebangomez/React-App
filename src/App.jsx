import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import productsJSON from "./assets/product-list.json";
import ProductItem from "./pages/ProductItem";
import About from "./pages/About";
import ProductIdEdit from "./pages/ProductIdEdit";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";


function App() {
  const [allProducts, setAllProducts] = useState(productsJSON);
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Products allProducts={allProducts} setAllProducts={setAllProducts} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-items/:productDataId" element={<ProductItem allProducts={allProducts} setAllProducts={setAllProducts}/>} />
        <Route path="/product-id-edit/:productDataId" element={<ProductIdEdit/>} />
  
      </Routes>
      <Footer />
    </>
  );
}

export default App;
