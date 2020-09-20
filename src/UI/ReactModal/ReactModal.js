import React from 'react';
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import {connect} from "react-redux";
// import {Link} from 'react-router-dom';
// import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai'
import PriceRefactor from "../Refactors/PriceRefactor";
import {addToCart} from "../../store/actions/cart";
import {NotificationContainer, NotificationManager} from "react-notifications";

const ReactModal = ({isOpen, productItem, setOpen, dispatch, user, cart}) => {

   const createNotification = (msg) => {
      if (user.authLogin && user.authLogin.isAuth) {
         if (!cart.adding) {
            return () => {
               NotificationManager.success(msg, '', 1500);
            };
         }
      }
   };


   const addToCartModal = (id) => {
      if (user.authLogin && user.authLogin.isAuth) {
         if (!cart.adding) {
            dispatch(addToCart(id));
            // dispatch(getCart());
         }
      }
   };

   return (
       <React.Fragment>
          <Modal
              open={isOpen}
              onClose={() => setOpen(false)}
              center
              classNames={{
                 // animationIn: 'customEnterAnimation',
                 // animationOut: 'customLeaveAnimation',
              }}
          >
             <div className="product-modal">
                <img src={productItem.image} alt={productItem.name}/>
                <h4>{productItem.trade_mark} {productItem.name} {productItem.measurement}</h4>
                <p>
                   {productItem.description}
                </p>
                <p>
                   Цена за 1 ед. {productItem.price} сум
                </p>
                <p className="minimum-buy">
                   Минимальная покупка: {productItem.minimum_quantity}шт x {productItem.measurement}
                   <br/>
                   <span><PriceRefactor price={productItem.minimum_quantity_price}/> сум</span>
                </p>
                {/*<div className="cart-buttons">*/}
                {/*   <span>В корзине:&nbsp;&nbsp;0</span>*/}
                {/*   <div>*/}
                {/*      <button className="btn"><AiOutlineMinusSquare /></button>*/}
                {/*      <button className="btn"><AiOutlinePlusSquare /></button>*/}
                {/*   </div>*/}
                {/*</div>*/}
                <button
                    onClickCapture={createNotification('Продукт добавлен в корзину')}
                    onClick={() => addToCartModal(productItem.id)}
                    className="btn btn-info"
                >Добавить в корзину
                </button>
             </div>

          </Modal>
          <div>
             <NotificationContainer enterTimeout={300} leaveTimeout={300} />
          </div>
       </React.Fragment>
   )
};


function mapStateToProps(state) {
   return {
      user: state.user_r,
      cart: state.cart_r
   }
}

export default connect(mapStateToProps)(ReactModal);