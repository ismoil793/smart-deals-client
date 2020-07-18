import React from 'react';
import {Link} from "react-router-dom";
import {FaPlusCircle, FaMinusCircle} from "react-icons/fa"

const RenderProducts = (props) => {

   const renderProducts = (list) => {

      if (list && list.length > 0) {
         return list.map((item, i) => (
             <div key={i} className="col-lg-4">
                <div className="product-in-category">
                   <Link to={`/products/${item.category.slug}/${item.id}`} className="img-prod">
                      <img className="img-fluid" src={item.image}
                           alt="Product img"/>
                      <div className="img-prod-detail">
                         <p>
                            {
                               item.name.length > 18
                                   ? `${item.name.slice(0, 18)}...`
                                   : item.name
                            }
                         </p>
                         <p className="trade_mark">
                            {item.trade_mark}
                         </p>
                         <span>цена: {item.price} сум</span>
                      </div>
                   </Link>
                   <div className="cart-buttons">
                      <button><FaMinusCircle/></button>
                      <span>0</span>
                      <button><FaPlusCircle/></button>
                   </div>
                </div>
             </div>
         ))
      }
   };

   return (
       <React.Fragment>
          {renderProducts(props.list)}
       </React.Fragment>
   );
};

export default RenderProducts;