import React from 'react';
import Animation from "../../hoc/Animation/Animation";

const Partners = () => {
   return (
       <section className="ftco-section partners">
          <div className="container">

             <div className="row">
                <div className="container">
                   <div className="col-sm">
                      <h2 className="text-center mb-5">Наши партнеры</h2>
                   </div>
                </div>
             </div>

             <div className="row">

                <Animation>
                   <div className="col-sm col-6" data-aos="fade-up" data-aos-delay={50}>
                      <div className="partner"><img src="/images/partners/partner-1.png" className="img-fluid"
                                                           alt="Colorlib Template"/></div>
                   </div>
                   <div className="col-sm col-6" data-aos="fade-up" data-aos-delay={100}>
                      <div className="partner"><img src="/images/partners/partner-2.png" className="img-fluid"
                                                           alt="Colorlib Template"/></div>
                   </div>
                   <div className="col-sm col-6" data-aos="fade-up" data-aos-delay={150}>
                      <div className="partner"><img src="/images/partners/partner-3.png" className="img-fluid"
                                                           alt="Colorlib Template"/></div>
                   </div>
                   <div className="col-sm col-6" data-aos="fade-up" data-aos-delay={200}>
                      <div className="partner"><img src="/images/partners/partner-4.png" className="img-fluid"
                                                           alt="Colorlib Template"/></div>
                   </div>
                   <div className="col-sm col-6" data-aos="fade-up" data-aos-delay={250}>
                      <div className="partner"><img src="/images/partners/partner-5.png" className="img-fluid"
                                                           alt="Colorlib Template"/></div>
                   </div>
                </Animation>


             </div>
          </div>
       </section>
   );
};

export default Partners;