import React from "react";
import "../footer/footer.css";
import fi1 from "./fi1.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  AiOutlineInstagram,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      {/*  */}
      {/* <section>
        <div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="banner">
                  <img src={fi1} />
                  <div className="one_row">
                    <h3>Good Products</h3>
                    <p>Buy any type of products you want</p>
                  </div>
                  <div className="btn_style">
                    <button className="btn btn-outline-info">Show</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-5">
                <div className="foot_text_style2">
                  <div className="foot_text2">
                    <h4>Product Description</h4>
                  </div>
                  <div className="foot_text2">
                    <p>
                      sjkjaoixlakskxlkalks sklxklakslakxlklaklx
                      kxlkowioapospxopaop sjkjaoixlakskxlkalks
                      sklxklakslakxlklaklx kxlkowioapospxopaop
                    </p>
                  </div>
                  <div className="foot_text2">
                    <button className="btn btn-outline-primary">
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*  */}
      <section className="foo_color">
        <div>
          <div className="container mt-md-3">
            <div className="row">
              <div className="col-12 col-md-3 pt-5">
                <div>
                  <h3>Mi SHOP</h3>
                  <p>buy something new</p>
                </div>
              </div>
              <div className="col-6 col-md-3 pt-3">
                <div className="foot_txt_style">
                  <p>CONTACT US</p>
                  <p>SHIPPING & RETURNS</p>
                  <p>GIFT CARDS</p>
                  <p>PRIVACY</p>
                </div>
              </div>
              <div className="col-6 col-md-3 pt-3">
                <div className="foot_txt_style">
                  <p>CONTACT US</p>
                  <p>SHIPPING & RETURNS</p>
                  <p>GIFT CARDS</p>
                  <p>PRIVACY</p>
                </div>
              </div>
              <div className="col-12 col-md-3 pt-3">
                <div className="foot_txt_style">
                  <p>CONTACT US</p>
                  <p>SHIPPING & RETURNS</p>
                  <p>GIFT CARDS</p>
                  <div className="foot_icon_style">
                    <FaFacebookF />
                  </div>
                  <div className="foot_icon_style">
                    <AiOutlineTwitter />
                  </div>
                  <div className="foot_icon_style">
                    <AiOutlineInstagram />
                  </div>
                  <div className="foot_icon_style">
                    <AiOutlineTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
