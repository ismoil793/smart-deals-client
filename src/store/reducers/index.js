import {combineReducers} from "redux";
import user_r from "./user";
import product_r from "./product";
import cart_r from "./cart"

const rootReducer = combineReducers({
   user_r,
   product_r,
   cart_r
});

export default rootReducer;