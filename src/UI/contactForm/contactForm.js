import React from 'react';

const ContactForm = () => {
   return (
       <section className="ftco-section contact-section bg-light pb-5">

          <div className="container">
             <div className="row block-9 form-wrapper">
                   <div className="col-md-7">
                      <img src="/images/contact-us-manager.png" alt="contact-us-manager"/>
                   </div>

                   <div className="col-md-5">
                      <form action="" target="_self"
                            className="bg-white contact-form">
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




             </div>
          </div>
       </section>
   );
};

export default ContactForm;