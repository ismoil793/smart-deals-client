import React, {Component} from 'react';
import {connect} from "react-redux"
import HelmetTitle from "../../UI/Helmet/Title"
import {Link} from "react-router-dom";
import {fetchOrderAll} from "../../store/actions/order";
import PriceRefactor from "../../UI/Refactors/PriceRefactor";

class UserProfile extends Component {


   componentDidMount() {
      this.props.dispatch(fetchOrderAll())
   }

   renderOrdersHistory = (list) => {
      if (list.length) {
         return list.map((item, i) => (
             <tr key={i}>
                <th scope="row">{item.history_id}</th>
                <td><PriceRefactor price={item.total_price_sum} /> сум</td>
                <td>{item.delivery_date}</td>
                <td>{item.status}</td>
                <td><Link to={`/profile/check/${item.history_id}`} className="btn btn-secondary">Подробнее</Link></td>
             </tr>
         ))
      } else {
         return null
      }
   };

   render() {
      return (
          <section className="user-profile">

             <HelmetTitle title="Личный кабинет Smart Deals" content="Личный кабинет Smart Deals"/>

             <div className="container">
                <div className="row">

                   <div className="col-lg-4">
                      <div className="user_container">

                         {/*<div className="avatar">*/}
                         {/*   <img src="/images/avatar.png" alt="avatar"/>*/}
                         {/*</div>*/}

                         {
                            this.props.user.authLogin && this.props.user.authLogin.organization ?
                                <div className="info">
                                   <div>
                                      <span>Организация: </span>
                                      "{this.props.user.authLogin.organization}"
                                      &nbsp;&nbsp;
                                      <span>ТМ:</span> ({this.props.user.authLogin.trade_mark})
                                   </div>
                                   <div>
                                      <span>Пользователь: </span>
                                      {this.props.user.authLogin.first_name}&nbsp;
                                      {this.props.user.authLogin.last_name}
                                   </div>
                                   <div><span>ИНН компании: </span>{this.props.user.authLogin.itn}</div>
                                   <div><span>Email: </span>{this.props.user.authLogin.email}</div>
                                </div>
                                : null
                         }
                      </div>
                   </div>

                   <div className="col-lg-8">
                      <div className="profile-orders-wrapper">
                         <h4>Мои заказы</h4>
                         <div className="profile-orders">
                            <table className="table">
                               <thead>
                               <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Сумма</th>
                                  <th scope="col">Дата</th>
                                  <th scope="col">Статус</th>
                                  <th scope="col"></th>
                               </tr>
                               </thead>
                               <tbody>
                               {
                                  this.props.user.authLogin && this.props.user.authLogin.organization
                                  && this.props.order.orders && this.props.order.orders.history
                                      ? this.renderOrdersHistory(this.props.order.orders.history)
                                      : null
                               }
                               </tbody>
                            </table>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </section>
      );
   }
}


function mapStateToProps(state) {
   return {
      user: state.user_r,
      order: state.order_r
   }
}

export default connect(mapStateToProps)(UserProfile);