import React from 'react';
import {
   // FaArrowUp,
   FaHeart,
   FaPhone,
   FaMapMarkerAlt,
   FaEnvelope,
   FaTelegramPlane,
   FaFacebookF,
   FaInstagram
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

const Footer = (props) => {


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
         text: "Личный кабинет",
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
      }
   ];

   const renderLinks = (links) => {
      return links.map((item, i) => {
         return (
            <li key={i}>
               <Link to={`${item.to}`} className={`${i === 0 ? 'pb-2' : 'py-2'} d-block`}>{item.text}</Link>
            </li>
         )
      })
   };


   return (
      <footer className="ftco-footer ftco-section">
         <div className="container">
            {/*<div className="row">*/}
            {/*   <div className="mouse">*/}
            {/*      <div className="mouse-icon">*/}
            {/*         <div className="mouse-wheel"><FaArrowUp name="arrow-up"/></div>*/}
            {/*      </div>*/}
            {/*   </div>*/}
            {/*</div>*/}
            <div className="row mb-5">
               <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                     <h2 className="ftco-heading-2">Smart Deals</h2>
                     <p>Высококачественные товары и услуги.</p>

                        <ul
                           className="ftco-footer-social list-unstyled float-md-left float-lft mt-5"
                        >
                           <li className="">
                              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaTelegramPlane />
                              </a></li>
                           <li className="">
                              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaFacebookF />
                              </a>
                           </li>
                           <li className="">
                              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaInstagram />
                              </a>
                           </li>
                        </ul>

                  </div>
               </div>
               <div className="col-4 col-md-4">
                  <div className="ftco-footer-widget mb-4 ml-md-5">
                     <h2 className="ftco-heading-2">Меню</h2>
                     <ul className="list-unstyled">

                        {
                           props.user && props.user.authLogin
                              && props.user.authLogin.isAuth
                              ? renderLinks(privateLinks)
                              : renderLinks(publicLinks)
                        }

                     </ul>
                  </div>
               </div>

               <div className="col-8 col-md-4">
                  <div className="ftco-footer-widget mb-4">
                     <h2 className="ftco-heading-2">У вас есть вопросы?</h2>
                     <div className="block-23 mb-3">
                        <ul>
                           <li><FaMapMarkerAlt className="f-icon" />
                              <span className="text pl-3 pb-2">
                                 Ташкент ул. Ойбек 18
                               </span>
                           </li>
                           <li><a href="tel:+998977777777"><FaPhone className="f-icon" /><span
                              className="text pl-3">+998 97 754-71-17</span></a>
                           </li>
                           <li><a href="mailto:hello@gmail.com"><FaEnvelope className="f-icon" /><span
                              className="text pl-3">smartdeals@gmail.com</span></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12 text-center">

                  <p className="switch-case">
                     Копирайт &copy;
                      {new Date().getFullYear()}<br />
                      Сделано с <FaHeart /> командой
                      <Link to="/">
                        <strong>&nbsp;smart-deals</strong>
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

function mapStateToProps(state) {
   return {
      user: state.user_r
   }
}

export default connect(mapStateToProps)(Footer);