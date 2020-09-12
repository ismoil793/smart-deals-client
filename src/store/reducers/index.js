import {combineReducers} from "redux";
import user_r from "./user";
import product_r from "./product";
import cart_r from "./cart";
import order_r from "./order"

const rootReducer = combineReducers({
   user_r,
   product_r,
   cart_r,
   order_r
});

export default rootReducer;