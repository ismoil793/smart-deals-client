import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {FaShoppingCart, FaBars} from "react-icons/fa";

const HeaderMainItems = (props) => {

   const publicLinks = [
      {
         type: "nav-item",
         text: "Продукты",
         to: "/products"
      },
      {
         type: "nav-item",
         text: "О нас",
         to: "/about"
      },
      {
         type: "nav-item",
         text: "Контакты",
         to: "/contacts"
      },
      {
         type: "nav-item",
         text: "Вход",
         to: "/login"
      },
      {
         type: "nav-item",
         text: "Регистрация",
         to: "/register"
      }
   ];

   const privateLinks = [
      {
         type: "nav-item",
         text: "Продукты",
         to: "/products"
      },
      {
         type: "nav-item",
         text: "мой Профиль",
         to: "/profile"
      },
      {
         type: "nav-item",
         text: "Выйти",
         to: "/logout"
      }
   ];

   const renderLinks = (links) => {

      return links.map((item, i) => {

         let active = "";

         if (props.location.pathname === item.to) {
            active = "active";
         }

         return (
             <li key={i} className={`nav-item ${active}`}>
                <Link to={item.to} className="nav-link">{item.text}</Link>
             </li>
         )
      })
   };

   return (
       <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar">
          <div className="container">
             <Link to="/" className="navbar-brand"><img className="sd-farm-logo" src="/images/SD.png"
                                                        alt="Smart Deals Logo"/></Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                     aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars/>
                <span>&nbsp;Меню</span>
             </button>

             <div className="collapse navbar-collapse" id="ftco-nav">


                {
                   props.user &&
                   props.user.authLogin &&
                   props.user.authLogin.isAuth ?

                       <ul className="navbar-nav ml-auto">

                          {renderLinks(privateLinks)}
                          {/*<li className="nav-item"><Link to="/list/products" className="nav-link">Список*/}
                          {/*   товаров</Link></li>*/}
                          {/*<li className="nav-item"><Link to="/addPost" className="nav-link">Добавить пост</Link>*/}
                          {/*</li>*/}
                          {/*<li className="nav-item"><Link to="/logout" className="nav-link">Выйти</Link></li>*/}

                          <li className="nav-item cta cta-colored">
                             <Link to="/cart" className="nav-link"><FaShoppingCart/> [0]</Link>
                          </li>
                       </ul>


                       :
                       <ul className="navbar-nav ml-auto">

                          {renderLinks(publicLinks)}
                          {/*<li className="nav-item"><Link to="/" className="nav-link">Главная</Link></li>*/}
                          {/*<li className="nav-item"><Link to="/products" className="nav-link">Продукты</Link></li>*/}
                          {/*<li className="nav-item"><Link to="/about" className="nav-link">О нас</Link></li>*/}
                          {/*<li className="nav-item"><Link to="/contacts" className="nav-link">Контакты</Link></li>*/}
                          {/*<li className="nav-item">*/}
                          {/*   <Link to="/login" className="nav-link">авторизоваться</Link>*/}
                          {/*</li>*/}

                          {/*<li className="nav-item cta cta-colored">*/}
                          {/*   <Link to="/cart" className="nav-link"><FaShoppingCart/> [0]</Link>*/}
                          {/*</li>*/}
                       </ul>
                }


             </div>
          </div>
       </nav>
   );
};

export default withRouter(HeaderMainItems);