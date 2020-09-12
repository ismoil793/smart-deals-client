import {
   CONFIRM_ORDER,
   FETCH_ORDER_ALL,
   FETCH_ORDER
} from "../types";

const initialState = {};

export default function (state = initialState, action) {
   switch (action.type) {

      case(FETCH_ORDER):
         return {...state, order: action.payload};

      case(FETCH_ORDER_ALL):
         return {...state, orders: action.payload};

      case(CONFIRM_ORDER):
         return {...state, checkout: action.payload};

      default:
         return state;
   }
}