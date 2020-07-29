import React, {Component} from 'react';
import ReactDatePicker from "../../UI/ReactDatePicker/ReactDatePicker";
import {Helmet} from "react-helmet";

class Cart extends Component {
   render() {

      return (
          <div className="container">

             <Helmet>
                <title>Корзина Smart Deals</title>
                <meta name="description" content="Оформление заказа"/>
             </Helmet>

             <div className="row">
                <div className="col-lg-12">

                   <div className="cart">

                      <h1>Корзина</h1>

                      <div className="react-datepicker-wrapper">
                         <h4>Выберить дату доставки</h4>
                         <ReactDatePicker/>
                      </div>

                   </div>

                </div>
             </div>
          </div>
      );
   }
}

export default Cart;