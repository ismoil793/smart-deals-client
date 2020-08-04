import React from 'react';
import Animation from "../../hoc/Animation/Animation";

const ServiceTypes = () => {

   return (
       <div className="ftco-section ftco-category ftco-no-pt pb-0 mt-5">
          <div className="container">
             <div className="row">
                <div className="col-md-8">
                   <div className="row">
                      <div className="col-md-6 d-none d-md-flex order-md-last align-items-stretch">

                         <Animation>
                            <div
                                data-aos-once="true"
                                data-aos="fade-up"
                                className="category-wrap-2 h-100 img align-self-stretch d-flex"
                                style={{backgroundImage: "url(/images/businesses/man.jpg)"}}
                            >
                               <div className="text text-center">
                                  <div className="title-wrap">
                                     <h2>Наши продукты</h2>
                                     <p>в разных сферах деятельности</p>
                                  </div>
                                  {/*<p><button className="btn btn-primary watch-products">Посмотреть категории</button></p>*/}
                               </div>
                            </div>
                         </Animation>


                      </div>
                      <div className="col-md-6">
                         <div className="category-wrap img mb-4 d-flex align-items-end"
                              style={{backgroundImage: "url(/images/businesses/restaurant.jpg)"}}>
                            {/*<div className="text px-3 py-1">*/}
                            {/*   <h2 className="mb-0"><span>Рестораны</span></h2>*/}
                            {/*</div>*/}
                         </div>
                         <div className="category-wrap img mb-4 mb-md-0 d-flex align-items-end"
                              style={{backgroundImage: "url(/images/businesses/cafe.jpg)"}}>
                            {/*<div className="text px-3 py-1">*/}
                            {/*   <h2 className="mb-0"><span>Кафе</span></h2>*/}
                            {/*</div>*/}
                         </div>
                      </div>
                   </div>
                </div>

                <div className="col-md-4">
                   <div className="category-wrap img mb-4 d-flex align-items-end"
                        style={{backgroundImage: "url(/images/businesses/bar.jpg)"}}>
                      {/*<div className="text px-3 py-1">*/}
                      {/*   <h2 className="mb-0"><span>Бары</span></h2>*/}
                      {/*</div>*/}
                   </div>
                   <div className="category-wrap img mb-4 d-flex align-items-end"
                        style={{backgroundImage: "url(/images/businesses/hotel.jpg)"}}>
                      {/*<div className="text px-3 py-1">*/}
                      {/*   <h2 className="mb-0"><span>Гостиницы</span></h2>*/}
                      {/*</div>*/}
                   </div>
                </div>
             </div>
          </div>
       </div>
   );
};

export default ServiceTypes;