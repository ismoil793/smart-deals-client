import {
   ALL_PRODUCTS, CLEAR_PRODUCT,
   CLEAR_PRODUCTS_IN_CATEGORY,
   GET_ALL_CATEGORIES,
   GET_COUNT_PRODUCTS_IN_CATEGORY, GET_PRODUCT,
   GET_PRODUCTS_IN_CATEGORY, GET_PRODUCTS_IN_CATEGORY_LOADING, GET_SEARCH_PRODUCTS
} from "../types";

const initialState = {
   loading: true, // product in category loading
   getting: false
};

export default function (state = initialState, action) {
   switch (action.type) {

      case(ALL_PRODUCTS):
         return {...state, products: action.payload};

      case(GET_PRODUCT):
         return {...state, oneProduct: action.payload};

      case(CLEAR_PRODUCT):
         return {...state, oneProduct: action.payload};

      case(GET_ALL_CATEGORIES):
         return {...state, categories: action.payload};

      case(GET_PRODUCTS_IN_CATEGORY):
         return {
            ...state,
            list: action.payload.list,
            loading: action.payload.loading
         };

      case(GET_PRODUCTS_IN_CATEGORY_LOADING):
         return {...state, getting: action.payload};

      case(GET_SEARCH_PRODUCTS):
         return {
            ...state,
            list: action.payload.list,
            loading: action.payload.loading
         };

      case(CLEAR_PRODUCTS_IN_CATEGORY):
         return {...state, list: action.payload};

      case(GET_COUNT_PRODUCTS_IN_CATEGORY):
         return {...state, count: action.payload};

      default:
         return state;
   }
}