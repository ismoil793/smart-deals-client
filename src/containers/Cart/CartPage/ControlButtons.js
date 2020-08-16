import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from "react-notifications";
import {addToCart, deleteFromCart, removeFromCart} from "../../../store/actions/cart";
import {connect} from "react-redux";
import {AiFillPlusCircle, AiFillMinusCircle, AiFillDelete} from "react-icons/ai"
import ReactTooltip from "react-tooltip";

class ControlButtons extends Component {

   createNotification = (msg) => {
      if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
         if (!this.props.cart.deleting) {
            return () => {
               NotificationManager.warning(msg, '', 1500);
            };
         }
      }
   };

   render() {
      return (
          <React.Fragment>
             <div>
                <button
                    data-tip="Добавить"
                    onClick={() => {
                       // delete product from cart btn
                       if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
                          if (!this.props.cart.adding) {
                             this.props.dispatch(addToCart(this.props.item.id))
                          }
                       } else {
                          this.props.history.push('/login')
                       }
                    }}
                    className="btn btn-info control-buttons"
                ><AiFillPlusCircle/>
                   <ReactTooltip place="bottom" type="dark" effect="solid"/>
                </button>

                <button
                    data-tip="Удалить"
                    onClick={() => {
                       // delete product from cart btn
                       if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
                          if (!this.props.cart.removing) {
                             this.props.dispatch(removeFromCart(this.props.item.id))
                          }
                       } else {
                          this.props.history.push('/login')
                       }
                    }}
                    className="btn btn-success control-buttons"
                ><AiFillMinusCircle/>
                   <ReactTooltip place="bottom" type="dark" effect="solid"/>
                </button>

                <button
                    data-tip="Очистить"
                    onClickCapture={this.createNotification('Продукт удалён из корзины')}
                    onClick={() => {
                       // delete product from cart btn
                       if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
                          if (!this.props.cart.deleting) {
                             this.props.dispatch(deleteFromCart(this.props.item.id))
                          }
                       } else {
                          this.props.history.push('/login')
                       }
                    }}
                    className="btn btn-danger control-buttons"
                ><AiFillDelete/>
                   <ReactTooltip place="bottom" type="dark" effect="solid"/>
                </button>
             </div>

             <div>
                <NotificationContainer enterTimeout={300} leaveTimeout={300}/>
             </div>
          </React.Fragment>
      );
   }
}


function mapStateToProps(state) {
   return {
      user: state.user_r,
      cart: state.cart_r
   }
}

export default connect(mapStateToProps)(ControlButtons);