import React from "react";
import "../newcollection/newcollection.css";
import data from "./data";
import HomeSlider from "../homeslider/HomeSlider";
import nc1 from "./nc1.png";
import nc2 from "./nc2.png";
import nc3 from "./nc3.png";
import nc4 from "./nc4.png";
import nc5 from "./nc5.png";
import nc6 from "./nc6.png";
import NewCollection from "./NewCollection";
import FeaturedCollection from "../featured/FeaturedCollection";
import Footer from "../footer/Footer";
const Home = () => {
  console.warn(data.productData);
  return (
    <div>
      <HomeSlider />
      <div className="container">
        <div className="row">
          <div className="col-12 mt-md-3">
            <div className="nc_style">
              <h3>New Arrivals</h3>
              <p>____ OUR NEW COLLECTION ____</p>
            </div>
          </div>
          <div className="col-12">
            {data.productData.map((item, index) => {
              return (
                <NewCollection
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <h4 className="hrlines mb-md-4">
            <button className="btn btn">SEE OUR ALL PRODUCT</button>
          </h4>
          <FeaturedCollection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
