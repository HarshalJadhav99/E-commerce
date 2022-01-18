import React, { useContext } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillDelete,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContexts } from "./ProductCart";
// import "../featured/featuredcollection.css";
import "../productcart/productcart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import fi3 from "./fi3.png";
import ProductContext from "./ProductContext";
const Products = ({ id, description, title, img, price, amount }) => {
  const { removeItem } = useContext(ProductContexts);
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="pc_img_style">
                <img src={img} />
              </div>
            </div>
            <div className="col-3">
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
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
                <h6>{price}</h6>
              </div>
            </div>
            <div className="col-2">
              <div>
                <AiFillDelete onClick={() => removeItem(id)} />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default Products;

// import React, { useContext } from "react";
// import {
//   AiOutlineArrowLeft,
//   AiOutlinePlus,
//   AiOutlineMinus,
//   AiFillDelete,
// } from "react-icons/ai";
// import { FaShoppingCart } from "react-icons/fa";
// import { ProductContexts } from "./ProductCart";
// // import "../featured/featuredcollection.css";
// import "../productcart/productcart.css";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import fi3 from "./fi3.png";
// import ProductContext from "./ProductContext";
// const Products = ({ id, description, title, img, price, amount }) => {
//   const { removeItem } = useContext(ProductContexts);
//   return (
//     <div>
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="col-3">
//               <div className="pc_img_style">
//                 <img src={img} />
//               </div>
//             </div>
//             <div className="col-3">
//               <div>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//               </div>
//             </div>
//             <div className="col-2">
//               <div>
//                 <AiOutlinePlus />
//                 <input style={{ width: "100px" }} type="text" placeholder="2" />
//                 <AiOutlineMinus />
//               </div>
//             </div>
//             <div className="col-2">
//               <div>
//                 <h6>{price}</h6>
//               </div>
//             </div>
//             <div className="col-2">
//               <div>
//                 <AiFillDelete onClick={() => removeItem(id)} />
//               </div>
//             </div>
//           </div>
//           <hr />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Products;
