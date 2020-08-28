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
import Animation from "../../hoc/Animation/Animation";

const Footer = (props) => {


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
         to: "/products/napitki"
      },
      {
         type: "nav-item",
         text: "Мой профиль",
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
               <Link to={`${item.to}`} className="py-2 d-block">{item.text}</Link>
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


                     <Animation>
                        <ul
                           className="ftco-footer-social list-unstyled float-md-left float-lft mt-5"
                        >
                           <li className="" data-aos="fade-up" data-aos-delay={50}>
                              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaTelegramPlane />
                              </a></li>
                           <li className="" data-aos="fade-up" data-aos-delay={100}>
                              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaFacebookF />
                              </a>
                           </li>
                           <li className="" data-aos="fade-up" data-aos-delay={150}>
                              <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaInstagram />
                              </a>
                           </li>
                        </ul>
                     </Animation>

                  </div>
               </div>
               <div className="col-6 col-md-4">
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

               <div className="col-6 col-md-4">
                  <div className="ftco-footer-widget mb-4">
                     <h2 className="ftco-heading-2">У вас есть вопросы?</h2>
                     <div className="block-23 mb-3">
                        <ul>
                           <li><FaMapMarkerAlt className="f-icon" />
                              <span className="text pl-3 pb-2">
                                 Там где нас не найдут
                               </span>
                           </li>
                           <li><a href="tel:+998977777777"><FaPhone className="f-icon" /><span
                              className="text pl-3">+998 97 754-71-17</span></a>
                           </li>
                           <li><a href="mailto:hello@gmail.com"><FaEnvelope className="f-icon" /><span
                              className="text pl-3">hello@gmail.com</span></a></li>
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