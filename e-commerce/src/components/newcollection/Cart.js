import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillDelete,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>cart is empty</h1>;
  return (
    <>
      <section className="mt-5">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-4" style={{ textAlign: "initial" }}>
                <div className="pc_cs">
                  <Link style={{ color: "black" }} exact to={"/"}>
                    <AiOutlineArrowLeft />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="pc_h3_style">
                  <h5>Continue Shopping</h5>
                </div>
              </div>
              <div className="col-4" style={{ textAlign: "end" }}>
                <div>
                  <FaShoppingCart />
                  <p>{totalItems}</p>
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
                  <p>You have {totalItems} items in shopping cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-12">
            {/* <h5>
              cart ({totalUniqueItems}) total items: ({totalItems})
            </h5> */}
            <div className="container  m-0">
              <div className="row">
                {items.map((item, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-md-3 col-12">
                        <img src={item.img} style={{ height: "150px" }} />
                      </div>
                      <div
                        className="col-md-6 col-12 "
                        style={{ textAlign: "initial" }}
                      >
                        <h5 className="mb-4">{item.title}</h5>
                        <h6 className="mb-4">{item.desc}</h6>
                        <div className="mb-4">
                          <AiOutlineMinus
                            className="me-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          />

                          <input
                            style={{ width: "100px", textAlign: "center" }}
                            type="text"
                            placeholder="2"
                            value={item.quantity}
                          />

                          <AiOutlinePlus
                            className="ms-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          />
                        </div>
                      </div>

                      {/* <td>Quantity ({item.quantity})</td> */}
                      {/* <div className="col-3">
                        <AiOutlineMinus
                          className="me-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        />

                        <input
                          style={{ width: "100px" }}
                          type="text"
                          placeholder="2"
                          value={item.quantity}
                        />

                        <AiOutlinePlus
                          className="ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        />
                      </div> */}
                      <div className="col-2">
                        <h5>Price</h5>
                        <h6>$ {item.price}</h6>
                      </div>
                      <div className="col-1">
                        <AiFillDelete
                          className="ms-5"
                          onClick={() => removeItem(item.id)}
                        />
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-12">
            <h3 style={{ textAlign: "initial" }}>
              Cart Total : <span>${cartTotal}</span>
            </h3>
          </div>
          <div className="col-12">
            <button
              className="btn btn-outline-danger m-2"
              style={{ paddingInline: "40px" }}
              onClick={() => emptyCart()}
            >
              Clear Cart
            </button>
            {/* <button className="btn btn-primary m-2 ">Check Out</button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
