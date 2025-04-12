import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminProduct from "../pages/AdminProduct";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail"; 
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin-products" element={<AdminProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRouter;
