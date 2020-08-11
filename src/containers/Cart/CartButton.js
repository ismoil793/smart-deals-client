import React, {Component} from 'react';
import {FiShoppingCart} from "react-icons/fi"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import ProductNameRefactor from "../../UI/Refactors/ProductNameRefactor";
import {clearCart, getCart} from "../../store/actions/cart";
import PriceRefactor from "../../UI/Refactors/PriceRefactor";

class CartButton extends Component {

   state = {
      isCartOpen: false
   };

   componentDidMount() {
      if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
         this.props.dispatch(getCart());
      }
   }

   componentWillUnmount() {
      this.props.dispatch(clearCart())
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
         this.props.dispatch(getCart());
      }
   }

   countAllInCart = (products) => {
      let count = 0;

      products.forEach((p) => {
         count += p.pack_quantity;
      });
      return count;
   };

   countTotalPrice = (products) => {
      let total = 0;

      products.forEach((p) => {
         total += p.total_price;
      });
      return total;
   };

   renderCartElements = (elements) => {
      return elements.map((item, i) => (
          <li className="clearfix" key={i}>
             <img src={`${item.image}`} alt={item.name}/>
             <span className="item-name"><ProductNameRefactor name={item.name} chars={30}/></span>
             <span className="item-price"><PriceRefactor price={item.total_price}/> сум</span>
             <span className="item-quantity">Кол-во: {item.pack_quantity}</span>
          </li>
      ))
   };

   render() {

      if (this.props.cart && this.props.cart.cart) {

         const cart = this.props.cart.cart;

         if (cart.products && cart.products[0])

            return (
                <div className="cart-button-shop-cart-wrapper">
                   <div
                       onClick={() => this.setState({isCartOpen: !this.state.isCartOpen})}
                       className={`cart-button ${cart.products[0] ? 'active' : ''}`}
                       title="Корзина"
                   >
                      <FiShoppingCart/>
                      <span className="after">{this.countAllInCart(cart.products)}</span>
                   </div>

                   {
                      this.state.isCartOpen ?
                          <div className="shop-cart">
                             <div className="shopping-cart">
                                <div className="shopping-cart-header">
                                   <FiShoppingCart/> <span className="badge">{this.countAllInCart(cart.products)}</span>
                                   <div className="shopping-cart-close"
                                        onClick={() => this.setState({isCartOpen: !this.state.isCartOpen})}>
                                      <AiOutlineCloseCircle/>
                                   </div>
                                   <div className="shopping-cart-total">
                                      <span className="lighter-text">Итого: </span>
                                      <span className="main-color-text">
                                         <PriceRefactor price={this.countTotalPrice(cart.products)}/> сум
                                      </span>
                                   </div>
                                </div>
                                {/*end shopping-cart-header */}

                                <ul className="shopping-cart-items">

                                   {this.renderCartElements(cart.products)}

                                </ul>

                                <Link to={"/cart"} className="button">Перейти в корзину</Link>
                             </div>
                             {/*end shopping-cart */}
                          </div>
                          : null
                   }


                </div>
            );
      }
      return null
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r,
      cart: state.cart_r
   }
}

export default connect(mapStateToProps)(CartButton);