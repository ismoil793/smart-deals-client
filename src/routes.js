import React from 'react';
import {Switch, Route} from "react-router-dom";

import NotFound from "./components/404/NotFound";
import Home from "./components/Home/Home";
import Login from "./containers/Login_Logout/Login";
import Logout from "./containers/Login_Logout/Logout";
import Cart from "./containers/Cart/CartPage/Cart";
import About from "./components/About/about";
import Contacts from "./components/Contacts/contacts";
import Register from "./containers/Register/register";
import Rules from "./components/Rules/rules";
import Products from "./containers/Products/products";
import ProductsDetail from "./containers/ProductsDetail/productsDetail";
import UserProfile from "./containers/Profile/userProfile";

import Auth from "./hoc/auth";
import Layout from "./hoc/layout";

const Routes = () => {
   return (
       <Layout>
          <Switch>
             <Route path="/login" exact component={Auth(Login, false)}/>
             <Route path="/logout" exact component={Auth(Logout, true)}/>
             {/*<Route path="/addPost" exact component={Auth(AddPost, true)} />*/}
             {/*<Route path="/product/:id" exact component={Auth(ProductsDetail, true)} />*/}
             {/*<Route path="/list/products" exact component={Auth(ManageProducts, true)} />*/}
             {/*<Route path="/products" exact component={Auth(Products_c, null)} />*/}
             <Route path="/about" exact component={Auth(About, null)}/>
             <Route path="/register" exact component={Auth(Register, false)}/>
             <Route path="/contacts" exact component={Auth(Contacts, null)}/>
             <Route path="/rules" exact component={Auth(Rules, null)}/>
             <Route path="/profile" exact component={Auth(UserProfile, true)}/>
             <Route path="/cart" exact component={Auth(Cart, true)}/>
             <Route path="/products/:slug/:id" exact component={Auth(ProductsDetail, true)}/>
             <Route path="/products/:slug" exact component={Auth(Products, null)}/>
             <Route path="/" exact component={Auth(Home, null)}/>
             <Route path="*" component={Auth(NotFound, null)}/>
          </Switch>
       </Layout>
   );
};

export default Routes;