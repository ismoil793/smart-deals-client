import axios from "axios";
import {
   ADD_TO_CART,
   REMOVE_FROM_CART,
   URL
} from "../types";

/*=============================
            Cart
===============================*/

export function addToCart(product) {

   const request = axios.get(`${URL}/api/v1/product/all/`).then(response => response.data);

   return {
      type: ADD_TO_CART,
      payload: request
   }
}


export function removeFromCart(product) {

   const request = axios.get(`${URL}/api/v1/product/all/`).then(response => response.data);

   return {
      type: REMOVE_FROM_CART,
      payload: request
   }
}
