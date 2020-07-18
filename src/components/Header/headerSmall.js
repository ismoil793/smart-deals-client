import React from 'react';
import {FaPhone, FaEnvelope} from "react-icons/fa"
import {BsFillChatQuoteFill} from "react-icons/bs"

const HeaderSmall = () => {
   return (
       <div className="py-2 bg-primary">
          <div className="container">
             <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                <div className="col-lg-12 d-block">
                   <div className="row d-flex">

                      <div className="col-md-3 d-flex topper align-items-center">
                         <div className="icon mr-2 d-flex justify-content-center align-items-center">
                            <FaPhone/>
                         </div>
                         <a href="tel:+998977777777" className="text">+998 97 777 77 77</a>
                      </div>

                      <div className="col-md-3 d-flex topper align-items-center">
                         <div className="icon mr-2 d-flex justify-content-center align-items-center">
                            <FaEnvelope/>
                         </div>
                         <a href="mailto:hello@gmail.com" className="text">hello@gmail.com</a>
                      </div>

                      <div className="col-md-1"></div>

                      <div className="col-md-4 d-flex topper align-items-center our-quote">
                         <div className="icon mr-2 d-flex justify-content-center align-items-center">
                            <BsFillChatQuoteFill/>
                         </div>
                         <strong>Выгодные условия</strong>
                      </div>

                      <div className="col-md-1 d-flex topper align-items-center">
                         <div id="google_translate_element">
                         </div>
                      </div>


                   </div>
                </div>
             </div>
          </div>
       </div>
   );
};

export default HeaderSmall;