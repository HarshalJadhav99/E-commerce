import React, { createContext, useState, useContext } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillDelete,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
// import "../featured/featuredcollection.css";
import "../productcart/productcart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import fi3 from "./fi3.png";
import Products from "./Products";
import { Product } from "./Product";
import { ProductContexts } from "./ProductCart";
const ProductContext = () => {
  //   const [item, setItem] = useState(Product);
  const { item } = useContext(ProductContexts);
  return (
    <div>
      <section className="mt-5">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="pc_cs">
                  <AiOutlineArrowLeft />
                </div>
              </div>
              <div className="col-4">
                <div className="pc_h3_style">
                  <h5>Continue Shopping</h5>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <FaShoppingCart />
                  <p>7</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <hr />
      </section>
      <section>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="pc_shopping_style">
                  <h3>Shopping Cart</h3>
                  <p>You have 7 items in shopping cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {/* <div className="row">
            <div className="col-3">
              <div className="pc_img_style">
                <img src={fi3} />
              </div>
            </div>
            <div className="col-3">
              <div>
                <h3>iphone 12</h3>
                <p>black color</p>
              </div>
            </div>
            <div className="col-2">
              <div>
                <AiOutlinePlus />
                <input style={{ width: "100px" }} type="text" placeholder="2" />
                <AiOutlineMinus />
              </div>
            </div>
            <div className="col-2">
              <div>
                <h6>$150.00</h6>
              </div>
            </div>
            <div className="col-2">
              <div>
                <AiFillDelete />
              </div>
            </div>
          </div>
          <hr /> */}
          {item.map((curItem) => {
            return <Products key={curItem.id} {...curItem} />;
          })}

          <div className="row">
            <div className="col-12">
              <div>
                <h3>
                  Cart Total : <span>$2200</span>
                </h3>
              </div>
            </div>
            <div className="col-12">
              <div>
                <button className="btn btn-primary">CheckOut</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductContext;
