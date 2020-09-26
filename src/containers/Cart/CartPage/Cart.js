import React, {Component} from 'react';
import ReactDatePicker from "../../../UI/ReactDatePicker/ReactDatePicker";
import {connect} from "react-redux";
import HelmetTitle from "../../../UI/Helmet/Title"
import {clearCart, getCart} from "../../../store/actions/cart";
import PriceRefactor from "../../../UI/Refactors/PriceRefactor";
import ControlButtons from "./ControlButtons";
import {countTotalPrice} from "../../../UI/Refactors/Counters";
import {convertDate} from "../../../UI/Refactors/DateFormatters";
import {Modal} from 'react-responsive-modal';
import Loader from "../../../UI/Preloader/loader";
import {clearConfirmOrder, confirmOrder} from "../../../store/actions/order";
import {NotificationContainer, NotificationManager} from "react-notifications";

class Cart extends Component {

   state = {
      delivery_date: null,
      comment: "",
      address: "",
      isModalOpen: false,
      checkoutSuccess: false
   };

   createNotification = (msg) => {
      // if (this.state.checkoutSuccess) {
      return () => {
         NotificationManager.success(msg, '', 1500);
      };
      // }
   };

   componentDidMount() {
      if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
         this.props.dispatch(getCart());
      }
   }

   static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.order.checkout && nextProps.order.checkout.checkout) {
         nextProps.dispatch(clearConfirmOrder());
         setTimeout(() => {
            nextProps.history.push("/profile");
         }, 1000);
         return ({checkoutSuccess: true})
      }
      return null
   }

   getDate = (date) => {
      const formattedDate = convertDate(date);
      this.setState({delivery_date: formattedDate})
   };

   submitOrder = () => {
      const {delivery_date, comment, address} = this.state;
      if (address.trim().length === 0) {
         alert("Форма не прошла валидацию")
      } else {
         console.log(typeof(delivery_date))
         this.props.dispatch(confirmOrder({delivery_date, comment, address}));
         this.props.dispatch(clearCart());
         this.clearOrder()
      }
   };

   confirmOrderModal = (e) => {
      e.preventDefault();
      this.setState({isModalOpen: true})
   };

   handleInputChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
   };

   clearOrder = () => {
      this.setState({
         delivery_date: "",
         comment: "",
         address: "",
         isModalOpen: false
      })
   };

   renderTableRows = (products) => (
       products.map((item, i) => (
           <tr key={i}>
              <td><img width={'200px'} height={'auto'} src={`${item.image}`} alt={item.name}/></td>
              <td>{item.trade_mark} {item.name}</td>
              <td><PriceRefactor price={item.total_price}/> сум</td>
              <td>{item.pack_quantity}</td>
              <td>
                 <ControlButtons item={item}/>
              </td>
           </tr>
       ))
   );

   render() {

      if (!this.props.cart.cart) {
         return <Loader/>
      }

      if (this.props.cart.cart && this.props.cart.cart.products
          && this.props.cart.cart.products.length) {

         const cart = this.props.cart.cart;

         return (
             <section className="cart-section">
                <div className="container">

                   <HelmetTitle title="Корзина Smart Deals" content="Оформление заказа"/>

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
                                           <PriceRefactor price={countTotalPrice(cart.products)}/> сум
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
                            <ReactDatePicker getDate={this.getDate}/>
                         </div>

                      </div>
                      <div className="col-md-6">

                         <h4>Комментарий к заказу</h4>
                         <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                               <label htmlFor="address">Ваш адрес</label>
                               <input
                                   className="form-control"
                                   type="text" id="address"
                                   name="address"
                                   placeholder="Адрес ..."
                                   minLength={5}
                                   value={this.state.address}
                                   onChange={this.handleInputChange}
                                   required
                               />
                            </div>
                            <textarea
                                name="comment"
                                className="form-control"
                                id="comment"
                                cols="40"
                                rows="5"
                                placeholder="Ваш комментарий"
                                value={this.state.comment}
                                onChange={this.handleInputChange}
                            >
                            </textarea>
                         </form>

                         <button onClick={this.confirmOrderModal} className="btn btn-primary"> Оформить заказ</button>

                         <Modal
                             open={this.state.isModalOpen}
                             onClose={() => this.setState({isModalOpen: false})}

                             classNames={{
                                modal: 'cart-modal'
                             }}
                         >
                            <div className="confirmation-modal">

                               <div className="c-modal-header">
                                  <h5>Вы уверены что хотите оформить заказ?</h5>
                               </div>
                               <div className="c-modal-body">
                                  <button
                                      className="btn"
                                      onClick={this.submitOrder}
                                      onClickCapture={this.createNotification("Оформление прошло успешно")}
                                  >
                                     Подтвердить
                                  </button>
                                  <button
                                      className="btn"
                                      onClick={this.clearOrder}
                                      onClickCapture={this.createNotification("Оформление прошло успешно")}
                                  >
                                     Отменить
                                  </button>
                               </div>

                            </div>

                         </Modal>

                      </div>
                   </div>
                </div>

                <div>
                   <NotificationContainer enterTimeout={300} leaveTimeout={300}/>
                </div>

             </section>
         );
      } else return (
          <section className="cart-section">
             <div className="container pb-5">
                <div className="row pt-5 pb-5">
                   <div className="col-12 p-5">
                      <h3 className="mb-3">Корзина пуста</h3>
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
                         <tbody>
                         <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                         </tr>
                         </tbody>
                         <tbody>
                         <tr>
                            <td></td>
                            <td colSpan="2" className="text-right"></td>
                            <td colSpan="2">
                               <strong> Итого: &nbsp;
                                  0 сум
                               </strong>
                            </td>
                         </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
             </div>
             <div>
                <NotificationContainer enterTimeout={300} leaveTimeout={300}/>
             </div>
          </section>
      )
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r,
      cart: state.cart_r,
      order: state.order_r
   }
}

export default connect(mapStateToProps)(Cart);