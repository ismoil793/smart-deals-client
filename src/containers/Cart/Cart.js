import React, {Component} from 'react';
import ReactDatePicker from "../../UI/ReactDatePicker/ReactDatePicker";

class Cart extends Component {
   render() {
      return (
          <div className="container">
             <div className="row">
                <div className="col-lg-12">

                   <div className="cart">
                      Cart
                      <ReactDatePicker />
                   </div>

                </div>
             </div>
          </div>
      );
   }
}

export default Cart;