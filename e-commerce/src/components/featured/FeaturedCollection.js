import React from "react";
import "../featured/featuredcollection.css";
import Slider from "react-slick";
import fi1 from "./fi1.png";
import fi2 from "./fi2.png";

import fi3 from "./fi3.png";
import fi4 from "./fi4.png";

import fi5 from "./fi5.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const FeaturedCollection = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="featured_style">
                <h3>Featured Collections</h3>
                <p>____ WEEKLY BEST SELLERS ____</p>
              </div>
            </div>
            <Slider {...settings}>
              <div className="col-3">
                <div className="fibox_color">
                  {/* <img
                  src="E:/E-commerce Pro1/e-commerce/src/assets/images/signature.PNG"
                  width="100"
                  height="50"
                /> */}
                  <div className="fiimg_style">
                    <img src={fi1} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="fibox_color">
                  <div className="fiimg_style">
                    <img src={fi3} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="fibox_color">
                  <div className="fiimg_style">
                    <img src={fi2} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="fibox_color">
                  <div className="fiimg_style">
                    <img src={fi5} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="fibox_color">
                  <div className="fiimg_style">
                    <img src={fi4} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="fibox_color">
                  <div className="fiimg_style">
                    <img src={fi1} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="fibox_color">
                  <div className="fiimg_style">
                    <img src={fi2} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="fibox_color">
                  <div className="fiimg_style">
                    <img src={fi5} />
                  </div>
                  <div className="fi1_style">
                    <h6>Hans Backpack</h6>
                    <p>$150.00</p>
                    <button className="btn fc_bn_btn">Buy Now</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCollection;
