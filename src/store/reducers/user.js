import {CLEAR_USER_REGISTER, USER_AUTH, USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../types";

export default function (state = {}, action) {
   switch (action.type) {

      case(USER_AUTH):
         return {...state, authLogin: action.payload};

      case(USER_REGISTER):
         return {...state, userRegister: action.payload};

      case(CLEAR_USER_REGISTER):
         return {...state, userRegister: action.payload};

      case(USER_LOGIN):
         return {...state, login: action.payload};

      case(USER_LOGOUT):
         return {...state, authLogin: action.payload};

      default:
         return state;
   }
}