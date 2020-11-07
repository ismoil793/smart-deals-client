import React from 'react';
// import Benefits from "../Home/Benefits";
import YandexMap from "../../UI/contactForm/YandexMap";
import HelmetTitle from "../../UI/Helmet/MetaDecorator"

const About = () => {
   return (

       <section className="about-company">

          <HelmetTitle title="О компании Smart Deals" content="О компании Smart Deals"/>

          <div className="hero-wrap hero-bread" style={{backgroundImage: "url('/images/contact-banner.jpg')"}}>
             {/*<div className="overlay"></div>*/}
             <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                   <div className="col-md-12 text-center">
                      <h1 className="mb-0 bread">Кто мы?</h1>
                   </div>
                </div>
             </div>
          </div>


          <div className="container container-changed">
             <div className="row about-infos-wrapper">

                <div className="col-lg-5 order-2 order-lg-1">
                   <div className="phone-address">
                      <h4>Телефон</h4>
                      <p>+998 97 754-71-17</p>
                      <h4>Адрес</h4>
                      <p>г. Ташкент улица Ойбек, 18</p>
                   </div>
                   <YandexMap height={400}/>
                </div>

                <div className="col-lg-7 order-1 order-lg-2">

                   <h3 className="text-center mb-4">Немного информации о нас</h3>

                   <div className="row">

                      <div className="col-12">
                         <div className="text-center">
                            <img className="sd-farm-logo mb-3" src="/images/smart-deals-dark.png" alt="Smart Deals logo"/>
                            {/*<h3>Smart Deals</h3>*/}
                            {/*<h5>Выгодные Условия</h5>*/}
                         </div>
                         <div>
                            <div className="pl-5 pr-5 pb-3">
                               <strong>Smart Deals Выгодные Условия </strong>
                               Торговая платформа по оптовой продаже для В2В сегмента на основе алгоритма работы "Смарт
                               Контракт"
                            </div>
                         </div>
                      </div>

                      <div className="col-12 mb-3">
                         {/*
                         If you have controls=0 at the same time as modestbranding=1
                         the YouTube logo will show even more prominent.
                         controls=0 and modestbranding=1 don't seem to co-exist
                         (modestbranding gets over-ridden to 0)
                         */}
                         <iframe
                             width="80%"
                             height="320"
                             src="https://www.youtube.com/embed/V_iBMsPfZhU?autoplay=1&rel=0&controls=1&modestbranding=1"
                             frameBorder="0"
                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;;"
                             allowFullScreen
                             title="about company Smart Deals"
                             style={{margin: "0 auto", display: 'block'}}
                         >
                         </iframe>
                      </div>

                   </div>

                   {/*<div className="row">*/}
                   {/*   <div className="col-md-12 mt-5">*/}
                   {/*      <Benefits/>*/}
                   {/*   </div>*/}
                   {/*</div>*/}


                </div>

                {/*<div className="col-md-6 mt-5">*/}
                {/*   <h3>Где нас найти?</h3>*/}
                {/*   <div className="pt-3 pr-5">*/}
                {/*      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta esse*/}
                {/*      quidem tenetur vitae, voluptate. Aperiam blanditiis deserunt, iure libero quo sed suscipit*/}
                {/*      tempora.*/}
                {/*      <div className="mt-3">*/}
                {/*         <Link to="/contacts" className="btn btn-success">Связаться с нами</Link>*/}
                {/*      </div>*/}
                {/*   </div>*/}
                {/*</div>*/}

             </div>
          </div>

       </section>
   );
};

export default About;