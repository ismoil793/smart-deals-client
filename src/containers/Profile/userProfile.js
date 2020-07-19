import React, {Component} from 'react';
import {connect} from "react-redux"

class UserProfile extends Component {

   render() {

      return (
          <section className="user-profile">
             <div className="container">
                <div className="row">
                   <div className="col-lg-12">

                      <div className="user_container">
                         <div className="avatar">
                            <img src="/images/avatar.png" alt="avatar"/>
                         </div>
                         <div className="info text-center">
                            <div>
                               <span>Организация: </span>
                               {this.props.user.authLogin.organization}
                               &nbsp;&nbsp;
                               ТМ: ({this.props.user.authLogin.trade_mark})
                            </div>
                            <div>
                               <span>Пользователь: </span>
                               {this.props.user.authLogin.first_name}&nbsp;
                               {this.props.user.authLogin.last_name}
                            </div>
                            <div><span>ИНН компании: </span>{this.props.user.authLogin.itn}</div>
                            <div><span>Email: </span>{this.props.user.authLogin.email}</div>
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
      user_r: state.user_r
   }
}

export default connect(mapStateToProps)(UserProfile);