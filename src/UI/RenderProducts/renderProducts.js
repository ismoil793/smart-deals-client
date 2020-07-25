import React from 'react';
// import {Link} from "react-router-dom";
import {FaPlusCircle, FaMinusCircle} from "react-icons/fa"
import ReactModal from "../ReactModal/ReactModal";

const RenderProducts = (props) => {

   const [open, setOpen] = React.useState(false);
   const [productItem, setProductItem] = React.useState({});

   const renderProducts = (list) => {

      if (list && list.length > 0) {
         return list.map((item, i) => {

            let price = (item.price * 12).toString();

            if (price.length === 5) {
               price = price.slice(0,2) + ' ' + price.slice(2,5)
            }
            else if (price.length === 4) {
               price = price.slice(0,1) + ' ' + price.slice(1,4)
            }
            else if (price.length === 6) {
               price = price.slice(0,3) + ' ' + price.slice(3,6)
            }


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
                                  item.name.length > 32
                                      ? `${item.name.slice(0, 32)}...`
                                      : item.name
                               }
                            </p>
                            <p>
                               1л x 12
                            </p>
                            <span>цена: {price} сум</span>
                         </div>
                      </div>
                      <div className="cart-buttons">
                         <button><FaMinusCircle/></button>
                         <button><FaPlusCircle/></button>
                      </div>
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
             // open ? <ReactModal isOpen={open} setOpen={setOpen} productItem={productItem} /> : null
          }
       </React.Fragment>
   );
};

export default RenderProducts;