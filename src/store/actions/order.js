import axios from "axios";
import {
   CONFIRM_ORDER,
   FETCH_ORDER_ALL,
   FETCH_ORDER,
   URL
} from "../types";

/*=============================
           Checkout
===============================*/

// Adding to cart
export function confirmOrder(data) {
   return async dispatch => {
      try {
         const request = await axios.post(
             `${URL}/api/v1/cart/add/`,
             data,
             {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
         ).then(response => response.data);
         dispatch({
            type: CONFIRM_ORDER,
            payload: request
         })
      } catch (e) {
         // dispatch(addToCartError(e))
         console.log(e)
      }
   }
}

export function fetchOrder(id) {
   const request = axios.get(
       `${URL}/api/v1/cart/get/`,
       {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
   ).then(response => response.data);

   return {
      type: FETCH_ORDER,
      payload: request
   }
}

export function fetchOrderAll() {
   const request = axios.get(
       `${URL}/api/v1/cart/history/get/all/`,
       {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
   ).then(response => response.data);

   return {
      type: FETCH_ORDER_ALL,
      payload: request
   }
}
