import React, {useState, useEffect} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {FaShoppingCart, FaBars, FaSearch} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";
import {getCart} from "../../store/actions/cart";
import {countTotalQuantity} from "../../UI/Refactors/Counters";
import {googleTranslateEl} from "../../UI/Helpers/googleTranslate";

const HeaderMainItems = (props) => {

   const [isOpen, setIsOpen] = useState(false);
   const [searchVal, setSearchVal] = useState("");

   const handleSearchVal = (e) => {
      setSearchVal(e.target.value)
   };

   const handleSearch = (e) => {
      e.preventDefault();
      if (searchVal) {
         props.history.push(`/products/search?${searchVal}`);
         setSearchVal("")
      }
   };

   useEffect(() => {
      if(props.user.authLogin && props.user.authLogin.isAuth) {
         props.dispatch(getCart());
      }
      googleTranslateEl()
   }, []);


   const publicLinks = [
      {
         type: "nav-item",
         text: "Продукты",
         to: "/products/napitki"
      },
      // {
      //    type: "nav-item",
      //    text: "О нас",
      //    to: "/about"
      // },
      // {
      //    type: "nav-item",
      //    text: "Контакты",
      //    to: "/contacts"
      // },
      {
         type: "nav-item",
         text: "Поставщикам",
         to: "/providers"
      },
      {
         type: "nav-item",
         text: "Покупателям",
         to: "/customers"
      },
      {
         type: "nav-item",
         text: "Вход",
         to: "/login"
      },
      // {
      //    type: "nav-item",
      //    text: "Регистрация",
      //    to: "/register"
      // }
   ];

   const privateLinks = [
      {
         type: "nav-item",
         text: "Продукции",
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

         if (item.to === props.location.pathname) {
            active = "active";
         } else {
            let regex = false;
            if (item.to === "/products/napitki") {
               regex = props.location.pathname.match(new RegExp(`/products`, 'gi'));
            } else {
               regex = props.location.pathname.match(new RegExp(`${item.to}`, 'gi'));
            }
            if (item.to !== "/" && regex) {
               active = "active"
            }
         }

         if (item.to === '/cart') {
            return (
                <li key={i} onClick={() => setIsOpen(false)} className={`nav-item cta cta-colored ${active}`}>
                   <Link to="/cart" className="nav-link">
                      <FaShoppingCart/>&nbsp;
                      <span className="notranslate">
                        {
                           props.user.authLogin && props.user.authLogin.isAuth
                           && props.cart.cart && props.cart.cart.products ?
                               `[${countTotalQuantity(props.cart.cart.products)}]` : ''
                        }
                     </span>
                   </Link>
                </li>
            )
         } else {
            return (
                <li key={i} onClick={() => setIsOpen(false)} className={`nav-item ${active}`}>
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
             <div className="container container-changed">
                <Link to="/" onClick={() => setIsOpen(false)} className="navbar-brand">
                   Hopme
                </Link>
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
                    style={{display: `${isOpen ? 'block' : 'none'}`}}
                >
                   {
                      props.user &&
                      props.user.authLogin &&
                      props.user.authLogin.isAuth ?
                          <ul className="navbar-nav ml-auto">
                             <li className={`nav-item cta cta-colored special-search`}>
                                <form onSubmit={e => handleSearch(e)}>
                                   <input
                                       type="search"
                                       name="search"
                                       className="search-homepage"
                                       placeholder="Поиск"
                                       value={searchVal}
                                       onChange={e => handleSearchVal(e)}
                                   />
                                   <FaSearch onClick={handleSearch}/>
                                </form>
                             </li>
                             <li id="google_translate_element" className={`nav-item cta cta-colored`}>
                             </li>
                             {renderLinks(privateLinks)}

                          </ul>
                          :
                          <ul className="navbar-nav ml-auto">
                             <li className={`nav-item cta cta-colored special-search`}>
                                <form onSubmit={e => handleSearch(e)}>
                                   <input
                                       type="search"
                                       name="search"
                                       className="search-homepage"
                                       placeholder="Поиск"
                                       value={searchVal}
                                       onChange={e => handleSearchVal(e)}
                                   />
                                   <FaSearch onClick={handleSearch}/>
                                </form>
                             </li>
                             <li id="google_translate_element" className={`nav-item cta cta-colored`}>
                             </li>
                             {renderLinks(publicLinks)}

                          </ul>
                   }
                </div>
             </div>
          </nav>

          <div
              id="ftco-overlay"
              style={{display: `${isOpen ? 'block' : 'none'}`}}
              onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
          >

          </div>

       </React.Fragment>
   );
};

function mapStateToProps(state) {
   return {
      user: state.user_r,
      cart: state.cart_r
   }
}

export default withRouter(connect(mapStateToProps)(HeaderMainItems));