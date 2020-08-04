import React from 'react';
import Benefits from "../Home/Benefits";
import YandexMap from "../../UI/contactForm/YandexMap";
import {Helmet} from "react-helmet";

const About = () => {
   return (

       <section className="about-company">

          <Helmet>
             <title>О компании Smart Deals</title>
             <meta name="description" content="О компании Smart Deals"/>
          </Helmet>

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
                      <h4>Телофон</h4>
                      <p>+998 90 168-27-00</p>
                      <h4>Адрес</h4>
                      <p>ул. Амира Темура 5А/1 100169</p>
                   </div>
                   <YandexMap height={400}/>
                </div>

                <div className="col-lg-7 order-1 order-lg-2">

                   <h3 className="text-center mb-4">Немного информации о нас</h3>

                   <div className="row">

                      <div className="col-12">
                         <div className="text-center">
                            <img className="sd-farm-logo" src="/images/SD-black.png" alt="Smart Deals logo"/>
                            <h3>Smart Deals</h3>
                            {/*<h5>Выгодные Условия</h5>*/}
                         </div>
                         <div>
                            <div className="pl-5 pr-5 pb-3">
                               <strong>Smart Deals Выгодные Условия </strong>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta esse
                               quidem tenetur vitae, voluptate. Aperiam blanditiis deserunt, iure libero quo sed suscipit
                               tempora.
                            </div>
                         </div>
                      </div>

                      <div className="col-12 mb-3">
                         <iframe
                             width="80%"
                             height="320"
                             src="https://www.youtube.com/embed/WNInwmc7tMQ"
                             frameBorder="0"
                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                             title="about our company"
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