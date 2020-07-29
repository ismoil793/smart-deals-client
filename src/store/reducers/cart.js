import {
   ADD_TO_CART, REMOVE_FROM_CART
} from "../types";

const initialState = {
};

export default function (state = initialState, action) {
   switch (action.type) {

      case(ADD_TO_CART):
         return {...state, products: action.payload};

      case(REMOVE_FROM_CART):
         return {...state, products: action.payload};


      default:
         return state;
   }
}