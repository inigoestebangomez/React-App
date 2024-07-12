import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import ProductItem from "./pages/ProductItem";
import About from "./pages/About";
import AddForm from "./pages/AddForm";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-items/:productDataId" element={<ProductItem />} />
        <Route path="/add-form" element={<AddForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
