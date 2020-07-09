export default function (state = {}, action) {
   switch (action.type) {

      case("ALL_PRODUCTS"):
         return {...state, products: action.payload};

         case("GET_ALL_CATEGORIES"):
         return {...state, categories: action.payload};

         case("GET_PRODUCTS_IN_CATEGORY"):
         return {...state, list: action.payload};

         case("GET_COUNT_PRODUCTS_IN_CATEGORY"):
         return {...state, count: action.payload};

      default:
         return state;
   }
}