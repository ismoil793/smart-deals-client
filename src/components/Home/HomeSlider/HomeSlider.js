import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const HomeSlider = () => {

   const settings = {
      showStatus: false,
      infiniteLoop: true,
      autoPlay: true,
      showThumbs: false,
      swipeable: false
   };

   const renderTemplate = () => {
      let template;

      const data = [

         {
            img: "smart_deals_3.jpg"
         },
         {
            img: "smart_deals_2.jpg"
         },
         {
            img: "smart_deals_1.jpg"
         }
      ];

      template = data.map((item, i) => {
         return (
             <div key={i}>
                <div className="slider-item" style={{backgroundImage: `url(/images/banners/${item.img})`}}>
                   {/*<div className="overlay"></div>*/}
                   <div className="container">
                      <div className="row slider-text justify-content-center align-items-center"
                           data-scrollax-parent="true">

                         <div className={`col-md-12 ${i === 0 ? 'text-left' : 'text-center'}`}>
                            <h1 className="mb-2">Smart Deals</h1>
                            <h2 className="subheading mb-4">
                               {i === 2 ? 'Решение для вашего бизнеса!' //'big sizes. bigger savings'
                                   : i === 1 ? 'Чем больше покупок, тем выгоднее'
                                       : 'Решение во время карантина!'}
                            </h2>
                            <p>
                               <button
                                   className={`btn btn-primary watch-products ${i === 2 ? '' : 'watch-products-sp'}`}
                               >
                                  Посмотреть товары
                               </button>
                            </p>
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
       <div id="home-section" className="hero">
          <div className="home-slider owl-carousel">
             <Carousel
                 {...settings}
             >
                {renderTemplate()}
             </Carousel>
          </div>
       </div>
   );
};

export default HomeSlider;