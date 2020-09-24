import React from 'react';
import {connect} from "react-redux"
import ReactModal from "../ReactModal/ReactModal";
import PriceRefactor from "../Refactors/PriceRefactor";
import {addToCart} from "../../store/actions/cart";
import ProductNameRefactor from "../Refactors/ProductNameRefactor";
import "react-notifications/lib/notifications.css";
import {NotificationContainer, NotificationManager} from 'react-notifications';

// import {FaPlusCircle, FaMinusCircle, FaCartPlus} from "react-icons/fa"
// import {FaCartPlus} from "react-icons/fa"

const RenderProducts = (props) => {

   const [open, setOpen] = React.useState(false);
   const [productItem, setProductItem] = React.useState({});

   const createNotification = (msg) => {
      if (props.user.authLogin && props.user.authLogin.isAuth) {
         if (!props.cart.adding) {
            return () => {
               NotificationManager.success(msg, '', 1500, null, false);
            };
         }
      }
   };

   const renderProducts = (list) => {

      if (list && list.length > 0) {
         return list.map((item, i) => {

            return (
                <div key={i} className="col-sm-6 col-lg-4 col-xl-3">
                   <div className="product-in-category">
                      {/*to={`/products/${item.category.slug}/${item.id}`}*/}
                      <div className="product-info">
                         <div>
                            <img
                                className="img-fluid"
                                src={item.image} alt={`${item.name}`}
                                // if user is not authenticated he can't see price and product details
                                onClick={() => {
                                   if (props.user.authLogin && props.user.authLogin.isAuth) {
                                      setOpen(true);
                                      setProductItem(item)
                                   } else {
                                      props.history.push('/login')
                                   }
                                }}
                            />
                         </div>
                         <div className="img-prod-detail">
                            <p className="trade_mark">
                               <ProductNameRefactor name={item.name} trade_mark={item.trade_mark} chars={36}/>
                            </p>
                            <p>
                               {item.trade_mark}
                            </p>
                            {
                               // if user is auth then he can see price
                               props.user.authLogin && props.user.authLogin.isAuth ?
                                   <React.Fragment>
                                      <p>
                                         <span>{item.minimum_quantity}шт x {item.measurement}</span>
                                         {/*<button>Добавить</button>*/}
                                      </p>
                                      <span className="price-bigger">
                                         <span className="price-normal">Цена:</span> <PriceRefactor
                                          price={item.minimum_quantity_price}/> сум
                                      </span>
                                   </React.Fragment>
                                   : null
                            }
                         </div>
                      </div>
                      <div className="cart-buttons">
                         <button
                             disabled={props.cart.adding}
                             onClickCapture={createNotification('Продукт добавлен в корзину')}
                             onClick={() => {
                                // add product to cart btn
                                if (props.user.authLogin && props.user.authLogin.isAuth) {
                                   if (!props.cart.adding) {
                                      props.dispatch(addToCart(item.id));
                                   }
                                } else {
                                   props.history.push('/login')
                                }
                             }}
                         >В корзину
                         </button>
                         {/*<button><FaMinusCircle/></button>*/}
                         {/*<button><FaPlusCircle/></button>*/}
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
             open && props.user.authLogin && props.user.authLogin.isAuth ?
                 <ReactModal isOpen={open} setOpen={setOpen} productItem={productItem}/>
                 : null
          }
          <div>
             <NotificationContainer enterTimeout={300} leaveTimeout={300}/>
          </div>
       </React.Fragment>
   );
};

function mapStateToProps(state) {
   return {
      user: state.user_r,
      cart: state.cart_r
   }
}

export default connect(mapStateToProps)(RenderProducts);