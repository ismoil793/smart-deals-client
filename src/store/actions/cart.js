import axios from "axios";
import {
   ADD_TO_CART_START,
   ADD_TO_CART_SUCCESS,
   CLEAR_CART,
   DELETE_FROM_CART_START,
   DELETE_FROM_CART_SUCCESS,
   GET_CART,
   REMOVE_FROM_CART_START,
   REMOVE_FROM_CART_SUCCESS,
   URL
} from "../types";

/*=============================
            Cart
===============================*/

// Adding to cart
export function addToCart(product_id) {
   return async dispatch => {
      dispatch(addToCartStart());
      try {
         const request = await axios.post(
             `${URL}/api/v1/cart/add/`,
             {product_id},
             {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
         ).then(response => response.data);

         dispatch(addToCartSuccess(request))
      } catch (e) {
         // dispatch(addToCartError(e))
         console.log(e)
      }
   }
}

export function addToCartStart() {
   return {
      type: ADD_TO_CART_START
   }
}

export function addToCartSuccess(request1) {

   return async dispatch => {
      const request2 = await axios.get(
          `${URL}/api/v1/cart/get/`,
          {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
      ).then(response => response.data);

      dispatch({
         type: ADD_TO_CART_SUCCESS,
         payload: {request1, request2}
      })
   }
}

// export function addToCartError(e) {
// }

// Getting from cart
export function getCart() {
   const request = axios.get(
       `${URL}/api/v1/cart/get/`,
       {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
       ).then(response => response.data);

   return {
      type: GET_CART,
      payload: request
   }
}

// Clear Cart
export function clearCart() {
   return {
      type: CLEAR_CART,
      payload: null
   }
}

// Removing from cart
export function removeFromCart(product_id) {
   return async dispatch => {
      dispatch(removeFromCartStart());
      try {
         const request = await axios.post(
             `${URL}/api/v1/cart/remove/`,
             {product_id},
             {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
         ).then(response => response.data);

         dispatch(removeFromCartSuccess(request))
      } catch (e) {
         console.log(e)
      }
   }
}
export function removeFromCartStart() {
   return {
      type: REMOVE_FROM_CART_START
   }
}

export function removeFromCartSuccess(request1) {

   return async dispatch => {
      const request2 = await axios.get(
          `${URL}/api/v1/cart/get/`,
          {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
      ).then(response => response.data);

      dispatch({
         type: REMOVE_FROM_CART_SUCCESS,
         payload: {request1, request2}
      })
   };
}


// Delete from cart
export function deleteFromCart(product_id) {
   return async dispatch => {
      dispatch(deleteFromCartStart());
      try {
         const request = await axios.post(
             `${URL}/api/v1/cart/delete/`,
             {product_id},
             {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
         ).then(response => response.data);

         dispatch(deleteFromCartSuccess(request))
      } catch (e) {
         console.log(e)
      }
   }
}

export function deleteFromCartStart() {
   return {
      type: DELETE_FROM_CART_START
   }
}

export function deleteFromCartSuccess(request1) {

   return async dispatch => {
      const request2 = await axios.get(
          `${URL}/api/v1/cart/get/`,
          {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
      ).then(response => response.data);

      dispatch({
         type: DELETE_FROM_CART_SUCCESS,
         payload: {request1, request2}
      })
   };
}