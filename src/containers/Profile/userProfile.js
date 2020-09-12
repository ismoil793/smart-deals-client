import React, { Component } from 'react';
import { connect } from "react-redux"
import HelmetTitle from "../../UI/Helmet/Title"
import {Link} from "react-router-dom";

class UserProfile extends Component {

   render() {

      return (
         <section className="user-profile">

            <HelmetTitle title="Личный кабинет Smart Deals" content="Личный кабинет Smart Deals" />

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
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>154 000 сум</td>
                                    <td>28/07/2020</td>
                                    <td>Доставлено</td>
                                    <td><Link to="/profile/check/1" className="btn btn-secondary">Подробнее</Link></td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>102 800 сум</td>
                                    <td>14/07/2020</td>
                                    <td>Ожидается оплата</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>22 000 сум</td>
                                    <td>28/01/2020</td>
                                    <td>Закрыт</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">4</th>
                                    <td>32 000 сум</td>
                                    <td>07/06/2019</td>
                                    <td>Доставка</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">5</th>
                                    <td>972 217 сум</td>
                                    <td>14/05/2019</td>
                                    <td>Закрыт</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6</th>
                                    <td>1 981 340 сум</td>
                                    <td>02/03/2019</td>
                                    <td>Ожидается оплата</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6</th>
                                    <td>1 981 340 сум</td>
                                    <td>02/03/2019</td>
                                    <td>Ожидается оплата</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6</th>
                                    <td>1 981 340 сум</td>
                                    <td>02/03/2019</td>
                                    <td>Ожидается оплата</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6</th>
                                    <td>1 981 340 сум</td>
                                    <td>02/03/2019</td>
                                    <td>Ожидается оплата</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6</th>
                                    <td>1 981 340 сум</td>
                                    <td>02/03/2019</td>
                                    <td>Ожидается оплата</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">6</th>
                                    <td>1 981 340 сум</td>
                                    <td>02/03/2019</td>
                                    <td>Ожидается оплата</td>
                                 </tr>
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
      user_r: state.user_r,
      order_r: state.order_r
   }
}

export default connect(mapStateToProps)(UserProfile);