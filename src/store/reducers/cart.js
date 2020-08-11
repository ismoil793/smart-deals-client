import {
   ADD_TO_CART_START,
   ADD_TO_CART_SUCCESS,
   CLEAR_CART,
   DELETE_FROM_CART_SUCCESS,
   DELETE_FROM_CART_START,
   GET_CART,
   REMOVE_FROM_CART
} from "../types";

const initialState = {
   adding: false,  // if add to cart btn is pressed
   deleting: false,  // if delete from cart btn is pressed
};

export default function (state = initialState, action) {
   switch (action.type) {

      case(GET_CART):
         return {...state, cart: action.payload};

      case(CLEAR_CART):
         return {...state, cart: action.payload};

      case(DELETE_FROM_CART_START):
         return {...state, deleting: true};

      case(DELETE_FROM_CART_SUCCESS):
         return {...state, deleting: false};

      case(ADD_TO_CART_START):
         return {...state, adding: true};

      case(ADD_TO_CART_SUCCESS):
         return {...state, adding: false};

      case(REMOVE_FROM_CART):
         return {...state, products: action.payload};


      default:
         return state;
   }
}