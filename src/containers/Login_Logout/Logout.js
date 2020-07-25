import React, {Component} from 'react';
import {logOutUser} from "../../store/actions/user";

class Logout extends Component {

   logOut = () => {
      this.props.dispatch(logOutUser())
   };

   render() {
      return (
          <section className="pt-5 pb-5">
             <div className="container pt-5 pb-5">
                <div className="row">
                   <div className="col-lg-12">

                      <div className="logout_container text-center">
                         <h1>Уже уходите ? <br/>:(</h1>
                         <button className="mt-5 w-25 button btn btn-danger" onClick={this.logOut}>Выйти!</button>
                      </div>

                   </div>
                </div>
             </div>
          </section>
      );
   }
}

export default Logout;