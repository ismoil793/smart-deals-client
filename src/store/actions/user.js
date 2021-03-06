import axios from "axios";
import {CLEAR_USER_REGISTER, URL, USER_AUTH, USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../types";

/*=============================
            User
===============================*/

export function registerUser(dataSubmit) {

   return async dispatch => {
      const request = axios.post(`${URL}/api/v1/account/create/`, dataSubmit)
          .then(response => {
             return response.data
          })
          .catch(e => {
             return {
                error: "Что-то пошло не так"
             }
          });

      dispatch({
         type: USER_REGISTER,
         payload: request
      })
   };
}

export function clearRegisterUser() {
   return {
      type: CLEAR_USER_REGISTER,
      payload: null
   }
}

export function loginUser({email, password}) {

   return async dispatch => {
      const request = await axios.post(`${URL}/api/v1/account/login/`, {email, password})
          .then(response => response.data).catch(e => {
             return {message: "Что-то пошло не так..."}
          });

      if (request && request.token) {
         localStorage.setItem("auth", JSON.stringify(request.token));
      }

      if (request.message) {
         dispatch({
            type: USER_LOGIN,
            payload: {...request, isAuth: false}
         })
      } else {
         dispatch({
            type: USER_LOGIN,
            payload: {...request, isAuth: true}
         })
      }
   };
}


export function logOutUser() {

   let isAuth = false;

   localStorage.removeItem("auth");

   return {
      type: USER_LOGOUT,
      payload: {isAuth}
   }
}

export function auth() {

   if (localStorage.getItem("auth") === null) {

      let isAuth = false;

      return {
         type: USER_AUTH,
         payload: {isAuth}
      }
   } else {
      const request = axios.get(
          `${URL}/api/v1/account/auth/`,
          {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
      ).then(response => response.data);

      return {
         type: USER_AUTH,
         payload: request
      }
   }


// else if (localStorage.getItem("auth").length > 15) {
//
//       return {
//          type: USER_AUTH,
//          payload: {isAuth: true}
//       }
//    }
}