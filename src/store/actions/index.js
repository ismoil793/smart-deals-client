import axios from "axios";

const URL = 'https://b9baa8a666d9.ngrok.io';

// return async dispatch => {
//    const posts = await DB.getPosts()
//    dispatch({
//       type: "LOAD_POSTS",
//       payload: posts
//    })
// }


/*=============================
            Products
===============================*/

export function getProducts() {

   return async dispatch => {
      const request = await axios.get(`${URL}/api/v1/product/all/`).then(response => response.data)

      dispatch({
         type: "ALL_PRODUCTS",
         payload: request
      })

   }
}


export function getProductsInCategory(slug, limit = 10, start = 0, list = "") {

   const request = axios.get(
       `${URL}/api/v1/product/${slug}/all/?limit=${limit}&skip=${start}`)
       .then(response => {

          if (list) {
             return [...list, ...response.data]
          } else {
             return response.data
          }

       });

   return {
      type: "GET_PRODUCTS_IN_CATEGORY",
      payload: request
   }
}

export function getCountProductCategory(slug = 'napitki') {

   return async dispatch => {
      const request = await axios.get(`${URL}/api/v1/product/${slug}/count/`).then(response => response.data);

      dispatch({
         type: "GET_COUNT_PRODUCTS_IN_CATEGORY",
         payload: request.count
      })

   }
}


export function getCategories() {
   const request = axios.get(`${URL}/api/v1/category/all/`).then(response => response.data);

   return {
      type: "GET_ALL_CATEGORIES",
      payload: request
   }
}

/*=============================
            User
===============================*/


export function registerUser(data) {
   const request = axios.post(`${URL}/api/v1/account/create/`, data).then(response => response.data);

   return {
      type: "USER_REGISTER",
      payload: request
   }
}

export function loginUser({email, password}) {

   return async dispatch => {
      const request = await axios.post(`${URL}/api/v1/account/login/`, {email, password})
          .then(response => response.data);
      localStorage.setItem("auth", JSON.stringify(request.token));


      dispatch({
         type: "USER_LOGIN",
         payload: {...request, isAuth: true}
      })
   };
}


export function logOutUser() {

   let isAuth = false;

   localStorage.removeItem("auth");

   return {
      type: "USER_LOGOUT",
      payload: {isAuth}
   }
}

export function auth() {

   if (localStorage.getItem("auth") === null) {

      let isAuth = false;

      return {
         type: "USER_AUTH",
         payload: {isAuth}
      }
   } else {
      const request = axios.get(
          `${URL}/api/v1/account/auth/`,
          {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`}}
      ).then(response => response.data);

      return {
         type: "USER_AUTH",
         payload: request
      }
   }
}


export function addPost(postData) {
   const request = axios.post("/api/post", postData)
       .then(response => response.data);

   return {
      type: "ADD_POST",
      payload: request
   }
}

export function clearPost() {
   return {
      type: "CLEAR_POST",
      payload: null
   }
}


export function getPost(id) {
   const request = axios.get(`/api/getPost?id=${id}`)
       .then(response => response.data)

   return {
      type: "GET_POST",
      payload: request
   }

}

export function postClear() {
   return {
      type: "POST_CLEAR",
      payload: null
   }
}


export function getPosts(limit = 10, start = 0, order = "asc", list = "") {

   const request = axios.get(`/api/posts/?limit=${limit}&skip=${start}&order=${order}`)
       .then(response => {
          if (list) {
             return [...list, ...response.data]
          } else {
             return response.data
          }
       });

   return {
      type: "GET_POSTS",
      payload: request
   }
}


export function getPostsCount() {
   const request = axios.get(`/api/postsCount`)
       .then(response => {
          return response.data
       });

   return {
      type: "GET_POSTS_COUNT",
      payload: request
   }
}


export function getAllPosts() {
   const request = axios.get('/api/getAllPosts')
       .then(response => response.data)

   return {
      type: "GET_ALL_POSTS",
      payload: request
   }
}

export function deletePost(id) {
   const request = axios.delete(`/api/delete_post?id=${id}`)
       .then(response => response.data);

   return {
      type: "DELETE_POST",
      payload: request
   }
}