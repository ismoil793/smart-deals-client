import React from 'react';
import HomeSlider from "./HomeSlider/HomeSlider";
import Categories from "../../containers/Categories/Categories";
import Partners from "./Partners";
import ServiceTypes from "./ServiceTypes";
// import {connect} from "react-redux";
import Benefits from "./Benefits";
import NewsLetter from "../../UI/NewsLetter/newsLetter";
import HelmetTitle from "../../UI/Helmet/MetaDecorator"
import $ from "jquery";


// require 'bootstrap/js/affix.js';


class Home extends React.Component {

   componentDidMount() {
      $('.watch-products').click(function () {
         $('html,body').stop().animate(
            { scrollTop: $("#watch-products").offset().top }, 'slow', 'swing'
         );
      });
   }

   render() {

      return (
         <main className="main">

            <HelmetTitle
               title="Smart Deals - Выгодные покупки"
               content="Продажа и покупка товаров в оптом Smart Deals UZ"
            />

            <HomeSlider />

            <div className="container pt-5">
               <div className="row justify-content-center mb-3 pb-3">
                  <div className="col-md-12 heading-section text-center">
                     <span id="watch-products" className="subheading mt-3"> <strong>#Продукция</strong></span>
                     <h2 className="mb-4">Наши продукты</h2>
                     {/*<p>100% натуральное растительное происхождение.*/}
                     {/*    Гарантированное качество и безопасность.</p>*/}
                  </div>
               </div>
            </div>

            <Categories componentName={"Home"} />


            <ServiceTypes />



            <Benefits />

            {/*<Partners />*/}

            {/*<NewsLetter />*/}

         </main>
      )
   }
}

// function mapStateToProps(state) {
//    return {
//       products: state.product_r
//    }
// }

export default Home; //connect(mapStateToProps)(Home);