import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Animation from "../../../hoc/Animation/Animation";

const HomeSlider = () => {

   const settings = {
      showStatus: false,
      infiniteLoop: true,
      autoPlay: true,
      showThumbs: false
   };


   const renderTemplate = () => {
      let template;

      const data = [
         {
            img: "test-slider.jpg"
         },
         {
            img: "bg_1.jpg"
         },
         {
            img: "bg_2.jpg"
         }
      ];

      template = data.map((item, i) => {
         return (
             <div key={i}>
                <div className="slider-item" style={{backgroundImage: `url(/images/${item.img})`}}>
                   <div className="overlay"></div>
                   <div className="container">
                      <div className="row slider-text justify-content-center align-items-center"
                           data-scrollax-parent="true">

                         <div className="col-md-12 text-center">
                            <h1 className="mb-2">Наши продукты</h1>
                            {/*<h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>*/}
                            <p><button className="btn btn-primary watch-products">Посмотреть</button></p>
                         </div>

                      </div>
                   </div>
                </div>
             </div>
         )
      });

      return template;
   };

   return (

       <Animation>
          <div id="home-section" className="hero" data-aos="zoom-in">

             <div className="home-slider owl-carousel">
                <Carousel
                    {...settings}
                >
                   {renderTemplate()}
                </Carousel>
             </div>

          </div>
       </Animation>

   );
};

export default HomeSlider;