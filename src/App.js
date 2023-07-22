import { React } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/views/Footer/About/About";
import Detail from "./components/views/Detail/detail";
import Form from "./components/views/Form/form";
import Login from "./components/views/Login/login"
import Home from "./components/views/Home/home";
import Landing from "./components/views/Landing/landing";
import NavBar from "./components/views/NavBar/navBar";
import Cart from "./components/views/Cart/cart";
import ProductCards from "./components/views/ProductCards/ProductCards";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/views/Footer/Footer";
import Dashboard from "./components/views/Admin/Dashboard/Dashboard";
import ProductsList from "./components/views/Admin/ProductsList/ProductsList";
import EditProducts from "./components/views/Admin/EditProducts/EditProducts";

function App() {
  const location = useLocation();

  return (
    <div className="App">
    
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tools" element={<ProductCards/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="*" element={<Error404/>}/>

        {/* Rutas para Admin */}
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="/admin/productsList" element={<ProductsList/>}/>
        <Route path="/admin/editproducts" element={<EditProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
