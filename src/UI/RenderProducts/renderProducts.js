import React from 'react';
// import {Link} from "react-router-dom";
// import {FaPlusCircle, FaMinusCircle} from "react-icons/fa"
import ReactModal from "../ReactModal/ReactModal";
import PriceRefactor from "../PriceRefactor/PriceRefactor";

const RenderProducts = (props) => {

   const [open, setOpen] = React.useState(false);
   const [productItem, setProductItem] = React.useState({});

   const renderProducts = (list) => {

      if (list && list.length > 0) {
         return list.map((item, i) => {

            return (
                <div key={i} className="col-sm-6 col-lg-4 col-xl-3">
                   <div className="product-in-category">
                      {/*to={`/products/${item.category.slug}/${item.id}`}*/}
                      <div className="product-info">
                         <img
                             className="img-fluid"
                             src={item.image} alt={`${item.name}`}
                             onClick={() => {
                                setOpen(true);
                                setProductItem(item)
                             }}
                         />
                         <div className="img-prod-detail">
                            <p className="trade_mark">
                               {item.trade_mark}&nbsp;
                               {
                                  item.name.length > 25
                                      ? `${item.name.slice(0, 25)}... ${item.measurement}`
                                      : `${item.name} ${item.measurement}`
                               }
                            </p>
                            <p>
                               {item.minimum_quantity}шт x {item.price}
                            </p>
                            <span>цена: <PriceRefactor price={item.minimum_quantity_price} /> сум</span>
                         </div>
                      </div>
                      {/*<div className="cart-buttons">*/}
                      {/*   <button><FaMinusCircle/></button>*/}
                      {/*   <button><FaPlusCircle/></button>*/}
                      {/*</div>*/}
                   </div>
                </div>
            )
         })
      }
   };

   return (
       <React.Fragment>
          {renderProducts(props.list)}
          {
             open ? <ReactModal isOpen={open} setOpen={setOpen} productItem={productItem} /> : null
          }
       </React.Fragment>
   );
};

export default RenderProducts;