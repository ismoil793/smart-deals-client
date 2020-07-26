import React, {Component} from 'react';
import ReactDatePicker from "../../UI/ReactDatePicker/ReactDatePicker";
import {Helmet} from "react-helmet";

class Cart extends Component {
   render() {
      return (
          <div className="container">

             <Helmet>
                <title>Корзина Smart Deals</title>
                <meta name="description" content="Оформление заказа" />
             </Helmet>

             <div className="row">
                <div className="col-lg-12">

                   <div className="cart">
                      Cart
                      <ReactDatePicker />
                   </div>

                </div>
             </div>
          </div>
      );
   }
}

export default Cart;