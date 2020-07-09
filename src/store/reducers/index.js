import {combineReducers} from "redux";
import post_r from "./post";
import user_r from "./user";
import product_r from "./product";

const rootReducer = combineReducers({
   post_r,
   user_r,
   product_r
});

export default rootReducer;