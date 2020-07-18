import axios from "axios";
import {URL, USER_AUTH, USER_LOGIN, USER_LOGOUT, USER_REGISTER} from "../types";

/*=============================
            User
===============================*/

export function registerUser(data) {
   const request = axios.post(`${URL}/api/v1/account/create/`, data).then(response => response.data);

   return {
      type: USER_REGISTER,
      payload: request
   }
}

export function loginUser({email, password}) {

   return async dispatch => {
      const request = await axios.post(`${URL}/api/v1/account/login/`, {email, password})
          .then(response => response.data);
      localStorage.setItem("auth", JSON.stringify(request.token));


      dispatch({
         type: USER_LOGIN,
         payload: {...request, isAuth: true}
      })
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
}