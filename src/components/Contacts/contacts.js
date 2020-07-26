import React from 'react';
import ContactForm from "../../UI/contactForm/contactForm";
import {Helmet} from "react-helmet";

const Contacts = () => {
   return (
       <section className="company-contacts">

          <Helmet>
             <title>Контакты Smart Deals</title>
             <meta name="description" content="Контактные данные" />
          </Helmet>

           <div className="hero-wrap hero-bread" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
              <div className="overlay"></div>
              <div className="container">
                 <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-12 text-center">
                       <h1 className="mb-0 bread">Контакты</h1>
                    </div>
                 </div>
              </div>
           </div>

          <ContactForm />

       </section>
   );
};

export default Contacts;