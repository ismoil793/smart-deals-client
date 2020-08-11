import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {FaShoppingCart, FaBars} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";

const HeaderMainItems = (props) => {

   const [isOpen, setIsOpen] = useState(false);

   const publicLinks = [
      {
         type: "nav-item",
         text: "Продукты",
         to: "/products/napitki"
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
         to: "/products/napitki"
      },
      {
         type: "nav-item",
         text: "мой Профиль",
         to: "/profile"
      },
      {
         type: "nav-item",
         text: "Контакты",
         to: "/contacts"
      },
      {
         type: "nav-item",
         text: "Выйти",
         to: "/logout"
      },
      {
         type: "nav-item",
         text: "",
         to: "/cart"
      }
   ];

   const renderLinks = (links) => {

      return links.map((item, i) => {

         let active = "";

         // if (props.location.pathname === item.to) {
         //    active = "active";
         // }

         if (item.to === '/cart') {
            return (
                <li key={i} className={`nav-item cta cta-colored ${active}`}>
                   <Link to="/cart" className="nav-link"><FaShoppingCart/> [0]</Link>
                </li>
            )
         } else {
            return (
                <li key={i} className={`nav-item ${active}`}>
                   <Link to={item.to} className="nav-link">
                      {item.text}
                   </Link>
                </li>
            )
         }


      })
   };

   return (
       <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
               id="ftco-navbar">
             <div className="container">
                <Link to="/" className="navbar-brand"><img className="sd-logo" src="/images/SD.png"
                                                           alt="Smart Deals Logo"/></Link>
                <button
                    className="navbar-toggler"
                    onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                   {isOpen ? <IoMdClose/> : <FaBars/>}
                   <span>&nbsp;Меню</span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="ftco-nav"
                    style={{display: `${isOpen ? 'block' : 'none'}` }}
                >
                   {
                      props.user &&
                      props.user.authLogin &&
                      props.user.authLogin.isAuth ?
                          <ul className="navbar-nav ml-auto">

                             {renderLinks(privateLinks)}

                          </ul>
                          :
                          <ul className="navbar-nav ml-auto">

                             {renderLinks(publicLinks)}

                          </ul>
                   }
                </div>
             </div>
          </nav>

          <div
              id="ftco-overlay"
              style={{display: `${isOpen ? 'block' : 'none'}` }}
              onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
          >

          </div>

       </React.Fragment>
   );
};

export default withRouter(HeaderMainItems);