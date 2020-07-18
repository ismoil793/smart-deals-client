import axios from "axios";
import {
   ALL_PRODUCTS, CLEAR_PRODUCT,
   CLEAR_PRODUCTS_IN_CATEGORY, GET_ALL_CATEGORIES,
   GET_COUNT_PRODUCTS_IN_CATEGORY, GET_PRODUCT,
   GET_PRODUCTS_IN_CATEGORY, GET_SEARCH_PRODUCTS,
   URL
} from "../types";

/*=============================
            Products
===============================*/

export function getAllProducts() {

   return async dispatch => {
      const request = await axios.get(`${URL}/api/v1/product/all/`).then(response => response.data)

      dispatch({
         type: ALL_PRODUCTS,
         payload: request
      })

   }
}


export function getProductsInCategory(slug, limit = 10, start = 0, list = "") {

   const request = axios.get(
       `${URL}/api/v1/product/${slug}/all/?limit=${limit}&skip=${start}`)
       .then(response => {

          if (list) {
             return {
                list: [...list, ...response.data],
                loading: false
             }
          } else {
             return {
                list: response.data,
                loading: false
             }
          }

       });

   return {
      type: GET_PRODUCTS_IN_CATEGORY,
      payload: request
   }
}

export function clearProductsInCategory() {
   return {
      type: CLEAR_PRODUCTS_IN_CATEGORY,
      payload: null
   }
}

export function getCountProductCategory(slug = 'napitki') {

   return async dispatch => {
      const request = await axios.get(`${URL}/api/v1/product/${slug}/count/`).then(response => response.data);

      dispatch({
         type: GET_COUNT_PRODUCTS_IN_CATEGORY,
         payload: request.count
      })

   }
}

export function getProduct(slug, id) {
   const request = axios.get(`${URL}/api/v1/product/${slug}/${id}/`)
       .then(response => response.data);

   return {
      type: GET_PRODUCT,
      payload: request
   }
}

export function clearProduct() {
   return {
      type: CLEAR_PRODUCT,
      payload: null
   }
}

export function getCategories() {
   const request = axios.get(`${URL}/api/v1/category/all/`).then(response => response.data);

   return {
      type: GET_ALL_CATEGORIES,
      payload: request
   }
}

export function getSearchProducts(search) {

   const request = axios.get(`${URL}/api/v1/product/all/?q=${search}`)
       .then(response => {
          return {
             list: response.data,
             loading: false
          }
       });

   return {
      type: GET_SEARCH_PRODUCTS,
      payload: request
   }

}