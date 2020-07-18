import React, {useState} from 'react';
import $ from "jquery"

const NewsLetter = () => {

   const [email, setEmail] = useState('');

   const emailHandler = (e) => {
      setEmail(e.target.value)
   };

   const submitForm = (e) => {
      e.preventDefault();
      if(email !== '') {
         $('#smallHide').addClass("newsLetter-display");
         setTimeout(() => {
            $('#smallHide').removeClass("newsLetter-display")
         }, 1500)
      }
      setEmail('')
   };


   return (
       <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light news-letter">
          <div className="container py-4">
             <div className="row d-flex justify-content-center py-5">
                <div className="col-md-6">
                   <h2 className="mb-0">Подпишитесь на наши новости</h2>
                   <span>Не пропустите интересные события</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                   <form onSubmit={submitForm} className="subscribe-form">
                      <div className="form-group d-flex">
                         <input required={true} type="email" value={email} onChange={emailHandler} className="form-control" placeholder="Ваш email"/>
                         <input type="submit" value="Подписаться"
                                className="newsLetter submit px-3"/>
                      </div>
                      <small id="smallHide" className={"alert alert-success"}>Вы успешно подписались</small>
                   </form>
                </div>
             </div>
          </div>
       </section>
   );
};

export default NewsLetter;