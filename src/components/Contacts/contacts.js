import React from 'react';
import ContactForm from "../../UI/contactForm/contactForm";
import HelmetTitle from "../../UI/Helmet/MetaDecorator"

const Contacts = () => {
   return (
      <section className="company-contacts">

         <HelmetTitle title="Контакты Smart Deals" content="Контактные данные" />

         <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('/images/contact-banner.jpg')" }}>
            {/*<div className="overlay"></div>*/}
            <div className="container container-changed">
               <div className="row no-gutters slider-text align-items-start justify-content-center">
                  <div className="col-md-12 text-center">
                     <h1 className="mb-0 bread">Обратная связь</h1>
                     <h4>Свяжитесь с нами</h4>
                  </div>
               </div>
            </div>
         </div>

         <ContactForm />

      </section>
   );
};

export default Contacts;