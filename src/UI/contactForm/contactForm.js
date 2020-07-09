import React from 'react';
import YandexMap from "./YandexMap";

const ContactForm = () => {
   return (
       <section className="ftco-section contact-section bg-light pb-5">
          <div className="container mb-5">
             <div className="row block-9">
                <div className="col-md-6 order-md-last">
                   <form action="" target="_self"
                         className="bg-white p-4 contact-form">
                      <h3 style={{color: "#61ADBB"}}>Свяжитесь с нами</h3>
                      <div className="form-group">
                         <input type="text" name="Name" required={true} className="form-control"
                                placeholder="Ваше имя"/>
                      </div>
                      <div className="form-group">
                         <input type="email" name="Email" required={true} className="form-control"
                                placeholder="Ваш Email"/>
                      </div>
                      <div className="form-group">
                         <input type="text" name="Subject" required={true} className="form-control"
                                placeholder="Тема"/>
                      </div>
                      <div className="form-group">
                         <textarea name="Message" id="" required={true} cols="30" rows="7" className="form-control"
                                   placeholder="Сообщение"/>
                      </div>
                      <div className="form-group">
                         <input type="submit" value="Отправить" className="btn btn-primary py-3 px-5"/>
                      </div>
                   </form>

                </div>

                <div className="col-md-6 d-flex">
                  <YandexMap height={572} />
                </div>
             </div>
          </div>
       </section>
   );
};

export default ContactForm;