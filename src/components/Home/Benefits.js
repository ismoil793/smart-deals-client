import React from 'react';
import { FaTruck } from "react-icons/fa";
import { MdSwapCalls } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Animation from "../../hoc/Animation/Animation";

const Benefits = () => {
   return (
      <Animation>
         <div className="ftco-section" data-aos="fade-right" data-aos-delay="300">
            <div className="container pb-5">
               <div className="row no-gutters ftco-services">


                  <div className="col-md-3 col-sm-6 text-center d-flex align-self-stretch ">
                     <div className="media block-6 services mb-md-0 mb-4">

                        <div
                           className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                           <FaTruck />
                        </div>
                        <div className="media-body">
                           <h3 className="heading">Быстрая работа с партнерами</h3>
                           <span>Сработаемся</span>
                        </div>

                     </div>

                  </div>

                  <div className="col-md-3 col-sm-6 text-center d-flex align-self-stretch ">
                     <div className="media block-6 services mb-md-0 mb-4">
                        <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                           <GiShoppingCart />
                        </div>
                        <div className="media-body">
                           <h3 className="heading">Продукты продуктовые</h3>
                           <span>Продукты продуктовые</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-3 col-sm-6 text-center d-flex align-self-stretch ">
                     <div className="media block-6 services mb-md-0 mb-4">
                        <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                           <AiFillSafetyCertificate />
                        </div>
                        <div className="media-body">
                           <h3 className="heading">Высокое качество</h3>
                           <span>Качественные продукты</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-3 col-sm-6 text-center d-flex align-self-stretch ">
                     <div className="media block-6 services mb-md-0 mb-4">
                        <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                           <MdSwapCalls />
                        </div>
                        <div className="media-body">
                           <h3 className="heading">Обратная связь</h3>
                           <span>Служба 24/7</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </Animation>
   );
};

export default Benefits;