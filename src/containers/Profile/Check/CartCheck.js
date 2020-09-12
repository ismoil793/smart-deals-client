import React, {Component} from 'react';
import HelmetTitle from "../../../UI/Helmet/Title";

class CartCheck extends Component {
   render() {
      return (
          <section className="cart-check-section">

             <HelmetTitle title="Чек на заказ" content="Чек на заказ"/>

             <div className="container">

                <div className="row">
                   <div className="col-12">
                      <h4>Оформление заказа</h4>
                   </div>
                </div>

                <div className="row">
                   <div className="col-6">

                      <div className="card check-wrapper p-2">
                         <div className="check-content">
                            <strong>Заказ <small>SD#1312312</small></strong>
                            <p className="date">Дата: 02.09.2020</p>
                            <p><span className="check-status">Статус заказа:</span> ожидается оплата</p>
                            <p>Заказ от: <em>"The Coca Cola company"</em> - ismoil.793@gmail.com</p>

                            <ol>
                               <li>Bliss сочное яблоко 1л * 10 <strong>x2</strong></li>
                            </ol>

                            <p>
                               <strong>Адрес доставки: </strong>
                               11 Нотариальная контора Юнусабадского района, г. Ташкент
                            </p>
                            <hr/>
                            <p><strong> Итого:</strong> <span className="price">256 480 сум</span></p>
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
}

export default CartCheck;