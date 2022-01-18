import React from "react";
import "../navbar/navbar.scss";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  AiOutlineInstagram,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
const Navbar = () => {
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
  return (
    <div>
      <section>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light nav_space ">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <AiOutlineTwitter />
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <AiOutlineInstagram />
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <AiOutlineTwitter />
                    </a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input
                    class="form-control me-2 input_style"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <AiOutlineSearch className="nav_search" />
                  <Link to={"/cart"}>
                    <button
                      class="btn btn-outline-success btn_add_style"
                      type="submit"
                    >
                      <AiOutlineShoppingCart />${cartTotal}({totalItems})
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* nav2 */}
      <section className="nav2_color">
        <div>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand nav2_mistyle" href="#">
                Mi SHOP
                <p className="nav2_psize">buy products</p>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginTop: "8px",
                      marginRight: "30px",
                    }}
                    exact
                    to={"/"}
                    class="nav-item nav2_brandspace"
                  >
                    HOME
                  </Link>
                  <li class="nav-item nav2_personalspace">
                    <a class="nav-link" href="#">
                      PERSONAL CARE
                    </a>
                  </li>
                  <li class="nav-item nav2_babyspace">
                    <a class="nav-link" href="#">
                      BABY CARE
                    </a>
                  </li>
                  <li class="nav-item nav2_womanspace">
                    <a class="nav-link" href="#">
                      WOMAN
                    </a>
                  </li>
                  <li class="nav-item nav2_fcarespace">
                    <a class="nav-link" href="#">
                      FEMININE CARE
                    </a>
                  </li>
                  <li class="nav-item nav2_manspace">
                    <a class="nav-link" href="#">
                      MAN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
