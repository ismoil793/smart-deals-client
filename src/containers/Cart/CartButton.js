import React, {Component} from 'react';
import {FiShoppingCart} from "react-icons/fi"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import ProductNameRefactor from "../../UI/Refactors/ProductNameRefactor";
import {getCart} from "../../store/actions/cart";
import PriceRefactor from "../../UI/Refactors/PriceRefactor";
import {countTotalPrice, countTotalQuantity} from "../../UI/Refactors/Counters";

class CartButton extends Component {

   state = {
      isCartOpen: false
   };

   componentDidMount() {
      if (this.props.user.authLogin && this.props.user.authLogin.isAuth) {
         this.props.dispatch(getCart());
      }
   }

   // componentWillUnmount() {
   //    this.props.dispatch(clearCart())
   // }

   // shouldComponentUpdate(nextProps, nextState, nextContext) {
   //    console.log(this.props)
   //    console.log(nextProps)
   // }

   renderCartElements = (elements) => {
      return elements.map((item, i) => (
          <li className="clearfix" key={i}>
             <img src={`${item.image}`} alt={item.name}/>
             <span className="item-name"><ProductNameRefactor name={item.name} chars={30}/></span>
             <span className="item-price notranslate"><PriceRefactor price={item.total_price}/>&nbsp;сум</span>
             <span className="item-quantity notranslate">
                Кол-во:&nbsp;
                {item.pack_quantity}
             </span>
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
                      <span className="after notranslate">{countTotalQuantity(cart.products)}</span>
                   </div>

                   {
                      this.state.isCartOpen ?
                          <div className="shop-cart">
                             <div className="shopping-cart">
                                <div className="shopping-cart-header">
                                   <FiShoppingCart/>&nbsp;<span className="badge notranslate">
                                   {countTotalQuantity(cart.products)}
                                </span>
                                   <div className="shopping-cart-close"
                                        onClick={() => this.setState({isCartOpen: !this.state.isCartOpen})}>
                                      <AiOutlineCloseCircle/>
                                   </div>
                                   <div className="shopping-cart-total">
                                      <span className="lighter-text">Итого:&nbsp;</span>
                                      <span className="main-color-text">
                                         <PriceRefactor price={countTotalPrice(cart.products)}/>&nbsp;
                                         сум
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