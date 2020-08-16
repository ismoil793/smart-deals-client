import React, {Component} from 'react';
import ReactDatePicker from "../../../UI/ReactDatePicker/ReactDatePicker";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import {getCart} from "../../../store/actions/cart";
import PriceRefactor from "../../../UI/Refactors/PriceRefactor";
import ControlButtons from "./ControlButtons";

class Cart extends Component {

   state = {
      deliveryDate: ""
   };

   componentDidMount() {
      if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
         this.props.dispatch(getCart());
      }
   }

   getDate = (date) => {
     this.setState({deliveryDate: date})
   };

   countTotalPrice = (products) => {
      let total = 0;

      products.forEach((p) => {
         total += p.total_price;
      });
      return total;
   };

   renderTableRows = (products) => (
       products.map((item, i) => (
           <tr key={i}>
              <td><img width={'200px'} height={'auto'} src={`${item.image}`} alt={item.name}/></td>
              <td>{item.trade_mark} {item.name}</td>
              <td><PriceRefactor price={item.total_price}/> сум</td>
              <td>{item.pack_quantity}</td>
              <td>
                  <ControlButtons item={item} />
              </td>
           </tr>
       ))
   );

   render() {

      console.log(this.state.deliveryDate)
      if (this.props.cart.cart && this.props.cart.cart.products) {

         const cart = this.props.cart.cart;

         return (
             <section className="cart-section">
                <div className="container">

                   <Helmet>
                      <title>Корзина Smart Deals</title>
                      <meta name="description" content="Оформление заказа"/>
                   </Helmet>

                   <div className="row">
                      <div className="col-lg-12">

                         <div className="cart">

                            <h1>Корзина</h1>

                            <div className="cart-table">
                               <table className="table">
                                  <thead className="thead-dark">
                                  <tr>
                                     <th scope="col">Изображение</th>
                                     <th scope="col">Продукт</th>
                                     <th scope="col">Цена за объём</th>
                                     <th scope="col">Кол-во</th>
                                     <th scope="col">Управление</th>
                                  </tr>
                                  </thead>

                                  <tbody className="tbody-cart-items">

                                  {this.renderTableRows(cart.products)}

                                  </tbody>

                                  <tbody>
                                  <tr>
                                     <td></td>
                                     <td colSpan="2" className="text-right">{cart.name}</td>
                                     <td colSpan="2">
                                        <strong> Итого: &nbsp;
                                           <PriceRefactor price={this.countTotalPrice(cart.products)}/> сум
                                        </strong>
                                     </td>
                                  </tr>
                                  </tbody>
                               </table>
                            </div>

                         </div>

                      </div>
                   </div>

                   <div className="row mt-3 order-accept">
                      <div className="col-md-6">

                         <div className="react-datepicker-wrapper">
                            <h4>Выберить дату доставки</h4>
                            <ReactDatePicker getDate={this.getDate} />
                         </div>

                      </div>
                      <div className="col-md-6">

                         <h4>Комментарий к заказу</h4>
                         <form>
                            <div className="form-group">
                               <label htmlFor="address">Ваш адрес</label>
                               <input className="form-control" type="text" id="address" name="address" placeholder="Адрес ..." />
                            </div>
                            <textarea name="" className="form-control" id="" cols="40" rows="5" placeholder="Ваш комментарий (ориентир)"></textarea>
                         </form>

                         <button className="btn btn-primary"> Оформить заказ</button>

                      </div>
                   </div>

                </div>

             </section>
         );
      }
      return <div>Loading ...</div>
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r,
      cart: state.cart_r
   }
}

export default connect(mapStateToProps)(Cart);