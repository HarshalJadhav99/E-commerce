import React from "react";
import "../homeslider/homeslider.css";
import fi1 from "./fi1.png";
import nc4 from "./nc4.png";
import nc6 from "./nc6.png";

import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
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
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
const HomeSlider = () => {
  return (
    <div>
      <section>
        <div className="home">
          <div className="container">
            <div className="row">
              <Slider {...settings}>
                <div className="col-4">
                  <div className="hs_text_style">
                    <h4>Product Name Here</h4>
                    <p>MEN WHO ARE SO BEGUILED</p>
                  </div>
                  <div className="hs_btn_style">
                    <button className="btn btn-outline-info">SHOP NOW</button>
                  </div>
                </div>
                <div className="col-8">
                  <div className="hs_img_style">
                    <img src={fi1} />
                  </div>
                </div>

                <div className="col-4">
                  <div className="hs_text_style">
                    <h4>Product Name Here</h4>
                    <p>MEN WHO ARE SO BEGUILED</p>
                  </div>
                  <div className="hs_btn_style">
                    <button className="btn btn-outline-info">SHOP NOW</button>
                  </div>
                </div>
                <div className="col-8">
                  <div className="hs_img_style">
                    <img src={nc4} />
                  </div>
                </div>

                <div className="col-4">
                  <div className="hs_text_style">
                    <h4>Product Name Here</h4>
                    <p>MEN WHO ARE SO BEGUILED</p>
                  </div>
                  <div className="hs_btn_style">
                    <button className="btn btn-outline-info">SHOP NOW</button>
                  </div>
                </div>
                <div className="col-8">
                  <div className="hs_img_style">
                    <img src={nc6} />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSlider;
