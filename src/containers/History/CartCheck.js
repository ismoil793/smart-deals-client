import React, {Component} from 'react';
import HelmetTitle from "../../UI/Helmet/Title";
import {connect} from "react-redux";
import {fetchOrder} from "../../store/actions/order";
import Loader from "../../UI/Preloader/loader";
import PriceRefactor from "../../UI/Refactors/PriceRefactor";
import {countTotalPrice} from "../../UI/Refactors/Counters";


class CartCheck extends Component {

   componentDidMount() {
      this.props.dispatch(fetchOrder(this.props.match.params.id))
   }

   renderOrders = (orders) => (
       orders.length ?
           orders.map((item, i) => (
               <li key={item.id + i}>
                  <div className="row">
                     <div className="col-8">
                        {item.name} 1л * 10
                        <strong> x2</strong>
                     </div>
                     <div className="col-4">
                        <span>&nbsp;(<PriceRefactor price={item.total_price} /> сум)</span>
                     </div>
                  </div>
               </li>
           ))
           : null
   );

   render() {

      if(this.props.order.order && this.props.order.order.user) {
         const order = this.props.order.order;
         return (
             <section className="cart-check-section">

                <HelmetTitle title="Чек на заказ" content="Чек на заказ"/>

                <div className="container">

                   <div className="row">
                      <div className="col-12">
                         <h4>Чек к заказу SD#{order.history_id}</h4>
                      </div>
                   </div>

                   <div className="row">
                      <div className="col-6">

                         <div className="card check-wrapper p-2">
                            <div className="check-content">
                               <strong>Заказ <small>SD#{order.history_id}</small></strong>
                               <p className="date">Дата оформления: {order.delivery_date}</p>
                               <p className="date">Дата доставки: {order.delivery_date}</p>
                               <p><span className="check-status">Статус заказа:</span> {order.status}</p>
                               <p>Заказ от: <em>"{order.name}"</em> - {order.email}</p>

                               <ol>
                                  {this.renderOrders(order.products)}
                               </ol>

                               <p>
                                  <strong>Адрес доставки: </strong>
                                  {order.address}
                               </p>
                               <p>
                                  Комментарий к заказу: {order.comment}
                               </p>
                               <hr/>
                               <p>
                                  <strong> Итого: &nbsp;</strong>
                                  <span className="price">
                                     <PriceRefactor price={countTotalPrice(order.products)} />
                                     &nbsp;сум
                                  </span>
                               </p>
                            </div>
                         </div>

                      </div>
                      <div className="col-6">
                         <div className="sd-payment card bg-light p-2 h-100">
                            <p>Расчётный счёт на оплату: 12345678912345678901</p>
                            <p>Компания: "ООО Smart Deals"</p>
                            <p>ИНН: 1234567891</p>
                         </div>
                      </div>
                   </div>

                   <div className="row">
                      <div className="col-12">
                         <div className="alert alert-secondary mt-3">
                            Внимание! Отсчёт времени доставки товаров начинается после
                            подтверждения и полной оплаты заказа.
                         </div>
                      </div>
                   </div>
                </div>


             </section>
         );
      }
      else {
         return <Loader/>
      }


   }
}
function mapStateToProps(state) {
   return {
      order: state.order_r
   }
}

export default connect(mapStateToProps)(CartCheck);