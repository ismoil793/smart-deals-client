import React from 'react';

const NotFound = () => {
   return (
       <section className="not-found">
          <div className="container">
             <div className="row">
                <div className="col-lg-12">

                   <div className="error-template">
                      <h1>
                         Ууупс!</h1>
                      <h2>
                         404 Не найдено</h2>
                      <div className="error-details">
                         К сожалению, по вашему запросу ничего не найдено!
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
   );
};

export default NotFound;