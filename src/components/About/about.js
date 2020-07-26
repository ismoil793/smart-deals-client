import React from 'react';
import {Link} from "react-router-dom";
import Benefits from "../Home/Benefits";
import YandexMap from "../../UI/contactForm/YandexMap";
import {Helmet} from "react-helmet";

const About = () => {
   return (

       <section className="about-company">

          <Helmet>
             <title>О компании Smart Deals</title>
             <meta name="description" content="О компании Smart Deals" />
          </Helmet>

          <div className="hero-wrap hero-bread" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
             <div className="overlay"></div>
             <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                   <div className="col-md-12 text-center">
                      <h1 className="mb-0 bread">О нас</h1>
                   </div>
                </div>
             </div>
          </div>


          <div className="container mt-5">
             <div className="row">

                <div className="col-md-6">

                   <iframe
                       width="100%"
                       height="300"
                       src="https://www.youtube.com/embed/WNInwmc7tMQ"
                       frameBorder="0"
                       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                       title="about our company"
                   >
                   </iframe>
                </div>

                <div className="col-md-6">
                   <div className="text-center">
                      <img className="sd-farm-logo" src="/images/SD.png" alt="Herbal teas logo"/>
                      <h3>Smart Deals</h3>
                      <h5>Выгодные Условия</h5>
                   </div>
                   <div>
                      <div className="p-3">
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta esse
                         quidem tenetur vitae, voluptate. Aperiam blanditiis deserunt, iure libero quo sed suscipit
                         tempora.
                         <div className="mt-3">
                            <Link to="/products" className="btn btn-success">Наши продукты</Link>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="col-md-6 mt-5">
                   <h3>Где нас найти?</h3>
                   <div className="pt-3 pr-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta esse
                      quidem tenetur vitae, voluptate. Aperiam blanditiis deserunt, iure libero quo sed suscipit
                      tempora.
                      <div className="mt-3">
                         <Link to="/contacts" className="btn btn-success">Связаться с нами</Link>
                      </div>
                   </div>
                </div>

                <div className="col-md-6 mt-5">
                  <YandexMap height={300} />
                </div>

             </div>
          </div>

          <Benefits/>


       </section>
   );
};

export default About;