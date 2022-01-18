import React from "react";
import "../newcollection/newcollection.css";

import nc1 from "./nc1.png";
import nc2 from "./nc2.png";
import nc3 from "./nc3.png";
import nc4 from "./nc4.png";
import nc5 from "./nc5.png";
import nc6 from "./nc6.png";
import { useCart } from "react-use-cart";
const NewCollection = (props) => {
  const { addItem } = useCart();
  return (
    <div>
      <section>
        <div>
          <div className="container">
            <div className="row">
              {/* <div className="col-12">
                <div className="nc_style">
                  <h3>New Arrivals</h3>
                  <p>____ OUR NEW COLLECTION ____</p>
                </div>
              </div> */}
              <div className="col-md-4 col-12">
                <div className="nc_color">
                  <div className="ncimg_style">
                    <img src={nc1} />
                  </div>
                  <div className="nc_tstyle">
                    <h6>iphone-12</h6>
                    <p>$20.00</p>
                    <button
                      className="btn nc_bn_btn"
                      onClick={() => addItem(props.item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-12">
                <div className="nc_color">
                  <div className="ncimg_style">
                    <img src={nc2} />
                  </div>
                  <div className="nc_tstyle">
                    <h6>iphone-12pro</h6>
                    <p>$20.00</p>
                    <button
                      className="btn nc_bn_btn"
                      onClick={() => addItem(props.item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-12">
                <div className="nc_color">
                  <div className="ncimg_style">
                    <img src={nc3} />
                  </div>
                  <div className="nc_tstyle">
                    <h6>iphone-12</h6>
                    <p>$20.00</p>
                    <button
                      className="btn nc_bn_btn"
                      onClick={() => addItem(props.item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 col-12">
                <div className="nc_color">
                  <div className="ncimg_style">
                    <img src={nc4} />
                  </div>
                  <div className="nc_tstyle">
                    <h6>Brand new products</h6>
                    <p>$150.00</p>
                    <button
                      className="btn nc_bn_btn"
                      onClick={() => addItem(props.item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-4 col-12">
                <div className="nc_color">
                  <div className="ncimg_style">
                    <img src={nc5} />
                  </div>
                  <div className="nc_tstyle">
                    <h6>Brand new products</h6>
                    <p>$150.00</p>
                    <button
                      className="btn nc_bn_btn"
                      onClick={() => addItem(props.item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-4 col-12">
                <div className="nc_color">
                  <div className="ncimg_style">
                    <img src={nc6} />
                  </div>
                  <div className="nc_tstyle">
                    <h6>Brand new products</h6>
                    <p>$150.00</p>
                    <button
                      className="btn nc_bn_btn"
                      onClick={() => addItem(props.item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCollection;
