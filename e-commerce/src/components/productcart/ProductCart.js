import React, { createContext, useState, useReducer } from "react";
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
import { reducer } from "./reducer";
import ProductContext from "./ProductContext";
export const ProductContexts = createContext();
const initialState = {
  item: Product,
  totalAmount: 0,
  totalItem: 0,
};
const ProductCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  // const [item, setItem] = useState(Product);
  return (
    <div>
      <ProductContexts.Provider value={{ ...state, removeItem }}>
        <ProductContext />
      </ProductContexts.Provider>
    </div>
  );
};

export default ProductCart;
