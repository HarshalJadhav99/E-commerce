import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/navbar.css";
import FeaturedCollection from "./components/featured/FeaturedCollection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import NewCollection from "./components/newcollection/NewCollection";
import HomeSlider from "./components/homeslider/HomeSlider";
import ProductCart from "./components/productcart/ProductCart";
import NewCollection2 from "./components/newcollection/NewCollection2";
import NewCollection from "./components/newcollection/NewCollection";

import data from "./components/newcollection/data";
import Home from "./components/newcollection/Home";
import Cart from "./components/newcollection/Cart";
import { CartProvider, cartProvider } from "react-use-cart";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import logo1 from "./pana2.png";
function App() {
  return (
    <div className="App">
      {/* <NewCollection /> */}

      {/* <NewCollection2 /> */}

      <CartProvider>
        {/* <Home /> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>

      {/* <ProductCart /> */}
      {/* <img src={logo1} alt="timer" /> */}
    </div>
  );
}

export default App;
